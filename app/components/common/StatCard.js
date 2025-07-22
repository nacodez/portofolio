export default function StatCard({ count, suffix = "", title, description, cardRef }) {
  return (
    <div 
      ref={cardRef} 
      className="bg-white dark:bg-gray-600 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
    >
      <div className="text-4xl font-bold text-teal-600 mb-2">
        {count}{suffix}
      </div>
      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h4>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}