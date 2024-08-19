import { create } from "zustand"
import { createJSONStorage, persist, devtools } from "zustand/middleware"

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
} as UserStoreProps

export const useUserStore = create<UserStoreProps>()(
  devtools(
    persist(
      (set) => ({
        ...initialStoreValue,
        updateTheme: (newTheme) =>
          set(() => ({ theme: newTheme }), false, "updateTheme"),
        updateUser: (newUserData) =>
          set(
            ({ user }) => ({ user: { ...user, ...newUserData } }),
            false,
            "updateUser",
          ),
      }),
      {
        name: "@app/user-store",
        storage: createJSONStorage(() => sessionStorage),
        partialize: (state) =>
          Object.fromEntries(
            Object.entries(state).filter(([key]) => !["user"].includes(key)),
          ),
      },
    ),
    {
      enabled: true,
      trace: true,
    },
  ),
)
