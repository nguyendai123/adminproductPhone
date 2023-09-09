import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import DisplayAdjustment from "./component/DisplayAdjustment/DisplayAdjustment";
import Filter from "./component/Filter/Filter";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/adj" element={<DisplayAdjustment />} />
        <Route path="/" exact element={<Filter />} />
      </Routes>
    </div>
  );
}

export default App;
