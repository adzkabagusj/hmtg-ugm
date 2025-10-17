"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div
      className={`bg-white rounded-lg shadow-md p-6 ${className}`}
      whileHover={{
        y: -4,
        boxShadow: "0 10px 25px -5px rgba(34, 34, 59, 0.2)",
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
