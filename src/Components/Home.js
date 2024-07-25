import React, { useState, useEffect } from "react";
import Header from "./Header";
import img from "../hero_image-removebg-preview.png";
import "../Css/home.css";
import img1 from "../hand.png";
import img2 from "../Assets/reactjs.svg";
import img3 from "../Assets/html.svg";
import img4 from "../Assets/boostrap.svg";
import img5 from "../Assets/css.svg";
import img6 from "../Assets/mongodb.svg";
import img7 from "../Assets/vscode.svg";
import img8 from "../Assets/javascript.svg";
import img9 from "../Assets/nodejs.svg";
import img10 from "../Assets/java.svg";
import { motion } from "framer-motion";

function Home() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const images = [img2, img3, img4, img5, img6, img7, img8, img9, img10];

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 1 ? prevCount + 1 : 2));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount1((prevCount) => (prevCount < 6 ? prevCount + 1 : 6));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const shakeAnimation = {
    animate: {
      x: [0, -4, 0], // Adjust these values to control the shake effect
      transition: {
        duration: 0.5, // Time for one complete shake cycle
        repeat: Infinity, // Repeat the animation infinitely
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="home-container">
      <div className="header"> <Header/></div>
     
     <div>
      <div className="hero_main" >
        <div className="hero_left">
          <div className="card-body">
            <motion.div
              style={{ marginRight: "20px" }}
              initial={{ opacity: 0, scale: 0, y: 0 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.0 }}>
              <div className="home_hello">
                <h5 className="card-title">Hello</h5>
                <motion.img src={img1} alt="handicon" {...shakeAnimation} />
              </div>
            </motion.div>
            
            <motion.div
              style={{ marginRight: "20px" }}
              initial={{ opacity: 0, scale: 0, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 2 }}
            >
              <h1 className="name">I'm Surendra</h1>
            </motion.div>

            <motion.div
              style={{ marginRight: "20px" }}
              initial={{ opacity: 0, scale: 0, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 4 }}
            >
              <h2 className="card-text">Full Stack Software Developer..</h2>
            </motion.div>

            <motion.div
              style={{ marginRight: "20px" }}
              initial={{ opacity: 0, scale: 0, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 6 }}
            >
              <div className="social-icons">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="bi bi-twitter-x"></i>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-google"></i>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="hero_right parent-container">
          <img src={img} alt="userimage" />
        </div>

        </div>

        <div className="boxoff_down">
          
          <div className="Year_Experience">
            <p className="Year_Experience_Count"> {count}+</p>
            <h4 className="Year_Experience_Year"> Year Of Experience</h4>
          </div>

          <div className="Year_Experience1">
            <p className="Year_Experience_Count"> {count1}+</p>
            <h4 className="Year_Experience_Year">
              Projects successfully completed.
            </h4>
          </div>

        

             <div className="marquee">
            <div className="marquee-inner">
        {images.map((img, index) => (
          <img key={index} className="experience-icon" src={img} alt={`experience-${index}`} />
        ))}
       
        {images.map((img, index) => (
          <img key={index + images.length} className="experience-icon" src={img} alt={`experience-${index}`} />
        ))}
      </div>
    </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
