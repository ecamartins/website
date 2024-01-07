import { Chip, Typography } from "@mui/material";
import React, { useMemo } from "react";


export interface ProjectCardProps {
    title: string;
    description: string;
    chipLabels: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ title, description, chipLabels }) => {
    const chips = useMemo(() => {
        return chipLabels.map(label => <Chip label={label} variant="outlined" sx={{ borderColor: "primary.main" }} />)
    }, []);

    return (
        <div className="project-card-container">
            <Typography variant="h6" component="div" sx={{ color: "primary.contrastText" }}>
                {title}
            </Typography>
            <div className="project-card-description">
                {description}
            </div>
            <div className="project-card-chips">
                {chips}
            </div>
        </div>);
})