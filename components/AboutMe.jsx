import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Image from "next/image";

//1d
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
          <ul className="list-disc pl-2">
                <li>React</li>
                <li>Next.js</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>Tailwind CSS</li>
                <li>Python</li>
                <li>C Programming</li>
                <li>C++</li>
                <li>Java</li>
                <li>R Studio</li>
                <li>SQL</li>
                <li>Adobe Animate</li>

          </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
          <ul className="list-disc pl-2">
            <li>BAT x APU Ideathon 2023 - 4th Place</li>
            <li>My Startup Hackaton 2023 - Participate</li>
          </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-2">
                <li>Asia Pacific University - APU</li>
                <li>Wesley Methodist School Ipoh International</li>
          </ul>
        ),
    }
];
//1
const AboutMe = () => {
    //1b
    const[tab, setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    //1a
    return(
        <section className="text-white grid" id="aboutMe">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
                <div>
                    <Image src="/About-Me.png" alt="About Me" width={450} height={450} style={{ borderRadius: "25px" }} />
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
                    <p className="text-base text-justify lg:text-lg">I have completed my degree in Computer Science at APU, where I have been honing my skills in various technologies. I am familiar in backend development, with expertise in Java, C++, C, Python. Besides that,I am skilled in creating visually appealing and user-friendly interfaces using Tailwind CSS.
                        My passion for technology and problem-solving has led me to actively participate in hackathons and ideathon this year. I am not limited to backend tasks and often take on fronted responsibilities, demonstrating my versatility and commitment to delivering complete solutions. </p>
                    <div className="flex flex-row mt-8">
{/* 1e */}
                        <TabButton 
                        selectTab={() => handleTabChange("skills")}
                        active= {tab === "skills"}
                        >
                            
                            Skills
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("experiences")}
                        active= {tab === "experiences"}
                        >
                            {" "}
                            Experiences{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("education")}
                        active= {tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </div>
        </section>

    );
};
export default AboutMe;