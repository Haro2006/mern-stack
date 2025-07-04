import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

// Make sure .env loads from same folder as server.js
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

console.log("MONGO_URI:", process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use("/api/products", productRoutes);

// Start server after DB connected
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started at http://localhost:" + PORT);
  });
});
