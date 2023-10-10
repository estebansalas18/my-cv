import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import AhorrAppDialog from "./dialogs/AhorrAppDialog";

interface PortfolioItemProps {
  title: string;
  description: string;
  image: string;
  url?: string;
  dialog?: string;
}

const PortfolioItem = ({
  title,
  description,
  image,
  url,
  dialog,
}: PortfolioItemProps) => {
  const [AhorrAppDialogOpen, setAhorrAppDialogOpen] = useState<boolean>(false);

  const handleAhorrAppDialog = () => {
    setAhorrAppDialogOpen(true);
  };
  return (
    <div className="bg-white rounded-lg w-96 shadow-lg">
      <div className="mb-4">
        <img
          src={image}
          alt="Imagen del proyecto"
          className="w-full h-auto rounded-t-xl"
        />
      </div>
      <div className="ml-8 mr-8 mt-8">
        <h3 className="from-neutral-50 text-2xl mb-6">{title}</h3>
        <p className="text-gray-600">{description}</p>
        {(dialog === "AhorrAppDialog" && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-customPurpleLight text-lg items-center justify-left mb-6"
            onClickCapture={handleAhorrAppDialog}
          >
            {AhorrAppDialogOpen && (
              <AhorrAppDialog
                open={AhorrAppDialogOpen}
                setAhorrAppDialogOpen={setAhorrAppDialogOpen}
              />
            )}
            Saber más <FaArrowRight className="ml-3" />
          </a>
        )) || (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-customPurpleLight text-lg items-center justify-left mb-6"
          >
            Saber más <FaArrowRight className="ml-3" />
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;
