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
      aria-label="Hotel Facilities in Machakos Kenya"
      className="py-28 px-6 lg:px-12 transition-colors duration-500"
      style={{
        backgroundColor: darkMode ? "#0b1116" : "#ffffff",
      }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2
            className="text-4xl md:text-5xl tracking-tight font-semibold"
            style={{
              color: darkMode ? "#ffffff" : "#111111",
            }}>
            Our Facilities
          </h2>

          <div
            className="w-20 h-[2px] mx-auto mt-6 mb-6"
            style={{ backgroundColor: "#BC9F64" }}
          />

          <p className="text-lg leading-relaxed text-gray-500">
            Discover premium hotel facilities at Visum Park Hotel in Machakos,
            including modern conference halls, luxury accommodation, fine
            dining, and outdoor spaces designed for both business and leisure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <FacilityCard
            title="Conference Halls"
            imageSrc={ConferenceHallImage}
            url="conference-halls"
            delay={0}
          />

          <FacilityCard
            title="Luxury Accommodation"
            imageSrc={BedFrontView}
            url="accommodation"
            delay={0}
          />

          <FacilityCard
            title="Restaurant"
            imageSrc={RestaurantImage}
            url="restaurant"
            delay={0}
          />

          <FacilityCard
            title="Team-Building Garden"
            imageSrc={TeamBuildingGardenImage}
            url="team-building"
            delay={0}
          />

          <FacilityCard
            title="Kids Playground & Family Area"
            imageSrc="https://images.unsplash.com/photo-1630637991997-1cd9c8b41ce1"
            url="kids-playground"
            delay={0}
          />
        </div>

        {/* ✅ HIDDEN SEO BOOST */}
        <div className="sr-only">
          Visum Park Hotel offers top hotel facilities in Machakos Kenya
          including conference venues, business meeting rooms, luxury rooms,
          restaurant dining, team building gardens, and family-friendly spaces.
        </div>
      </div>
    </section>
  );
};

export default Facilities;
