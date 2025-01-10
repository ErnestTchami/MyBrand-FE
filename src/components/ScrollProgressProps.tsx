"use client";

import { cn } from "@/lib/utils/clsx";
import { motion, useScroll, useSpring } from "motion/react";

interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] h-[1px] origin-left bg-gradient-to-r from-white via-white to-green-500",
        className
      )}
      style={{
        scaleX,
      }}
    />
  );
}
