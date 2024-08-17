import React from "react"
import { useUser } from "../../useUser"

export const ScoreCard: React.FC = () => {
  const { user } = useUser()

  return <h1>Score do usuário: {user?.score}</h1>
}
