import mongoose, { model, mongo } from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    immutable: true,
  },
  imgURL: {
    type: String,
    default: "https://pan-il.org/wp-content/uploads/fruit-5546813_1920SM.jpg",
  },
  name: {
    type: String,
    maxLength: 50,
    required: true,
  },
  catalogNumber: {
    type: Number,
    min: 0,
    required: true,
  },
  description: String,
  category: {
    type: String,
    enum: ["ירק", "פרי", "גידול שדה"],
  },
  dateSold: {
    type: Date,
    default: () => {
      const dte = new Date();
      dte.setDate(dte.getDate() - 7);
      return dte;
    },
  },
});

productSchema.pre("save", async function () {
  if (this.id !== undefined) {
    return;
  }
  this.id = (await ProductModel.countDocuments()) + 1;
});

const ProductModel = mongoose.model("products", productSchema);
export default ProductModel;
