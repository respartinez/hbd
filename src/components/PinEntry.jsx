import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CORRECT_PIN = "0512"; // palitan ng gusto mong PIN

function PinEntry() {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [shake, setShake] = useState(false);
  const [error, setError] = useState(false);
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
    setError(false);

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }

    if (newPin.every((d) => d !== "") && value) {
      const entered = newPin.join("");
      if (entered === CORRECT_PIN) {
        setTimeout(() => navigate("/envelope"), 300);
      } else {
        setShake(true);
        setError(true);
        setTimeout(() => {
          setShake(false);
          setPin(["", "", "", ""]);
          inputsRef.current[0]?.focus();
        }, 600);
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#fff1f2",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Flower SVG decorations */}
      <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        viewBox="0 0 300 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        {/* bottom-left */}
        <g transform="translate(18,560)">
          <circle cx="0" cy="-7" r="5" fill="#f8bbd0"/>
          <circle cx="6" cy="-4" r="5" fill="#f8bbd0"/>
          <circle cx="6" cy="3" r="5" fill="#f8bbd0"/>
          <circle cx="0" cy="6" r="5" fill="#f8bbd0"/>
          <circle cx="-6" cy="3" r="5" fill="#f8bbd0"/>
          <circle cx="-6" cy="-4" r="5" fill="#f8bbd0"/>
          <circle cx="0" cy="0" r="3.5" fill="#fff9c4"/>
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
        {/* bottom-right */}
        <g transform="translate(282,560)">
          <circle cx="0" cy="-7" r="5" fill="#f8bbd0"/>
          <circle cx="6" cy="-4" r="5" fill="#f8bbd0"/>
          <circle cx="6" cy="3" r="5" fill="#f8bbd0"/>
          <circle cx="0" cy="6" r="5" fill="#f8bbd0"/>
          <circle cx="-6" cy="3" r="5" fill="#f8bbd0"/>
          <circle cx="-6" cy="-4" r="5" fill="#f8bbd0"/>
          <circle cx="0" cy="0" r="3.5" fill="#fff9c4"/>
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
        {/* top-left */}
        <g transform="translate(14,28)">
          <circle cx="0" cy="-4" r="3" fill="#ce93d8"/>
          <circle cx="3.5" cy="-1" r="3" fill="#ce93d8"/>
          <circle cx="3.5" cy="3" r="3" fill="#ce93d8"/>
          <circle cx="0" cy="4.5" r="3" fill="#ce93d8"/>
          <circle cx="-3.5" cy="3" r="3" fill="#ce93d8"/>
          <circle cx="-3.5" cy="-1" r="3" fill="#ce93d8"/>
          <circle cx="0" cy="0" r="2" fill="#fff9c4"/>
          <ellipse cx="11" cy="6" rx="4" ry="2.5" fill="#a5d6a7" transform="rotate(-20 11 6)"/>
        </g>
        {/* top-right */}
        <g transform="translate(286,28)">
          <circle cx="0" cy="-4" r="3" fill="#f48fb1"/>
          <circle cx="3.5" cy="-1" r="3" fill="#f48fb1"/>
          <circle cx="3.5" cy="3" r="3" fill="#f48fb1"/>
          <circle cx="0" cy="4.5" r="3" fill="#f48fb1"/>
          <circle cx="-3.5" cy="3" r="3" fill="#f48fb1"/>
          <circle cx="-3.5" cy="-1" r="3" fill="#f48fb1"/>
          <circle cx="0" cy="0" r="2" fill="#fff9c4"/>
          <ellipse cx="-11" cy="6" rx="4" ry="2.5" fill="#a5d6a7" transform="rotate(20 -11 6)"/>
        </g>
        {/* scattered petals */}
        <circle cx="40" cy="540" r="2" fill="#f48fb1" opacity=".5"/>
        <circle cx="55" cy="528" r="1.5" fill="#ce93d8" opacity=".5"/>
        <circle cx="245" cy="535" r="2" fill="#f48fb1" opacity=".5"/>
        <circle cx="260" cy="545" r="1.5" fill="#ce93d8" opacity=".5"/>
        <circle cx="20" cy="300" r="1.5" fill="#f8bbd0" opacity=".4"/>
        <circle cx="280" cy="280" r="1.5" fill="#ce93d8" opacity=".4"/>
      </svg>

      {/* PIN Card */}
      <div style={{
        background: "#fff",
        borderRadius: "24px",
        padding: "2rem 2rem 1.8rem",
        width: "280px",
        textAlign: "center",
        border: "1px solid #fce4ec",
        position: "relative",
        zIndex: 2,
      }}>

        {/* wax seal icon matching envelope */}
        <svg width="44" height="44" viewBox="0 0 44 44" style={{ margin: "0 auto 0.5rem" }}>
          <circle cx="22" cy="22" r="22" fill="#ce93d8"/>
          <path d="M22 10C22 10 15 15 15 20C15 24 18 26 22 26C26 26 29 24 29 20C29 15 22 10 22 10Z" fill="#fff"/>
          <path d="M22 26C22 26 15 29.5 15 33.5C15 35.5 18 37 22 37C26 37 29 35.5 29 33.5C29 29.5 22 26 22 26Z" fill="#fff" opacity=".7"/>
        </svg>

        <p style={{ fontSize: "13px", color: "#ce93d8", margin: "0 0 0.2rem", letterSpacing: "0.05em" }}>
          you have a message
        </p>
        <h2 style={{ fontSize: "20px", fontWeight: 500, color: "#6b21a8", margin: "0 0 0.3rem" }}>
          Enter PIN
        </h2>
        <p style={{ fontSize: "12px", color: "#c084fc", margin: "0 0 1.5rem" }}>
          type the 4-digit code to open your surprise
        </p>

        <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "1rem" }}
          className={shake ? "shake" : ""}>
          {pin.map((digit, i) => (
            <input
              key={i}
              ref={(el) => (inputsRef.current[i] = el)}
              type="password"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              style={{
                width: "52px",
                height: "58px",
                fontSize: "1.6rem",
                textAlign: "center",
                border: `2px solid ${error ? "#f9a8d4" : digit ? "#a855f7" : "#e9d5ff"}`,
                borderRadius: "14px",
                outline: "none",
                color: "#6b21a8",
                background: error ? "#fff1f2" : digit ? "#f3e8ff" : "#fdf4ff",
                transition: "border-color 0.2s, background 0.2s",
              }}
            />
          ))}
        </div>

        {error && (
          <p style={{ color: "#f43f5e", fontSize: "12px", margin: 0 }}>
            wrong PIN, try again!
          </p>
        )}
        {!error && (
          <p style={{ color: "#e9d5ff", fontSize: "12px", margin: 0 }}>
            ✿ ✿ ✿ ✿
          </p>
        )}
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-8px); }
          40%, 80% { transform: translateX(8px); }
        }
        .shake { animation: shake 0.5s ease; }
        input[type="password"]::-webkit-outer-spin-button,
        input[type="password"]::-webkit-inner-spin-button { -webkit-appearance: none; }
      `}</style>
    </div>
  );
}

export default PinEntry;