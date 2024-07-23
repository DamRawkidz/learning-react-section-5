import { useState } from "react"

export default function UserInput() {
    const [userInput, setUserInput] = useState({
        initalInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

    function handleChange(inputIndentifier, newValue) {
        setUserInput(pervUserInput => {
            return {
                ...pervUserInput,
                [inputIndentifier]: newValue
            }
        })
    }

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input value={userInput.initalInvestment} type="number" required onChange={(event) => handleChange('initalInvestment', event.target.value)} />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required value={userInput.annualInvestment} onChange={(event) => handleChange('annualInvestment', event.target.value)} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input value={userInput.expectedReturn} type="number" required onChange={(event) => handleChange('expectedReturn', event.target.value)} />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required value={userInput.duration} onChange={(event) => handleChange('duration', event.target.value)} />
            </p>
        </div>
    </section>
}