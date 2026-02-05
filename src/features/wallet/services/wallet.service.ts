import { apiWallet } from "@/lib/api";
import type { RechargeWallet, WalletRespApi } from "../types/wallet.type";

export const walletService = {
    rechargeWallet: async (data: RechargeWallet): Promise<WalletRespApi> => {
        const response = await apiWallet.post<WalletRespApi>('/wallets/recharge', data);
        return response.data;
    }
}
