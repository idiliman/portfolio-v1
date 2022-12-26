import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { Tooltip } from "react-tooltip";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div className="skills">
      <h2 className="head-text">Skills</h2>

      <div className="skills__container u-margin-top-xs">
        <motion.div className="skills__container-list ">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              key={index}
              className="skills__container-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
