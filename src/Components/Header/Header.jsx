// Icons
import { Github, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <div className="container m-auto px-3 py-5  ">
      <div className="flex justify-center gap-8 items-center">
        <button className="bg-gray-600 hover:bg-gray-900  font-bold text-white rounded-lg py-2.5 px-5 transition delay-100 hover:scale-125  ">
          <a
            href={"https://www.linkedin.com/in/gabrielnascentes/"}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin></Linkedin>
          </a>
        </button>
        <button className="bg-gray-600 hover:bg-gray-900  font-bold text-white rounded-lg py-2.5 px-5 transition delay-100 hover:scale-125  ">
          <a
            href={"https://github.com/Gabriel-Nascentes"}
            target="_blank"
            rel="noreferrer"
          >
            <Github></Github>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Header;
