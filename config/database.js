import mongoose from "mongoose";
import dotenv from "dotenv";

let uri_link = process.env.DBCON;

mongoose.connect(uri_link)
.then(() => console.log("MongoDB connected..."))
.catch((err) => console.log(err));    