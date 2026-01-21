"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const CURSOR_SIZE = 30;

export const BlurryCursor = () => {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const lerp = (start: number, end: number, amount: number) =>
      start + (end - start) * amount;

    const moveCircle = (x: number, y: number) => {
      if (!circleRef.current) return;

      gsap.set(circleRef.current, {
        x,
        y,
        xPercent: -50,
        yPercent: -50,
      });
    };

    const animate = () => {
      const { x, y } = delayedMouse.current;

      delayedMouse.current = {
        x: lerp(x, mouse.current.x, 0.075),
        y: lerp(y, mouse.current.y, 0.075),
      };

      moveCircle(delayedMouse.current.x, delayedMouse.current.y);
      rafId.current = window.requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      mouse.current = {
        x: clientX,
        y: clientY,
      };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div
      ref={circleRef}
      aria-hidden="true"
      style={{
        backgroundColor: "#ffffff",
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        position: "fixed",
        top: 0,
        left: 0,
        borderRadius: "999px",
        filter: "none",
        opacity: 1,
        pointerEvents: "none",
        zIndex: 2,
        mixBlendMode: "difference",
      }}
    />
  );
};
