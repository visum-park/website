const APP_URL = import.meta.env.VITE_APP_URL;

const HiringBanner = () => {
  return (
    <div className="sticky top-16 z-50 w-full overflow-hidden bg-gray-50 text-[#2D4B37]">
      {/* Scrolling text container */}
      <a
        href={`${APP_URL}/careers`}
        className="flex items-center cursor-pointer underline gap-4 py-2 whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-8">
          <span className="font-semibold">
            We are hiring. Click to view job openings.
          </span>
        </div>
      </a>

      {/* Close button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // prevent clicking link
        }}
        className="absolute right-2 top-1 text-[#2D4B37] font-bold hover:text-[#1e3224]">
        ✕
      </button>

      {/* CSS animation */}
      <style>
        {`
          .animate-marquee {
            display: inline-block;
            padding-left: 100%;
            animation: marquee 15s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default HiringBanner;
