import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const APP_URL = import.meta.env.VITE_APP_URL;
interface FacilityCardProps {
  title: string;
  imageSrc: string;
  delay: number;
  darkMode: boolean;
  className?: string;
  url: string;
}

export function FacilityCard({
  title,
  imageSrc,
  delay,
  darkMode,
  url,
  className = "",
}: FacilityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ amount: 0.3 }}
      whileHover={{ y: -10 }}
      className={`rounded-2xl overflow-hidden relative group cursor-pointer bg-white ${className}`}
      style={{
        boxShadow: darkMode
          ? "0 4px 20px rgba(188, 159, 100, 0.2)"
          : "0 4px 20px rgba(45, 75, 55, 0.15)",
        border: darkMode ? "1px solid rgba(188, 159, 100, 0.15)" : "none",
      }}>
      {/* Text at the top */}
      <div className="p-6">
        <h3
          className="text-2xl mb-2"
          style={{
            color: "#000",
            fontWeight: 600,
          }}>
          {title}
        </h3>
        <div
          className="w-fit-content h-1 rounded-full"
          style={{ backgroundColor: "#BC9F64" }}></div>
      </div>

      {/* Image at the bottom */}
      <div className="h-64 overflow-hidden mx-6 mb-3 rounded-3xl mt-auto">
        <a href={`${APP_URL}/${url}`} target="_blank">
          <ImageWithFallback
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </a>
      </div>
    </motion.div>
  );
}
