
function generatePrompt(jsonData) {
  const questionsList = predefinedQuestions.map((q, index) => `${index + 1}. ${q}`).join('\n');

  return `You are an expert technical analyst. Your task is to extract information from the provided JSON data and answer a series of questions.
Analyze the JSON content carefully and provide concise, human-readable answers for each question.
If the information required to answer a question is not explicitly present or cannot be directly inferred from the JSON, leave the answer for that question completely empty.

Do not invent information. Prioritize direct extraction and logical inference from the provided JSON.
Each answer should be brief, to the point, and avoid jargon where possible, aiming for a humanized explanation.

Here is the JSON data to analyze:
\`\`\`json
${JSON.stringify(jsonData, null, 2)}
\`\`\`

Here are the questions you need to answer. Please output your answers in a JSON object where keys are the question numbers (e.g., "1", "2") and values are the corresponding answers or an empty string if not found.

${questionsList}

Output JSON format:
{
  "1": "Answer for question 1 or empty string",
  "2": "Answer for question 2 or empty string",
  // ... and so on for all questions
}
`;
}


const questionsList = [
  "Summary of the problem / what was wrong and not working based on code/HW analysis?",
  "[Technical description of the fault] / Code deficiency, What was wrong in the source code?",
  "[Dependency on the configuration] / Description if problem is based on certain configuration/features?",
  "[Faulty component and version] / SW component and version where problem occurred first time. If problem occurred in different branches and all first broken versions for each branch shall be listed?",
  "Was there anything confusing or difficult to understand during setup or use?",
  "Did you notice any performance issues (like lag, crashes, or slow response)?",
  "Did you face any problems or bugs while using the product? If yes, please describe them.",
  "[Workaround] / how problem can be avoided or effects mitigated without code/HW changes before correction ready?",
  "[Description of the correction] / What changes were done in code/HW architecture to fix the issue and how the problem will be solved?",
  "[Test requirements] / how to test the correction in real environment available for the customer? How to test the correction and catch the problem in future in SC/MT/UT level??"
];

export { generatePrompt };



