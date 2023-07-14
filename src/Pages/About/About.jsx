import Nav from "../../Components/Nav/Nav";
import MenAnimation from "../../Components/LottieAnimation/MenAnimation";

//CSS
import "./About.css";

const About = () => {
  return (
    <div
      id="about"
      className="container-about min-h-[900px] h-auto flex items-center justify-center "
    >
      <Nav></Nav>
      <div className="text-white w-full flex  justify-center ">
        <div className="flex flex-wrap max-w-[1000px] bg-blue-700 rounded-xl mx-[30px]">
          <div className="p-10 w-1/2 max-[860px]:w-full">
            <h1 className="text-3xl font-bold pb-10 text-center max-sm:text-2xl  ">
              Desenvolvedor Full-Stack
            </h1>
            <p className="text-xl max-sm:text-lg">
              Olá, sou Gabriel Nascentes, um desenvolvedor full-stack de 32
              anos. Embora minha formação seja em engenharia de
              telecomunicações, estou atualmente fazendo a transição para o
              empolgante mundo da tecnologia da informação. Sou altamente
              comprometido e responsável, e estou constantemente em busca de
              aprimorar meus conhecimentos nessa área em rápida evolução.
            </p>
          </div>
          <div className="max-w-[400px] flex m-auto mb-12 max-sm:w-[80%]">
            <MenAnimation></MenAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
