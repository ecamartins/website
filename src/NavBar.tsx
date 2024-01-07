import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { AppPageType } from "./utils/interfaces";


interface NavBarProps {
    onNavBarClick: (page: AppPageType) => void;
}


export const NavBar: React.FC<NavBarProps> = React.memo(({ onNavBarClick }) => {

    return (
        <>
            <AppBar position="fixed">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h6" component="div" sx={{ color: "primary.light", cursor: "pointer", "&:hover": { textDecoration: "underline" } }} onClick={() => onNavBarClick("HOME")}>
                        EM
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ color: "primary.light", cursor: "pointer", "&:hover": { textDecoration: "underline" } }} onClick={() => onNavBarClick("PROJECTS")}>
                        Projects
                    </Typography>
                </Toolbar>
            </AppBar>

            <Toolbar />
        </>
    );
});