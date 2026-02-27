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
      className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      style={{ backgroundColor: darkMode ? "#0f1419" : "#ffffff" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
          className="text-center mb-16">
          <h2
            className="text-4xl mb-4 relative inline-block"
            style={{
              color: darkMode ? "#BC9F64" : "#2D4B37",
              fontWeight: 600,
            }}>
            Our Facilities
            <div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-32 rounded-full"
              style={{ backgroundColor: "#BC9F64" }}></div>
          </h2>
          <p
            className="text-lg mt-6"
            style={{ color: darkMode ? "#9ca3af" : "#333" }}>
            Experience world-class amenities designed for your comfort and
            convenience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FacilityCard
            title="Conference Halls"
            imageSrc={ConferenceHallImage}
            delay={0.1}
            darkMode={darkMode}
            url="conference-halls"
          />
          <FacilityCard
            title="Accommodation"
            imageSrc={BedFrontView}
            delay={0.2}
            darkMode={darkMode}
            url="accommodation"
          />
          <FacilityCard
            title="Restaurant"
            imageSrc={RestaurantImage}
            delay={0.3}
            darkMode={darkMode}
            url="restaurant"
          />
          <FacilityCard
            title="Team-Building Garden"
            imageSrc={TeamBuildingGardenImage}
            delay={0.4}
            darkMode={darkMode}
            url="team-building"
          />
          <FacilityCard
            title="Kids' Playgrounds"
            imageSrc="https://images.unsplash.com/photo-1630637991997-1cd9c8b41ce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlncm91bmQlMjBvdXRkb29yfGVufDF8fHx8MTc3MTMxMzYxMnww&ixlib=rb-4.1.0&q=80&w=1080"
            delay={0.5}
            darkMode={darkMode}
            className="md:col-span-2 lg:col-span-1"
            url="kids-playground"
          />
        </div>
      </div>
    </section>
  );
};

export default Facilities;
