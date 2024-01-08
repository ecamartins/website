import { Typography } from "@mui/material";
import React, { useMemo } from "react";
import { ProjectCard } from "./ProjectCard";
import { PageDetails } from "./utils/common";
import { projectInfo } from "./utils/projectData";

const pageDescription = "Please note that due to academic rules, I am unable to display coursework on this site or keep it in a public GitHub repo. I have coding assignments and/or projects written in Python, Java, C, and AVR Assembly as well as my source code for my React web-apps that I would be happy to show you privately."

export const Projects: React.FC<PageDetails> = React.memo(({ show }) => {
    if (!show) return <></>;

    const projectCards = useMemo(() => {
        return projectInfo.map(project => <ProjectCard title={project.title} description={project.description} chipLabels={project.chipLabels} dialogDescription={project.dialogDescription} sourceCodeLink={project.sourceCodeLink} projectLink={project.projectLink} additionalInfo={project.additionalInfo} />)
    }, []);

    return (
        <div className="projects-page-wrapper">
            <Typography variant="h4" component="div" sx={{ color: "primary.contrastText", textAlign: "center", marginBottom: "8px", marginTop: "8px" }}>
                Projects
            </Typography>
            <div className="project-page-description">
                {pageDescription}
            </div>
            <div className="project-cards">
                {projectCards}
            </div>
        </div>
    );
})