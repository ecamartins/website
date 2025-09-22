import { Chip, Tooltip, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import { ProjectCardDialog, ProjectCardDialogInfo } from "./ProjectCardDialog";
import { iconLinkStyles } from "./utils/common";
import LaunchIcon from '@mui/icons-material/Launch';


export interface ProjectCardProps extends ProjectCardDialogInfo {
    title: string;
    description: string;
    chipLabels: string[];
    publicationInfo?: ProjectCardPublicationInfo;
}

export interface ProjectCardPublicationInfo {
    title: string;
    url: string;
}


export const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ title, description, chipLabels, publicationInfo, dialogDescription, sourceCodeLink, projectLink, additionalInfo, projectToolTip }) => {
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
                {publicationInfo &&
                    <div className="project-card-publication">
                        <span className="project-card-publication-text">{publicationInfo.title}</span>
                        <a href={publicationInfo.url} target="_blank"><LaunchIcon fontSize="small" sx={{ paddingLeft: "4px", paddingTop: "2px", ...iconLinkStyles("primary.contrastText", "secondary.main") }} /></a>
                    </div>
                }
                <div className="project-card-icon">
                    <Tooltip title="project info" placement="right"><InfoIcon fontSize="large" sx={{ color: "primary.main", "&:hover": { color: "secondary.main" }, cursor: "pointer" }} onClick={() => setOpenDialog(true)} /></Tooltip>
                </div>
            </div >
            <ProjectCardDialog open={openDialog} onCloseClick={() => setOpenDialog(false)} title={title} dialogDescription={dialogDescription} sourceCodeLink={sourceCodeLink} projectLink={projectLink} additionalInfo={additionalInfo} projectToolTip={projectToolTip} />

        </>);
})