import { useState } from "react";
import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable";
import Header from "./components/Header";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 5.5,
    duration: 13,
  });

  function handleChange(identifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [identifier]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter duration greater than zero.</p>
      )}
      {inputIsValid && <ResultsTable userInput={userInput} />}
    </>
  );
}

export default App;
