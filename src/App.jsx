import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loan from "./Loan/loan";
import LoanForm from "./Loan/LoanForm";
import LoanHistory from "./Loan/LoanHistory";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Loan />} />
          <Route path="/loanform" element={<LoanForm />} />
          <Route path="/loanhistory" element={<LoanHistory />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
