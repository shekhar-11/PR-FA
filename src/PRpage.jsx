// import React, { useState } from "react";

// const PRpage = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const [data, setData] = useState({
//     q1: "",
//     q2: "",
//     q3: "",
//     q4: "",
//     q5: "",
//     q6: "",
//     q7: "",
//   });

//   const toggleSection = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setData((prev) => ({ ...prev, [id]: value }));
//   };

//   const saveData = () => {
//     console.log("Saved data:", data);
//     setSuccess(true);
//     setTimeout(() => setSuccess(false), 3000);
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen p-8">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6">
//           Product Feedback
//         </h1>

//         {/* Information Section with Arrow Button */}
//         <div className="mb-6">
//           <div className="flex items-center gap-3 mb-4">
//             <h2 className="text-lg font-semibold text-gray-700">Information</h2>
//             <button
//               onClick={toggleSection}
//               className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//               title="Toggle problems list"
//             >
//               <svg
//                 className={`w-5 h-5 text-gray-600 transform transition-transform duration-200 ${
//                   isExpanded ? "rotate-180" : "rotate-0"
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Expandable Problems Box */}
//           {isExpanded && (
//             <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
//               <h3 className="text-md font-semibold text-gray-800 mb-4">
//                 Problems & Feedback Questions
//               </h3>
//               <div className="space-y-5">
//                 {[
//                   "Did you face any problems or bugs while using the product? If yes, please describe them.",
//                   "Was there any feature that didn't work as you expected?",
//                   "Did you notice any performance issues (like lag, crashes, or slow response)?",
//                   "Was there anything confusing or difficult to understand during setup or use?",
//                   "Did the product meet the description or promises made before purchase?",
//                   "Have you experienced any compatibility or integration issues (e.g., with your device or other software)?",
//                   "What was the most frustrating or time-consuming part of your experience with the product?",
//                 ].map((q, i) => (
//                   <div key={i}>
//                     <p className="text-sm text-gray-700 mb-2">{q}</p>
//                     <textarea
//                       id={`q${i + 1}`}
//                       value={data[`q${i + 1}`]}
//                       onChange={handleChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
//                       rows="3"
//                       placeholder="Your answer..."
//                     ></textarea>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Save Button */}
//         <div className="flex justify-end">
//           <button
//             onClick={saveData}
//             className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             Save
//           </button>
//         </div>

//         {/* Success Message */}
//         {success && (
//           <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
//             Feedback saved successfully!
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PRpage;


import React, { useState } from "react";

const PRpage = () => {
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
    "Did you face any problems or bugs while using the product? If yes, please describe them.",
    "Was there any feature that didn't work as you expected?",
    "Did you notice any performance issues (like lag, crashes, or slow response)?",
    "Was there anything confusing or difficult to understand during setup or use?",
    "Did the product meet the description or promises made before purchase?",
    "Have you experienced any compatibility or integration issues (e.g., with your device or other software)?",
    "What was the most frustrating or time-consuming part of your experience with the product?",
  ];

  return (
    <div className="relative bg-gray-50 min-h-screen flex justify-center items-center p-8">
      {/* Background blur overlay (only visible when expanded) */}
      {isExpanded && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10 transition-all"></div>
      )}

      {/* Main Feedback Box (always stays clear and on top) */}
      <div className="relative z-20 max-w-4xl w-full bg-white rounded-lg shadow-md p-6 transition-all duration-300">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Product Feedback
        </h1>

        {/* Information Section */}
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

        {/* Save Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={saveData}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md text-center">
            Feedback saved successfully!
          </div>
        )}
      </div>

      {/* Questions Popup */}
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

            {/* Questions */}
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

export default PRpage;
