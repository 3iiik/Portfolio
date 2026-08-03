"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  as?: "div" | "section" | "span" | "li" | "p" | "h2" | "h3" | "article";
}

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
  as = "div",
}: RevealProps) {
  const Comp = (motion as unknown as Record<string, typeof motion.div>)[as] ?? motion.div;
  const motionProps: HTMLMotionProps<"div"> = {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    className,
  };
  return <Comp {...(motionProps as unknown as Record<string, unknown>)}>{children}</Comp>;
}