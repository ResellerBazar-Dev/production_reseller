import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRoutes from "./src/router/product.routes.js";
import imageUploadRoutes from "./src/router/productImage.routes.js";

const PORT = process.env.process || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/products_images", imageUploadRoutes);
app.use("/api/allProducts", productRoutes);

const DB =
  "mongodb+srv://reseller:reseller123@reselllerbazzar.zg4mo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(DB)
  .then(() => console.log("MongoDB connected..."))
  .catch((error) => console.log(error.message));

app.listen(PORT, () => console.log(`server running at PORT ${PORT}`));
