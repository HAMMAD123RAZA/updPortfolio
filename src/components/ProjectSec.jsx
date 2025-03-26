"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Modal from '../components/Modal'
const projectsData = [
  {
    id: 8,
    isShowVideo: false,
    title: "Woocommerce Wordpress ",
    description: "Created a Wordpress ecommerce  website with Woocommerce plugin ",
    image: "/images/projects/ecomm.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "http://hammadraza.lovestoblog.com/",
      videoUrl: "/vid.mp4", // Add video URL,
      hasEye: true,
      
  },

  {
    id: 5,
    
          isShowVideo: false,
    title: "Bio Graphy",
    description: "Built completely using Bootstrap 5 and used Aos lib for animation ",
    image: "/images/projects/biography.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HAMMAD123RAZA/beans-bio.git",
    previewUrl: "https://beansbiography.netlify.app/home",
    hasEye: true,

        videoUrl: "video.mp4", // Add video URL
  },
  // {
  //   id: 7,
    
  //         isShowVideo: false,
  //   title: "Web Design ",
  //   description: "Designed An Animated Web To enhance my react and tailwind skills",
  //   image: "/images/projects/design.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/HAMMAD123RAZA/web-design.git",
  //   previewUrl: "https://web-design-henna.vercel.app/",
  //   hasEye: true,

  //       videoUrl: "", // Add video URL
  // },
  {
    id: 8,
    
          isShowVideo: false,
    title: "Business Family (React Native App )",
    description: "Business Family an application where u can create post in every domain of business like tech , shopping , law , dairy , machines etcTechnologies that were used React native expo , Firebase Native wind (UI) ,  Flat icons , Firebase (Auth) ",
    image: "/images/projects/bussiness.png",
    tag: ["All", "Application"],
    gitUrl: "https://github.com/HAMMAD123RAZA/BusinessApp-expo.git",
    previewUrl: "https://appho.st/d/RmK78mDV",
                hasEye: true,

        videoUrl: "", // Add video URL
  },
  {
    id: 8,
          isShowVideo: true,
    title: "Dropify  (React Native App )",
    description: "Water Management System using Mysql Express  React and Node js Provided authentication  , Add to cart functionality and filtered out the categories , Request Product funtionality via email",
    image: "/images/projects/drop.png",
    tag: ["All", "Application"],
    gitUrl: "https://github.com/HAMMAD123RAZA/BusinessApp-expo.git",
                hasEye: false,

        videoUrl: "/dropify App Dev.mp4", // Add video URL
  },

  {
    id: 8,
    
          isShowVideo: true,
    title: "Dropify (FullStack)",
    description: "Water Management System using Mysql Express  React and Node js Provided authentication  , Add to cart functionality and filtered out the categories , Request Product funtionality via email ",
    image: "/images/projects/dropweb.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HAMMAD123RAZA/Dropify.git",
    previewUrl: "/",
    hasEye: false,

        videoUrl: "/dropifyWeb.mp4", // Add video URL
  },
  {
    id: 8,
    
          isShowVideo: false,
    title: "Meals List  (React Native App )",
    description: "A recipe application.where an admin can create recipes on admin side and user can explore them . I've categorized each of the meals . Technologies that were used React native expo ,Firebase ,Native wind (UI) , Flat icons , firebase auth",
    image: "/images/projects/Meal.png",
    tag: ["All", "Application"],
    gitUrl: "https://github.com/HAMMAD123RAZA/Recipe_Provider_App.git",
    previewUrl: "https://appho.st/d/CRRtTM2Q",
        videoUrl: "", // Add video URL
        hasEye: true,
  },
  {
    id: 6,
    
          isShowVideo: true,
    title: "ArtShop (FullStack)",
    description: "An Ecommerce Artshop. Provided authentication , pagination , Add to cart functionality and Admin Dashboard with sanity.Built using mern technologies ",
    image: "/images/projects/Artshop.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HAMMAD123RAZA/Ecommerce-Artshope.git",
    previewUrl: "/",
    hasEye: false,

        videoUrl: "/ArtShop.mp4", // Add video URL
  },
 


  {
    id: 11
    ,
          isShowVideo: true,
    title: "News Web ",
    description: "Built using React Tailwind css and did api integration using news api . Provided pagination and search functionality and categorized all the news in nav menu ",
    image: "/images/projects/kha.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HAMMAD123RAZA/NewsWeb-with-react-.git",
    previewUrl: "/",
        videoUrl: "/readify.mp4", // Add video URL
        hasEye: false,
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [videoUrl, setVideoUrl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const onVidClick = (url) => {
    setVideoUrl(url);
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
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
        Portfolio Work
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-4 mb-8">
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Application"
          isSelected={tag === "Application"}
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
  imgUrl={project.image}
  title={project.title}
  description={project.description}
  gitUrl={project.gitUrl}
  previewUrl={project.previewUrl}
  tags={project.tag}
  videoUrl={project.videoUrl}
  isShowVideo={project.isShowVideo}
  hasEye={project.hasEye}
/>
          </motion.li>
        ))}
      </ul>

      {isModalOpen && (
        <Modal videoUrl={videoUrl} onClose={closeModal} />
      )}
    </section>
  );
};

export default ProjectsSection;