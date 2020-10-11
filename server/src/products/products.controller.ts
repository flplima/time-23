import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { CoreService } from 'src/core/core.service';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(
    private productsService: ProductsService,
    private coreService: CoreService,
  ) {}

  @Post()
  async create(
    @Body() data: any,
  ) {
    const product = await this.productsService.create(data);
    this.coreService.train();
    return product;
  }

  @Delete(':productId')
  async remove(
    @Param('productId') productId: string,
  ) {
    await this.productsService.remove(productId);
    this.coreService.train();
  }
}
