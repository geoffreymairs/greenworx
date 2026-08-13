"use client";

import { useRef, useState } from "react";

/**
 * Client-side companion to the server-side anti-spam gate.
 *
 * Provides the two signals the server checks in addition to its own layers:
 *  - `honeypot`  — value of a hidden field real users never fill in.
 *  - elapsed time — how long the form was on screen before submission.
 *
 * These are hints only; the authoritative checks all run server-side.
 */
export function useAntiSpam() {
  const startedAt = useRef(Date.now());
  const [honeypot, setHoneypot] = useState("");

  const getElapsedMs = () => Date.now() - startedAt.current;

  return { honeypot, setHoneypot, getElapsedMs };
}
