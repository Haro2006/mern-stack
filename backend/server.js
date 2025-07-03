import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import mongoose from "mongoose";

dotenv.config();
console.log("MONGO_URI:", process.env.MONGO_URI);

const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log("Request:", req.method, req.url);
  next();
});

app.get(express.json());
app.get("/api/products", async(req,res) =>{
try{
  const products = await Product.find({});
  res.status(200).json({success:true, data: products});
}catch(error) {
console.log("error in fetching products:",error.message);
res.status(500).json({success: false, message:"server Error"});


}

})


// Routes
app.post("/api/products", async (req, res) => {
  const productData = req.body;

  if (!productData.name || !productData.price || !productData.image) {
    return res.status(400).json({ success: false, message: "Please provide all fields" });
  }

  try {
    const newProduct = new Product(productData);
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in create product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});
app.put("/api/products/:id", async (req, res) => {
  const{id} = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success:false, message: "Invalid Product Id"});
  }
  try{
    const updateProducts=await Product.findByIdAndUpdate(id,product,{new:true});
  }catch(error) {
res.status(500).json({success: false, message:"Server Error"});

  }
})

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  console.log("id:", id);

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});



// Start server after DB connected
connectDB().then(() => {
  app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
  });
});