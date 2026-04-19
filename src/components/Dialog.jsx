import { useState } from "react";
import "../styles/Dialog.css";

function Dialog({ onYes, onNo }) {
  const [step, setStep] = useState("first"); // first, second, third, fourth, fifth, sixth, weeme, boboEx
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

  // STEP: first — "Are you sure na gusto mo buksan?"
  if (step === "first") {
    return (
      <div className="dialog-overlay">
        <div className="dialog-box">
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnRpM3I4emQxNnh1ZTVhNTRsanl3YTg0MmhpNWhtMHg1NHk0YTViOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GqEagMsckM3vRsnrnP/giphy.gif"
            alt="dialog gif"
            className="dialog-gif"
          />
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
    );
  }

  // STEP: second — "Talaga? Sigurado ka na?"
  if (step === "second") {
    return (
      <div className="dialog-overlay">
        <div className="dialog-box">
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExamRjMThmeXNjeWtpdWc1dDUzbTVzOG1mcnV3N2F1ZXltMzA2d29hdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kZqbBT64ECtjy/giphy.gif"
            alt="dialog gif"
            className="dialog-gif"
          />
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
    );
  }

  // STEP: third — "Birthday mo ba talaga?"
  if (step === "third") {
    return (
      <div className="dialog-overlay">
        <div className="dialog-box">
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnRpM3I4emQxNnh1ZTVhNTRsanl3YTg0MmhpNWhtMHg1NHk0YTViOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GqEagMsckM3vRsnrnP/giphy.gif"
            alt="dialog gif"
            className="dialog-gif"
          />
          <p>Birthday mo ba talaga?</p>
          <div className="dialog-buttons">
            <button onClick={() => setStep("fourth")}>Yes</button>
            <button onClick={() => setStep("weeme")}>No</button>
          </div>
        </div>
      </div>
    );
  }

  // STEP: fourth — "Di ba may 16 bday mo?"
  if (step === "fourth") {
    return (
      <div className="dialog-overlay">
        <div className="dialog-box">
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDBya3puZGdiZGV1M3Z6NmZuZmFwcWN4bHFvbWRveW16OWNnaTFyOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3GxmFQ3tGXUi4MChXu/giphy.gif"
            alt="dialog gif"
            className="dialog-gif"
          />
          <p>Di ba may 16 bday mo?</p>
          <div className="dialog-buttons">
            <button onClick={() => setStep("boboEx")}>Yes</button>
            <button onClick={() => setStep("fifth")}>No</button>
          </div>
        </div>
      </div>
    );
  }

  // STEP: fifth — "Ito na talaga, bubuksan mo or bubuksan mo na?"
  if (step === "fifth") {
    return (
      <div className="dialog-overlay">
        <div className="dialog-box">
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmtkN2oyc3JhM2NkOXRxcXNjOHBseGM0OHRrMzc2YXpybGQ1Ym4wbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/10YpWPBU7GAYwM/giphy.gif"
            alt="dialog gif"
            className="dialog-gif"
          />
          <p>Ito na talaga, bubuksan mo or bubuksan mo?😂</p>
          <div className="dialog-buttons">
            <button onClick={onYes}>Open</button>
            <button onClick={onYes}> Open na open</button>
          </div>
        </div>
      </div>
    );
  }

  // STEP: weeme — "Weee eme mo" with back button
  if (step === "weeme") {
    return (
      <div className="dialog-overlay">
        <div className="dialog-box">
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnd1YnFvMGN6ZGZvNDhnbWg5NmpzaXFxamdsZjV4ZWUxemkydXMzdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aHeU3XuJD5aC1fBvTa/giphy.gif"
            alt="dialog gif"
            className="dialog-gif"
          />
          <p>Weee eme mo 😭</p>
          <div className="dialog-buttons">
            <button onClick={() => setStep("third")}>Back</button>
          </div>
        </div>
      </div>
    );
  }

  // STEP: boboEx — "Bobo ng ex mo" with back button
   if (step === "boboEx") {
    return (
      <div className="dialog-overlay">
        <div className="dialog-box">
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcW11d2luYzgxOG9sMnByZW16cjF6eW93NDV5Y3gxczFrYmdtbXd1ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CWeaJzFCcHrDF1Iaju/giphy.gif"
            alt="dialog gif"
            className="dialog-gif"
          />
          <p>Bobo ng ex mo 💀</p>
          <div className="dialog-buttons">
            <button onClick={() => setStep("fourth")}>Back</button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default Dialog;