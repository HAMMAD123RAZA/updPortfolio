"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Modal from '../components/Modal'

const projectsData = [
  {
    id: 8,
    title: "Woocommerce Wordpress ",
    description: "Created a Wordpress ecommerce  website with Woocommerce plugin ",
    image: "/images/projects/ecomm.png",
    tag: ["All", "FullStack"],
    gitUrl: "https://github.com/HAMMAD123RAZA/todooos.github.io.git",
    previewUrl: "http://hammadraza.lovestoblog.com/",
        videoUrl: "video.mp4", // Add video URL
  },
 
  // {
  //   id: 10,
  //   title: "Animated",git 
  //   description: "An animated Wordpress website with good looking UI Provided using Elementor ",
  //   image: "/images/projects/animatedwp.png",
  //   tag: ["All", "Wordpress"],
  //   gitUrl: "https://github.com/HAMMAD123RAZA/todooos.github.io.git",
  //   previewUrl:"https://practiceproject.wuaze.com/",
      // videoUrl: "", // Add video URL
  // },

  // {
  //   id: 9,
  //   title: "Ecommerce Mobile Store",
  //   description: "Created a mobile selling ecommerce website with Woocommerce plugin ",
  //   image: "/images/projects/mobile.png",
  //   tag: ["All", "Wordpress"],
  //   gitUrl: "https://github.com/HAMMAD123RAZA/todooos.github.io.git",
  //   previewUrl: "http://designprac.infinityfreeapp.com/",
      // videoUrl: "", // Add video URL
  // },

  {
    id: 5,
    title: "Bio Graphy",
    description: "Built completely using Bootstrap 5 and used Aos lib for animation ",
    image: "/images/projects/biography.jpg",
    tag: ["All", "HtmlCss"],
    gitUrl: "https://github.com/HAMMAD123RAZA/beans-bio.git",
    previewUrl: "https://beansbiography.netlify.app/home",
        videoUrl: "video.mp4", // Add video URL
  },
  {
    id: 7,
    title: "Web Design ",
    description: "Designed An Animated Web To enhance my react and tailwind skills",
    image: "/images/projects/design.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/HAMMAD123RAZA/web-design.git",
    previewUrl: "https://web-design-henna.vercel.app/",
        videoUrl: "", // Add video URL
  },
  {
    id: 8,
    title: "Business Family (React Native App )",
    description: "Business Family an application where u can create post in every domain of business like tech , shopping , law , dairy , machines etcTechnologies that were used React native expo , Firebase Native wind (UI) ,  Flat icons , Firebase (Auth) ",
    image: "/images/projects/bussiness.png",
    tag: ["All", "React Native"],
    gitUrl: "https://github.com/HAMMAD123RAZA/BusinessApp-expo.git",
    previewUrl: "https://appho.st/d/RmK78mDV",
        videoUrl: "", // Add video URL
  },

  {
    id: 8,
    title: "Dropify  (FullStack)",
    description: "Water Management System using Mysql Express  React and Node js Provided authentication  , Add to cart functionality and filtered out the categories , Request Product funtionality via email ",
    image: "/images/projects/dropweb.png",
    tag: ["All", "FullStack"],
    gitUrl: "https://github.com/HAMMAD123RAZA/Dropify.git",
    previewUrl: "/",
        videoUrl: "", // Add video URL
  },
  {
    id: 8,
    title: "Meals List  (React Native App )",
    description: "A recipe application.where an admin can create recipes on admin side and user can explore them . I've categorized each of the meals . Technologies that were used React native expo ,Firebase ,Native wind (UI) , Flat icons , firebase auth",
    image: "/images/projects/Meal.png",
    tag: ["All", "React Native"],
    gitUrl: "https://github.com/HAMMAD123RAZA/Recipe_Provider_App.git",
    previewUrl: "https://appho.st/d/CRRtTM2Q",
        videoUrl: "", // Add video URL
  },
  {
    id: 6,
    title: "ArtShop (FullStack)",
    description: "An Ecommerce Artshop. Provided authentication , pagination , Add to cart functionality and Admin Dashboard with sanity.Built using mern technologies ",
    image: "/images/projects/Artshop.png",
    tag: ["All", "FullStack"],
    gitUrl: "https://github.com/HAMMAD123RAZA/Ecommerce-Artshope.git",
    previewUrl: "/",
        videoUrl: "", // Add video URL
  },
  //  {
  //   id: 7,
  //   title: "Blog",
  //   description: "Built a Full Stack  Blog Web  with mern technologies . Provided Crud operation and authentication  to enhance my backend skills. Used multer for file uploading",
  //   image: "/images/projects/mernProject.png",
  //   tag: ["All", "FullStack"],
  //   gitUrl: "https://github.com/HAMMAD123RAZA/blogApp.git",
  //   previewUrl: "/",
      // videoUrl: "", // Add video URL

  // },
  // {
  //   id: 6,
  //   title: "Budget Web",
  //   description: "Built using Html Css Js.In this budget web user can fix a date and add monthly expenses and can see overview and can also delete it . ",
  //   image: "/images/projects/budget.jpg",
  //   tag: ["All", "HtmlCss"],
  //   gitUrl: "https://github.com/HAMMAD123RAZA/budget.github.io.git",
  //   previewUrl: "/",
      // videoUrl: "", // Add video URL

  // },

  // {
  //   id: 6,
  //   title: "Gallery",
  //   description: "Built a simple Gallery Web with mern technologies to enhance my backend skills. Used multer for file uploading",
  //   image: "/images/projects/gallery.png",
  //   tag: ["All", "FullStack"],
  //   gitUrl: "https://github.com/HAMMAD123RAZA/Gallery-App.git",
  //   previewUrl: "/",
      // videoUrl: "", // Add video URL

  // },
 
 
  // {
  //   id: 10,
  //   title: "News Web ",
  //   description: "Built using Html Css and Js. Fetched data from an external api for each news",
  //   image: "/images/projects/news.png",
  //   tag: ["All", "HtmlCss"],
  //   gitUrl: "https://github.com/HAMMAD123RAZA/News-Web.git",
  //   previewUrl: "/",
      // videoUrl: "", // Add video URL

  // },
  {
    id: 4,
    title: "Sales Web",
    description: "Developed Sales website using react js,Material Ui ",
    image: "/images/projects/sales.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/HAMMAD123RAZA/Sales-Mui.git",
    previewUrl: "/",
        videoUrl: "", // Add video URL
  },

  {
    id: 11,
    title: "News Web ",
    description: "Built using React Tailwind css and did api integration using news api . Provided pagination and search functionality and categorized all the news in nav menu ",
    image: "/images/projects/kha.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/HAMMAD123RAZA/NewsWeb-with-react-.git",
    previewUrl: "/",
        videoUrl: "", // Add video URL

  },
  // {
  //   id: 1,
  //   title: "Discord Clone",
  //   description: "Cloned discord UI using react js,tailwind",
  //   image: "/images/projects/discord.png",
  //   tag: ["All", "React"],
  //   gitUrl: "https://github.com/HAMMAD123RAZA/Discord-Clone.git",
  //   previewUrl: "/",
  //   videoUrl: "", // Add video URL

  // },

  {
    id: 9,
    title: "Survey Form Generator (FullStack) ",
    description: "Simple full stack CRUD App using Postgresql (Neon Db) ,  Express  React and Node js Where user can enter question and choices . Entered question and choices will be appeared by clicking on view ",
    image: "/images/projects/survey.png",
    tag: ["All", "FullStack"],
    gitUrl: "https://github.com/HAMMAD123RAZA/SurveyFormGenerater.git",
    previewUrl: "https://survey-form-generater-wfnq.vercel.app/",
    videoUrl: "", // Add video URL
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
  videoUrl="/path-to-your-video.mp4" // Add the actual video path here
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