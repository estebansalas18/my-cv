import React from "react";
import InfoItem from "./InfoItem";

interface EducationProps {
  institution: string;
  role: string;
  startDate: string;
  endDate: string;
  certificationTitle: string;
  description: string;
}

const Education: React.FC<EducationProps> = ({
  institution,
  role,
  startDate,
  endDate,
  certificationTitle,
  description,
}) => {
  let date = startDate + " - " + endDate;
  return (
    <div className="flex mb-8 bg-white rounded-lg shadow-lg py-5 hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="p-4 mr-6 w-1/2">
        <h3 className="from-neutral-50 text-2xl ml-3">{institution}</h3>
        <div className="p-3 mr-8">
          <InfoItem index="edu" label={role} value={date.toString()} />
        </div>
      </div>
      <div className="w-full mt-2">
        <h4 className="from-neutral-50 text-2xl mb-6">{certificationTitle}</h4>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Education;
