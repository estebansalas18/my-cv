import React from "react";

interface SocialLinkProps {
  url: string;
  icon: React.ElementType;
}

const SocialLink = ({ icon: Icon, url }: SocialLinkProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="bg-customPurple hover:bg-customPurpleLight w-16 h-16 rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-300 ease-in-out">
        <Icon className="w-11 h-11 text-white text-xl" />
      </div>
    </a>
  );
};

export default SocialLink;
