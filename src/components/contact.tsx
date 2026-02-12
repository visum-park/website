import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const socialLinks = [
  {
    icon: Facebook,
    url: "https://web.facebook.com/p/Visum-Park-Hotel-100064349162240/?_rdc=1&_rdr#",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/visumparkhotel?fbclid=IwY2xjawP6r11leHRuA2FlbQIxMABicmlkETJRUldCTFVsY1d4Y0d6b29Bc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHoCtB__gzwrSuGVRumnJzH4Dbm7PDM3GhOL2WeXhregDYpn_pU-4FEvdETZC_aem_KWLoNNE_82tRZoXb12izLA",
  },
];

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center py-16 bg-gray-900 text-white md:px-0">
      <div className="max-w-5xl text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 underline">
          Contact Us
        </h2>
        <div className="flex flex-col justify-center gap-6 text-gray-300 mb-6">
          <p className="flex flex-col sm:flex-row items-center gap-2 justify-center text-center">
            <Phone size={16} />

            <a
              href="tel:+254727737733"
              className="hover:text-[#BC9F64] transition">
              +254 727 737 733
            </a>

            <span className="hidden sm:inline">|</span>

            <a
              href="tel:+254740926266"
              className="hover:text-[#BC9F64] transition">
              +254 740 926 266
            </a>
          </p>
          <p className="flex items-center gap-2 justify-center">
            <Mail size={16} /> info@visumpark.com
          </p>
          <div className="flex justify-center items-center gap-3 text-lg">
            <MapPin size={20} />{" "}
            <a
              target="_blank"
              href="https://www.google.com/maps/dir//Visum+Park+Hotel,+Machakos/@-1.4893478,37.2543937,8701m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x182f8733e540f495:0x1287ab73b1f294bf!2m2!1d37.2153151!2d-1.5237605?entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D">
              Machakos Town, Kenya
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        {socialLinks.map(({ icon: Icon, url }, i) => (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 h-10 rounded-full bg-gray-800 hover:bg-[#BC9F64] transition flex items-center justify-center">
            <Icon size={20} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
