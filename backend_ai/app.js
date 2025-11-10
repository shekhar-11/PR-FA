import express from 'express';
import cors from 'cors';
import main from './ai_api.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Backend AI is running");
});

app.post("/api/processData", async (req, res) => {
    const jsonData = req.body;
    try {
        await main(jsonData);
        res.status(200).send("Data processed successfully");
    } catch (error) {
        console.error("Error processing data:", error);
        res.status(500).send("Error processing data");
    }
});

// await main(jsonData)
app.listen(5200)