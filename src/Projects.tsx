import { Typography } from "@mui/material";
import React, { useMemo } from "react";
import { ProjectCard } from "./ProjectCard";
import { PageDetails } from "./utils/common";
import { projectInfo } from "./utils/projectData";

const pageDescription = ""

export const Projects: React.FC<PageDetails> = React.memo(({ show }) => {
    if (!show) return <></>;

    const projectCards = useMemo(() => {
        return projectInfo.map(project => <ProjectCard title={project.title} description={project.description} chipLabels={project.chipLabels} publicationInfo={project.publicationInfo} dialogDescription={project.dialogDescription} sourceCodeLink={project.sourceCodeLink} projectLink={project.projectLink} additionalInfo={project.additionalInfo} projectToolTip={project.projectToolTip} />)
    }, []);

    return (
        <div className="projects-page-wrapper">
            <Typography variant="h4" component="div" sx={{ color: "primary.light", textAlign: "center", marginBottom: "8px", marginTop: "8px", textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)" }}>
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