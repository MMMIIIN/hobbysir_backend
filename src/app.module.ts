import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Shop } from './shop/entities/shop.entity';
import { ShopController } from './shop/shop.controller';
import { ShopModule } from './shop/shop.module';
import { ImageModule } from './image/image.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'hobbysir',
      entities: [Shop],
      synchronize: true,
    }),
    ShopModule,
    ImageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
