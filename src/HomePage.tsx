import React, { useMemo } from "react";
import { iconLinkStyles, PageDetails } from "./utils/common";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LaunchIcon from '@mui/icons-material/Launch';
import { Chip, Typography } from "@mui/material";

const researchInterests: string[] = ["GPU Algorithm Design", "GEMM", "GPU Memory Hierarchy Optimizations"];

export const HomePage: React.FC<PageDetails> = React.memo(({ show }) => {
    if (!show) return <></>;

    const chips = useMemo(() => {
        return researchInterests.map(label => <Chip label={label} variant="outlined" sx={{
            borderColor: "primary.light",
            color: "primary.light",
            margin: "2px",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
        }} />)
    }, []);

    return (
        <div className="home-page-wrapper">
            <div className="home-page-content">
                <div id="home-page-name">
                    <Typography component="span" variant="h1" sx={{ color: "primary.light", textAlign: "center" }}><span id="name-full">Emily Martins</span><span id="name-initials">EM</span></Typography>
                </div>
                <div id="home-page-description"><span id="occupation-full">Software Development Engineer @ AMD</span><span id="occupation-short">SWE @ AMD</span></div>
                <div className="job-description">
                    <div><span id="job-description-full">Working on Stream-K in ROCm's Composable Kernel Library</span><span id="job-description-short">Stream-K in ROCm's CK</span></div>
                    <a href="https://github.com/Rocm/composable_kernel" target="_blank"><LaunchIcon fontSize="small" sx={iconLinkStyles("primary.light", "secondary.main")} /></a>
                </div>
                <div className="research-interests-section">
                    <span id="research-interests-title">Research Interests:</span>
                    <div className="research-chips-section">{chips}</div>
                </div>
                <div className="homepage-resume-section">
                    <span>CV </span>
                    <a href="https://drive.google.com/file/d/172wn3GShuN7N03qjsg1Sd83E4nLXZMT8/view?usp=drive_link" target="_blank"><LaunchIcon fontSize="small" sx={iconLinkStyles("primary.light", "secondary.main")} /></a>
                </div>
                <div className="homepage-icons-container">
                    <a href="mailto: ecamartins@gmail.com"><EmailIcon fontSize="large" sx={iconLinkStyles("primary.light", "secondary.main")} /></a>
                    <a href="https://github.com/ecamartins" target="_blank"><GitHubIcon fontSize="large" sx={iconLinkStyles("primary.light", "secondary.main")} /></a>
                    <a href="https://linkedin.com/in/emily-martins-a36a10299" target="_blank"><LinkedInIcon fontSize="large" sx={iconLinkStyles("primary.light", "secondary.main")} /></a>
                </div>
            </div>
            <div className="homepage-footer-credit">
                <span id="footer-text">Kananaskis, AB, Canada (2025)</span>
            </div>

        </div >);
})