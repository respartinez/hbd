import { useState } from "react";
import "../styles/LetterDialog.css";
import PhotosDialog from "./PhotosDialog";

function LetterDialog({ onClose }) {
  const [showPhotos, setShowPhotos] = useState(false);

  return (
    <>
      <div className="letter-overlay" onClick={onClose}>
        <div className="letter-paper" onClick={(e) => e.stopPropagation()}>
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="spiral-hole" style={{ top: `${30 + i * 100}px` }} />
          ))}
          <svg className="paper-lines" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="lines" x="0" y="20" width="100%" height="32" patternUnits="userSpaceOnUse">
                <line x1="0" y1="31" x2="100%" y2="31" stroke="#f0b8d4" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lines)" />
          </svg>
          <div className="paper-content">
            <p className="paper-title">To twitty lynlyn 🎂</p>
            <div className="paper-body">
              <p>Happy birthday, lods! I know it's been tough for you these past few months, but I hope you're doing good and getting better. Always remember that you'll always have me to lean on, and I promise that even if we're just friends, I will always be here for you no matter what happens.</p>
              <p>Enjoy your day—you deserve to be happy. You deserve all the beautiful things in life, and I hope you get the life that you want.</p>
              <p>HAPPY BIRTHDAY, BESS! 🎉</p>
            </div>
            <p className="paper-sig">— from pakwan 💕</p>

            <div className="click-me-wrapper">
              <button className="click-me-btn" onClick={() => setShowPhotos(true)}>
                ✨ Click me! ✨
              </button>
            </div>
          </div>
          <div className="paper-sticker">🎀</div>
          <button className="paper-close" onClick={onClose}>✕</button>
        </div>
      </div>

      {showPhotos && <PhotosDialog onClose={() => setShowPhotos(false)} />}
    </>
  );
}

export default LetterDialog;