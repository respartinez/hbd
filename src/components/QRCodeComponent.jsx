import { QRCodeSVG } from "qrcode.react";
import "../styles/QRCodeComponent.css";

function QRCodeComponent() {
  return (
    <div className="main-container">
      <div className="qr-card">

        {/* Watermark flowers — decorative, faded */}
        <svg className="qr-watermark" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <g transform="translate(100,100)">
            {[0,60,120,180,240,300].map((deg, i) => (
              <ellipse
                key={i}
                cx={Math.cos((deg * Math.PI) / 180) * 30}
                cy={Math.sin((deg * Math.PI) / 180) * 30}
                rx="22" ry="12"
                fill="#e9d5ff"
                transform={`rotate(${deg} ${Math.cos((deg * Math.PI) / 180) * 30} ${Math.sin((deg * Math.PI) / 180) * 30})`}
              />
            ))}
            <circle cx="0" cy="0" r="14" fill="#f3e8ff"/>
          </g>
          <g transform="translate(24,28) scale(0.55)">
            {[0,60,120,180,240,300].map((deg, i) => (
              <ellipse
                key={i}
                cx={Math.cos((deg * Math.PI) / 180) * 28}
                cy={Math.sin((deg * Math.PI) / 180) * 28}
                rx="20" ry="11"
                fill="#fce7f3"
                transform={`rotate(${deg} ${Math.cos((deg * Math.PI) / 180) * 28} ${Math.sin((deg * Math.PI) / 180) * 28})`}
              />
            ))}
            <circle cx="0" cy="0" r="12" fill="#fdf4ff"/>
          </g>
          <g transform="translate(176,170) scale(0.45)">
            {[0,60,120,180,240,300].map((deg, i) => (
              <ellipse
                key={i}
                cx={Math.cos((deg * Math.PI) / 180) * 28}
                cy={Math.sin((deg * Math.PI) / 180) * 28}
                rx="20" ry="11"
                fill="#e9d5ff"
                transform={`rotate(${deg} ${Math.cos((deg * Math.PI) / 180) * 28} ${Math.sin((deg * Math.PI) / 180) * 28})`}
              />
            ))}
            <circle cx="0" cy="0" r="12" fill="#f5f3ff"/>
          </g>
        </svg>

        <p className="qr-label">a little something for you</p>

        <div className="qr-frame">
          <div className="qr-corner tl"/><div className="qr-corner tr"/>
          <QRCodeSVG
            value="https://respartinez.github.io/hbd/#/pin"
            size={160}
            fgColor="#3b0764"
            bgColor="transparent"
          />
          <div className="qr-corner bl"/><div className="qr-corner br"/>
        </div>

        <p className="qr-name">Happy Birthday, Lods! Enjoy your day!</p>
        <p className="qr-hint">scan to open ✦</p>
      </div>
    </div>
  );
}

export default QRCodeComponent;