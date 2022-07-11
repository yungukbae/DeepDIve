import { Routes, Route } from "react-router-dom";
import "./App.css";
import Drop from "./router/Drop";
import Home from "./router/Home";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="drop" element={<Drop />} />
      </Routes>
    </div>
  );
}

export default App;
