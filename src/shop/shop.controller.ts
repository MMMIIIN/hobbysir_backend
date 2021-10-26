import { Body, Controller, Get, Post } from '@nestjs/common';
import { Shop } from './entities/shop.entity';
import { ShopService } from './shop.service';

@Controller('shop')
export class ShopController {
  constructor(private shopService: ShopService) {}

  @Get('list')
  async findAllShop() {
    return this.shopService.getAllShop();
  }

  @Get('one')
  async findOneShop() {
    return this.shopService.getShopFeature();
  }

  @Post('add')
  async addShop(@Body() shop: Shop) {
    await this.shopService.addShop(shop);
    return 'success!!';
  }
}
