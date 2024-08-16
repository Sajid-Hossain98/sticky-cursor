import { useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export const useMouseCursor = () => {
  const cursorSize = 25;

  const mouse = {
    x: useMotionValue(-25),
    y: useMotionValue(-25),
  };

  const smoothMouseOptions = {
    damping: 18,
    stiffness: 220,
    mass: 0.6,
  };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothMouseOptions),
    y: useSpring(mouse.y, smoothMouseOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return smoothMouse;
};
