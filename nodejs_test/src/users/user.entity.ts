import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  photos: string[];

  @Column()
  creditcard_type: string;

  @Column()
  creditcard_number: string;

  @Column()
  creditcard_name: string;

  @Column()
  creditcard_expired: string;

  @Column()
  creditcard_cvv: string;
}
