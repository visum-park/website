import { easeOut, motion } from "framer-motion";

const AboutAnimatedSmooth = () => {
  const coreValues = [
    { label: "Business Ethics", icon: "💼" },
    { label: "Professionalism", icon: "🎯" },
    { label: "Integrity", icon: "🛡️" },
    { label: "Teamwork", icon: "🤝" },
    { label: "Innovation", icon: "💡" },
    { label: "Excellence", icon: "🏆" },
  ];

  const facilities = [
    { label: "Conference Halls", icon: "🏢" },
    { label: "Accommodation", icon: "🛏️" },
    { label: "Restaurant", icon: "🍽️" },
    { label: "Team-Building Garden", icon: "🌳" },
    { label: "Kids' Playgrounds", icon: "🛝" },
  ];

  // Parent container variants for smooth stagger
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <div className="max-w-6xl my-12 mx-auto px-4 space-y-12">
      {/* Who We Are */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={item}
        className="bg-[#BC9F64] text-black p-8 rounded-xl shadow-lg border-l-4 border-[#2D4B37]">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Who we are
          <span className="text-amber-600">🌟</span>
        </h3>
        <p className="text-lg leading-relaxed">
          Visum Park Hotel is a beautiful boutique hotel located in Machakos
          town, Machakos County, Kenya. We are conveniently situated just 49 km
          from Jomo Kenyatta International Airport (JKIA) and only a 40-minute
          drive from Nairobi city CBD.
        </p>
      </motion.div>

      {/* Vision */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={item}
        className="bg-[#BC9F64] text-black p-8 rounded-xl shadow-lg border-l-4 border-[#2D4B37]">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Vision <span className="text-amber-600">🌟</span>
        </h3>
        <p className="text-lg leading-relaxed">
          To be accepted as the leader in the hotel industry and provide the
          best products and services while ensuring sustainable economic
          development and employee satisfaction.
        </p>
      </motion.div>

      {/* Mission */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={item}
        className="bg-[#BC9F64] text-black p-8 rounded-xl shadow-lg border-l-4 border-[#2D4B37]">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Mission <span className="text-amber-600">🎯</span>
        </h3>
        <p className="text-lg leading-relaxed">
          Our mission is to deliver top-level hospitality services that satisfy
          guests, making Visum Park Hotel the first choice for business and
          leisure.
        </p>
      </motion.div>

      {/* Core Values */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="text-center">
        <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {coreValues.map((value, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-[#2D4B37] hover:bg-[#BC9F64] transition p-6 rounded-xl flex flex-col items-center justify-center shadow-lg">
              <span className="text-4xl mb-4">{value.icon}</span>
              <h3 className="text-lg font-semibold">{value.label}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Facilities */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="text-center">
        <h2 className="text-3xl font-bold mb-8">Our Facilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {facilities.map((facility, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-[#2D4B37] hover:bg-[#BC9F64] transition p-6 rounded-xl flex flex-col items-center justify-center shadow-lg">
              <span className="text-5xl mb-4">{facility.icon}</span>
              <h3 className="text-lg font-semibold">{facility.label}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutAnimatedSmooth;
