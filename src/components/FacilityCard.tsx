import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface FacilityCardProps {
  title: string;
  imageSrc: string;
  delay: number;
  darkMode: boolean;
  className?: string;
}

export function FacilityCard({
  title,
  imageSrc,
  delay,
  darkMode,
  className = "",
}: FacilityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ amount: 0.3 }}
      whileHover={{ y: -10 }}
      className={`rounded-lg overflow-hidden relative group cursor-pointer ${className}`}
      style={{
        boxShadow: darkMode
          ? "0 4px 20px rgba(188, 159, 100, 0.2)"
          : "0 4px 20px rgba(45, 75, 55, 0.15)",
        border: darkMode ? "1px solid rgba(188, 159, 100, 0.15)" : "none",
      }}>
      <div className="h-64 overflow-hidden">
        <ImageWithFallback
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3
          className="text-2xl mb-2"
          style={{
            color: "#BC9F64",
            fontWeight: 600,
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
          }}>
          {title}
        </h3>
        <div
          className="w-16 h-1 rounded-full"
          style={{ backgroundColor: "#BC9F64" }}></div>
      </div>
    </motion.div>
  );
}
