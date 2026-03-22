import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import AboutAnimatedSmooth from "./components/about";
import Facilities from "./components/facilities";
import Hero from "./components/hero";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

import { Helmet } from "react-helmet-async";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  const [darkMode, setDarkMode] = useLocalStorageState("darkMode", false);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleDarkMode: () => setDarkMode((prev) => !prev),
      }}>
      <Helmet>
        <title>Visum Park Hotel | Luxury Stay & Comfort</title>
        <meta
          name="description"
          content="Experience comfort, luxury, and exceptional hospitality at Visum Park Hotel - Machakos. Book your stay today."
        />
        <meta
          name="keywords"
          content="hotel, accommodation, luxury hotel, Kenya hotel, Machakos"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Visum Park Hotel - Machakos" />
        <meta
          property="og:description"
          content="Luxury stay and hospitality experience in Machakos."
        />
        <meta property="og:image" content="/hotel-preview.png" />
      </Helmet>
      <div
        className="min-h-screen"
        style={{ backgroundColor: darkMode ? "#0f1419" : "#ffffff" }}>
        <Navbar />
        {/* Dark Mode Toggle Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setDarkMode((prev: boolean) => !prev)}
          className="fixed cursor-pointer top-28 right-6 z-50 p-4 rounded-full shadow-lg transition-all"
          style={{
            backgroundColor: darkMode ? "#BC9F64" : "#2D4B37",
            boxShadow: darkMode
              ? "0 4px 20px rgba(188, 159, 100, 0.4)"
              : "0 4px 20px rgba(45, 75, 55, 0.4)",
          }}>
          {darkMode ? (
            <Sun className="w-6 h-6" style={{ color: "#0f1419" }} />
          ) : (
            <Moon className="w-6 h-6" style={{ color: "#BC9F64" }} />
          )}
        </motion.button>

        {/* Hero Section */}
        <Hero />
        <AboutAnimatedSmooth />
        <Facilities />

        {/* Contact Footer */}
        <Footer />
        <WhatsAppFloatingButton />
      </div>
    </ThemeContext.Provider>
  );
}
