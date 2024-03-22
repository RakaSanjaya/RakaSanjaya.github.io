import { useState } from "react";
import { NavLink } from "react-router-dom";
import Switcher from "./Switcher";

function Header() {
  const [toggle, setToggle] = useState(false);
  const activeLinkStyle = "text-white font-semibold bg-blue px-4 py-2 rounded-md text-sm";
  const baseStyle = "hover:text-white font-medium px-4 py-2 rounded-md text-sm hover:bg-greylight";
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <header className="md:block fixed top-0 w-full z-50">
        <section className="h-20 lg:px-8 px-4 mx-auto flex justify-between items-center bg-white dark:bg-grey dark:bg-opacity-90 bg-opacity-85 backdrop-blur-md shadow-md dark:shadow-none">
          <h1 className="font-bold dark:text-white">Raka Sanjaya</h1>
          <nav className="hidden md:block">
            <ul className="flex gap-x-4 box-border dark:text-white">
              <li>
                <NavLink to={"/"} className={({ isActive }) => (isActive ? activeLinkStyle : baseStyle)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"} className={({ isActive }) => (isActive ? activeLinkStyle : baseStyle)}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to={"/skills"} className={({ isActive }) => (isActive ? activeLinkStyle : baseStyle)}>
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink to={"/projects"} className={({ isActive }) => (isActive ? activeLinkStyle : baseStyle)}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} className={({ isActive }) => (isActive ? activeLinkStyle : baseStyle)}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="hidden md:block">
            <Switcher />
          </div>
          <button className="md:hidden" onClick={handleToggle}>
            <svg
              className="dark:text-white"
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1.3em"
              width="1.3em"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </section>
      </header>

      <Sidebar toggle={toggle} />
    </>
  );
}
function Sidebar({ toggle }) {
  const navStyle = "flex justify-between align-middle shadow-md font-medium w-full rounded-xl p-4 text-end duration-500 ease-out";
  const styleActive = " bg-dark dark:bg-white text-white dark:text-dark";
  const stylePassive =
    " hover:bg-dark hover:bg-opacity-70 dark:hover:bg-white dark:hover:bg-opacity-30 bg-white hover:text-white text-dark bg-opacity-10 dark:text-white";

  return (
    <section
      className={`md:hidden fixed w-3/5 h-screen top-20 duration-700 ease-out bg-white dark:bg-dark dark:bg-opacity-80 bg-opacity-80 backdrop-blur-xl shadow-md -mt-0 ${
        toggle ? "right-0" : "-right-full"
      } shadow-md z-10`}>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2 items-end p-4">
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              return navStyle + (isActive ? styleActive : stylePassive);
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.7"
              stroke="currentColor"
              className={"w-5 h-5"}>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) => {
              return navStyle + (isActive ? styleActive : stylePassive);
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.7"
              stroke="currentColor"
              className="w-5 h-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            About
          </NavLink>
          <NavLink
            to={"/skills"}
            className={({ isActive }) => {
              return navStyle + (isActive ? styleActive : stylePassive);
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.7"
              stroke="currentColor"
              className="w-5 h-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
              />
            </svg>
            Skills
          </NavLink>
          <NavLink
            to={"/projects"}
            className={({ isActive }) => {
              return navStyle + (isActive ? styleActive : stylePassive);
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.7"
              stroke="currentColor"
              className="w-5 h-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
              />
            </svg>
            Projects
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => {
              return navStyle + (isActive ? styleActive : stylePassive);
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.7"
              stroke="currentColor"
              className="w-5 h-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            Contact
          </NavLink>
          <hr />
        </div>
        <div className="relative flex-col-reverse justify-end h-screen m-4">
          <div className="flex justify-end h-full align-bottom">
            <Switcher />
          </div>
          <small className="absolute bottom-20 text-xs right-0  pt-4 border-t border-dark border-opacity-20 w-full text-end dark:text-whiteDeep">
            Copyright 2024 - Raka Sanjaya
          </small>
        </div>
      </div>
    </section>
  );
}

export default Header;
