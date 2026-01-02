import express from "express";
import cors from "cors";


const app= express();



// cors frontend

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
}));



app.use(express.json({ limit: "10kb" }))
app.use(express.urlencoded({ extended: true, limit: "10kb" }))// For nested object
app.use(express.static("public"))// Access for public file data to server



import contactRoutes from "./router/contact.router.js"

app.use("/api/v1/contact", contactRoutes); 

export default app