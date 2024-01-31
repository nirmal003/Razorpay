import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import Paymentsuccess from "./Paymentsuccess";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paymentsuccess" element={<Paymentsuccess />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
