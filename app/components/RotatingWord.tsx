"use client";

import { useEffect, useState } from "react";
import { ACCENT } from "../accent";

const WORDS = ["рутината", "фактурите", "отчетите", "запитванията", "договорите"];
const INTERVAL_MS = 2800;

export default function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <span
      key={index}
      style={{
        display: "inline-block",
        fontStyle: "italic",
        color: ACCENT,
        animation: `nb-word ${INTERVAL_MS / 1000}s ease-in-out both`,
      }}
    >
      {WORDS[index]}
    </span>
  );
}
