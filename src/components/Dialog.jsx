import { useState } from "react";
import "../styles/Dialog.css";

const DialogFlowers = () => (
  <svg className="dialog-flowers" viewBox="0 0 300 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g transform="translate(14,292)">
      <circle cx="0" cy="-7" r="5" fill="#f8bbd0"/><circle cx="6" cy="-4" r="5" fill="#f8bbd0"/>
      <circle cx="6" cy="3" r="5" fill="#f8bbd0"/><circle cx="0" cy="6" r="5" fill="#f8bbd0"/>
      <circle cx="-6" cy="3" r="5" fill="#f8bbd0"/><circle cx="-6" cy="-4" r="5" fill="#f8bbd0"/>
      <circle cx="0" cy="0" r="3.5" fill="#fff9c4"/>
      <g transform="translate(18,-12)">
        <circle cx="0" cy="-5" r="3.5" fill="#ce93d8"/><circle cx="4" cy="-2" r="3.5" fill="#ce93d8"/>
        <circle cx="4" cy="3" r="3.5" fill="#ce93d8"/><circle cx="0" cy="5" r="3.5" fill="#ce93d8"/>
        <circle cx="-4" cy="3" r="3.5" fill="#ce93d8"/><circle cx="-4" cy="-2" r="3.5" fill="#ce93d8"/>
        <circle cx="0" cy="0" r="2.5" fill="#fff9c4"/>
      </g>
      <ellipse cx="12" cy="10" rx="5" ry="3" fill="#a5d6a7" transform="rotate(-30 12 10)"/>
      <ellipse cx="-4" cy="14" rx="5" ry="3" fill="#a5d6a7" transform="rotate(20 -4 14)"/>
    </g>
    <g transform="translate(286,292)">
      <circle cx="0" cy="-7" r="5" fill="#f8bbd0"/><circle cx="6" cy="-4" r="5" fill="#f8bbd0"/>
      <circle cx="6" cy="3" r="5" fill="#f8bbd0"/><circle cx="0" cy="6" r="5" fill="#f8bbd0"/>
      <circle cx="-6" cy="3" r="5" fill="#f8bbd0"/><circle cx="-6" cy="-4" r="5" fill="#f8bbd0"/>
      <circle cx="0" cy="0" r="3.5" fill="#fff9c4"/>
      <g transform="translate(-18,-12)">
        <circle cx="0" cy="-4" r="3" fill="#ef9a9a"/><circle cx="3.5" cy="-1" r="3" fill="#ef9a9a"/>
        <circle cx="3.5" cy="3" r="3" fill="#ef9a9a"/><circle cx="0" cy="4.5" r="3" fill="#ef9a9a"/>
        <circle cx="-3.5" cy="3" r="3" fill="#ef9a9a"/><circle cx="-3.5" cy="-1" r="3" fill="#ef9a9a"/>
        <circle cx="0" cy="0" r="2" fill="#fff9c4"/>
      </g>
      <ellipse cx="-12" cy="10" rx="5" ry="3" fill="#a5d6a7" transform="rotate(30 -12 10)"/>
      <ellipse cx="4" cy="14" rx="5" ry="3" fill="#a5d6a7" transform="rotate(-20 4 14)"/>
    </g>
    <g transform="translate(10,18)">
      <circle cx="0" cy="-4" r="3" fill="#ce93d8"/><circle cx="3.5" cy="-1" r="3" fill="#ce93d8"/>
      <circle cx="3.5" cy="3" r="3" fill="#ce93d8"/><circle cx="0" cy="4.5" r="3" fill="#ce93d8"/>
      <circle cx="-3.5" cy="3" r="3" fill="#ce93d8"/><circle cx="-3.5" cy="-1" r="3" fill="#ce93d8"/>
      <circle cx="0" cy="0" r="2" fill="#fff9c4"/>
      <ellipse cx="10" cy="6" rx="4" ry="2.5" fill="#a5d6a7" transform="rotate(-20 10 6)"/>
    </g>
    <g transform="translate(290,18)">
      <circle cx="0" cy="-4" r="3" fill="#f48fb1"/><circle cx="3.5" cy="-1" r="3" fill="#f48fb1"/>
      <circle cx="3.5" cy="3" r="3" fill="#f48fb1"/><circle cx="0" cy="4.5" r="3" fill="#f48fb1"/>
      <circle cx="-3.5" cy="3" r="3" fill="#f48fb1"/><circle cx="-3.5" cy="-1" r="3" fill="#f48fb1"/>
      <circle cx="0" cy="0" r="2" fill="#fff9c4"/>
      <ellipse cx="-10" cy="6" rx="4" ry="2.5" fill="#a5d6a7" transform="rotate(20 -10 6)"/>
    </g>
    <circle cx="38"  cy="278" r="2"   fill="#f48fb1" opacity=".5"/>
    <circle cx="52"  cy="268" r="1.5" fill="#ce93d8" opacity=".5"/>
    <circle cx="248" cy="272" r="2"   fill="#f48fb1" opacity=".5"/>
    <circle cx="262" cy="262" r="1.5" fill="#ce93d8" opacity=".5"/>
    <g transform="translate(6,150)">
      <circle cx="0" cy="-3" r="2.5" fill="#f48fb1" opacity=".7"/>
      <circle cx="2.5" cy="0" r="2.5" fill="#f48fb1" opacity=".7"/>
      <circle cx="0" cy="3" r="2.5" fill="#f48fb1" opacity=".7"/>
      <circle cx="-2.5" cy="0" r="2.5" fill="#f48fb1" opacity=".7"/>
      <circle cx="0" cy="0" r="1.8" fill="#fff9c4"/>
    </g>
    <g transform="translate(294,150)">
      <circle cx="0" cy="-3" r="2.5" fill="#ce93d8" opacity=".7"/>
      <circle cx="2.5" cy="0" r="2.5" fill="#ce93d8" opacity=".7"/>
      <circle cx="0" cy="3" r="2.5" fill="#ce93d8" opacity=".7"/>
      <circle cx="-2.5" cy="0" r="2.5" fill="#ce93d8" opacity=".7"/>
      <circle cx="0" cy="0" r="1.8" fill="#fff9c4"/>
    </g>
  </svg>
);

