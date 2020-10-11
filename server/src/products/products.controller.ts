import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.schema';

@Controller('products')
export class ProductsController {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  @Post()
  async create(
    @Body() data: any,
  ) {
    const product = new this.productModel();
    product.name = data.name;
    product.value = data.value;
    await product.save();
    return product;
  }

  @Delete(':productId')
  async remove(
    @Param('productId') productId: string,
  ) {
    await this.productModel.remove({ _id: productId });
  }
}
