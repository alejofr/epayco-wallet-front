export type InfoUserBase = {
    numberPhone: string;
    identify: string;
}

export type RechargeWallet = {
    amount: number;
} & InfoUserBase;

export type WalletRespApi = {
    ok: boolean;
    wallet: {
        amount: number;
        userId: string;
    }
}