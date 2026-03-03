import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const APP_URL = import.meta.env.VITE_APP_URL;

interface FacilityCardProps {
  title: string;
  imageSrc: string;
  delay: number;
  className?: string;
  url: string;
}

export function FacilityCard({
  title,
  imageSrc,
  delay,
  url,
  className = "",
}: FacilityCardProps) {
  return (
    <a
      href={`${APP_URL}/${url}`}
      className="block rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#BC9F64]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ amount: 0.3 }}
        whileHover={{ y: -4 }}
        className={`rounded-2xl overflow-hidden relative group cursor-pointer
        bg-white dark:bg-gray-900
        transition-all duration-500
        hover:shadow-2xl ${className}`}>
        {/* Text Section */}
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-black dark:text-white mb-2">
            {title}
          </h3>

          <div className="w-16 h-[2px] rounded-full bg-[#BC9F64] mb-4 transition-all duration-500 group-hover:w-24" />

          {/* ✨ Luxury Microcopy */}
          <p
            className="
              text-sm tracking-wide uppercase
              text-gray-400 dark:text-gray-500
              opacity-0 translate-y-2
              group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-500
              group-hover:text-[#BC9F64]
            ">
            Discover more
          </p>
        </div>

        {/* Image Section */}
        <div className="relative h-64 overflow-hidden mx-6 mb-6 rounded-3xl">
          <ImageWithFallback
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          />

          {/* Soft luxury overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500" />
        </div>
      </motion.div>
    </a>
  );
}
