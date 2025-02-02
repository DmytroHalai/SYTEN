import { DataSource } from 'typeorm';
import { Dish } from './entities/dish.entity';
import { DISH_REPOSITORY } from '../constants/dbRepositories/dishesRepo';
import { DATA_SOURCE } from '../constants/dataSource/dataSource';

export const dishesProviders = [
  {
    provide: DISH_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Dish),
    inject: [DATA_SOURCE],
  },
];
