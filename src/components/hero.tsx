import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Brand from "../assets/brand.png";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      aria-label="Visum Park Hotel Hero Section">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={Brand}
          alt="Visum Park Hotel exterior in Machakos showing luxury accommodation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 text-center">
        {/* ✅ SEO-optimized H1 */}
        <h1
          className="text-4xl md:text-6xl font-semibold mb-4"
          style={{
            textShadow: "0 4px 20px rgba(188, 159, 100, 0.3)",
          }}>
          Luxury Hotel in Machakos – Visum Park Hotel
        </h1>

        {/* ✅ Keyword-rich paragraph */}
        <p
          className="text-lg md:text-xl mb-8 max-w-2xl"
          style={{
            color: "#BC9F64",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
          }}>
          Experience premium accommodation, exceptional hospitality, and comfort
          at Visum Park Hotel in Machakos. Perfect for business, relaxation, and
          unforgettable stays.
        </p>

        {/* Animate ONLY after mount (SEO safe) */}
        {mounted && (
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(188, 159, 100, 0.5)",
            }}
            onClick={scrollToAbout}
            className="flex cursor-pointer items-center gap-2 px-6 py-3 rounded-full border-2 transition-all hover:bg-white/10"
            style={{
              borderColor: "#BC9F64",
              boxShadow: "0 0 15px rgba(188, 159, 100, 0.3)",
            }}>
            Discover More
            <ChevronDown className="w-5 h-5" />
          </motion.button>
        )}
      </div>
      <div className="sr-only">
        Visum Park Hotel is a luxury hotel located in Machakos, Kenya offering
        premium accommodation, conference facilities, dining, and hospitality
        services for both business and leisure travelers.
      </div>
    </section>
  );
};

export default Hero;
