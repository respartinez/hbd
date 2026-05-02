import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import QRCodeComponent from "./components/QRCodeComponent";
import PinEntry from "./components/PinEntry";
import Envelope from "./components/Envelope";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/pin" replace />} />
        <Route path="/qr" element={<QRCodeComponent />} />
        <Route path="/pin" element={<PinEntry />} />
        <Route path="/envelope" element={<Envelope />} />
      </Routes>
    </HashRouter>
  );
}

export default App;