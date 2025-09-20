import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { iconLinkStyles } from './utils/common';
import { Tooltip, Typography } from '@mui/material';

interface ProjectCardDialogProps extends ProjectCardDialogInfo {
    open: boolean;
    onCloseClick: () => void;
    title: string;

}

export interface ProjectCardDialogInfo {
    dialogDescription: string;
    sourceCodeLink: string;
    projectLink: string;
    additionalInfo?: React.ReactNode;
}


export const ProjectCardDialog: React.FC<ProjectCardDialogProps> = React.memo(({ open, onCloseClick, title, dialogDescription, sourceCodeLink, projectLink, additionalInfo = null }) => {

    return (
        <>
            <Dialog
                onClose={() => onCloseClick()}
                open={open}
                fullWidth
            >
                <DialogTitle>
                    <Typography variant="h5" component="div" sx={{ color: "primary.contrastText" }}>
                        {title}
                    </Typography>
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={() => onCloseClick()}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        ...iconLinkStyles("primary.main")
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent>
                    <div className="project-card-dialog-description">
                        {dialogDescription}
                        {additionalInfo}
                    </div>
                    <div className="project-card-dialog-icons-container">
                        {sourceCodeLink && <Tooltip title="project repo" placement="left"><a href={sourceCodeLink} target="_blank"><GitHubIcon fontSize="large" sx={iconLinkStyles("primary.main")} /></a></Tooltip>}
                        {projectLink && <Tooltip title="project link" placement="right"><a href={projectLink} target="_blank"><LaunchIcon fontSize="large" sx={iconLinkStyles("primary.main")} /></a></Tooltip>}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
});