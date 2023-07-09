import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../Content/index";
import '../Content/tech.css'

const Technologies = () => {
  return (
    <div id="technologies">
      <h2>Technologies</h2>
      <section>
        {technologies.map((i,index) => (
          <motion.div key={index} className="motion">
            <h3>{i.name}</h3>
            <img className="img" src={i.icon} alt="icons" height={100} width={100}/>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Technologies;