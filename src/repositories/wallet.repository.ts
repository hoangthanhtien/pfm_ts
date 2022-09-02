import { getRepository } from "typeorm";
import { Wallet } from "../models";

export interface IWalletPayload {
  walletName: string;
  totalBalance: number;
  walletStatus: string;
  description: string;
  userId: number;
}

export const getWallets = async (): Promise<Array<Wallet>> => {
  const postRepository = getRepository(Wallet);
  return postRepository.find();
};

export const createWallet = async (
  payload: IWalletPayload
): Promise<Wallet> => {
  const walletRepository = getRepository(Wallet);
  const wallet = new Wallet();
  return walletRepository.save({
    ...wallet,
    ...payload,
  });
};
//
// export const getPost  = async (id: number) :Promise<Post | null> => {
//     const postRepository = getRepository(Post);
//     const post = await postRepository.findOne({id: id})
//     if (!post) return null
//     return post
// }
