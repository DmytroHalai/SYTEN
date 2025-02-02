import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DishesEnum } from '../../constants/enum/dishes/dishes.enum';

@Entity('dishes')
export class Dish {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @Index()
  name: string;

  @Column()
  price: number;

  @Column()
  weight: number;

  @Column()
  description: string;

  @Column()
  proteins: number;

  @Column()
  fats: number;

  @Column()
  carbohydrates: number;

  @Column()
  picture_url: string;

  @Column({ type: 'enum', enum: DishesEnum })
  category: DishesEnum;

  @Column()
  count: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
