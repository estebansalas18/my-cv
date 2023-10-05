import React from "react";
import Button from "./Button";
import Knowledge from "./Knowledge";
import Education from "./Education";
import PortfolioItem from "./PortfolioItem";

interface MainContentProps {
  name: string;
  role: string;
  profileDescription: string;
  knowledge: { icon: React.ElementType; title: string; description: string }[];
  educationInfo: {
    institution: string;
    role: string;
    startDate: string;
    endDate: string;
    certificationTitle: string;
    description: string;
  }[];
  projects: {
    title: string;
    description: string;
    image: string;
    url: string;
  }[];
}

const MainContent: React.FC<MainContentProps> = ({
  name,
  role,
  profileDescription,
  knowledge,
  educationInfo,
  projects,
}) => {
  const chunkArray = (array: any[], chunkSize: number) => {
    const groups = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      groups.push(array.slice(i, i + chunkSize));
    }
    return groups;
  };
  const KnowledgeGroups = chunkArray(knowledge, 3);
  return (
    <div className="w-4/5">
      <div className="banner rounded-lg flex bg-white">
        <div className="banner-text w-3/4 mt-28 ml-11 mr-5">
          <h1 className="text-5xl font-bold">
            <p>Soy {name}</p>
            <p className="text-customPurple mt-2">{role}</p>
          </h1>
          <p className="text-lg mt-6 mr-80 text-gray-600">
            {profileDescription}
          </p>
          <Button label="Contactar" />
        </div>
        <div className="w-1/4 mt-12 mr-12">
          <img
            src="./images/my-photo-full.jpg"
            alt="Mi Foto"
            className="object-cover w-auto h-auto"
          />
        </div>
      </div>
      <div className="text-center mt-10">
        <h2 className="text-4xl font-bold">Mis Conocimientos</h2>
        <p className="text-lg mt-3 mb-10 ml-40 mr-40 text-gray-600 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
          volutpat feugiat placerat lobortis. Natoque rutrum semper sed
          suspendisse nunc lectus.
        </p>
      </div>
      {KnowledgeGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="grid grid-cols-3 gap-4 mt-4">
          {group.map((feature, index) => (
            <div key={index} className="col-span-1">
              <Knowledge
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      ))}
      <div className="text-center mt-10">
        <h2 className="text-4xl font-bold">Educación</h2>
        <p className="text-lg mt-3 mb-10 ml-40 mr-40 text-gray-600 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
          volutpat feugiat placerat lobortis. Natoque rutrum semper sed
          suspendisse nunc lectus.
        </p>
      </div>
      <div className="education-container mt-8">
        {educationInfo.map((education, index) => (
          <Education key={index} {...education} />
        ))}
      </div>
      <div className="text-center mt-10">
        <h2 className="text-4xl font-bold">Portafolio</h2>
        <p className="text-lg mt-3 mb-10 ml-40 mr-40 text-gray-600 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
          volutpat feugiat placerat lobortis. Natoque rutrum semper sed
          suspendisse nunc lectus.
        </p>
      </div>
      <div className="w-[1170px] mt-10 mx-auto">
        <div className="flex overflow-x-auto">
          <div className="flex gap-6">
            {projects.map((project, index) => (
              <PortfolioItem
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                url={project.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
