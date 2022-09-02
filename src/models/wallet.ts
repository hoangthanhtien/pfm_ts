import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./user";

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  walletName!: string;

  @Column()
  totalBalance!: number;

  @Column()
  walletStatus!: string;

  @Column({
    type: "text",
  })
  description!: string;

  @Column({ nullable: false })
  userId!: number;
  @ManyToOne((_type) => User, (user: User) => user.wallets)
  @JoinColumn()
  user!: User;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
