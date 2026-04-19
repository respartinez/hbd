import { BrowserRouter, Routes, Route } from "react-router-dom";
import QRCodeComponent from "./components/QRCodeComponent";
import Envelope from "./components/Envelope";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QRCodeComponent />} />
        <Route path="/envelope" element={<Envelope />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;