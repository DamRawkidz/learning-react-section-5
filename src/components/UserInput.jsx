

export default function UserInput({ onChange, userInput }) {

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input value={userInput.initialInvestment} type="number" required onChange={(event) => onChange('initialInvestment', event.target.value)} />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required value={userInput.annualInvestment} onChange={(event) => onChange('annualInvestment', event.target.value)} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input value={userInput.expectedReturn} type="number" required onChange={(event) => onChange('expectedReturn', event.target.value)} />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required value={userInput.duration} onChange={(event) => onChange('duration', event.target.value)} />
            </p>
        </div>
    </section>
}