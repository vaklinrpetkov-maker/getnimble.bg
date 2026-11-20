"use client";

import { useEffect, useState } from "react";
import { ACCENT } from "../accent";

// Illustrative automation events shown in the hero's live log.
const EVENTS: [string, string][] = [
  ["Фактура от доставчик разчетена", "за одобрение"],
  ["Ново запитване от сайта", "контакт в CRM"],
  ["Телефонен разговор обобщен", "2 задачи"],
  ["Договор генериран по шаблон", "за подпис"],
  ["Напомняне за плащане", "изпратено"],
  ["Наличност под минимум в склада", "поръчка"],
  ["Седмичен отчет обновен", "готов"],
  ["AI асистент отговори на клиент", "решено"],
];
const INTERVAL_MS = 2800;
const VISIBLE_ROWS = 4;

function timeFor(n: number) {
  const mins = 9 * 60 + 12 + n * 3;
  const hh = String(Math.floor(mins / 60) % 24).padStart(2, "0");
  const mm = String(((mins % 60) + 60) % 60).padStart(2, "0");
  return `${hh}:${mm}`;
}

export default function LiveLog() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTick((t) => t + 1), INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const rows = Array.from({ length: VISIBLE_ROWS }, (_, i) => {
    const n = tick - i;
    const ev = EVENTS[((n % EVENTS.length) + EVENTS.length) % EVENTS.length];
    return { n, i, time: timeFor(n), text: ev[0], tag: `→ ${ev[1]}` };
  });

  return (
    <>
      {rows.map((row) => (
        <div
          key={row.n}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px 20px",
            padding: "13px 18px",
            borderBottom: "1px solid #E2DCCF",
            fontWeight: row.i === 0 ? 500 : 400,
            opacity: row.i === 0 ? 1 : 1 - row.i * 0.12,
            animation: row.i === 0 ? "nb-row 0.5s ease-out" : undefined,
          }}
        >
          <span style={{ color: "#55504A", flex: "0 0 52px" }}>{row.time}</span>
          <span style={{ flex: "1 1 280px", minWidth: 0 }}>{row.text}</span>
          <span style={{ color: row.i === 0 ? ACCENT : "#55504A", flex: "0 0 auto" }}>{row.tag}</span>
        </div>
      ))}
    </>
  );
}
