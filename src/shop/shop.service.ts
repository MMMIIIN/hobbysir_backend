import { Injectable } from '@nestjs/common';

@Injectable()
export class ShopService {
  getAllShop() {
    return 'GetAllShop';
  }
}
