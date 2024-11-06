import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface ChangeCardProps {
  title: string;
  value: number;
}

const ChangeCard: React.FC<ChangeCardProps> = ({ title, value }) => {
  const isPositive = value >= 0;

  return (
    <div className="bg-gray-700/30 rounded-lg p-4">
      <div className="text-gray-400 mb-2">{title}</div>
      <div className={`text-xl font-bold flex items-center gap-1 ${isPositive ? "text-green-400" : "text-red-400"}`}>
        {isPositive ? (
          <TrendingUp className="w-5 h-5" />
        ) : (
          <TrendingDown className="w-5 h-5" />
        )}
        {Math.abs(value).toFixed(2)}%
      </div>
    </div>
  );
};

export default ChangeCard;