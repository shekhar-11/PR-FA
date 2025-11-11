import express from 'express';
import { fetchAllDocs, fetchDocById } from '../fetchData.js';
import main from '../../backend_ai/ai_api.js';


const router = express.Router();


router.get("/getUserData",async (req,res)=>{
    console.log("Inside getUserData route");
    try{
        const { id } = req.query;
        console.log("Received id:", id);

     
    //    console.log("Received OT data:", otData);
       const doc  = await fetchDocById(id); 
       if(!doc){
        res.status(404).json({message:"No document found with the given id"});
       }
       else{
            const result = await main(doc);
            console.log("Result from fetchDocById:", result);
            res.status(200).json({message:"Data fetched successfully", data:result})
       }
    }
    catch(err){
        console.error("Error saving OT data:", err);
        res.status(500).json({message:"Error saving OT data", error:err.message});
    }

});


router.get("/fetchData",async (req,res)=>{

    try {
        const ots = await OtModel.find();
        res.status(200).json({ message: "OT data retrieved successfully", data: ots });
    } catch (err) {
        console.error("Error retrieving OT data:", err);
        res.status(500).json({ message: "Error retrieving OT data", error: err.message });
    }
});
export default router;