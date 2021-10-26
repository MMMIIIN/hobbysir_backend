import { Column, Double, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uid: string;

  @Column()
  title: string;

  @Column()
  info: string;

  @Column()
  phone: string;

  @Column()
  isParking: boolean;
}
