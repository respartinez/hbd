import { useState } from "react";
import "../styles/Envelope.css";
import Dialog from "./Dialog";
import LetterDialog from "./LetterDialog";

function Envelope() {
  const [open, setOpen] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    if (showDialog || open) return;
    setShowDialog(true);
  };

  const handleYes = () => {
    setShowDialog(false);
    setOpen(true);
    setTimeout(() => setShowLetter(true), 600);
  };

  const handleNo = () => {
    setShowDialog(false);
  };

  const handleCloseLetter = () => {
    setShowLetter(false);
    setOpen(false);
  };

  return (
    <div className="main-container">
      {showDialog && <Dialog onYes={handleYes} onNo={handleNo} />}
      {showLetter && <LetterDialog onClose={handleCloseLetter} />}

      <div className="envelope-container">
        <div className="envelope-wrapper" onClick={handleClick}>
          <div className={`envelope-shell${open ? " opened" : ""}`}>

            {/* Envelope body with side folds */}
            <div className="e-body" />
            <div className="e-bottom" />
            <div className="e-crease" />

            {/* Wax seal */}
            <div className="e-seal">
              <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1C7 1 4 3 4 5.5C4 7.2 5.3 8 7 8C8.7 8 10 7.2 10 5.5C10 3 7 1 7 1Z" fill="#fff"/>
                <path d="M7 8C7 8 4 9.5 4 11.5C4 12.5 5.3 13 7 13C8.7 13 10 12.5 10 11.5C10 9.5 7 8 7 8Z" fill="#fff" opacity=".7"/>
              </svg>
            </div>

            {/* Flap */}
            <div className="e-flap-inner" />
            <div className="e-flap" />

            {/* Flower decoration layer */}
            <svg
              className="e-flowers"
              viewBox="0 0 300 200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* ── Bottom-left big flower cluster ── */}
              <g transform="translate(14,148)">
                <circle cx="0" cy="-7" r="5" fill="#f8bbd0"/>
                <circle cx="6" cy="-4" r="5" fill="#f8bbd0"/>
                <circle cx="6" cy="3" r="5" fill="#f8bbd0"/>
                <circle cx="0" cy="6" r="5" fill="#f8bbd0"/>
                <circle cx="-6" cy="3" r="5" fill="#f8bbd0"/>
                <circle cx="-6" cy="-4" r="5" fill="#f8bbd0"/>
                <circle cx="0" cy="0" r="3.5" fill="#fff9c4"/>
                {/* purple side flower */}
                <g transform="translate(18,-10)">
                  <circle cx="0" cy="-5" r="3.5" fill="#ce93d8"/>
                  <circle cx="4" cy="-2" r="3.5" fill="#ce93d8"/>
                  <circle cx="4" cy="3" r="3.5" fill="#ce93d8"/>
                  <circle cx="0" cy="5" r="3.5" fill="#ce93d8"/>
                  <circle cx="-4" cy="3" r="3.5" fill="#ce93d8"/>
                  <circle cx="-4" cy="-2" r="3.5" fill="#ce93d8"/>
                  <circle cx="0" cy="0" r="2.5" fill="#fff9c4"/>
                </g>
                <ellipse cx="12" cy="10" rx="5" ry="3" fill="#a5d6a7" transform="rotate(-30 12 10)"/>
                <ellipse cx="-4" cy="14" rx="5" ry="3" fill="#a5d6a7" transform="rotate(20 -4 14)"/>
              </g>

              {/* ── Bottom-right big flower cluster ── */}
              <g transform="translate(282,152)">
                <circle cx="0" cy="-7" r="5" fill="#f8bbd0"/>
                <circle cx="6" cy="-4" r="5" fill="#f8bbd0"/>
                <circle cx="6" cy="3" r="5" fill="#f8bbd0"/>
                <circle cx="0" cy="6" r="5" fill="#f8bbd0"/>
                <circle cx="-6" cy="3" r="5" fill="#f8bbd0"/>
                <circle cx="-6" cy="-4" r="5" fill="#f8bbd0"/>
                <circle cx="0" cy="0" r="3.5" fill="#fff9c4"/>
                {/* red side flower */}
                <g transform="translate(-18,-12)">
                  <circle cx="0" cy="-4" r="3" fill="#ef9a9a"/>
                  <circle cx="3.5" cy="-1" r="3" fill="#ef9a9a"/>
                  <circle cx="3.5" cy="3" r="3" fill="#ef9a9a"/>
                  <circle cx="0" cy="4.5" r="3" fill="#ef9a9a"/>
                  <circle cx="-3.5" cy="3" r="3" fill="#ef9a9a"/>
                  <circle cx="-3.5" cy="-1" r="3" fill="#ef9a9a"/>
                  <circle cx="0" cy="0" r="2" fill="#fff9c4"/>
                </g>
                <ellipse cx="-12" cy="10" rx="5" ry="3" fill="#a5d6a7" transform="rotate(30 -12 10)"/>
                <ellipse cx="4" cy="14" rx="5" ry="3" fill="#a5d6a7" transform="rotate(-20 4 14)"/>
              </g>

              {/* ── Top-left tiny flower ── */}
              <g transform="translate(10,18)">
                <circle cx="0" cy="-4" r="3" fill="#ce93d8"/>
                <circle cx="3.5" cy="-1" r="3" fill="#ce93d8"/>
                <circle cx="3.5" cy="3" r="3" fill="#ce93d8"/>
                <circle cx="0" cy="4.5" r="3" fill="#ce93d8"/>
                <circle cx="-3.5" cy="3" r="3" fill="#ce93d8"/>
                <circle cx="-3.5" cy="-1" r="3" fill="#ce93d8"/>
                <circle cx="0" cy="0" r="2" fill="#fff9c4"/>
                <ellipse cx="10" cy="6" rx="4" ry="2.5" fill="#a5d6a7" transform="rotate(-20 10 6)"/>
              </g>

              {/* ── Top-right tiny flower ── */}
              <g transform="translate(288,18)">
                <circle cx="0" cy="-4" r="3" fill="#f48fb1"/>
                <circle cx="3.5" cy="-1" r="3" fill="#f48fb1"/>
                <circle cx="3.5" cy="3" r="3" fill="#f48fb1"/>
                <circle cx="0" cy="4.5" r="3" fill="#f48fb1"/>
                <circle cx="-3.5" cy="3" r="3" fill="#f48fb1"/>
                <circle cx="-3.5" cy="-1" r="3" fill="#f48fb1"/>
                <circle cx="0" cy="0" r="2" fill="#fff9c4"/>
                <ellipse cx="-10" cy="6" rx="4" ry="2.5" fill="#a5d6a7" transform="rotate(20 -10 6)"/>
              </g>

              {/* scattered petal dots */}
              <circle cx="40"  cy="175" r="2"   fill="#f48fb1" opacity=".5"/>
              <circle cx="55"  cy="165" r="1.5" fill="#ce93d8" opacity=".5"/>
              <circle cx="245" cy="170" r="2"   fill="#f48fb1" opacity=".5"/>
              <circle cx="260" cy="160" r="1.5" fill="#ce93d8" opacity=".5"/>
            </svg>
          </div>

          <p className="hint">{open ? "\u00a0" : "click to open"}</p>
        </div>
      </div>
    </div>
  );
}

export default Envelope;