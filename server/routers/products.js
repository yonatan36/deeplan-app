import { Router } from "express";
import ProductModel from "../models/product.js";

const productRouter = Router();

//Create the products
productRouter.get("/loadinitial", async (req, res) => {
  const initialData = [
    {
      name: "תפוח עץ",
      catalogNumber: 1234567,
      description: "לא תפוח אדמה",
      category: "פרי",
    },
    {
      name: "בננה",
      catalogNumber: 1234568,
      description: "לא תפוח אדמה",
      category: "גידול שדה",
    },
    {
      name: "חסה ",
      catalogNumber: 1234568,
      description: "לא תפוח אדמה בכלל",
      category: "ירק",
    },
  ];
  for (const x of initialData) {
    try {
      const product = new ProductModel(x);
      await product.save();
      console.log(product);
    } catch (err) {
      console.log(err);
    }
  }
  res.send("OK");
});

// GET , POST all products
productRouter
  .route("/")
  .get(async (req, res) => {
    const products = await ProductModel.find();
    res.send(products);
  })
  .post(async (req, res) => {
    try {
      const productData = req.body;
      const product = new ProductModel(productData);

      await product.save();
      res.status(200).json({ message: "Product Created successfully" });
    } catch (error) {
      console.log(error);
    }
  });

// PUT to update a product by ID
productRouter.put("/:id", async (req, res) => {
  try {
    const product = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!product) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(400).json({ error: "Bad Request", details: error.message });
  }
});

//Delete productd
productRouter.delete("/:id", async (req, res) => {
  try {
    const product = await ProductModel.findByIdAndDelete(req.params.id);
    if (!product) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.status(200).json({ message: "Product deleted successfully" });
    }
  } catch (error) {
    res.status(400).json({ error: "Bad Request", details: error.message });
  }
});

//Get product by ID
productRouter.get("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error("Failed to fetch product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default productRouter;
