import React from "react";

interface InfoItemProps {
  index?: string;
  label: string;
  value: string;
  color?: string;
}

const InfoItem = ({ index, label, value }: InfoItemProps) => {
  return (
    <div className="flex justify-between items-center">
      <span className={index === "edu" ? "text-lg" : ""}>{label}</span>
      <span
        className={
          index === "edu"
            ? "rounded text-sm bg-customPurpleLight text-white px-2 py-1 w-2/3 text-center"
            : "text-black"
        }
      >
        {value}
      </span>
    </div>
  );
};

export default InfoItem;
