import React from "react"
import { useUser } from "../../useUser"

export const UpdateProfile: React.FC = () => {
  const { updateUser } = useUser()
  return (
    <>
      <input
        type="text"
        placeholder="Digite o nome"
        onChange={(val) => updateUser({ fullName: val.target.value })}
      />
      <br />
      <input
        type="email"
        placeholder="Digite o email"
        onChange={(val) => updateUser({ mail: val.target.value })}
      />
      <br />
      <input
        type="number"
        placeholder="Digite o score"
        onChange={(val) => updateUser({ score: parseInt(val.target.value) })}
      />
    </>
  )
}
