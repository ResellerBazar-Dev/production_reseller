import productSchema from "../model/product.model.js";

export const createProduct = async (req, res) => {
  try {
    const productData = new productSchema(req.body);

    const createData = await productData.save();

    res.status(201).json(createData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const getProducts = await productSchema.find();
    res.status(200).json(getProducts);
  } catch (error) {
    console.log({ message: error.message });
  }
};
