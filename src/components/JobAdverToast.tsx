import { X } from "lucide-react";
import { useEffect, useState } from "react";
import JobAdvertImage from "../assets/careers/hiring.png";

const APP_URL = import.meta.env.VITE_APP_URL;

const JobAdvertToast = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const deadline = new Date(2026, 2, 14); // March 14, 2026

    const showToast = () => {
      const now = new Date();
      if (now < deadline) {
        setOpen(true);
        setTimeout(() => setOpen(false), 5000);
      }
    };

    // Initial check
    showToast();

    // Repeat every 10 seconds
    const interval = setInterval(showToast, 10000);

    return () => clearInterval(interval);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slideIn">
      <div className="relative bg-white shadow-2xl rounded-xl w-[320px] overflow-hidden border">
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 cursor-pointer right-2 bg-white rounded-full p-1 shadow">
          <X size={18} className="text-gray-600" />
        </button>

        {/* Image */}
        <div className="w-full h-45">
          <img
            src={JobAdvertImage}
            alt="Visum Park Hiring"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h4 className="font-semibold text-gray-800">We're Hiring!</h4>
          <p className="text-sm text-gray-600 mt-1 mb-3">
            Join Visum Park as a Receptionist or Cook.
          </p>
          <a
            href={`${APP_URL}/careers`}
            className="block text-center bg-[#BC9F64] text-white py-2 rounded-lg hover:opacity-90">
            View Jobs
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobAdvertToast;
