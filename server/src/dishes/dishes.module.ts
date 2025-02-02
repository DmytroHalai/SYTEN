import { Module } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { DishesController } from './dishes.controller';
import { DatabaseModule } from '../database/database.module';
import { dishesProviders } from './dishes.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [DishesController],
  providers: [DishesService, ...dishesProviders],
  exports: [],
})
export class DishesModule {}
