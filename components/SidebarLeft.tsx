import React from "react";
import SkillBar from "./Skillbar";
import SkillIcon from "./SkillIcon";
import InfoItem from "./InfoItem";

interface SidebarLeftProps {
  name: string;
  role: string;
  age: number;
  residence: string;
  email: string;
  nationality: string;
  languages: { label: string; level: number; color?: string }[];
  programming: { label: string; level: number; color?: string }[];
  skills: { label: string }[];
}

const SidebarLeft = ({
  name,
  role,
  age,
  residence,
  email,
  nationality,
  languages,
  programming,
  skills,
}: SidebarLeftProps) => {
  return (
    <div className="h-screen fixed top-0 p-4 w-1/4 bg-white">
      <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mt-1">
        <img
          src="./images/my-photo.jpg"
          alt="Mi Foto"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="text-center mt-3">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-600 mt-1">{role}</p>
      </div>
      <div className="mt-4 mx-auto" style={{ maxWidth: "75%" }}>
        <InfoItem label="Edad:" value={age.toString()} />
        <InfoItem label="Residencia:" value={residence} />
        <InfoItem label="Correo:" value={email} color="#6a0dad" />
        <InfoItem label="Nacionalidad:" value={nationality} />

        <div className="mt-4">
          <h3 className="text-xl font-bold">Idiomas</h3>
          {languages.map((language, index) => (
            <SkillBar
              key={index}
              label={language.label}
              level={language.level}
              color={language.color}
            />
          ))}
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold">Lenguajes de Programación</h3>
          {programming.map((program, index) => (
            <SkillBar
              key={index}
              label={program.label}
              level={program.level}
              color={program.color}
            />
          ))}
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold">Habilidades Extra</h3>
          {skills.map((skill, index) => (
            <SkillIcon key={index} label={skill.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarLeft;
