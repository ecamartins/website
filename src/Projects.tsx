import { Typography } from "@mui/material";
import React, { useMemo } from "react";
import { ProjectCard, ProjectCardProps } from "./ProjectCard";
import { PageDetails } from "./utils/interfaces";


interface ProjectsProps extends PageDetails {
}

const projectInfo: ProjectCardProps[] = [
    {
        title: "MvmtTracker",
        description: "Web-app for users to track their weekly physical activity.",
        chipLabels: ["React", "TypeScript", "Supabase", "SQL"],
        projectLink: "https://physical-activity-tracker.vercel.app/",
        sourceCodeLink: "https://github.com/ecamartins/physical-activity-tracker",
        dialogDescription: "This is a full stack project with a React front-end and a Supabase backend. Without an account, users can view the leaderboard. With an account, users are able to view the leaderboard and add to their activity logs. This is an upgraded version of a previous app; this project makes use of TypeScript and uses a PostgreSQL database.",
        additionalInfo: <div id="mvmt-tracker-additional-info">(See the source code the deprecated version of the app <a href="https://github.com/ecamartins/ActivityApp">here</a>)</div>
    },
    {
        title: "Courpass",
        description: "Web-app that scrapes the UVic Academic Calendar page to determine if selected courses are prerequisites of other courses.",
        chipLabels: ["Python", "Django"],
        projectLink: "",
        sourceCodeLink: "",
        dialogDescription: "This web-app allows users to enter a list of courses and a list of prerequisite courses. The app will displays a table indicating if the searched courses are prerequisites or not. This project is a partner-based project and currently still under development."
    },

    {
        title: "Random Art Generator",
        description: "Object-Oriented Python program that generates random art as an HTML page.",
        chipLabels: ["Python"],
        projectLink: "https://ecamartins-randomartgenerator-rand-art-ui-63sibp.streamlit.app/",
        sourceCodeLink: "",
        dialogDescription: "For this project, I created an object-oriented Python program that generates random art. My program exploits Python's Random Module to generate a random number of SVG shapes (i.e. circles, squares, ellipses) where each shape also has random dimensions. Each randomly generated piece of 'art' is one of four flavours: green, pastel, red, or default. The link below will take you to a simple UI made with Python's Streamlit library. The UI is simply a way to easy demonstrate my working project. Due to academic regulations, my source code is on a private repo, but I am happy to show it to you if you contact me."
    },
    {
        title: "Linear Kinematic Web App",
        description: "Streamlit web-app that enables users to perform analysis of sprinting data obtained with an IMU.",
        chipLabels: ["Python"],
        projectLink: "https://ecamartins-linear-kinematics-streaml-ephe201-lab3-linkin-sezcry.streamlit.app/",
        sourceCodeLink: "",
        dialogDescription: "While working in UVic's Motion and Mobility Lab, I created several Streamlit applications. The app at the link below was used as a learning tool for EPHE 201's Linear Kinematics Lab. Users can either import their own sprinting data (obtained from an inertial measurement unit) or use the provided sample data. The app is meant to guide users through a very simple analysis of their data to obtain kinematic variables such as max velocity. Again, no filtering or rigourous processing is done to the data; the app is meant to guide students through a simple analysis only. DISCLAIMER: This project was completed prior to transferring into Computer Science. I wanted to add it to my portfolio to show what I was able to complete prior to taking any computer science courses. I look forward to refactoring the code when I have time in the future."
    },

]

const pageDescription = "Please note that due to academic rules, I am unable to display coursework on this site or keep it in a public GitHub repo. I have coding assignments and/or projects written in Python, Java, C, and AVR Assembly as well as my source code for my React web-apps that I would be happy to show you privately."

export const Projects: React.FC<ProjectsProps> = React.memo(({ show }) => {
    if (!show) return <></>;

    const projectCards = useMemo(() => {
        return projectInfo.map(project => <ProjectCard title={project.title} description={project.description} chipLabels={project.chipLabels} dialogDescription={project.dialogDescription} sourceCodeLink={project.sourceCodeLink} projectLink={project.projectLink} additionalInfo={project.additionalInfo} />)
    }, []);

    return (
        <div className="projects-page-wrapper">
            <Typography variant="h4" component="div" sx={{ color: "primary.contrastText", textAlign: "center", marginBottom: "8px" }}>
                Projects
            </Typography>
            <div className="project-page-description">
                {pageDescription}
            </div>
            <div className="project-cards">
                {projectCards}
            </div>
        </div>
    );
})