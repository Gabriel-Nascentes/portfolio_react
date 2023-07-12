// Icons
import { User, Star, Monitor, Mail } from "lucide-react";
// Link
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
//CSS
import "./Nav.css";

const Nav = () => {
  return (
    <div className="container-nav fixed bottom-8 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="mx-auto">
        <div className="area-nav h-[72px] w-[500px] text-black bg-blue-200/50 flex justify-around backdrop-blur-2xl items-center m-auto rounded-full ">
          <LinkScroll
            offset={-200}
            activeClass="active"
            spy={true}
            to="about"
            className="icon cursor-pointer w-[40px] h-[40px] flex items-center justify-center"
          >
            <Link to="/">
              <User className="w-[25px] h-[25px]"></User>
            </Link>
          </LinkScroll>
          <LinkScroll
            offset={-200}
            activeClass="active"
            spy={true}
            to="skills"
            className="icon cursor-pointer w-[40px] h-[40px] flex items-center justify-center"
          >
            <Link to="/skills">
              <Star className="w-[25px] h-[25px]"></Star>
            </Link>
          </LinkScroll>

          <LinkScroll
            offset={-200}
            activeClass="active"
            spy={true}
            to="project"
            className="icon cursor-pointer w-[40px] h-[40px] flex items-center justify-center"
          >
            <Link to="/project">
              <Monitor className="w-[25px] h-[25px]"></Monitor>
            </Link>
          </LinkScroll>
          <LinkScroll
            offset={-200}
            activeClass="active"
            spy={true}
            to="contact"
            className="icon cursor-pointer w-[40px] h-[40px] flex items-center justify-center"
          >
            <Link to="/contact">
              <Mail className="w-[25px] h-[25px]"></Mail>
            </Link>
          </LinkScroll>
        </div>
      </div>
    </div>
  );
};

export default Nav;
