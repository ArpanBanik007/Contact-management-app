import express from "express";
import cors from "cors";
import path from path

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



if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();

  app.use(
    express.static(
      path.join(__dirname, "Contact-Frontend", "dist")
    )
  );

  app.get("*", (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "Contact-Frontend",
        "dist",
        "index.html"
      )
    );
  });
}

export default app