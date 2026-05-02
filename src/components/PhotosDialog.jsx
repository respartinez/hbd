import "../styles/PhotosDialog.css";

import p1 from "../assets/photos/p1.png";
import p2 from "../assets/photos/p2.png";
import p3 from "../assets/photos/p3.png";
import p4 from "../assets/photos/p4.png";
import p5 from "../assets/photos/p5.png";
import p6 from "../assets/photos/p6.png";

const photos = [
  { src: p1 },
  { src: p2 },
  { src: p3 },
  { src: p4 },
  { src: p5 },
  { src: p6 },
];

const tapes = [
  { color: "rgba(255, 182, 213, 0.62)", rot: "-3deg" },
  { color: "rgba(200, 225, 245, 0.55)", rot:  "4deg" },
  { color: "rgba(255, 215, 170, 0.58)", rot: "-5deg" },
  { color: "rgba(210, 240, 210, 0.52)", rot:  "2deg" },
  { color: "rgba(230, 200, 255, 0.56)", rot: "-4deg" },
  { color: "rgba(255, 220, 180, 0.58)", rot:  "3deg" },
];

const rots = ["-2deg", "1.5deg", "-1.5deg", "2deg", "-2deg", "1deg"];

function PhotosDialog({ onClose }) {
  return (
    <div className="photos-overlay" onClick={onClose}>
      <div className="photos-modal" onClick={(e) => e.stopPropagation()}>
        <span className="doodle doodle-heart"  aria-hidden="true">♥</span>
        <span className="doodle doodle-star"   aria-hidden="true">✦</span>
        <span className="doodle doodle-flower" aria-hidden="true">✿</span>

        <div className="photos-inner">
          <div className="photos-header">
            <button className="photos-close" onClick={onClose} aria-label="Close">✕</button>
            <p className="photos-title">Happy Birthday Bess!! 💕</p>
          </div>

          <div className="photos-scroll">
            <div className="photos-grid">
              {photos.map((photo, i) => (
                <div
                  key={i}
                  className="polaroid"
                  style={{
                    "--rot": rots[i],
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <div
                    className="tape"
                    style={{
                      backgroundColor: tapes[i].color,
                      "--tape-rot": tapes[i].rot,
                    }}
                  />
                  <img src={photo.src} alt={`memory ${i + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotosDialog;