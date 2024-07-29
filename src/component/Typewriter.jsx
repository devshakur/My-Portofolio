import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const keywords = [
    "Frontend Developer...",
    "Web Developer...",
    "UI/UX Developer...",
  ];
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const type = () => {
      if (isTyping) {
        if (displayedText === keywords[index]) {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setDisplayedText("");
            setIndex((index + 1) % keywords.length);
          }, 2000); // Delay before starting next typing
        } else {
          let word = keywords[index];
          let letterIndex = displayedText.length;
          let nextLetterDelay = letterIndex < word.length ? 200 : 300;
          setTimeout(() => {
            setDisplayedText((prev) => word.slice(0, letterIndex + 1));
          }, nextLetterDelay); // Delay before typing next letter or clearing the word
        }
      } else {
        setTimeout(() => {
          setIsTyping(true);
          setDisplayedText("");
        }, 2000); // Delay before clearing and starting next typing
      }
    };

    type();
  }, [index, displayedText, isTyping]);

  return (
    <div>
      <Typography
        sx={{
          "@media (min-width: 768px)": {
            fontSize: "4vh",
          },
        }}
        variant="h5"
        className="text-3xl text-white"
      >
        I am a{" "}
        <span className="text-blue-400 md:text-[yellow] font-bold">
          {displayedText}
        </span>
      </Typography>
    </div>
  );
};

export default Typewriter;
