import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

type User = {
  fullName: string
  mail: string
  score: number
}

type UserStoreProps = {
  user: User
  updateUser: (newUserData: Partial<User>) => void
  theme: string
  updateTheme: (newTheme: string) => void
}

const initialStoreValue = {
  user: { fullName: "", mail: "", score: 0 },
  theme: "light",
} as const

export const useUserStore = create<UserStoreProps>()(
  persist(
    (set) => ({
      ...initialStoreValue,
      updateTheme: (newTheme) => set(() => ({ theme: newTheme })),
      updateUser: (newUserData) =>
        set(({ user }) => ({ user: { ...user, ...newUserData } })),
    }),
    {
      name: "@app/user-store",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
