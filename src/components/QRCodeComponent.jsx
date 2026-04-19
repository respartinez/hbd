import { useState, useEffect } from "react";
import "../styles/Envelope.css";
import Dialog from "./Dialog";

function Envelope() {
  const [open, setOpen] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  // ← auto-open dialog when component mounts (e.g. from QR code scan)
  useEffect(() => {
    setShowDialog(true);
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
    if (showDialog) return;
    if (!open) {
      setShowDialog(true);
    } else {
      setOpen(false);
    }
  };

  const handleYes = () => {
    setShowDialog(false);
    setOpen(true);
  };

  const handleNo = () => {
    setShowDialog(false);
  };

  return (
    <div className="main-container">
      {showDialog && <Dialog onYes={handleYes} onNo={handleNo} />}

      <div className="envelope-container">
        <div className="envelope-wrapper" onClick={handleClick}>
          <div className={`envelope ${open ? "open" : ""}`}>
            <div className="flap">
              <div className="flap-inner"></div>
              <div className="flap-cover"></div>
            </div>
            <div className="env-body">
              <div
                className="card-msg"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXNkejZua2ZxMTJnd28zNDQ5M2hmcmdsbjl0bm1qbXM0YmtoanAzdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q25yu15kqxU3I6qw3R/giphy.gif"
                  alt="Happy Birthday"
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              </div>
            </div>
          </div>
          <p className="hint">{open ? "click to close" : "click to open"}</p>
        </div>
      </div>
    </div>
  );
}

export default Envelope;