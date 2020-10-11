import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.schema';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(
    private productsService: ProductsService,
  ) {}

  @Post()
  create(
    @Body() data: any,
  ) {
    return this.productsService.create(data);
  }

  @Delete(':productId')
  remove(
    @Param('productId') productId: string,
  ) {
    return this.productsService.remove(productId);
  }
}
