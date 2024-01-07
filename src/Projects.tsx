import { Typography } from "@mui/material";
import React, { useMemo } from "react";
import { ProjectCard, ProjectCardProps } from "./ProjectCard";
import { PageDetails } from "./utils/interfaces";


interface ProjectsProps extends PageDetails {
}

const projectInfo: ProjectCardProps[] = [
    {
        title: "MvmtTracker",
        description: "Web-app for users to track their weekly physical activity.",
        chipLabels: ["React", "TypeScript", "Supabase", "SQL"]
    },
    {
        title: "Courpass",
        description: "Web-app that scrapes the UVic Academic Calendar page to determine if selected courses are prerequisites of other courses.",
        chipLabels: ["Python", "Django"]
    },

    {
        title: "Random Art Generator",
        description: "Object-Oriented Python program that generates random art as an HTML page.",
        chipLabels: ["Python"]
    },
    {
        title: "Linear Kinematic Web App",
        description: "Streamlit web-app that enables users to perform analysis of sprinting data obtained with an IMU.",
        chipLabels: ["Python"]
    },

]

export const Projects: React.FC<ProjectsProps> = React.memo(({ show }) => {
    if (!show) return <></>;

    const projectCards = useMemo(() => {
        return projectInfo.map(project => <ProjectCard title={project.title} description={project.description} chipLabels={project.chipLabels} />)
    }, []);

    return (
        <div className="projects-page-wrapper">
            <Typography variant="h4" component="div" sx={{ color: "primary.contrastText", textAlign: "center", marginBottom: "8px" }}>
                Projects
            </Typography>
            <div className="project-cards">
                {projectCards}
            </div>
        </div>
    );
})