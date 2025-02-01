import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  user_id: number;

  @Column('int')
  age: number;

  @Column('text')
  email: string;

  @Column('text')
  phone: string;

  // @Column('text')
  // date_of_birth: string

  @Column('text')
  role: string;

  @Column('text')
  address: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
