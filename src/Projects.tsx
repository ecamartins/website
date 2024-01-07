import { Typography } from "@mui/material";
import React from "react";
import { PageDetails } from "./utils/interfaces";


interface ProjectsProps extends PageDetails {
}

export const Projects: React.FC<ProjectsProps> = React.memo(({ show }) => {
    if (!show) return <></>;

    return (<>
        <Typography variant="h4" component="div" sx={{ color: "primary.contrastText" }}>
            Projects
        </Typography></>);
})