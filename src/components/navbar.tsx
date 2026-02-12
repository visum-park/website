import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const sections = ["rooms", "about", "contact"];
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Highlight nav link based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          if (
            scrollPos >= el.offsetTop &&
            scrollPos < el.offsetTop + el.offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80, // account for fixed header
        behavior: "smooth",
      });
    }
    setIsOpen(false); // close mobile menu
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-md z-50 transition-all">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-amber-600">
          Visum Park Hotel
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 space-x-4 border border-white text-sm font-medium">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`relative px-2 py-1 border border-white hover:text-amber-600 transition ${
                activeSection === section
                  ? "text-amber-600 font-semibold"
                  : "text-gray-700"
              }`}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {/* Active underline */}
              {activeSection === section && (
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-amber-600 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-800 focus:outline-none">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col gap-6 p-6 text-center">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-lg font-medium hover:text-amber-600 transition ${
                  activeSection === section ? "text-amber-600" : "text-gray-700"
                }`}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
