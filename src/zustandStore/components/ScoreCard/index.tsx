import React from "react"
import { useUserStore } from "../../useUserStore"

export const ScoreCardZ: React.FC = () => {
  const { score } = useUserStore((state) => ({
    score: state.user.score,
  }))

  return <h1>Score do usuário: {score}</h1>
}
