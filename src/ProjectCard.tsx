import { Chip, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import { ProjectCardDialog, ProjectCardDialogInfo } from "./ProjectCardDialog";


export interface ProjectCardProps extends ProjectCardDialogInfo {
    title: string;
    description: string;
    chipLabels: string[];
}


export const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ title, description, chipLabels, dialogDescription, sourceCodeLink, projectLink, additionalInfo }) => {
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    const chips = useMemo(() => {
        return chipLabels.map(label => <Chip label={label} variant="outlined" sx={{ borderColor: "primary.contrastText", color: "primary.contrastText", margin: "2px", borderWidth: 1.5 }} />)
    }, []);

    return (
        <>
            <div className="project-card-container">
                <Typography variant="h5" component="div" sx={{ color: "primary.contrastText", textAlign: "center" }}>
                    {title}
                </Typography>
                <div className="project-card-description">
                    {description}
                </div>
                <div className="project-card-chips">
                    {chips}
                </div>
                <div className="project-card-icon">
                    <InfoIcon fontSize="large" sx={{ color: "primary.main", "&:hover": { color: "secondary.main" }, cursor: "pointer" }} onClick={() => setOpenDialog(true)} />
                </div>
            </div>
            <ProjectCardDialog open={openDialog} onCloseClick={() => setOpenDialog(false)} title={title} dialogDescription={dialogDescription} sourceCodeLink={sourceCodeLink} projectLink={projectLink} additionalInfo={additionalInfo} />

        </>);
})