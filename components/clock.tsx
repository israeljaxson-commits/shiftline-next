"use client";

import { useEffect, useState } from "react";

function formatClock(date: Date) {
  return date.toLocaleTimeString("en-GB", { hour12: false });
}

export function Clock() {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const tick = () => setTime(formatClock(new Date()));
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return <span className="tabular-nums">{time}</span>;
}
