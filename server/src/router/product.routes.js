import express, { Router } from "express";

const router = express.Router();

import {
  createProduct,
  getAllProducts,
} from "../controller/product.controller.js";

router.post("/", createProduct);
router.get("/", getAllProducts);
export default router;
