import { apiWallet } from "@/lib/api";
import type { ClientForm } from "../types/client-form.type";

export const clientService = {
    registerClient: async (data: ClientForm) => {
        const response = await apiWallet.post('/users', data);
        return response.data;
    }
}
