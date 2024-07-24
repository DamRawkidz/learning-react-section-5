import Header from "./components/Header.jsx"
import Results from "./components/Result.jsx"
import UserInput from "./components/UserInput.jsx"
import { useState } from "react"
function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  function handleChange(inputIndentifier, newValue) {
    setUserInput(pervUserInput => {
      return {
        ...pervUserInput,
        [inputIndentifier]: +newValue
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      <Results input={userInput} />
    </>
  )
}

export default App
