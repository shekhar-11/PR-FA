import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const uri = process.env.URL_TO_CONNECT;


let client;
let db; 
export async function connectDB() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");
    db = client.db("test"); // save db reference
  }
  return db;
}


export async function fetchAllDocs() {
  const database = db || (await connectDB());
  const collection = database.collection("otmodels");
 const res = (await collection.find({}).toArray());
  console.log("Fetched documents:", res);
}


export async function fetchDocById(bug_idid) {
  const database = db || (await connectDB());
  const collection = database.collection("otmodels");
  const rres = await collection.findOne({ bug_id:bug_idid});
  console.log("Fetched document by ID:", rres);
  return rres;
}



