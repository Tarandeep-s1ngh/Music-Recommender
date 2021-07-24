import React from "react";
import "./styles.css";
import { useState } from "react";

const musicDB = {
  Punjabi: [
    { name: "Clash", singer: "by: Diljit Dosanjh" },
    { name: "Waalian", singer: "by: Harnoor" }
  ],

  English: [
    { name: "Older", singer: "by: Sasha Alex" },
    { name: "Its You", singer: "by: Ali Gatie" }
  ],

  Hindi: [
    { name: "Baarishein", singer: "by: Anuv Jain" },
    { name: "Teri Khaamiyan", singer: "by: Akhil" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("English");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1 style={{ paddingLeft: "9rem" }}>
        <span role="img" aria-label="musical-emoji">
          🎼
        </span>{" "}
        G-Minor
      </h1>
      <h2 style={{ paddingLeft: "2.7rem" }}>
        Music that you will listen on loop{" "}
        <span role="img" aria-label="loop-emoji">
          🔁
        </span>
      </h2>
      <div style={{ marginBottom: "2rem", paddingLeft: "1.6rem" }}>
        Select a category to check out my favourite music from that class
      </div>

      <div style={{ paddingLeft: "3.8rem" }}>
        {Object.keys(musicDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            className="genre-btn"
          >
            {genre}
          </button>
        ))}
      </div>

      <hr align="left" width="50%" />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDB[selectedGenre].map((music) => (
            <li
              key={music.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "45%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}>{music.name}</div>
              <div style={{ fontSize: "smaller" }}>{music.singer}</div>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <p style={{ paddingTop: "4.5rem" }}>Made with ❤ by Taran</p>
      </footer>
    </div>
  );
}
