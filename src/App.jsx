import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
