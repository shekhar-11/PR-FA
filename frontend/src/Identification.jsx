

import React, { useState } from "react";

const Identification = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [success, setSuccess] = useState(false);

  const [data, setData] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
  });

  const toggleSection = () => setIsExpanded(!isExpanded);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };

  const saveData = () => {
    console.log("Saved data:", data);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  const questions = [
      "Summary of the problem / what was wrong and not working based on code/HW analysis?",
      "[Technical description of the fault] / Code deficiency, What was wrong in the source code?" ,
      "[Dependency on the configuration] / Description if problem is based on certain configuration/features?",
      "[Faulty component and version] / SW component and version where problem occurred first time. If problem occurred in different branches and all first broken versions for each branch shall be listed?",
      "Was there anything confusing or difficult to understand during setup or use?",
      "Did you notice any performance issues (like lag, crashes, or slow response)?",
      "Did you face any problems or bugs while using the product? If yes, please describe them.",
  ];

  return (
    <div className=" w-5/6   bg-gray-50  flex justify-center items-center p-8">
    
      {isExpanded && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10 transition-all"></div>
      )}

      
      <div className="relative z-20 max-w-4xl w-full bg-white rounded-lg shadow-md p-6 transition-all duration-300">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Part A
        </h1>

       
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Information</h2>
            <button
              onClick={toggleSection}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="Toggle problems list"
            >
              <svg
                className={`w-5 h-5 text-gray-600 transform transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>

       
        <div className="flex justify-center mt-6">
          <button
            onClick={saveData}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>

        
        {success && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md text-center">
            Feedback saved successfully!
          </div>
        )}
      </div>

   
      {isExpanded && (
        <div className="fixed inset-0 flex justify-center items-center z-30 p-4">
          <div className="bg-white max-w-3xl w-full rounded-lg shadow-xl p-6 overflow-y-auto max-h-[85vh] animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Problems & Feedback Questions
              </h3>
              <button
                onClick={toggleSection}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-5">
              {questions.map((q, i) => (
                <div key={i}>
                  <p className="text-sm text-gray-700 mb-2">{q}</p>
                  <textarea
                    id={`q${i + 1}`}
                    value={data[`q${i + 1}`]}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    rows="3"
                    placeholder="Your answer..."
                  ></textarea>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Identification;
