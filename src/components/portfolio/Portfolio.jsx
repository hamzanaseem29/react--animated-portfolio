import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Nextjs Ecommerce",
    img: "/ecommerce.png",
    desc: "An innovative eCommerce platform built using Next.js, Strapi, and TypeScript. Seamlessly combining cutting-edge technologies, it delivers a user-friendly shopping experience. With robust features for like upload products from headless cms.",
    link: "https://ecommerceproject-red.vercel.app/"
  },
  {
    id: 2,
    title: "Educational Web",
    img: "/ed.png",
    desc: "Discover insights on courses, companies, and internships on our educational website. Empowering students with valuable information for informed decisions and career advancement.",
    link: "https://review-website-sigma.vercel.app/"
  },
  {
    id: 3,
    title: "Directory of AI Tools",
    img: "/ai.png",
    desc: "Welcome to the world's premier AI tool directory, featuring over 1000 cutting-edge tools across 5+ categories. Explore and discover the perfect tools tailored to your needs, empowering you to work smarter and more efficiently.",
    link: "https://aidirectory-iota.vercel.app/"
  },
  {
    id: 4,
    title: "Music WebApp",
    img: "/spotify.png",
    desc: "Experience music like never before with our intuitive web app. Discover curated playlists and personalized recommendations, anytime, anywhere.",
    link: "https://soundvibe-webeng.vercel.app/"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref} >
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}>
              <button>See Demo</button>

            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
