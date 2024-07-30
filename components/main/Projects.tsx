import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/xre.png"
          title="X Journal App"
          description="Utilized Grok AI API using Flutter to create a journaling app that uses AI to analyze your writing and provide insights. Here is the Github link to the project: https://github.com/bryanmax9/XHackathonApp"
      
        />
        <ProjectCard
          src="/resize war.png"
          title="War Game"
          description="Utilized C++ and Vim to create a war game that simulates a game of war between two players. Here is the Github link to the project: https://github.com/SrothCS/Wargame"
        />
        <ProjectCard
          src="/srr.png"
          title="Space Themed Website"
          description="Utilized Next.JS and Tailwind CSS with addition to Framer Motion to portray my interest and my skills in Software Development. Here is the link to the project: https://github.com/SrothCS/Space-Portolio"
        />
      
      </div>
    </div>
  );
};

export default Projects;
