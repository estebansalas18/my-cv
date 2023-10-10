import React from "react";
import { MdStarOutline } from "react-icons/md";

interface SkillBadgeProps {
  label: string;
}

const SkillBadge = ({ label }: SkillBadgeProps) => {
  return (
    <div className="flex items-center">
      <MdStarOutline size={24} color="#6a0dad" />
      <span className="text-base text-black ml-2 mt-2">{label}</span>
    </div>
  );
};

export default SkillBadge;
