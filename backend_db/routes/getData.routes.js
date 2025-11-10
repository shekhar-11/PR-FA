import express from 'express';
import { fetchAllDocs, fetchDocById } from '../fetchData.js';


const router = express.Router();


router.get("/getUserData",async (req,res)=>{

    try{
        const { id } = req.query;
        console.log("Received id:", id);

     
    //    console.log("Received OT data:", otData);
       const doc  = await fetchDocById(id); 
       if(!doc){
        console.log("No document found with the given ID");
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