import mongoose from "mongoose";

async function dbConnect() {
  const dbURI =
    "mongodb+srv://tester:DfMiMaTKofg5kGHZ@cluster0.umpjqhm.mongodb.net/deeplan?retryWrites=true&w=majority&appName=Cluster0";
  try {
    await mongoose.connect(dbURI);
  } catch (err) {
    console.log(err);
  }
}
export { dbConnect };
