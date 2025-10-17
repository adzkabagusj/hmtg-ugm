"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface SocialLinkProps {
  href: string;
  icon: IconType;
  label: string;
}

export default function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-off-white hover:text-pale-rose transition-colors"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      aria-label={label}
    >
      <Icon className="text-2xl" />
    </motion.a>
  );
}
