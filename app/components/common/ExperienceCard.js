export default function ExperienceCard({ title, items, className = "" }) {
  return (
    <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-teal-500 ${className}`}>
      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h4>
      <ul className="text-gray-700 dark:text-gray-300 space-y-2">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}