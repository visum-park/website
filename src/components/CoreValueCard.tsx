import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

interface CoreValueCardProps {
  icon: LucideIcon;
  title: string;
  delay: number;
  darkMode: boolean;
  iconBgType: "gold" | "green";
}

export function CoreValueCard({
  icon: Icon,
  title,
  delay,
  darkMode,
  iconBgType,
}: CoreValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ amount: 0.3 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="p-6 rounded-lg text-center relative overflow-hidden"
      style={{
        backgroundColor: darkMode ? "#1e2530" : "white",
        boxShadow: darkMode
          ? "0 4px 20px rgba(188, 159, 100, 0.15)"
          : "0 4px 20px rgba(45, 75, 55, 0.1)",
        border: darkMode ? "1px solid rgba(188, 159, 100, 0.1)" : "none",
      }}>
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{
          background: "linear-gradient(90deg, #BC9F64 0%, #2D4B37 100%)",
        }}></div>
      <div
        className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
        style={{
          background:
            iconBgType === "gold"
              ? "linear-gradient(135deg, #BC9F64 0%, #a68a54 100%)"
              : "linear-gradient(135deg, #2D4B37 0%, #1e3224 100%)",
          boxShadow:
            iconBgType === "gold"
              ? "0 4px 15px rgba(188, 159, 100, 0.3)"
              : "0 4px 15px rgba(45, 75, 55, 0.3)",
        }}>
        <Icon
          className="w-8 h-8"
          style={{ color: iconBgType === "gold" ? "#2D4B37" : "#BC9F64" }}
        />
      </div>
      <h3
        className="text-lg mb-2"
        style={{ color: darkMode ? "#BC9F64" : "#2D4B37", fontWeight: 600 }}>
        {title}
      </h3>
    </motion.div>
  );
}
