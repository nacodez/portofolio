import Image from "next/image";
import Link from "next/link";
import ItemList from "./ItemList";

export default function ProjectCard({ 
  href, 
  image, 
  title, 
  description, 
  tags, 
  className = "" 
}) {
  const CardContent = () => (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg basis-1/3 flex-1 bg-white dark:bg-gray-800 ${className}`}>
      <div className="h-64">
        <Image
          className="w-full h-full object-cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 dark:text-white">
          {title}
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <ItemList
          items={tags}
          className="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2"
        />
      </div>
    </div>
  );

  return href ? (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <CardContent />
    </Link>
  ) : (
    <CardContent />
  );
}