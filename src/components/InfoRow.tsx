import React from "react";

interface InfoRowProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const InfoRow: React.FC<InfoRowProps> = ({ title, value, icon }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
      <div className="flex items-center gap-2">
        {icon} 
        <span className="text-gray-400">{title}</span>
      </div>
      <span className="font-medium">{value}</span>
    </div>
  );
};

export default InfoRow;