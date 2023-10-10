import React from "react";
import SocialLink from "./SocialLink";

interface SidebarRightProps {
  links: { url: string; icon: React.ElementType }[];
}

const SidebarRight = ({ links }: SidebarRightProps) => {
  return (
    <div className="h-screen fixed right-0 w-1/12 bg-white">
      <div className="mt-24">
        <h3 className="text-2xl text-center font-bold">Links</h3>
        <div className="mt-9 flex flex-col items-center space-y-4">
          {links.map((link, index) => (
            <SocialLink key={index} url={link.url} icon={link.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;
