import { Request, Response } from "express-serve-static-core";
import Category from "../schemas/category";
import ProductController from "./product-controller";
import Product from "../schemas/product";
import * as _ from "lodash";
import fetch from "node-fetch";

class CategoryController {
  productController = new ProductController();

  async list(req: Request, res: Response) {
    const listResp: any[] = [];
    const respon = await Category.find().then((categories) => categories);
    await Promise.all(
      respon.map(async (val) => {
        const productsId = val.get("products");
        if (productsId.length === 0) {
          listResp.push(val);
        }
        await Promise.all(
          productsId.map(async (id: any) => {
            await Product.findById(id.toString()).then((pr: any) => {
              if (!!pr && pr.name) {
                const resp = replace(val, id.toString(), pr);
                listResp.push(resp);
              }
            });
          })
        );
      })
    );
    res.json(_.uniq(listResp));
  }

  async get(req: Request, res: Response) {
    const _id: string = req.params.id;
    const listResp: any[] = [];
    const response = await Category.findById(_id.toString()).then(
      (categories) => categories
    );

    const productsId = response.get("products");
    if (productsId.length === 0) {
      res.json(response);
    }

    await Promise.all(
      productsId.map(async (id: any) => {
        const product = await Product.findById(id.toString()).then(
          (pr: any) => {
            if (!!pr && pr.name) {
              const resp = replace(response, id.toString(), pr);

              if (resp.products != null) {
                resp.products.forEach((element: any) => {
                  if (element.name) {
                    listResp.push(resp);
                  }
                });
              }
            }
          }
        );
      })
    );

    const a = _.uniq(listResp)[0];

    const b = a.products.filter((v: any) => !!v.name);

    res.json({ name: a.name, products: b, _id: a._id });
  }

  async create(req: Request, res: Response) {
    const { name, description } = req.body;

    const category = await new Category({
      name,
      description,
      products: [],
    }).save();

    res.send({});
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
    if (replacedObject.products[i] == null) {
      replacedObject.products[i] = {};
    }
    if (replacedObject.products[i].toString() === searchID)
      replacedObject.products[i] = obj;
  }

  return replacedObject;
}

export default CategoryController;
