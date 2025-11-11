import { useState } from 'react';
import axios from 'axios';
import Identification from './Identification';
import Resolution from './Resolution';

function App() {
  const [id, setId] = useState("");
  const [part1, setPart1] = useState({});
  const [part2, setPart2] = useState({});
  const [loading, setLoading] = useState(false);

  const handleTrigger = async () => {
    try {
      if (!id || id.trim() === "") {
        alert("Please enter id");
        return;
      }

      setLoading(true);
      console.log("Triggering backend AI with id:", id);
      const response = await axios.get("/api/getUserData", { params: { id } });

      if (response.data && response.data.data) {
        const aiResponse = response.data.data;

        const tempPart1 = {};
        const tempPart2 = {};

        Object.keys(aiResponse).forEach((key) => {
          const num = parseInt(key);
          if (num <= 7) tempPart1[key] = aiResponse[key];
          else tempPart2[key] = aiResponse[key];
        });

        // ✅ Set state here (outside loop)
        setPart1(tempPart1);
        setPart2(tempPart2);

        console.log("Part 1:", tempPart1);
        console.log("Part 2:", tempPart2);
      } else {
        alert("No data found for the given id");
      }
    } catch (error) {
      console.error("Error triggering backend AI:", error);
      alert("Error triggering backend AI");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3 tracking-tight">
            Problem Analysis Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Enter an ID to retrieve and view detailed problem analysis
          </p>
        </div>

        {/* Input Section - Moved to top for better UX */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Analysis ID
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                placeholder="Enter the ID"
                onChange={(e) => setId(e.target.value)}
                className="flex-1 px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-800 placeholder-gray-400"
              />
              <button
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                onClick={handleTrigger}
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading...
                  </span>
                ) : (
                  "Retrieve Data"
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Components Section */}
        <div className="space-y-8">
          <Identification part1={part1} />
          <Resolution part2={part2} />
        </div>
      </div>
    </div>
  );
}

export default App;