import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { BiLogoGithub , BiLogoLinkedin, BiLogoLinkedinSquare } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper" >
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p style={{ marginLeft: '7px' }}>
            Developer Hamza

          </p>
        </motion.span>
        <div className="social">
          <a href="https://github.com/hamzanaseem29">
          <BiLogoGithub size={25} />
          </a>
          <a href="www.linkedin.com/in/hamzanaseem29">
          <BiLogoLinkedin size={25} />
          </a>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
