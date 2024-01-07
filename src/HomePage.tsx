import React from "react";
import { PageDetails } from "./utils/interfaces";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import FlareIcon from '@mui/icons-material/Flare';
import LaunchIcon from '@mui/icons-material/Launch';
import { Typography } from "@mui/material";



interface HomePageProps extends PageDetails {
}

export const HomePage: React.FC<HomePageProps> = React.memo(({ show }) => {
    if (!show) return <></>;

    return (
        <div className="home-page-wrapper">
            <div className="home-page-content">
                <div id="home-page-name">
                    <span className="name-icon"><FlareIcon fontSize="large" sx={{ color: "primary.contrastText" }} /></span>
                    <Typography component="span" variant="h1" sx={{ color: "primary.contrastText" }}>Emily Martins</Typography>
                    <span className="name-icon"><FlareIcon fontSize="large" sx={{ color: "primary.contrastText" }} /></span>
                </div>
                <div id="home-page-description">BSc Computer Science — 4<sup>th</sup> Year</div>
                <div className="homepage-resume-section">
                    <span>Resume </span>
                    <a href=""><LaunchIcon fontSize="small" sx={{ color: "primary.main", "&:hover": { color: "primary.contrastText" } }} /></a>
                </div>
                <div className="homepage-icons-container">
                    <a href="mailto: emilymartins@uvic.ca"><EmailIcon fontSize="large" sx={{ color: "primary.main", "&:hover": { color: "primary.contrastText" } }} /></a>
                    <a href="https://github.com/ecamartins" target="_blank"><GitHubIcon fontSize="large" sx={{ color: "primary.main", "&:hover": { color: "primary.contrastText" } }} /></a>
                </div>
            </div>

        </div >);
})