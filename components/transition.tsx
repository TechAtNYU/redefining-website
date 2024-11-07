"use client";

import { motion } from "framer-motion";

const variants = {
  initial: { x: "100vw", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full dark:bg-black-200 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       "
    >
      {children}
    </motion.div>
  );
}
