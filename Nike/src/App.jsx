import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import shoplist from "./components/shoplist.jsx";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/buy" Component={shoplist} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
