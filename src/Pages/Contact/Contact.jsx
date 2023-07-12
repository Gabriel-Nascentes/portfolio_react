import "./Contact.css";

import { Github, Linkedin } from "lucide-react";
import Button from "../../Components/Button/Button";
import ContactAnimation from "../../Components/LottieAnimation/ContactAnimation";
import Nav from "../../Components/Nav/Nav";

const Contact = () => {
  return (
    <>
      <div
        className="container-contact h-[900px] flex items-center justify-center text-white text-2xl"
        id="contact"
      >
        <Nav></Nav>
        <div className="contact-box flex justify-center items-center gap-[10%] mx-[15%] bg-blue-700 rounded-xl">
          <div className="animation-contact w-1/2 p-10 flex items-center ">
            <ContactAnimation></ContactAnimation>
          </div>
          <div className="info-contact h-64 w-1/4 flex flex-col justify-around items-center ">
            <div className="box-icons flex gap-10">
              <Button
                link={"https://www.linkedin.com/in/gabrielnascentes/"}
                icon={<Linkedin className="w-[25px] h-[25px]"></Linkedin>}
              ></Button>
              <Button
                link={"https://github.com/Gabriel-Nascentes"}
                icon={<Github className="w-[25px] h-[25px]"></Github>}
              ></Button>
            </div>
            <div className="h-1 bg-gray-900 w-full"></div>
            <div>
              <h1 className="text-3xl font-bold pb-3 ">Email:</h1>
              <p className="text-xl font-bold hover:text-gray-900 transition delay-100 hover:scale-125 ">
                gno.gabriel@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
