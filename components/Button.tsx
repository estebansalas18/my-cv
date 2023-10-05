import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="relative bg-customPurple mt-6 hover:bg-customPurpleLight text-white font-thin h-14 w-56 rounded text-2xl focus:outline-none focus:shadow-outline"
      onClick={onClick}
    >
      <div className="flex items-center justify-center">
        {label}
        <FaArrowRight className="ml-6" />
      </div>
    </button>
  );
};

export default Button;
