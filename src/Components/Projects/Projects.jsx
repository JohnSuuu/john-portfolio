import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Movie search App"
          main="this is a movie search App that allows you to find the movies on the internet"
          source_code = "https://github.com/JohnSuuu/movie-search"
          demo = "https://johnsuuu.github.io/movie-search/"
        />

        <ProjectCard
          title="Portfolio"
          main="this is a bloggin website created in next js and used some component library used some component library"
          source_code="https://github.com/JohnSuuu/John-portfolio"
          demo = "https://johnsuuu.github.io/John-portfolio/"
        />

      </div>
    </div>
  );
};

export default Projects;
