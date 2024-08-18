import React from "react"
import { useUserStore } from "../../useUserStore"

export const UpdateProfileZ: React.FC = () => {
  const { updateTheme, updateUser } = useUserStore()
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
      <br />
      <select
        name="theme"
        id="theme"
        onChange={(val) => updateTheme(val.target.value)}
      >
        <option value="light">Claro</option>
        <option value="dark">Escuro</option>
      </select>
    </>
  )
}
