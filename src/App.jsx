import { HashRouter, Routes, Route } from "react-router-dom";
import QRCodeComponent from "./components/QRCodeComponent";
import Envelope from "./components/Envelope";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<QRCodeComponent />} />
        <Route path="/envelope" element={<Envelope />} />
      </Routes>
    </HashRouter>
  );
}

export default App;