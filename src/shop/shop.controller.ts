import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/lib/muterOptions';
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

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return 'File upload success!!';
  }
}
