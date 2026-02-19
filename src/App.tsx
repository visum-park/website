import { Mail, MapPin, Moon, Phone, Sun } from "lucide-react";
import { motion } from "motion/react";
import AboutAnimatedSmooth from "./components/about";
import Facilities from "./components/facilities";
import Hero from "./components/hero";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  const [darkMode, setDarkMode] = useLocalStorageState("darkMode", false);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleDarkMode: () => setDarkMode((prev) => !prev),
      }}>
      <div
        className="min-h-screen"
        style={{ backgroundColor: darkMode ? "#0f1419" : "#ffffff" }}>
        {/* Dark Mode Toggle Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setDarkMode((prev: boolean) => !prev)}
          className="fixed cursor-pointer top-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all"
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
        <footer
          className="py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #2D4B37 0%, #1e3224 100%)",
          }}>
          {/* Decorative gradient accents */}
          <div
            className="absolute top-0 left-0 w-96 h-96 opacity-5"
            style={{
              background:
                "radial-gradient(circle at top left, #BC9F64 0%, transparent 70%)",
            }}></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 opacity-5"
            style={{
              background:
                "radial-gradient(circle at bottom right, #BC9F64 0%, transparent 70%)",
            }}></div>

          <div className="max-w-6xl mx-auto relative">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.3 }}
              className="text-4xl mb-12 text-center relative inline-block w-full"
              style={{
                color: "#BC9F64",
                fontWeight: 600,
                textShadow: "0 2px 10px rgba(188, 159, 100, 0.3)",
              }}>
              Contact Us
              <div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 rounded-full"
                style={{ backgroundColor: "#BC9F64" }}></div>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ amount: 0.3 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 relative"
                  style={{
                    background:
                      "linear-gradient(135deg, #BC9F64 0%, #a68a54 100%)",
                    boxShadow: "0 8px 20px rgba(188, 159, 100, 0.3)",
                  }}>
                  <MapPin className="w-8 h-8" style={{ color: "#2D4B37" }} />
                </div>
                <h3
                  className="text-xl mb-2"
                  style={{ color: "#BC9F64", fontWeight: 600 }}>
                  Location
                </h3>
                <p className="text-white">
                  Machakos Town
                  <br />
                  Machakos County, Kenya
                  <br />
                </p>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ amount: 0.3 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #BC9F64 0%, #a68a54 100%)",
                    boxShadow: "0 8px 20px rgba(188, 159, 100, 0.3)",
                  }}>
                  <Phone className="w-8 h-8" style={{ color: "#2D4B37" }} />
                </div>
                <h3
                  className="text-xl mb-2"
                  style={{ color: "#BC9F64", fontWeight: 600 }}>
                  Phone
                </h3>
                <p className="text-white">
                  +254 727 737 733
                  <br />
                  +254 740 926 266
                  <br />
                </p>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ amount: 0.3 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #BC9F64 0%, #a68a54 100%)",
                    boxShadow: "0 8px 20px rgba(188, 159, 100, 0.3)",
                  }}>
                  <Mail className="w-8 h-8" style={{ color: "#2D4B37" }} />
                </div>
                <h3
                  className="text-xl mb-2"
                  style={{ color: "#BC9F64", fontWeight: 600 }}>
                  Email
                </h3>
                <p className="text-white">
                  info@visumparkhotels.com
                  <br />
                </p>
              </motion.div>
            </div>

            {/* Bottom Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ amount: 0.3 }}
              className="pt-8 border-t text-center"
              style={{
                borderColor: "#BC9F64",
                borderImage:
                  "linear-gradient(90deg, transparent 0%, #BC9F64 50%, transparent 100%) 1",
              }}>
              <p className="text-white">
                &copy; 2026 Visum Park Hotels. All rights reserved.
              </p>
            </motion.div>
          </div>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}
