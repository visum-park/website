import logo from "../assets/logo.jpg"; // adjust the path if needed

const Header = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Logo */}
      <img
        src={logo}
        alt="Visum Park Hotel Logo"
        className="w-32 h-auto mb-4" // adjust size as needed
      />

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center">Visum Park Hotel</h1>
    </div>
  );
};

export default Header;
