import { apiWallet } from "@/lib/api";
import type { RechargeWallet, WalletRespApi, InfoUserBase, Wallet, PaymentWalletForm, PaymentWalletResApi, ConfirmPaymentWalletForm, ConfirmPaymentWalletRespApi } from "../types/wallet.type";

export const walletService = {
    rechargeWallet: async (data: RechargeWallet): Promise<WalletRespApi> => {
        const response = await apiWallet.post<WalletRespApi>('/wallets/recharge', data);
        return response.data;
    },
    getBalance: async (data: InfoUserBase): Promise<Wallet> => {
        const response = await apiWallet.post<Wallet>('/wallets/balance', data);
        return response.data;
    },
    payWallet: async (data: PaymentWalletForm): Promise<PaymentWalletResApi & { message?: string }> => {
        const response = await apiWallet.post<PaymentWalletResApi & { message?: string }>('/wallets/payment', data);
        return response.data;
    },
    confirmPayment: async (data: ConfirmPaymentWalletForm): Promise<ConfirmPaymentWalletRespApi> => {
        const response = await apiWallet.post<ConfirmPaymentWalletRespApi>('/wallets/otp/confirm-payment', data);
        return response.data;
    }
}
