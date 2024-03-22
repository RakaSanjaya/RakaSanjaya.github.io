import { NavLink } from "react-router-dom";

function Button({ children, className, link }) {
  return (
    <>
      <a
        href={link}
        target="blank"
        className={`px-6 py-3 outline-none border-none text-center mx-auto md:mx-0 w-fit bg-black text-white text-sm font-bold rounded-xl shadow-md ${className}`}>
        {children}
      </a>
    </>
  );
}

export default Button;
