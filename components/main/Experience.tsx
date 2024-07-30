import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Experience
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-20">
        <ProjectCard
          src="/head.png"
          title="Software Engineering Fellowship at Headstarter AI |July 2024-September 2024|"
          description="Leaned how to build AI Projects by using technologies like Next.js, AWS EC2, Material UI." 
    
        />
        <ProjectCard
          src="/internship.png"
          title="Software Development Internship at Archi Studies  |May 2024-August 2024"
          description="Engineered and maintained a robust codebase utilizing Firebase and Flutter, resulting in a seamless integration of
backend services and a highly responsive cross-platform mobile application."
        />
        <ProjectCard
          src="/karde.png"
          title="Google Developer Student Club Industry Lead at California State University Long Beach"
          description="Organized and led technical workshops for 50 students on computer science opportunities and essential industry skillsets
in the field of Computer Science."
        />
       
       <ProjectCard
          src="/engg.png"
          title="Research Assistant at California State University Long Beach"
          description=" UsedC#, and Unity , resulting in enhanced road safety insights and a 30% reduction
in identified safety risks for cyclists ."
        />
      </div>
    </div>
  );
};

export default Projects;
