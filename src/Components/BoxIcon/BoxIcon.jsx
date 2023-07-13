/* eslint-disable react/prop-types */
const BoxIcon = (props) => {
  return (
    <>
      <div
        className="bg-gray-600 hover:bg-gray-900 font-bold text-white rounded-lg
         transition delay-100 hover:scale-125 w-12 h-12 flex justify-center items-center"
      >
        {props.icon}
      </div>
    </>
  );
};

export default BoxIcon;
