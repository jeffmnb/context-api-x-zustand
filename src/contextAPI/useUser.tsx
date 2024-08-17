import React, { createContext, useContext, useState } from "react"

type User = {
  fullName: string
  mail: string
  score: number
}

type UserContextProps = {
  user: User
  updateUser: (usarData: Partial<User>) => void
}

const UserContext = createContext({} as UserContextProps)

export const useUser = () => useContext(UserContext)

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<User>({ fullName: "", mail: "", score: 0 })

  const updateUser = (updatedData: Partial<User>) => {
    setUser((currentData) => ({ ...currentData, ...updatedData }))
  }

  return (
    <UserContext.Provider value={{ updateUser, user }}>
      {children}
    </UserContext.Provider>
  )
}
