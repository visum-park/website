import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import HotelLandingPage from "./components/landing";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <HotelLandingPage />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
