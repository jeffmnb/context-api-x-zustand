import "./App.css"
import { ScoreCard } from "./contextAPI/components/ScoreCard"
import { UpdateProfile } from "./contextAPI/components/UpdateProfile"
import { ScoreCardZ } from "./zustandStore/components/ScoreCard"
import { UpdateProfileZ } from "./zustandStore/components/UpdateProfile"

function App() {
  return (
    <>
      <h1>Context API</h1>
      <ScoreCard />
      <UpdateProfile />

      <br />
      <br />

      <h1>Zustand</h1>
      <ScoreCardZ />
      <UpdateProfileZ />
    </>
  )
}

export default App
