import { apiWallet } from "@/lib/api";
import type { RechargeWallet, WalletRespApi, InfoUserBase, Wallet } from "../types/wallet.type";

export const walletService = {
    rechargeWallet: async (data: RechargeWallet): Promise<WalletRespApi> => {
        const response = await apiWallet.post<WalletRespApi>('/wallets/recharge', data);
        return response.data;
    },
    getBalance: async (data: InfoUserBase): Promise<Wallet> => {
        const response = await apiWallet.post<Wallet>('/wallets/balance', data);
        return response.data;
    }
}
