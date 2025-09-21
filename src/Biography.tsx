import React from "react";
import { PageDetails } from "./utils/common";
import { Typography } from "@mui/material";
import { bioText } from "./utils/projectData";


export const Biography: React.FC<PageDetails> = React.memo(({ show }) => {
    if (!show) return <></>;

    return (
        <div className="bio-page-wrapper">
            <Typography variant="h4" component="div" sx={{ color: "primary.contrastText", textAlign: "center", marginBottom: "8px", marginTop: "8px" }}>
                Biography
            </Typography>
            <img className="bio-page-image" src="/bio_photo.jpg" alt="Profile" />
            <div className="bio-page-description">
                {bioText}
            </div>
        </div >);
})