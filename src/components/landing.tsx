import { motion } from "framer-motion";
import BrandLogo from "../assets/brand.png";

export default function HotelLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section className="relative py-4 flex items-center justify-center text-center px-6 md:px-0">
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white max-w-3xl px-6">
          <p className="my-4 text-base md:text-lg text-gray-200">
            Experience premium hospitality in the heart of Machakos town —
            perfect for business, leisure, and weekend getaways.
          </p>
        </motion.div>
      </section>

      <img
        src={BrandLogo}
        alt={"Brand"}
        className="mx-auto object-cover shadow-lg border border-white"
      />
    </div>
  );
}
