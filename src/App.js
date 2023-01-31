import "./App.css";
import BudgetInput from "./components/BudgetInput";
import ExpenseInput from "./components/ExpenseInput";

function App() {
  return (
    <div className="ml-10 mr-10 sm:ml-12 sm:mr-12 md:ml-20 md:mr-20 lg:ml-12 lg:mr-0 xl:ml-36 xl:mr-36 mt-5">
      <h1 className="font-bold text-2xl md:text-3xl mb-3">BUDGET APP</h1>

      <BudgetInput />
      <ExpenseInput />
    </div>
  );
}

export default App;
