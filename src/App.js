import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Button } from "react-bootstrap";
import Login from "./componants/Login";
import Register from "./componants/Register";
import HomePage from "./componants/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/homepage" element={<HomePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
