import BoxSkill from "../../Components/BoxSkill/BoxSkill";
import Nav from "../../Components/Nav/Nav";

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
            <BoxSkill></BoxSkill>
            <BoxSkill></BoxSkill>
            <BoxSkill></BoxSkill>
            <BoxSkill></BoxSkill>
            <BoxSkill></BoxSkill>
            <BoxSkill></BoxSkill>
            <BoxSkill></BoxSkill>
            <BoxSkill></BoxSkill>
            <BoxSkill></BoxSkill>
            <BoxSkill></BoxSkill>
            <BoxSkill></BoxSkill>
            <BoxSkill></BoxSkill>
            <BoxSkill></BoxSkill>
            <BoxSkill></BoxSkill>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
