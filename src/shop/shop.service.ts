import { Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShopDto } from './dto/shop.create.dto';
import { Shop } from './entities/shop.entity';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop)
    private shopRepository: Repository<Shop>,
  ) {
    this.shopRepository = shopRepository;
  }
  async getAllShop() {
    return { shops: await this.shopRepository.find() };
  }

  async getShopFeature() {
    return await this.shopRepository.findOne({
      id: 1,
    });
  }

  async addShop(shop: CreateShopDto): Promise<void> {
    await this.shopRepository.save(shop);
  }
}
