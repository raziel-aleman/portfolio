import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bluejay from "@/public/bluejay.png";
import myflix from "@/public/myflix.png";
import myauth from "@/public/myauth.png";
import gemini from "@/public/gemini.png";
import newsApp from "@/public/news_app.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    /*{
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },*/
    {
        title: "Tech Support I",
        location: "Anchorage, AK",
        description:
            "I worked as a Field Services Technician providing tech support to school staff at several locations in person or remotely. I started learning more programming on my own time.",
        icon: React.createElement(CgWorkAlt),
        date: "2018 - 2020",
    },
    {
        title: "Tech Support II",
        location: "Anchorage, AK",
        description:
            "Same responsabilities as Tech Support I but also including creation of documentation how-to guides and known issues. Led small teams during summer projects to update computers in the schools. I continued learning about web and mobile development technologies and current trends.",
        icon: React.createElement(CgWorkAlt),
        date: "2020 - 2022",
    },
    {
        title: "Programmer Analyst",
        location: "Anchorage, AK",
        description:
            "I perform more technical and specialized work in the design, development, maintenance, and improvement of Student Information Systems. I work with SSMS and MySQL for data querying and data modification. I started putting into practice my knowledge of software development with personal projects.",
        icon: React.createElement(FaReact),
        date: "2022 - Present",
    },
] as const;

export const projectsData = [
    {
        title: "Myflix",
        description:
            "Netflix UI responsive wep app clone with authentication and favorites list.",
        tags: [
            "React",
            "TypeScript",
            "Next.js",
            "MongoDB",
            "Tailwind",
            "Prisma",
            "NextAuth.js",
        ],
        imageUrl: myflix,
    },
    {
        title: "Bluejay",
        description:
            "Twitter responsive web app clone with authentication (credentials and OAuth), follow/unfollow, like, and suggested profiles.",
        tags: [
            "React",
            "TypeScript",
            "Next.js",
            "MongoDB",
            "Tailwind",
            "Prisma",
            "NextAuth.js",
        ],
        imageUrl: bluejay,
    },
    {
        title: "MyAuth",
        description:
            "Simple web app implementing the Next.js App Router and the newer NextAuth v5 (Auth.js) for authentication.",
        tags: [
            "React",
            "TypeScript",
            "Next.js",
            "MongoDB",
            "Tailwind",
            "Prisma",
            "Auth.js",
            "Resend",
        ],
        imageUrl: myauth,
    },
    {
        title: "News App",
        description:
            "Simple news app with offline save functionality.",
        tags: ["Flutter", "Dart"],
        imageUrl: newsApp,
    },
    {
        title: "Gemini Chat App",
        description:
            "Simple real-time chatbot app feautring Google AI Dart SDK. Front-end developed with Flutter and back-end developed with Dart Frog. This app has not been deployed to any app store.",
        tags: ["Flutter", "Dart Frog", "Dart"],
        imageUrl: gemini,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Supabase",
    "MySQL",
    "Python",
    "Django",
    "Framer Motion",
    "Flutter",
    "Dart",
    "Dart Frog",
    "Go",
] as const;
