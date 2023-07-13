import BoxSkill from "../../Components/BoxSkill/BoxSkill";
import Nav from "../../Components/Nav/Nav";

//Tecnologias - icons
import {
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiSass,
  SiBulma,
  SiGithub,
  SiMysql,
  SiFigma,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  return (
    <>
      <Nav></Nav>
      <div id="skills" className="h-auto min-h-[1000px] text-white text-2xl">
        <Nav></Nav>
        <div className="  flex flex-col items-center w-4/5 m-auto  ">
          <h1 className="text-4xl text-center font-bold py-10 uppercase">
            Habilidades:
          </h1>
          <div className="flex flex-wrap max-w-[600px]  gap-10 justify-center h-auto mb-5 ">
            <BoxSkill
              icon={<SiHtml5 className="h-20 w-20"></SiHtml5>}
            ></BoxSkill>
            <BoxSkill icon={<SiCss3 className="h-20 w-20"></SiCss3>}></BoxSkill>
            <BoxSkill
              icon={<SiJavascript className="h-20 w-20"></SiJavascript>}
            ></BoxSkill>
            <BoxSkill
              icon={<SiBootstrap className="h-20 w-20"></SiBootstrap>}
            ></BoxSkill>
            <BoxSkill
              icon={<SiTailwindcss className="h-20 w-20"></SiTailwindcss>}
            ></BoxSkill>
            <BoxSkill icon={<SiSass className="h-20 w-20"></SiSass>}></BoxSkill>
            <BoxSkill
              icon={<SiBulma className="h-20 w-20"></SiBulma>}
            ></BoxSkill>
            <BoxSkill
              icon={<SiFigma className="h-20 w-20"></SiFigma>}
            ></BoxSkill>
            <BoxSkill
              icon={<SiReact className="h-20 w-20"></SiReact>}
            ></BoxSkill>
            <BoxSkill
              icon={<SiGithub className="h-20 w-20"></SiGithub>}
            ></BoxSkill>
            <BoxSkill
              icon={<SiMysql className="h-20 w-20"></SiMysql>}
            ></BoxSkill>
            <BoxSkill
              icon={<SiNodedotjs className="h-20 w-20"></SiNodedotjs>}
            ></BoxSkill>
            <BoxSkill
              icon={<SiMongodb className="h-20 w-20"></SiMongodb>}
            ></BoxSkill>
          </div>
          <h1 className="text-4xl text-center font-bold py-10 uppercase">
            Estudando:
          </h1>
          <div className="flex flex-wrap max-w-[600px]  gap-10 justify-center h-auto mb-5 ">
            <BoxSkill
              icon={<SiNextdotjs className="h-20 w-20"></SiNextdotjs>}
            ></BoxSkill>
            <BoxSkill
              icon={<SiTypescript className="h-20 w-20"></SiTypescript>}
            ></BoxSkill>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
