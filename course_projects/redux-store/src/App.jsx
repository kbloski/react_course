import CreateCustomer from "./compontnents/CreateCustomer";
import Customer from "./compontnents/Customer";
import AccountOperations from "./compontnents/AccountOperations";
import BalanceDisplay from "./compontnents/BalanceDisplay";

function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay /> 
    </div>
  );
}

export default App;
