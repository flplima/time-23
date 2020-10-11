import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  find() {
    return this.productModel.find();
  }

  async create(data: any) {
    const product = new this.productModel();
    product.name = data.name;
    product.value = data.value;
    await product.save();
    return product;
  }

  async remove(productId: string) {
    await this.productModel.remove({ _id: productId });
  }
}
