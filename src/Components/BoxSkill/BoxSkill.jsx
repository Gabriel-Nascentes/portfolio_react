const BoxSkill = (props) => {
  return (
    <>
      <div className="bg-gray-600 hover:bg-gray-900 font-bold text-white rounded-lg transition delay-100 hover:scale-125 w-28 h-28 flex justify-center items-center">
        {props.icon}
      </div>
    </>
  );
};

export default BoxSkill;
