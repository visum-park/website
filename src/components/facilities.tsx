import { motion } from "framer-motion";

// Assets
import BedFrontView from "../assets/accomodation/bed/front_view1.jpg";
import ConferenceHallImage from "../assets/conference/conferenceHall.jpeg";
import RestaurantImage from "../assets/restaurant/table.jpg";
import TeamBuildingGardenImage from "../assets/team-building/teamBuildingGarden.jpg";

import { useTheme } from "../context/ThemeContext";
import { FacilityCard } from "./FacilityCard";

const Facilities = () => {
  const { darkMode } = useTheme();

  return (
    <section
      className="py-28 px-6 lg:px-12 transition-colors duration-500"
      style={{
        backgroundColor: darkMode ? "#0b1116" : "#ffffff",
      }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-20">
          <h2
            className="text-4xl md:text-5xl tracking-tight"
            style={{
              color: darkMode ? "#ffffff" : "#111111",
              fontWeight: 600,
            }}>
            Our Facilities
          </h2>

          {/* Luxury Divider */}
          <div
            className="w-20 h-[2px] mx-auto mt-6 mb-6"
            style={{ backgroundColor: "#BC9F64" }}
          />

          <p
            className="text-lg leading-relaxed"
            style={{
              color: darkMode ? "#9ca3af" : "#555",
            }}>
            Thoughtfully curated spaces designed to deliver comfort, refinement,
            and unforgettable experiences.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <FacilityCard
            title="Conference Halls"
            imageSrc={ConferenceHallImage}
            delay={0}
            url="conference-halls"
          />

          <FacilityCard
            title="Accommodation"
            imageSrc={BedFrontView}
            delay={0}
            url="accommodation"
          />

          <FacilityCard
            title="Restaurant"
            imageSrc={RestaurantImage}
            delay={0}
            url="restaurant"
          />

          <FacilityCard
            title="Team-Building Garden"
            imageSrc={TeamBuildingGardenImage}
            delay={0}
            url="team-building"
          />

          <FacilityCard
            title="Kids' Playgrounds"
            imageSrc="https://images.unsplash.com/photo-1630637991997-1cd9c8b41ce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlncm91bmQlMjBvdXRkb29yfGVufDF8fHx8MTc3MTMxMzYxMnww&ixlib=rb-4.1.0&q=80&w=1080"
            delay={0}
            url="kids-playground"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;
