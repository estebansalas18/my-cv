import React from "react";
import ContactMeDialog from "./dialogs/ContactMeDialog";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  const [ContactMeDialogOpen, setContactMeDialogOpen] =
    useState<boolean>(false);

  const hadleContactMeClick = () => {
    setContactMeDialogOpen(true);
  };

  return (
    <button
      className="relative bg-customPurple mt-6 hover:bg-customPurpleLight text-white font-thin h-14 w-56 rounded text-2xl focus:outline-none focus:shadow-outline hover:scale-105 transition-transform duration-300 ease-in-out"
      onClickCapture={hadleContactMeClick}
    >
      <ContactMeDialog
        open={ContactMeDialogOpen}
        setContactMeDialogOpen={setContactMeDialogOpen}
      />
      <div className="flex items-center justify-center">
        {label}
        <FaArrowRight className="ml-6" />
      </div>
    </button>
  );
};

export default Button;
