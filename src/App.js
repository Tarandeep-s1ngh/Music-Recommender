import React from "react";
import "./styles.css";
import { useState } from "react";

const musicDB = {
  Punjabi: [
    { name: "Clash", singer: "Description: Diljit Dosanjh | 4.2/5" },
    { name: "Waalian", singer: "Description: Harnoor | 4/5" },
    { name: "Sanawar", singer: "Description: Dilpreet Dhillon | 3.7/5" },
    { name: "Facts", singer: "Description: Karan Aujla | 4.6/5" }
  ],

  English: [
    { name: "Older", singer: "Description: Sasha Alex | 4.8/5" },
    { name: "Perfect", singer: "Description: Ed Sheeran | 4.3/5" },
    { name: "Its You", singer: "Description: Ali Gatie | 4/5" }
  ],

  Hindi: [
    { name: "Baarishein", singer: "Description: Anuv Jain | 4.5/5" },
    { name: "Teri Mitti", singer: "Description: B Praak | 5/5" },
    { name: "Teri Khaamiyan", singer: "Description: Akhil | 4.2/5" }
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
