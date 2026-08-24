import type { Variants } from "framer-motion";

/** Shared cinematic easing curve used across the whole product. */
export const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.9, ease: EASE },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: (i: number = 0) => ({
    opacity: 1,
    transition: { delay: 0.12 * i, duration: 0.9, ease: EASE },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.1 * i, duration: 0.9, ease: EASE },
  }),
};
