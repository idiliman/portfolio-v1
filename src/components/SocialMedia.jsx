import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a
          href="mailto: idil.iman1999@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail />
        </a>
      </div>

      <div>
        <a
          href="https://www.linkedin.com/in/idil-iman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>

      <div>
        <a
          href="https://github.com/idiliman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
