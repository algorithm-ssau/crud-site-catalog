import { Request, Response } from "express-serve-static-core";
import Category from "../schemas/category";

class CategoryController {
  list(req: Request, res: Response) {
    Category.find()
      .then(categories => res.json(categories))
      .catch(err => res.json(err))
  }

  get(req: Request, res: Response) {
    const _id: string = req.params.id;
    Category.findById(_id)
      .then(category => res.json(category))
      .catch(err => res.json(err))
  }

  create(req: Request, res: Response) {
    new Category(req.body).save()
      .then(category => res.json(category))
      .catch(err => res.json(err))
  }

  update(req: Request, res: Response) {
    const _id: string = req.params.id;
    Category.findByIdAndUpdate({ _id }, { $set: req.body })
      .then(category => res.json(category))
      .catch(err => res.json(err))
  }

  delete(req: Request, res: Response) {
    const _id: string = req.params.id;
    Category.findOneAndDelete(_id)
      .then(category => res.json(category))
      .catch(err => res.json(err))
  }
}

export default CategoryController;