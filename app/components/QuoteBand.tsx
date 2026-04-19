"use client";
import { useState, useEffect } from "react";

const quotes = [
  "Ho cantato la povertà, il dolore, l'amore. Ho cantato Napoli tutta intera.",
  "Non ho mai smesso di essere il ragazzo di San Pietro a Patierno.",
  "La musica è la mia vita. L'unica cosa che ho sempre saputo fare davvero.",
  "Napoli è una sirena: ti attrae, ti incanta e non ti lascia più andare.",
  "Ho venduto milioni di dischi, ma il palcoscenico di strada è stato la mia prima università.",
];

export default function QuoteBand() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setIdx((i) => (i + 1) % quotes.length); setVisible(true); }, 400);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ background:"var(--gold)",padding:"18px 48px",textAlign:"center" }}>
      <p style={{
        fontFamily:"var(--ff-display)",fontStyle:"italic",fontWeight:600,
        fontSize:"clamp(13px,1.8vw,18px)",color:"var(--ink)",
        opacity: visible ? 1 : 0,transition:"opacity 0.4s",
      }}>
        ❝ {quotes[idx]} ❞
      </p>
    </div>
  );
}