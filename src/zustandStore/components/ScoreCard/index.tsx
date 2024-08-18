import React from "react"
import { useUserStore } from "../../useUserStore"
import { useShallow } from "zustand/react/shallow"

export const ScoreCardZ: React.FC = () => {
  const theme = useUserStore(useShallow(({ theme }) => theme))
  const score = useUserStore(useShallow(({ user }) => user.score))

  return (
    <>
      <h1>Score do usuário: {score}</h1>
      <h1>Tema atual: {theme}</h1>
    </>
  )
}
