import React from "react";
import ProjectCard from "./ProjectCard";


const projectData = [
    {
        id: 1,
        title: "Portfolio",
        description: "Portfolio Website about myself.",
        image: "/projects/projectpic.png",
        gitUrl: "https://github.com/qianjiewong/portfolio"

    },
    {
        id: 2,
        title: "Tasktap",
        description: "Web Application to book and sell services.",
        image: "/projects/tasktap.png",
        gitUrl: "https://tasktap-service-booking-system.vercel.app/"
    },
    {
        id: 3,
        title: "My Weather Checker",
        description: "Web Application to search for weather.",
        image: "/projects/weatherApp.png",
        gitUrl: "https://github.com/qianjiewong/My-Weather-App"
    },
    // {
    //     id: 4,
    //     title: "Project Coming Soon",
    //     description: "This is a project.",
    //     image: "/projects/megamask.png",
    //     gitUrl: "https://github.com/megamask"
    // }, {
    //     id: 5,
    //     title: "Project Coming Soon",
    //     description: "This is a project.",
    //     image: "/projects/zkJom.png",
    //     gitUrl: "https://github.com/trlau/zkJ0M"
    // }, {
    //     id: 6,
    //     title: "Project Coming Soon",
    //     description: "This is a project.",
    //     image: "/projects/attestme.png",
    //     gitUrl: "https://github.com/0xBenjamintan/attestMe"
    // }, 

];

const Projects = () => {
    return (
        <div id="projects">
            <div className="text-4xl font-semibold mb-8">My Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />))}
            </div>
        </div>
    );
};

export default Projects;
