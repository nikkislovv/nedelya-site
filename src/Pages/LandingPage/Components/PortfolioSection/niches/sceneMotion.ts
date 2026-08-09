/** Shared Framer variants for the hover "scene" — staggered vignette reveal. */
export const SCENE_CONTAINER = {
  rest: {},
  hover: { transition: { staggerChildren: 0.07, delayChildren: 0.03 } },
};

export const SCENE_ITEM = {
  rest: { opacity: 0, y: 26, scale: 0.9 },
  hover: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 320, damping: 18 },
  },
};
