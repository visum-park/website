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
      aria-label="About Visum Park Hotel in Machakos Kenya"
      className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      style={{ backgroundColor: darkMode ? "#1a1f26" : "#f9f7f4" }}>
      <div className="max-w-6xl mx-auto relative">
        {/* ✅ MAIN SEO HEADING */}
        <h2
          className="text-4xl text-center mb-12"
          style={{
            color: darkMode ? "#BC9F64" : "#2D4B37",
            fontWeight: 600,
          }}>
          Visum Park Hotel – Luxury Accommodation in Machakos, Kenya
        </h2>

        {/* WHO WE ARE */}
        <div className="mb-16 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}>
            {/* ✅ H3 instead of H2 */}
            <h3 className="text-2xl mb-4 font-semibold">Who We Are</h3>

            <p className="text-lg leading-relaxed">
              Visum Park Hotel is a luxury boutique hotel located in Machakos,
              Kenya, offering premium accommodation, modern facilities, and
              exceptional hospitality services. Conveniently situated just 49 km
              from Jomo Kenyatta International Airport and a short drive from
              Nairobi CBD, our hotel is ideal for both business travelers and
              leisure guests seeking comfort and elegance.
            </p>
          </motion.div>

          <motion.div className="h-80 rounded-lg overflow-hidden">
            <ImageWithFallback
              src={AboutUsImage}
              alt="Interior of Visum Park Hotel in Machakos showing modern luxury design"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* VISION & MISSION */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-lg">
            <h3 className="text-2xl mb-4 font-semibold">Our Vision</h3>
            <p className="text-lg">
              To become a leading hotel in Kenya’s hospitality industry by
              delivering world-class accommodation, excellent customer service,
              and sustainable growth.
            </p>
          </div>

          <div className="p-8 rounded-lg">
            <h3 className="text-2xl mb-4 font-semibold">Our Mission</h3>
            <p className="text-lg">
              Our mission is to provide exceptional hospitality experiences in
              Machakos through quality service, comfortable accommodation, and a
              welcoming environment for both business and leisure travelers.
            </p>
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="mt-20">
          <h3 className="text-3xl text-center mb-10 font-semibold">
            Our Core Values
          </h3>

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

        {/* SHOWCASE IMAGE */}
        <div className="mt-16 h-96 rounded-lg overflow-hidden">
          <ImageWithFallback
            src={ShowcaseImage}
            alt="Luxury hotel room at Visum Park Hotel Machakos with modern amenities"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ✅ HIDDEN SEO BOOST */}
        <div className="sr-only">
          Visum Park Hotel is a top-rated luxury hotel in Machakos, Kenya
          offering accommodation, conference facilities, fine dining, and
          hospitality services for both local and international guests.
        </div>
      </div>
    </section>
  );
};

export default AboutAnimatedSmooth;
