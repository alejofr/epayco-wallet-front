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

export type PaymentWalletForm = RechargeWallet;

export type PaymentWalletResApi = {
    emailStr:  string;
    sessionId: string;
}

export type ConfirmPaymentWalletForm = {
    sessionId: string;
    token:     string;
}

export type ConfirmPaymentWalletRespApi = {
    ok: boolean;
    message: string;
}