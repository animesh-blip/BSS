export default function SectionHeading({
  tag,
  title,
  description,
  centered = true,
  light = false,
}: {
  tag?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      {tag && (
        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-2">
          {tag}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-lg leading-relaxed ${centered ? "mx-auto" : ""} ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
