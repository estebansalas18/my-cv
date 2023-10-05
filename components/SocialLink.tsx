import React from "react";

interface SocialLinkProps {
  url: string;
  icon: React.ElementType;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon: Icon, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="bg-customPurple hover:bg-customPurpleLight w-16 h-16 rounded-full flex items-center justify-center">
        <Icon className="w-11 h-11 text-white text-xl" />
      </div>
    </a>
  );
};

export default SocialLink;