import {GoogleGenAI} from '@google/genai';
// const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

import { generatePrompt } from './prompt';


async function main() {
  const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY});  
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-pro',
    contents: await generatePrompt(jsonData),
  });
  console.log(response.text);
}

export default main;

