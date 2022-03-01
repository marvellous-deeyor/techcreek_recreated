import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import {motion}  from "framer-motion"

const Header = () => {
  
  const navItems = [
    { title: "Learn", path: "/learn" },
    { title: "Create", path: "/create" },
    { title: "Connect", path: "/connect" },
    { title: "Members", path: "/members" },
    
  ]
  
  ;
  
  
  
  
  return (
    <motion.nav
     className="heading_container"
      animate={{
        y:"1vh",
        opacity:1,
      }}
      initial={{
        y:"-40vh",
        opacity:0.5,
      }}
      transition={{
        duration:2,
      }}
    >
      <div className="logo">
        <a href="/"><img src={logo} alt="logo" /><br /> </a>
        <h2>Tech creek</h2>
      </div>

      <div className="right">
        <ul className="nav__links">
          {navItems.map((navItem, index) => {
            return (
              <li className="nav__item" key={index}>
                <Link to={navItem.path}>{navItem.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </ motion.nav>
  );
};

export default Header;