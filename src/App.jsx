import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Prenota from "./Components/Prenota/Prenota";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/prenota" element={<Prenota />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
