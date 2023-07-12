/* eslint-disable react/prop-types */

const Button = (props) => {
  // const abreLink = () => {};
  return (
    <>
      <button
        className="bg-gray-600 hover:bg-gray-900 font-bold text-white rounded-lg
        py-2.5 px-5 transition delay-100 hover:scale-125 w-full "
      >
        <a href={props.link} target="_blank" rel="noreferrer">
          {props.icon}
        </a>
      </button>
    </>
  );
};

export default Button;
