import "./Contact.css";

import { Github, Linkedin } from "lucide-react";
import Button from "../../Components/Button/Button";
import ContactAnimation from "../../Components/LottieAnimation/ContactAnimation";
import Nav from "../../Components/Nav/Nav";

const Contact = () => {
  return (
    <>
      <div
        className="min-h-[900px] h-auto flex items-center justify-center text-white text-2xl"
        id="contact"
      >
        <Nav></Nav>
        <div className="w-full flex  justify-center ">
          <div className="max-w-[1000px] h-auto mx-[30px] flex flex-wrap justify-center gap-12 max-[950px]:gap-0 items-center  bg-blue-700 rounded-xl max-[950px]:max-w-[500px]">
            <div className="max-w-[500px] p-10 max-sm:p-1">
              <ContactAnimation></ContactAnimation>
            </div>
            <div className="max-w-[500px] flex flex-wrap justify-around items-center py-10 h-[300px]">
              <div className="flex gap-10 max-[950px]:mb-10 ">
                <Button
                  link={"https://www.linkedin.com/in/gabrielnascentes/"}
                  icon={<Linkedin className="w-[25px] h-[25px]"></Linkedin>}
                ></Button>
                <Button
                  link={"https://github.com/Gabriel-Nascentes"}
                  icon={<Github className="w-[25px] h-[25px]"></Github>}
                ></Button>
              </div>
              <div className="h-1 bg-gray-900 w-3/4 max-[950px]:mb-10"></div>
              <div className="font-bold">
                <h1 className="text-3xl  pb-3 ">Email:</h1>
                <p className="text-xl hover:text-gray-900 transition delay-100 hover:scale-125 ">
                  gno.gabriel@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
