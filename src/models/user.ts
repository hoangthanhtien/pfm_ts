import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  UpdateDateColumn,
} from "typeorm";
// import { Post } from "./post";
// import { Comment } from "./comment";
import { Wallet } from "./wallet";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({ default: false })
  isAdmin!: Boolean;

  @OneToMany((_type) => Wallet, (wallet: Wallet) => wallet.user)
  wallets!: Array<Wallet>;

  // @OneToMany((_type) => Post, (post: Post) => post.user)
  // posts!: Array<Post>;
  //
  // @OneToMany((_type) => Comment, (comment: Comment) => comment.user)
  // comments!: Array<Comment>;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
