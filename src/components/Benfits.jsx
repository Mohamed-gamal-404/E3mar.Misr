export default function Benfits({
  icon,
  title,
  paragraph,
  background,
}) {
  return (
    <section>
      <div
        className="
          w-full max-w-[220px]
          min-h-[190px]
          bg-white
          rounded-2xl
          border border-gray-100
          shadow-sm
          hover:shadow-xl
          transition-all duration-300
          flex flex-col
          items-center
          text-center
          p-6
          gap-3
          hover:-translate-y-1
        "
      >
        {/* Icon */}
        <div
          className="
            w-14 h-14
            rounded-xl
            text-white
            flex items-center justify-center
            text-2xl
            shadow-md
          "
          style={{ backgroundColor: background }}
        >
          {icon}
        </div>

        {/* Title */}
        <h1 className="font-bold text-lg text-gray-800">
          {title}
        </h1>

        {/* Paragraph */}
        <p className="text-sm text-gray-500 leading-6">
          {paragraph}
        </p>
      </div>
    </section>
  );
}