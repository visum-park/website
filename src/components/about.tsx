import { motion } from "framer-motion";
import { Award, Lightbulb, Scale, Shield, Star, Users } from "lucide-react";
import ShowcaseImage from "../assets/accomodation/bed/show_case.jpg";
import AboutUsImage from "../assets/images/about_us.jpg";
import { useTheme } from "../context/ThemeContext";
import { CoreValueCard } from "./CoreValueCard";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const AboutAnimatedSmooth = () => {
  const { darkMode } = useTheme();
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      style={{ backgroundColor: darkMode ? "#1a1f26" : "#f9f7f4" }}>
      {/* Decorative gradient overlay */}
      <div
        className="absolute top-0 left-0 w-full h-32"
        style={{
          background: darkMode
            ? "linear-gradient(to bottom, rgba(188, 159, 100, 0.05), transparent)"
            : "linear-gradient(to bottom, rgba(0, 0, 0, 0.05), transparent)",
        }}></div>

      <div className="max-w-6xl mx-auto relative">
        {/* Who We Are */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.3 }}>
              <h2
                className="text-4xl mb-6 relative inline-block"
                style={{
                  color: darkMode ? "#BC9F64" : "#2D4B37",
                  fontWeight: 600,
                }}>
                Who We Are
                <div
                  className="absolute -bottom-2 left-0 h-1 rounded-full"
                  style={{
                    width: "60%",
                    background:
                      "linear-gradient(90deg, #BC9F64 0%, transparent 100%)",
                  }}></div>
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: darkMode ? "#d1d5db" : "#333" }}>
                Visum Park Hotel is a beautiful boutique hotel located in
                Machakos town, Machakos County, Kenya. We are conveniently
                situated just 49 km from Jomo Kenyatta International Airport
                (JKIA) and only a 40-minute drive from Nairobi city CBD.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.3 }}
              className="h-80 rounded-lg overflow-hidden relative group"
              style={{
                boxShadow: darkMode
                  ? "0 10px 40px rgba(188, 159, 100, 0.2)"
                  : "0 10px 40px rgba(45, 75, 55, 0.2)",
              }}>
              <ImageWithFallback
                src={AboutUsImage}
                alt="Hotel Interior"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ amount: 0.3 }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-lg relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #2D4B37 0%, #1e3224 100%)",
              boxShadow: darkMode
                ? "0 10px 40px rgba(45, 75, 55, 0.4)"
                : "0 10px 40px rgba(45, 75, 55, 0.3)",
            }}>
            {/* Decorative corner accent */}
            <div
              className="absolute top-0 right-0 w-32 h-32 opacity-10"
              style={{
                background:
                  "radial-gradient(circle at top right, #BC9F64 0%, transparent 70%)",
              }}></div>

            <h2
              className="text-3xl mb-6 relative"
              style={{ color: "#BC9F64", fontWeight: 600 }}>
              Vision
              <div
                className="absolute -bottom-2 left-0 h-0.5 w-16"
                style={{ backgroundColor: "#BC9F64" }}></div>
            </h2>
            <p
              className="text-lg leading-relaxed relative"
              style={{ color: "#ffffff" }}>
              To be accepted as the leader in the hotel industry and provide the
              best products and services while ensuring sustainable economic
              development and employee satisfaction.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-lg relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #BC9F64 0%, #a68a54 100%)",
              boxShadow: darkMode
                ? "0 10px 40px rgba(188, 159, 100, 0.4)"
                : "0 10px 40px rgba(188, 159, 100, 0.3)",
            }}>
            {/* Decorative corner accent */}
            <div
              className="absolute top-0 right-0 w-32 h-32 opacity-10"
              style={{
                background:
                  "radial-gradient(circle at top right, #2D4B37 0%, transparent 70%)",
              }}></div>

            <h2
              className="text-3xl mb-6 relative"
              style={{ color: "#2D4B37", fontWeight: 600 }}>
              Mission
              <div
                className="absolute -bottom-2 left-0 h-0.5 w-16"
                style={{ backgroundColor: "#2D4B37" }}></div>
            </h2>
            <p
              className="text-lg leading-relaxed relative"
              style={{ color: "#2D4B37" }}>
              Our mission is to deliver top-level hospitality services that
              satisfy guests, making Visum Park Hotel the first choice for
              business and leisure.
            </p>
          </motion.div>
        </div>

        {/* Our Core Values */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="text-center mb-12">
            <h2
              className="text-4xl mb-4 relative inline-block"
              style={{
                color: darkMode ? "#BC9F64" : "#2D4B37",
                fontWeight: 600,
              }}>
              Our Core Values
              <div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-32 rounded-full"
                style={{ backgroundColor: "#BC9F64" }}></div>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <CoreValueCard
              icon={Scale}
              title="Business Ethics"
              delay={0.1}
              darkMode={darkMode}
              iconBgType="gold"
            />
            <CoreValueCard
              icon={Award}
              title="Professionalism"
              delay={0.2}
              darkMode={darkMode}
              iconBgType="green"
            />
            <CoreValueCard
              icon={Shield}
              title="Integrity"
              delay={0.3}
              darkMode={darkMode}
              iconBgType="gold"
            />
            <CoreValueCard
              icon={Users}
              title="Teamwork"
              delay={0.4}
              darkMode={darkMode}
              iconBgType="green"
            />
            <CoreValueCard
              icon={Lightbulb}
              title="Innovation"
              delay={0.5}
              darkMode={darkMode}
              iconBgType="gold"
            />
            <CoreValueCard
              icon={Star}
              title="Excellence"
              delay={0.6}
              darkMode={darkMode}
              iconBgType="green"
            />
          </div>
        </div>

        {/* Hotel Room Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
          className="mt-16 h-96 rounded-lg overflow-hidden relative group"
          style={{
            boxShadow: darkMode
              ? "0 20px 60px rgba(188, 159, 100, 0.3)"
              : "0 20px 60px rgba(45, 75, 55, 0.25)",
          }}>
          <ImageWithFallback
            src={ShowcaseImage}
            alt="Luxury Hotel Room"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "linear-gradient(45deg, rgba(45, 75, 55, 0.2) 0%, rgba(188, 159, 100, 0.2) 100%)",
            }}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutAnimatedSmooth;
