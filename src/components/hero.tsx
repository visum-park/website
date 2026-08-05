import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Brand from "../assets/brand.jpg";
import BrandNight from "../assets/brand-night.jpg";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const Hero = () => {
  const images = [Brand, BrandNight];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Switch image every 5 seconds (5000ms)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Crossfade Transition */}
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.0, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <ImageWithFallback
              src={images[currentImageIndex]}
              alt="Visum Park Hotel"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-center mb-4"
          style={{
            fontWeight: 600,
            textShadow: "0 4px 20px rgba(188, 159, 100, 0.3)",
          }}
        >
          Visum Park Hotels
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-center mb-8 max-w-2xl"
          style={{
            color: "#BC9F64",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          Experience Luxury in the Heart of Machakos
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(188, 159, 100, 0.5)",
          }}
          onClick={scrollToAbout}
          className="flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all hover:bg-white/10"
          style={{
            borderColor: "#BC9F64",
            boxShadow: "0 0 15px rgba(188, 159, 100, 0.3)",
          }}
        >
          Discover More
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
