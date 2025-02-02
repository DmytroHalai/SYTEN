import { DishesEnum } from '../../constants/enum/dishes/dishes.enum';

export class CreateDishDto {
  name: string;

  price: number;

  weight: number;

  description: string;

  proteins: number;

  fats: number;

  carbohydrates: number;

  picture_url: string;

  category: DishesEnum;

  count: number;
}
