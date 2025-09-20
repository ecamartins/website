import { ReactNode } from "react";
import { ProjectCardProps } from "../ProjectCard"

export const bioText: ReactNode = <span>Hi! My name is Emily. I recently graduated from the University of Victoria with a BSc in Computer Science with Honours, graduating with Distinction.<br /><br />Throughout my undergrad I gained industry, teaching, and research experience. I worked 2 internships; one as a web developer at Schneider Electric and another at Arista Networks, writing software for internet switches. I've also worked as a teaching assistant for various courses, including (a) introductory C programming (CSC111), (b) algorithms and data structures (CSC225), and (c) foundations of computer science (CSC 320). In terms of research, I completed my Honours thesis project in the area of GPU computing, supervised by Dr. Sean Chester. I also undertook research funded by NSERC USRA and NSERC CREATE in the area of complexity theory and quantum computing; our paper was accepted at QCE2025.<br /><br />I am extremely passionate about GPU computing. I enjoy finding creative ways to exploit parallelism and strategically use the GPU memory and thread hierarchies to optimize algorithms. I got experience designing and implementing GPU algorithms during my undergrad. Now, I am fortunate to work at AMD, working on Stream-K in ROCm's Composable Kernel library.<br /><br />In my spare time, you can find me running, hiking, and, primarily, training aerial silks!</span>;

export const projectInfo: ProjectCardProps[] = [
    {
        title: "Bipartite GEMM",
        description: "Mixed precision GPU GEMM implementations using Tensor cores and CUDA cores.",
        chipLabels: ["C++", "CUDA", "Tensor Cores", "Mixed Precision", "CUDA Cores", "Warp Primitives"],
        projectLink: "",
        sourceCodeLink: "https://github.com/TeamBipartite/bipartite-gemm",
        dialogDescription: "TODO"
    },
    {
        title: "SCOOP",
        description: "Research project funded by NSERC USRA and NSERC CREATE developing unconstrained \"twins\" of constrained NP-complete problems and corresponding QUBOs.",
        chipLabels: ["QUBOs", "NP-Completeness", "Complexity Theory", "Quantum Computing"],
        publicationInfo: { title: "Accepted at QCE2025!", url: "https://arxiv.org/pdf/2504.10897" },
        projectLink: "https://arxiv.org/pdf/2504.10897",
        sourceCodeLink: "",
        projectToolTip: "publication link",
        dialogDescription: "TODO"
    },
    {
        title: "Multi-client Web Server",
        description: "Multi-client web server using socket programming in Python, involving an implemention of a QUIC-like protocol on top of UDP.",
        chipLabels: ["QUIC-like protocol", "HTTP requests", "Python"],
        projectLink: "",
        sourceCodeLink: "https://gitfront.io/r/ecamartins/BtLkUYHXD4sE/multiclient-web-server/",
        dialogDescription: "TODO"
    },
    {
        title: "MvmtTracker",
        description: "Web-app for users to track their weekly physical activity.",
        chipLabels: ["React", "TypeScript", "Supabase", "SQL"],
        projectLink: "https://physical-activity-tracker.vercel.app/",
        sourceCodeLink: "https://github.com/ecamartins/physical-activity-tracker",
        dialogDescription: "This is a full stack project with a React front-end and a Supabase backend. Without an account, users can view the leaderboard. With an account, users are able to view the leaderboard and add to their activity logs. This is an upgraded version of a previous app; this project makes use of TypeScript and uses a PostgreSQL database.",
        additionalInfo: <div id="mvmt-tracker-additional-info"> (See source code of the deprecated version of the app <a href="https://github.com/ecamartins/ActivityApp" target="_blank">here</ a >)</div>
    },
    // {
    //     title: "Courpass",
    //     description: "Web-app that scrapes the UVic Academic Calendar page to determine if selected courses are prerequisites of other courses.",
    //     chipLabels: ["Python", "Django"],
    //     projectLink: "",
    //     sourceCodeLink: "",
    //     dialogDescription: "This web-app allows users to enter a list of courses and a list of prerequisite courses. The app will displays a table indicating if the searched courses are prerequisites or not. This project is a partner-based project and currently still under development."
    // },

    {
        title: "Random Art Generator",
        description: "Object-Oriented Python program that generates random art as an HTML page.",
        chipLabels: ["Python"],
        projectLink: "https://ecamartins-randomartgenerator-rand-art-ui-63sibp.streamlit.app/",
        sourceCodeLink: "",
        dialogDescription: "For this project, I created an object-oriented Python program that generates random art. My program exploits Python's Random Module to generate a random number of SVG shapes (i.e. circles, squares, ellipses) where each shape also has random dimensions. Each randomly generated piece of 'art' is one of four flavours: green, pastel, red, or default. The link below will take you to a simple UI made with Python's Streamlit library. The UI is simply a way to easy demonstrate my working project. Due to academic regulations, my source code is on a private repo, but I am happy to show it to you if you contact me."
    }
    // {
    //     title: "Linear Kinematics Web App",
    //     description: "Streamlit web-app that enables users to perform analysis of sprinting data obtained with an IMU.",
    //     chipLabels: ["Python"],
    //     projectLink: "https://ecamartins-linear-kinematics-streaml-ephe201-lab3-linkin-sezcry.streamlit.app/",
    //     sourceCodeLink: "",
    //     dialogDescription: "While working in UVic's Motion and Mobility Lab, I created several Streamlit applications. The app at the link below was used as a learning tool for EPHE 201's Linear Kinematics Lab. Users can either import their own sprinting data (obtained from an inertial measurement unit) or use the provided sample data. The app is meant to guide users through a very simple analysis of their data to obtain kinematic variables such as max velocity. Again, no filtering or rigourous processing is done to the data; the app is meant to guide students through a simple analysis only. DISCLAIMER: This project was completed prior to transferring into Computer Science. I wanted to add it to my portfolio to show what I was able to complete prior to taking any computer science courses. I look forward to refactoring the code when I have time in the future."
    // }

];