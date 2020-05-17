import { Request, Response } from "express-serve-static-core";
import Category from "../schemas/category";
import ProductController from "./product-controller";
import Product from "../schemas/product";
import { Schema } from "mongoose";

class CategoryController {
  productController = new ProductController();

  async list(req: Request, res: Response) {
    const response = await Category.find().then((categories) => categories);
    const prod = response.map(async (val) => {
      const productsId = val.get("products");
      productsId.map(async (id: any) => {
        const product = await Product.findById(id.toString()).then(
          (pr: any) => {
            const a = replace(val, id.toString(), pr);
            res.json(a);
          }
        );
      });
    });
  }

  get(req: Request, res: Response) {
    const _id: string = req.params.id;
    Category.findById(_id)
      .then((category) => res.json(category))
      .catch((err) => res.json(err));
  }

  create(req: Request, res: Response) {
    new Category(req.body)
      .save()
      .then((category) => res.json(category))
      .catch((err) => res.json(err));
  }

  update(req: Request, res: Response) {
    const _id: string = req.params.id;
    Category.findByIdAndUpdate({ _id }, { $set: req.body })
      .then((category) => res.json(category))
      .catch((err) => res.json(err));
  }

  delete(req: Request, res: Response) {
    const _id: string = req.params.id;
    Category.findOneAndDelete(_id)
      .then((category) => res.json(category))
      .catch((err) => res.json(err));
  }
}

function replace(object: any, searchID: string, obj: any) {
  const replacedObject = object;
  for (let i = 0; i < replacedObject.products.length; i++) {
    if (replacedObject.products[i].toString() === searchID)
      replacedObject.products[i] = obj;
  }

  return replacedObject;
}

export default CategoryController;
