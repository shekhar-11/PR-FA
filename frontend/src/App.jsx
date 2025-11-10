import { useState } from 'react'
import axios from 'axios'
import Identification from './Identification'
import Resolution from './Resolution'

 



  // try {
    // const response = await axios.find');
function App() {
 const [id, setId] = useState(null)

 const handleTrigger = async () => {

  try {
    if(!id || id.trim() === "" || id===null || id.length===0){
      alert("Please enter id");
      return;
    }
     const response = await axios.get("http://localhost:4000/api/getUserData", {
        params: { id }
      });
    console.log("Trigger response:", response.data);
    alert("Trigger successful");
  } catch (error) {
    console.error("Error triggering backend AI:", error);
    alert("Error triggering backend AI");
  }

}


  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 p-10 space-y-10">
      <Identification />
      <Resolution />
      <div className='flex space-x-5 flex-col items-center justify-center m-2 p-3'>
        <input placeholder={"Enter the id"} onChange={(e)=>setId(e.target.value)} className='bg-slate-300 p-5' />
      <button  className='bg-red-600 p-5 rounded-md text-white mt-2' onClick={handleTrigger}>Trigger</button>

      </div>
    </div>
  )
}

export default App
