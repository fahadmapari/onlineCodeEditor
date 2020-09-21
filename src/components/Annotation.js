import React from "react";

export default function Annotation() {
  return (
    <div className="annotation-container">
      <p>
        Made With Love{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>{" "}
        By
        <a href="https://www.instagram.com/fahadmapari" target="_blank">
          Fahad Mapari
        </a>
      </p>
    </div>
  );
}
