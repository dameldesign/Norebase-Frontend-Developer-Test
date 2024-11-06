import React from "react";

interface PriceCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const PriceCard: React.FC<PriceCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-gray-700/30 rounded-lg p-4">
      <div className="flex items-center gap-2 text-gray-400 mb-2">
        {icon}
        <span>{title}</span>
      </div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
};

export default PriceCard;