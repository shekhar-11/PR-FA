import {GoogleGenAI} from '@google/genai';
// const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

import {generatePrompt} from './prompt.js';


async function main(jsonData) {
  console.log("Initiated")
  const ai = new GoogleGenAI({apiKey:"AIzaSyC57tyrAwOpNWhUY65EeXFvxy8TLMK3w8M"});  
  const resultsPrompt = await generatePrompt(jsonData);
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: resultsPrompt
  });
  // console.log(response.text);
  
const final  = JSON.parse(
  response.text
    .replace(/```json/gi, '')   // remove ```json (any capitalization)
    .replace(/```/g, '')        // remove ``` if present
    .replace(/^json/i, '')      // remove if it just starts with "json"
    .trim()                     // trim spaces/newlines
);


  return final;
}
// main()
export default main;

