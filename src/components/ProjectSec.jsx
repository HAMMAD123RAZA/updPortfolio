"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Discord Clone",
    description: "Cloned Ui of discord using tailwind ",
    image: "/images/projects/discord.png",
    tag: ["All", "Frontend React"],
    gitUrl: "https://github.com/HAMMAD123RAZA/Discord-Clone.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Food Menu Web",
    description: "Catogarized Food items with filter methods and Fetched data by useEffect and used more react concepts to enhance react skills",
    image: "/images/projects/grocey.jpg",
    tag: ["All", "Frontend React"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Blog Web",
    description: "A Full Stack blog web .Provided authentication and used multer for file uploading built using mern technologies",
    image: "/images/projects/mernProject.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/HAMMAD123RAZA/Blog_App.git",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Sales Web",
    description: "Designed Sales website to enhance my frontend skills",
    image: "/images/projects/sales.png",
    tag: ["All", "Frontend React"],
    gitUrl: "https://github.com/HAMMAD123RAZA/Sales-Mui.git",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Bio Graphy",
    description: "Built completely using Bootstrap 5 and used Aos lib for animation ",
    image: "/images/projects/biography.jpg",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/HAMMAD123RAZA/beans-bio.git",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Budget Web",
    description: "Built using Html Css Js.In this budget web user can fix a date and add monthly expenses and can see overview and can also delete it . ",
    image: "/images/projects/budget.jpg",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/HAMMAD123RAZA/budget.github.io.git",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "ArtShop",
    description: "An Ecommerce Artshop. Provided authentication , pagination , Add to cart functionality and Admin Dashboard with sanity.Built using mern technologies ",
    image: "/images/projects/Artshop.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/HAMMAD123RAZA/Ecommerce-Artshope.git",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Gallery",
    description: "Built a simple Gallery Web with mern technologies to enhance my backend skills. Used multer for file uploading",
    image: "/images/projects/gallery.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/HAMMAD123RAZA/Gallery-App.git",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Todo ",
    description: "Built using Html Css and Js. Provided a crud operation using Javascript",
    image: "/images/projects/todo.jpg",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/HAMMAD123RAZA/todooos.github.io.git",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-secondary-400 mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
                <ProjectTag
          onClick={handleTagChange}
          name="Frontend React"
          isSelected={tag === "Frontend React"}
        />
                <ProjectTag
          onClick={handleTagChange}
          name="Full Stack"
          isSelected={tag === "Full Stack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;