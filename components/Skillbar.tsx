import React from "react";

interface SkillBarProps {
  label: string;
  level: number;
  color?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ label, level, color }) => {
  const barStyle: React.CSSProperties = {
    width: `${level}%`,
    backgroundColor: color || "#6a0dad",
  };

  return (
    <div className="mt-1">
      <div className="flex justify-between items-center text-gray-500">
        <div className="text-base">{label}</div>
        <div className="text-base">{level}%</div>
      </div>
      <div className="bg-gray-300 h-2 mt-1 rounded-full">
        <div style={barStyle} className="h-2 rounded-full"></div>
      </div>
    </div>
  );
};

export default SkillBar;
