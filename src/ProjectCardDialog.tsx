import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { iconLinkStyles } from './utils/interfaces';
import { Tooltip } from '@mui/material';

interface ProjectCardDialogProps extends ProjectCardDialogInfo {
    open: boolean;
    onCloseClick: () => void;
    title: string;

}

export interface ProjectCardDialogInfo {
    dialogDescription: string;
    sourceCodeLink: string;
    projectLink: string;
}


export const ProjectCardDialog: React.FC<ProjectCardDialogProps> = React.memo(({ open, onCloseClick, title, dialogDescription, sourceCodeLink, projectLink }) => {

    return (
        <>
            <Dialog
                onClose={() => onCloseClick()}
                open={open}
                fullWidth
            >
                <DialogTitle sx={{ m: 0, p: 2 }}>
                    {title}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={() => onCloseClick()}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        ...iconLinkStyles
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent>
                    {dialogDescription}
                    <div className="project-card-dialog-icons-container">
                        {sourceCodeLink && <Tooltip title="source code" placement="left"><a href={sourceCodeLink} target="_blank"><GitHubIcon fontSize="large" sx={iconLinkStyles} /></a></Tooltip>}
                        {projectLink && <Tooltip title="project link" placement="right"><a href={projectLink} target="_blank"><LaunchIcon fontSize="large" sx={iconLinkStyles} /></a></Tooltip>}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
});