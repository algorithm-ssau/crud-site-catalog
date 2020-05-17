import { Request, Response } from "express-serve-static-core";
import Category from "../schemas/category";
import ProductController from "./product-controller";
import Product from "../schemas/product";
import { Schema } from "mongoose";
import * as _ from "lodash";

class CategoryController {
  productController = new ProductController();

  async list(req: Request, res: Response) {
    const listResp: any[] = [];
    const respon = await Category.find().then((categories) => categories);
    let i = 0;
    await respon.map((val) => {
      const productsId = val.get("products");
      productsId.map((id: any) => {
        Product.findById(id.toString()).then((pr: any) => {
          const resp = replace(val, id.toString(), pr);
          listResp.push(resp);
          i++;
          if (i === respon.length + 1) {
            res.json(_.uniq(listResp));
          }
        });
      });
    });
  }

  async get(req: Request, res: Response) {
    const _id: string = req.params.id;
    const response = await Category.findById(_id.toString()).then((categories) => categories);

    const productsId = response.get("products");
    productsId.map(async (id: any) => {
      const product = await Product.findById(id.toString()).then((pr: any) => {
        const resp = replace(response, id.toString(), pr);
        res.json(resp);
      });
    });
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
