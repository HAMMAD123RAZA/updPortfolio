"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiBootstrap } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaWordpressSimple } from "react-icons/fa";



const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
<li class="flex items-center">
    <FaHtml5  class="mr-1 text-secondary-400"/> 
    <span className="text-xl">Html</span>
</li>

<li class="flex items-center">
    <FaCss3  class="mr-1 text-secondary-400"/> 
    <span className="text-xl">Css</span>
</li>
<li class="flex items-center">
    <TbBrandJavascript  class="mr-1 text-secondary-400"/> 
    <span className="text-xl">Javascript</span>
</li>
<li class="flex items-center">
    <FaReact  class="mr-1 text-secondary-400"/> 
    <span className="text-xl">React</span>
</li>
<li class="flex items-center">
    <SiExpress  class="mr-1 text-secondary-400"/> 
    <span className="text-xl">Express</span>
</li>
<li class="flex items-center">
    <SiTypescript  class="mr-1 text-secondary-400"/> 
    <span className="text-xl">Typescript</span>
</li>
<li class="flex items-center">
    <SiNextdotjs  class="mr-1 text-secondary-400"/> 
    <span className="text-xl">Next Js</span>
</li>
        <li class="flex items-center">
    <SiMongodb  class="mr-1 text-secondary-400"/> 
    <span className="text-xl">MongoDb</span>
</li>
<li class="flex items-center">
    <DiBootstrap  class="mr-1 text-secondary-400"/> 
    <span className="text-xl">Bootstrap</span>
</li>
<li class="flex items-center">
    <SiTailwindcss  class="mr-1 text-secondary-400"/> 
    <span className="text-xl">Tailwind</span>
</li>
<li class="flex items-center">
    <SiMui class="mr-2 text-secondary-400"/> 
    <span className="text-xl">Mui</span>
</li>
<li class="flex items-center">
    <FaWordpressSimple size={21 } class="mr-2 text-secondary-400"/> 
    <span className="text-xl">Wordpress</span>
</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="mb-3">BSCS <br />SMIU, Karachi Pakistan</li>
        <li>Pre Engg <br />SM Sci Clg, Karachi Pakistan</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li className="mb-3">CPISM (Frontend development) <br />Aptech, Karachi Pakistan</li>
        <li>Web And App Development <br/> Saylani Mass It Training Center</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image src="/portImg.jpeg" alt="myImg" width={300} height={400} className="rounded-full" /> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-secondary-500 mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React,Express, MongoDb,
             HTML, CSS, Bootstrap ,Mui ,Tailwind and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing Web applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;