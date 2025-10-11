import { Account } from "@/types"
import { create } from "zustand"

const useAccount = create((set) => ({
  id: "",
  type: "Loading...",
  balance: 0,
  transactions: [],
  setTransactions: (transactions: any[]) => set({ transactions }),
  setAccount: (account: Account) => set({ ...account }),
}))

export default useAccount