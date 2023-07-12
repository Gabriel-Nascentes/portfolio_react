import Nav from "../../Components/Nav/Nav";
import MenAnimation from "../../Components/LottieAnimation/MenAnimation";

//CSS
import "./About.css";

const About = () => {
  return (
    <div
      id="about"
      className="container-about h-[900px] flex items-center justify-center "
    >
      <Nav></Nav>
      <div className="text-white w-full  ">
        <div className="about-box flex gap-[10%] mx-[15%] bg-blue-700 rounded-xl">
          <div className="about-text w-1/2  p-10">
            <h1 className="text-4xl font-bold pb-10 text-center ">
              Desenvolvedor Front-end e Desing Ui/Ux
            </h1>
            <p className="w-[2/4] text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              libero id nulla suscipit voluptates quos impedit nemo. Soluta, qui
              voluptas.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Facere libero id nulla suscipit voluptates quos impedit nemo.
              Soluta, qui voluptas.
            </p>
          </div>
          <div className="about-animation w-1/2 p-10 flex items-center ">
            <MenAnimation></MenAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
