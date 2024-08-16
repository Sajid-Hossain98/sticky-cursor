"use client";

import { useMouseCursor } from "@/app/hooks/useMouseCursor";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Index() {
  const smoothMouse = useMouseCursor();

  return (
    <motion.div
      className="fixed w-[25px] h-[25px] bg-black rounded-full pointer-events-none"
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
    ></motion.div>
  );
}
