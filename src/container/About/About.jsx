import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap } from "../../wrapper";

function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });

    return () => {};
  }, []);

  return (
    <div className="app__about">
      <h2 className="head-text u-margin-top-sm">
        Id officia cupidatat elit aliquip esse minim aute.
        <span>Mollit magna eiusmod.</span>
        <br />
        means
        <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{
              opacity: 1,
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item u-margin-top-sm"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text u-margin-top-xs">{about.title}</h2>
            <p className="p-text u-margin-top-xs">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AppWrap(About, "about");
