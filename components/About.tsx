"use client";

import SectionHeading from "@/components/SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const About = () => {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About Me</SectionHeading>
            <div className="w-full">
            <p className="mb-3">
                After graduating with a degree in{" "}
                <span className="font-medium">Physics</span>, I decided to
                pursue my passion for programming. I started learing{" "}
                <span className="font-medium">full-stack web development</span>{" "}
                and mobile apps.{" "}
                <span className="italic">My favorite part of programming</span>{" "}
                is the problem-solving aspect. I{" "}
                <span className="underline">love</span> the feeling of finally
                figuring out a solution to a problem. My tech
                stack is{" "}
                <span className="font-medium">
                    React, Next.js, and Typescript for web development, Go for backend development and cli apps, and Flutter for mobile apps.
                </span>{" "}
                I am also familiar with different database relational and non-relational databases like MongoDB, Convex DB, SQL Server, and SQLite. I am always looking to learn new technologies.
            </p>
            <p>
                <span className="italic">When I&apos;m not coding</span>, I enjoy
                working out, playing video games, watching movies, mountain
                biking, and playing sports. More recently I spend most of my time with my family after becoming a father last year. 
            </p>
            </div>
        </motion.section>
    );
};

export default About;
