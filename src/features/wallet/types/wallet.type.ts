export type InfoUserBase = {
    numberPhone: string;
    identify: string;
}

export type RechargeWallet = {
    amount: number;
} & InfoUserBase;

export type Wallet = {
    amount: number;
    userId: string;
    
}

export type WalletRespApi = {
    ok: boolean;
    wallet: Wallet;
}