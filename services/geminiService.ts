import { GoogleGenAI } from "@google/genai";

// Initialize Gemini API
// Note: process.env.API_KEY is injected by the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Bolt", the AI assistant for Boltz, a premier power bank rental service in Singapore.
Your tone is energetic, helpful, and efficient.
Boltz allows users to rent power banks from stations located across Singapore (MRT stations, Shopping Malls, 7-Eleven).
Key Information:
- Cost: $1.00 SGD per hour. Daily cap: $10.00 SGD.
- Cables: All power banks come with Lightning, USB-C, and Micro-USB cables built-in.
- Locations: Over 500 locations in Singapore.
- How to use: Scan QR code on the station -> Pay deposit/Link card -> Power bank pops out -> Charge -> Return to any empty slot at any Boltz station.

If a user asks for a location, use the Google Maps tool to find relevant places (e.g., "Find a coffee shop nearby" or "Where is the nearest mall").
Always format your response nicely.
`;

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
) => {
  try {
    const model = 'gemini-2.5-flash';
    
    // We use the maps tool to help users find places where they might use the charger
    // or to simulate finding "stations" (since we don't have a real database of stations, 
    // we act as if major landmarks have them).
    const config = {
      systemInstruction: SYSTEM_INSTRUCTION,
      tools: [{ googleMaps: {} }],
    };

    const chat = ai.chats.create({
      model,
      config,
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message });
    
    // Extract text and grounding metadata (Maps links) if available
    let responseText = result.text || "I'm having a bit of trouble connecting to the grid. Try again?";
    
    // Check for grounding chunks (Maps data)
    const groundingChunks = result.candidates?.[0]?.groundingMetadata?.groundingChunks;
    
    if (groundingChunks && groundingChunks.length > 0) {
      const mapLinks = groundingChunks
        .map(chunk => {
          if (chunk.web?.uri && chunk.web?.title) {
            return `[${chunk.web.title}](${chunk.web.uri})`;
          }
          return null;
        })
        .filter(Boolean)
        .join('\n');
        
      if (mapLinks) {
        responseText += `\n\n**Sources:**\n${mapLinks}`;
      }
    }

    return responseText;

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to communicate with Bolt.");
  }
};
