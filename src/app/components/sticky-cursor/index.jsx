"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Index() {
  const cursorSize = 25;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouseOptions = {
    damping: 20,
    stiffness: 350,
    mass: 0.5,
  };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothMouseOptions),
    y: useSpring(mouse.y, smoothMouseOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  });

  return (
    <motion.div
      className="fixed w-[25px] h-[25px] bg-black rounded-full pointer-events-none"
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
    ></motion.div>
  );
}
