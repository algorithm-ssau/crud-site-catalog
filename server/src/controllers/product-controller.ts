import { Request, Response } from "express-serve-static-core";
import Product from "../schemas/product";
import Category from "../schemas/category";
import mongoose, { Types, isValidObjectId } from "mongoose";

class ProductController {
  list(req: Request, res: Response) {
    Product.find()
      .then((products) => {
        res.json(products);
      })
      .catch((err) => res.json(err));
  }

  getById(id: string): Document {
    let a;
    Product.findById(id).then((product) => (a = product));
    return a;
  }

  get(req: Request, res: Response) {
    const _id: string = req.params.id;
    Product.findById(_id)
      .then((product) => res.json(product))
      .catch((err) => res.json(err));
  }

  create(req: Request, res: Response) {
    new Product(req.body)
      .save()
      .then((product) => res.json(product))
      .catch((err) => res.json(err));
  }

  update(req: Request, res: Response) {
    const _id: string = req.params.id;
    Product.findByIdAndUpdate({ _id }, { $set: req.body })
      .then((product) => res.json(product))
      .catch((err) => res.json(err));
  }

  async delete(req: Request, res: Response) {
    const _id: string = req.params.id;

    const category = await Category.find().then(
      (val: mongoose.Document[]) => val
    );

    const idList: any[] = [];
    category.map((val: mongoose.Document) => {
      idList.push(new mongoose.mongo.ObjectId(val.get("_id")));
    });

    console.log(idList);
    console.log(_id);

    idList.map(async (val) => {
      await Category.update(
        { _id: new mongoose.mongo.ObjectId(val) },
        {
          $pull: {
            products: { $in: [_id.toString()] },
          },
        }
      );
    });

    Product.findOneAndDelete(_id)
      .then((product) => res.json(product))
      .catch((err) => res.json(err));
  }
}
export default ProductController;
