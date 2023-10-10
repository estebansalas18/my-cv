import React from "react";
import Head from "next/head";
import SidebarLeft from "../components/SidebarLeft";
import MainContent from "../components/Maincontent";
import SidebarRight from "../components/SidebarRight";
import {
  FaAws,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaKey,
} from "react-icons/fa";
import { SiAzuredevops } from "react-icons/si";
import { BiLogoFlutter } from "react-icons/bi";
import { DiScrum } from "react-icons/di";

const Home: React.FC = () => {
  const personalInfo = {
    name: "Juan Esteban Salas Flórez",
    role: "Arquitecto Nube",
    age: 21,
    residence: "Medellín, Colombia",
    email: "JuanesSalas18@gmail.com",
    nationality: "Colombiano",
    profileDescription:
      "Arquitecto Nube en Bancolombia, enfocado en la nube de AWS. Gran capacidad de trabajo de equipo y plenos conocimientos en Frontend. Con intereses en el desarrollo Web y Móvil.",
    languages: [
      { label: "Español", level: 100 },
      { label: "Inglés", level: 80 },
      { label: "Alemán", level: 10 },
    ],
    programming: [
      { label: "Dart", level: 90 },
      { label: "Java", level: 85 },
      { label: "Python", level: 70 },
      { label: "C#", level: 55 },
    ],
    skills: [
      { label: "Arquitectura de Software" },
      { label: "Patrones de diseño" },
      { label: "Infraestructura Nube" },
      { label: "Aplicaciones Móviles" },
    ],
    links: [
      {
        url: "https://www.facebook.com/estebansalasf18/",
        icon: FaFacebook,
      },
      {
        url: "https://www.instagram.com/estebansalas18/",
        icon: FaInstagram,
      },
      {
        url: "https://www.linkedin.com/in/estebansalas18/",
        icon: FaLinkedin,
      },
      { url: "https://github.com/estebansalas18", icon: FaGithub },
    ],
    knowledgeDescription:
      "Mis conocimientos se resumen en fundamentos básicos de Cloud Computing, enfocado en la nube de AWS y adquiriendo nuevos conocimientos de Azure y GCP, también he trabajado con metodologías agiles como Scrum y habilidades escenciales en Git y Github.",
    knowledge: [
      {
        icon: FaAws,
        title: "Amazon Web Services",
        description: "Despliegue de infraestructura en la Nube de AWS",
      },
      {
        icon: BiLogoFlutter,
        title: "Flutter",
        description:
          "Desarrollo de aplicaciones móviles utilizando Android Studio y Dart",
      },
      {
        icon: SiAzuredevops,
        title: "Azure DevOps",
        description: "Creación de pipelines de CI/CD con Azure DevOps",
      },
      {
        icon: FaGithub,
        title: "Git y GitHub",
        description: "Control de versiones y colaboración en proyectos",
      },
      {
        icon: FaKey,
        title: "Directorio Activo",
        description:
          "Administración de usuarios y accesos en Directorio Activo",
      },
      {
        icon: DiScrum,
        title: "Metodologías Ágiles",
        description: "Scrum y Kanban para la gestión de proyectos",
      },
    ],
    educationDescription:
      "Mi educación se comprende en cursos de fundamentos de programación con enfasis en el desarrollo de aplicaciones móviles y web, también he adquirido conocimientos en la nube de AWS y completado la primera certificación y actualmente me encuentro terminando mi pregrado en Ingeniería de Sistemas.",
    educationInfo: [
      {
        institution: "Universidad de Antioquia",
        role: "Estudiante",
        startDate: "Ene 2019",
        endDate: "Actualidad",
        certificationTitle: "Ingeniero de Sistemas",
        description:
          "El título de Ingeniero de Sistemas en la Universidad de Antioquia certifica la formación en diseño, desarrollo y gestión de sistemas de información y tecnologías de la información.",
      },
      {
        institution: "Amazon Web Services",
        role: "Estudiante",
        startDate: "Ene 2023",
        endDate: "Mar 2023",
        certificationTitle: "AWS Cloud Practitioner Essentials",
        description:
          "La certificación AWS Cloud Practitioner Essentials valida los conocimientos esenciales sobre los servicios y conceptos fundamentales de Amazon Web Services (AWS), proporcionando una base sólida para comprender la nube de AWS y sus beneficios.",
      },
      {
        institution: "Colegio de la Universidad Pontificia Bolivariana",
        role: "Estudiante",
        startDate: "Ene 2006",
        endDate: "Dic 2018",
        certificationTitle: "Bachiller Académico",
        description:
          "El título de Bachiller Académico certifica la finalización de la educación secundaria y la competencia en diversas materias académicas, preparando a los estudiantes para la educación superior o el empleo.",
      },
    ],
    projectsDescription:
      "Mi portafolio cuenta con todos los proyectos que he realizado a traves de mi vida Universitaria, en los cuales he adquirido conocimientos en diferentes lenguajes de programación y metodologías de desarrollo.",
    projects: [
      {
        image: "./images/ahorrapp.jpg",
        title: "AhorrApp",
        description:
          "AhorrApp es una aplicación para comprar más y gastar menos.",
        url: "https://github.com/cbasguti/ahorra_app",
      },
      {
        image: "./images/domino.jpg",
        title: "Domino",
        description: "Juego de domino desarrollado en C#",
        url: "https://github.com/estebansalas18",
      },
      {
        image: "./images/empresarial.jpg",
        title: "Uber - CodeF@ctory2023",
        description:
          "Aplicación empresarial para la gestión de socios en Uber desarrollada en Java.",
        url: "https://github.com/estebansalas18/uber-lab1",
      },
      {
        image: "./images/buscaminas.jpg",
        title: "Buscaminas por consola",
        description: "Juego de buscaminas desarrollado en Java para consola.",
        url: "https://github.com/estebansalas18/Buscaminas-Consola",
      },
      {
        image: "./images/ecuaciones.jpg",
        title: "Gauss y Cramer",
        description:
          "Programa que resuelve sistemas de ecuaciones lineales utilizando los métodos de Gauss y Cramer.",
        url: "https://github.com/estebansalas18/Gauss-Cramer",
      },
    ],
  };

  return (
    <div className="bg-gray-200 flex">
      <SidebarLeft {...personalInfo} />
      <div className="w-11 ml-[25%]"></div>
      <MainContent {...personalInfo} />
      <div className="w-11 mr-[8.333333%]"></div>
      <SidebarRight {...personalInfo} />
      <Head>
        <title>Hoja de Vida</title>
      </Head>
    </div>
  );
};

export default Home;
