import { useState } from 'react';
import axios from 'axios';
import Identification from './Identification';
import Resolution from './Resolution';

function App() {
  const [id, setId] = useState("");
  const [part1, setPart1] = useState({});
  const [part2, setPart2] = useState({});

  const handleTrigger = async () => {
    try {
      if (!id || id.trim() === "") {
        alert("Please enter id");
        return;
      }

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
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 p-10 space-y-10">
      <Identification part1={part1} />
      <Resolution part2={part2} />

      <div className="flex space-x-5 flex-col items-center justify-center m-2 p-3">
        <input
          placeholder="Enter the id"
          onChange={(e) => setId(e.target.value)}
          className="bg-slate-300 p-5"
        />
        <button
          className="bg-red-600 p-5 rounded-md text-white mt-2"
          onClick={handleTrigger}
        >
          Trigger
        </button>
      </div>
    </div>
  );
}

export default App;
