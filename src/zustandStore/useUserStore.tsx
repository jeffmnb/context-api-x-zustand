import { create } from "zustand"

type User = {
  fullName: string
  mail: string
  score: number
}

type UserStoreProps = {
  user: User
  updateUser: (usarData: Partial<User>) => void
}

export const useUserStore = create<UserStoreProps>((set) => ({
  user: { fullName: "", mail: "", score: 0 },
  updateUser: (newUserData: Partial<User>) =>
    set(({ user }) => ({ user: { ...user, ...newUserData } })),
}))
