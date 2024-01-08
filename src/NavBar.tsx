import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { AppPageType } from "./utils/common";


interface NavBarProps {
    onNavBarClick: (page: AppPageType) => void;
}

const navBarStyles = { color: "primary.light", cursor: "pointer", "&:hover": { textDecoration: "underline" } };

export const NavBar: React.FC<NavBarProps> = React.memo(({ onNavBarClick }) => {

    return (
        <>
            <AppBar position="fixed">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h6" component="div" sx={navBarStyles} onClick={() => onNavBarClick("HOME")}>
                        EM
                    </Typography>
                    <Typography variant="h6" component="div" sx={navBarStyles} onClick={() => onNavBarClick("PROJECTS")}>
                        Projects
                    </Typography>
                </Toolbar>
            </AppBar>

            <Toolbar />
        </>
    );
});