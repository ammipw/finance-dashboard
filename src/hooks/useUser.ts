import { create } from "zustand"

const useUser = create((set) => ({
  id: "u1",
  name: "User One",
  email: "userone@example.com",
  setName: (name: string) => set({ name }),
  setEmail: (email: string) => set({ email }),
}))