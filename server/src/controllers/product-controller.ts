import { Request, Response } from "express-serve-static-core";
import Product from "../schemas/product";

class ProductController {
  list(req: Request, res: Response) {
    Product.find()
      .then(products => {
        res.json(products)
      })
      .catch(err => res.json(err))
  }

  getById(id: string): Document {
    let a;
    Product.findById(id).then(product => a = product);
    return a;
  }

  get(req: Request, res: Response) {
    const _id: string = req.params.id;
    Product.findById(_id)
      .then(product => res.json(product))
      .catch(err => res.json(err))
  }

  create(req: Request, res: Response) {
    new Product(req.body).save()
      .then(product => res.json(product))
      .catch(err => res.json(err))
  }

  update(req: Request, res: Response) {
    const _id: string = req.params.id;
    Product.findByIdAndUpdate({ _id }, { $set: req.body })
      .then(product => res.json(product))
      .catch(err => res.json(err))
  }

  delete(req: Request, res: Response) {
    const _id: string = req.params.id;
    Product.findOneAndDelete(_id)
      .then(product => res.json(product))
      .catch(err => res.json(err))
  }
}

export default ProductController;