/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import { Github, MonitorCheck } from "lucide-react";

const BoxProject = (props) => {
  return (
    <div className=" max-w-[350px] w-auto ">
      <div className="bg-blue-700 min-h-[500px] flex flex-col gap-5 justify-star items-center max-w-[400px] w-auto p-5 rounded-2xl">
        <div>
          <img className="max-w-[300px] w-auto" src={props.img} alt="" />
        </div>
        <div className="flex  flex-col gap-3">
          <h1 className="font-bold">{props.title}</h1>
          <p className="text-xl">{props.description}</p>
          {props.description && <p className="text-sm pt-3">Tecnologias:</p>}
          <div className="flex pt-3 gap-5 flex-wrap justify-center">
            {props.boxIcon}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-16 py-5 mx-24">
        <Button
          link={props.github}
          icon={<Github className="w-[30px] h-[30px]"></Github>}
        ></Button>
        <Button
          link={props.site}
          icon={<MonitorCheck className="w-[30px] h-[30px]"></MonitorCheck>}
        ></Button>
      </div>
    </div>
  );
};

export default BoxProject;
