import express from "express";
import { getProducts, createProduct, updateProducts, deleteProduct } from "../controllers/product.js";

const router = express.Router();

// All products
router.get("/", getProducts);

// Create product
router.post("/", createProduct);

// Update product
router.put("/:id", updateProducts);

// Delete product
router.delete("/:id", deleteProduct);

export default router;
