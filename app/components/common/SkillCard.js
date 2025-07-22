import Image from "next/image";
import ItemList from "./ItemList";

export default function SkillCard({ image, icon, title, description, subtitle, items, className = "" }) {
  return (
    <div className={`text-center shadow-lg p-10 rounded-xl bg-white dark:bg-gray-100 ${className}`}>
      {image ? (
        <Image
          src={image}
          width={100}
          height={100}
          className="mx-auto mb-10"
          alt={`${title} Icon`}
        />
      ) : (
        <div className="w-24 h-24 mx-auto mb-10 bg-teal-100 rounded-full flex items-center justify-center">
          <span className="text-3xl">{icon}</span>
        </div>
      )}
      <h3 className="text-lg font-medium pt-8 pb-2">
        {title}
      </h3>
      <p className="py-2">
        {description}
      </p>
      <h4 className="text-teal-600 py-4">{subtitle}</h4>
      <ItemList
        items={items}
        className="text-gray-800 py-1"
      />
    </div>
  );
}