"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-fraunces font-semibold text-base transition-all duration-300 inline-block text-center";

  const variantStyles = {
    primary: "bg-dark-purple text-white hover:bg-muted-purple",
    secondary: "bg-pale-rose text-dark-purple hover:bg-dusty-lavender",
    outline: "border-2 border-dark-purple text-dark-purple hover:bg-dark-purple hover:text-white",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const MotionButton = motion.a;

  if (href) {
    return (
      <MotionButton
        href={href}
        className={combinedStyles}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </MotionButton>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedStyles}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
}
