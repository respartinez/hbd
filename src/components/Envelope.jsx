import { useState } from "react";
import "./Envelope.css";

function Envelope() {
  const [open, setOpen] = useState(false);

  return (
    <div className="envelope-wrapper" onClick={() => setOpen(!open)}>
      <div className={`envelope ${open ? "open" : ""}`}>
        <div className="flap">
          <div className="flap-inner"></div>
          <div className="flap-cover"></div>
        </div>
        <div className="env-body">
          <div className="card-msg">
            <p>Happy Birthday lods!</p>
            <p>Enjoy your day!! 🎉🎂🎁</p>
          </div>
        </div>
      </div>
      <p className="hint">{open ? "click to close" : "click to open"}</p>
    </div>
  );
}

export default Envelope;