import React from "react";
import { PageDetails } from "./utils/common";
import { Typography } from "@mui/material";
import { bioText } from "./utils/projectData";


export const Biography: React.FC<PageDetails> = React.memo(({ show }) => {
    if (!show) return <></>;

    return (
        <div className="bio-page-wrapper">
            <Typography variant="h4" component="div" sx={{ color: "secondary.main", textAlign: "center", marginBottom: "8px", marginTop: "8px", textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)" }}>
                Biography
            </Typography>
            <img className="bio-page-image" src="/bio_photo.jpg" alt="Profile" />
            <div className="bio-page-description">
                {bioText}
            </div>

        </div >);
})