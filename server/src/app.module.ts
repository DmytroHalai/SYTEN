import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DishesModule } from './dishes/dishes.module';

@Module({
  imports: [UsersModule, DishesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
