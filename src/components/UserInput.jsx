import InputField from "./InputField";

export default function UserInput({ userInput, onChange }) {
  return (
    <form id="user-input">
      <div className="input-group">
        <InputField
          name="Initial Investment"
          value={userInput.initialInvestment}
          onChange={(event) =>
            onChange("initialInvestment", event.target.value)
          }
        />
        <InputField
          name="Unnual Investmen"
          value={userInput.annualInvestment}
          onChange={(event) => onChange("annualInvestment", event.target.value)}
        />
      </div>
      <div className="input-group">
        <InputField
          name="Expected Return"
          value={userInput.expectedReturn}
          onChange={(event) => onChange("expectedReturn", event.target.value)}
        />
        <InputField
          name="Duration"
          value={userInput.duration}
          onChange={(event) => onChange("duration", event.target.value)}
        />
      </div>
    </form>
  );
}
