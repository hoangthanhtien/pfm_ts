import { Get, Route, Tags, Post, Body } from "tsoa";
import { Wallet } from "../models";
import {
  createWallet,
  getWallets,
  IWalletPayload,
} from "../repositories/wallet.repository";

@Route("wallets")
@Tags("Wallets")
export default class WalletController {
  @Get("/")
  public async getWallets(): Promise<Array<Wallet>> {
    return getWallets();
  }

  @Post("/")
  public async createWallet(@Body() body: IWalletPayload): Promise<Wallet> {
    return createWallet(body);
  }
}
