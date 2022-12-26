import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <p className="app__navbar-p">Idil Iman</p>
      </div>

      {/* Main menu */}
      <ul className="app__navbar-links">
        {["home", "work", "skills"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}

        <div className="resume-button">
          <a
            href="https://drive.google.com/file/d/10z3KrwkBiXKLsCNrpZthg0jBxaa_khZ1/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </ul>

      {/* Hamburger menu */}
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />

            <ul>
              {["home", "work", "skills"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
