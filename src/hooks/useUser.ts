import { User } from "@/types"
import { create } from "zustand"

const useUser = create((set) => ({
  id: "u1",
  name: "User One",
  email: "userone@example.com",
  avatarUrl: "https://placehold.co/16",
  accounts: [],
  setUser: (user: User) => set({ ...user }),
}))

export default useUser