import { motion } from "framer-motion";
import man from "../../../src/assets/man_2.svg";
import circle from "../../../src/assets/circle.svg";
import { BsArrowRight } from "react-icons/bs";
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
import { AppWrap } from "../../wrapper";

function Header() {
  return (
    <div id="home" className="app__header app__flex">
      {/* Hello/Info */}
      <motion.div
        whileInView={{
          x: [-100, 0],
          opacity: [0, 1],
        }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Idil</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">
              I'm a self taught developer.
              <br />
              Currently. I'm focused on the frontend.
            </p>
          </div>

          <div className="project-button">
            <a href="#work">
              My Current Projects <BsArrowRight />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Profile Pic/img */}
      <motion.div
        whileInView={{
          opacity: [0, 1],
        }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={man} alt="profile_bg" />

        <motion.img
          whileInView={{
            scale: [0, 1],
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      {/* <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      ></motion.div> */}
    </div>
  );
}

export default AppWrap(Header, "home");
