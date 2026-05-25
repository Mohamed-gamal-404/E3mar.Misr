import { CiLocationOn } from "react-icons/ci";

export default function JobCard({
  companyLogo,
  company,
  title,
  type,
  location,
  createAt,
}) {
  return (
    <section
      dir="rtl"
      className="w-full bg-white rounded-3xl shadow-md hover:shadow-2xl duration-300 border border-gray-100 p-5"
    >
      <div className="flex flex-col h-full">
        
        {/* Top */}
        <div className="flex items-start gap-4">
          
          {/* Logo */}
          <img
            className="w-16 h-16 object-contain rounded-2xl bg-gray-50 p-2"
            src={companyLogo}
            alt={`${company} logo`}
          />

          {/* Title + Company */}
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-800">
              {title}
            </h1>

            <h2 className="text-gray-500 mt-1">
              {company}
            </h2>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mt-5 text-gray-500">
          <CiLocationOn className="text-2xl text-blue-900" />

          <p className="text-sm sm:text-base">
            {location}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
          
          {/* Job Type */}
          <span
            className={`
              px-4 py-1 rounded-full text-sm font-semibold
              ${
                type === "Full Time"
                  ? "bg-blue-100 text-blue-900"
                  : "bg-green-100 text-green-800"
              }
            `}
          >
            {type}
          </span>

          {/* Date */}
          <p className="text-sm text-gray-400">
            {createAt}
          </p>
        </div>
      </div>
    </section>
  );
}