function Dialog({ onYes, onNo }) {
  const [step, setStep] = useState("first");
  const [noCount, setNoCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [ayawCount, setAyawCount] = useState(0);

  const maxNos = 4;
  const noVisible = noCount < maxNos;
  const ayawVisible = ayawCount < 6;
  const noScale = 1 - (noCount / maxNos) * 0.75;

  const handleNo = () => {
    if (noCount + 1 >= maxNos) {
      setNoCount(maxNos);
    } else {
      setNoCount((prev) => prev + 1);
    }
  };

  const handleAyawClick = () => {
    const next = ayawCount + 1;
    if (next >= 6) {
      setAyawCount(6);
    } else {
      setAyawCount(next);
      const randX = (Math.random() - 0.5) * 300;
      const randY = (Math.random() - 0.5) * 200;
      setNoPosition({ x: randX, y: randY });
    }
  };

  if (step === "first") {
    return (
      <div className="dialog-overlay" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-box">
          <DialogFlowers />
          <div className="dialog-inner">
            <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnRpM3I4emQxNnh1ZTVhNTRsanl3YTg0MmhpNWhtMHg1NHk0YTViOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GqEagMsckM3vRsnrnP/giphy.gif" alt="dialog gif" className="dialog-gif" />
            <p>Are you sure na gusto mo buksan?</p>
            <div className="dialog-buttons">
              <button onClick={() => setStep("second")}>Yes</button>
              {noVisible && (
                <button
                  onClick={handleNo}
                  className="no-btn"
                  style={{
                    transform: `scale(${noScale})`,
                    transition: "transform 0.3s ease",
                    transformOrigin: "center",
                  }}
                >
                  No
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === "second") {
    return (
      <div className="dialog-overlay" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-box">
          <DialogFlowers />
          <div className="dialog-inner">
            <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExamRjMThmeXNjeWtpdWc1dDUzbTVzOG1mcnV3N2F1ZXltMzA2d29hdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kZqbBT64ECtjy/giphy.gif" alt="dialog gif" className="dialog-gif" />
            <p>Talaga? Sigurado ka na?</p>
            <div className="dialog-buttons">
              <button onClick={() => setStep("third")}>Yes, buksan na!</button>
              {ayawVisible && (
                <div
                  className="no-btn-wrapper"
                  style={{
                    transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
                    transition: "transform 0.3s ease",
                    display: "inline-block",
                  }}
                >
                  <button onClick={handleAyawClick}>Ayaw ko na</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === "third") {
    return (
      <div className="dialog-overlay" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-box">
          <DialogFlowers />
          <div className="dialog-inner">
            <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnRpM3I4emQxNnh1ZTVhNTRsanl3YTg0MmhpNWhtMHg1NHk0YTViOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GqEagMsckM3vRsnrnP/giphy.gif" alt="dialog gif" className="dialog-gif" />
            <p>Birthday mo ba talaga?</p>
            <div className="dialog-buttons">
              <button onClick={() => setStep("fourth")}>Oo</button>
              <button onClick={() => setStep("weeme")}>Hindi</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === "fourth") {
    return (
      <div className="dialog-overlay" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-box">
          <DialogFlowers />
          <div className="dialog-inner">
            <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDBya3puZGdiZGV1M3Z6NmZuZmFwcWN4bHFvbWRveW16OWNnaTFyOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3GxmFQ3tGXUi4MChXu/giphy.gif" alt="dialog gif" className="dialog-gif" />
            <p>Hindi ba may 16 bday mo?</p>
            <div className="dialog-buttons">
              <button onClick={() => setStep("boboEx")}>Oo</button>
              <button onClick={() => setStep("fifth")}>Hindi talaga</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === "fifth") {
    return (
      <div className="dialog-overlay" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-box">
          <DialogFlowers />
          <div className="dialog-inner">
            <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmtkN2oyc3JhM2NkOXRxcXNjOHBseGM0OHRrMzc2YXpybGQ1Ym4wbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/10YpWPBU7GAYwM/giphy.gif" alt="dialog gif" className="dialog-gif" />
            <p>Ito na talaga, bubuksan mo or bubuksan mo?😂</p>
            <div className="dialog-buttons">
              <button onClick={onYes}>Open</button>
              <button onClick={onYes}>Open na open</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === "weeme") {
    return (
      <div className="dialog-overlay" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-box">
          <DialogFlowers />
          <div className="dialog-inner">
            <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnd1YnFvMGN6ZGZvNDhnbWg5NmpzaXFxamdsZjV4ZWUxemkydXMzdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aHeU3XuJD5aC1fBvTa/giphy.gif" alt="dialog gif" className="dialog-gif" />
            <p>Weee eme mo 😭</p>
            <div className="dialog-buttons">
              <button onClick={() => setStep("third")}>Back</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === "boboEx") {
    return (
      <div className="dialog-overlay" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-box">
          <DialogFlowers />
          <div className="dialog-inner">
            <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcW11d2luYzgxOG9sMnByZW16cjF6eW93NDV5Y3gxczFrYmdtbXd1ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CWeaJzFCcHrDF1Iaju/giphy.gif" alt="dialog gif" className="dialog-gif" />
            <p>Bobo ng ex mo 💀</p>
            <div className="dialog-buttons">
              <button onClick={() => setStep("fourth")}>Back</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default Dialog;