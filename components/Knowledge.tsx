import React from "react";

interface KnowledgeProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const Knowledge = ({ icon: Icon, title, description }: KnowledgeProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 text-center hover:scale-105 transition-transform duration-300 ease-in-out">
      <Icon className="text-8xl text-customPurple mb-2 mx-auto" />
      <h3 className="text-2xl font-bold mt-5 mb-4">{title}</h3>{" "}
      <p className="text-lg text-gray-500">{description}</p>
    </div>
  );
};

export default Knowledge;
