import express from "express";
import WalletController from "../controllers/wallet.controller";

const router = express.Router();

router.get("/", async (req, res) => {
  const controller = new WalletController();
  const response = await controller.getWallets();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new WalletController();
  const response = await controller.createWallet(req.body);
  return res.send(response);
});

export default router;
