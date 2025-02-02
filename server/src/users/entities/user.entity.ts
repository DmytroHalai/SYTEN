import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  user_id: number;

  @Column('int')
  age: number;

  @Column('text')
  email: string;

  @Column('text')
  phone: string;

  @Column()
  date_of_birth: Date;

  @Column('text')
  role: string;

  @Column('text', { default: 'penis' })
  address: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
