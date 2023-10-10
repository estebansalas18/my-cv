import React from "react";
import HireMeDialog from "./dialogs/HireMeDialog";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  const [HireMeDialogOpen, setHireMeDialogOpen] = useState<boolean>(false);

  const handleHireMeClick = () => {
    setHireMeDialogOpen(true);
  };

  return (
    <button
      className="relative bg-customPurple mt-6 hover:bg-customPurpleLight text-white font-thin h-14 w-56 rounded text-2xl focus:outline-none focus:shadow-outline hover:scale-105 transition-transform duration-300 ease-in-out"
      onClickCapture={handleHireMeClick}
    >
      <HireMeDialog
        open={HireMeDialogOpen}
        setHireMeDialogOpen={setHireMeDialogOpen}
      />
      <div className="flex items-center justify-center">
        {label}
        <FaArrowRight className="ml-6" />
      </div>
    </button>
  );
};

export default Button;
