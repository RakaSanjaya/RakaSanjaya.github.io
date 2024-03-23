import { TypeAnimation } from "react-type-animation";
import Sosmed from "./Sosmed";
import Button from "./Button";

export default function HeroSection() {
  return (
    <>
      <section
        className="flex bg-whiteDeep dark:bg-grey bg-opacity-40 justify-center items-center py-10 md:py-24 shadow-md rounded-b-3xl"
        data-aos="fade-down"
        data-aos-duration="800"
        data-aos-easing="ease-in">
        <div className="w-full mx-auto flex flex-col md:flex-row justify-center align-middle items-center">
          <div className="w-1/2">
            <img src="profile-web.png" className="w-72 mx-auto" alt="profile-web" />
          </div>
          <div className="flex mt-8 justify-center align-middle flex-col gap-2 w- full md:w-1/2">
            <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left dark:text-white">
              Raka <span className="text-blue">Sanjaya</span>
            </h1>
            <h2 className="font-bold text-md text-center md:text-start dark:text-white">Jakarta, Indonesia</h2>
            <TypeAnimation
              sequence={["I'm Web Developer", 2000, "I'm Frontend Web Developer", 2000, "I'm Backend Web Developer", 2000]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className="text-center md:text-left w-full dark:text-white"
            />
            <Sosmed />
            <Button link={"cv.pdf"} className={"mt-4 lg:mt-2 w-full md:w-fit hover:border-blue dark:bg-white dark:text-dark "}>
              Download CV
            </Button>
          </div>
        </div>
      </section>
      <section
        className="hidden md:flex justify-around w-10/12 py-4 mx-auto align-middle items-center -mt-12 shadow-md rounded-xl bg-white dark:bg-greylight"
        data-aos="flip-up"
        data-aos-delay="1500"
        data-aos-duration="800"
        data-aos-easing="ease-out">
        <div className="font-bold text-center text-xl text-blue">
          18
          <br />
          <span className="text-sm font-normal text-black dark:text-white">Age</span>
        </div>
        <div className="font-bold text-center text-xl text-blue">
          Brawijaya University
          <br />
          <span className="text-sm font-normal text-black dark:text-white">Education</span>
        </div>
      </section>
      <section>
        <div
          className="md:hidden flex w-11/12 mx-auto gap-x-4 mt-5"
          data-aos="flip-up"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-easing="ease-out">
          <div className="flex w-1/5 h-20 bg-whiteDeep dark:bg-greylight rounded-xl justify-center align-middle items-center flex-col  shadow-md">
            <h2 className="font-bold text-blue text-md lg:text-xl">18</h2>
            <span className="text-xs dark:text-white">Age</span>
          </div>
          <div className="w-4/5 flex h-20 bg-whiteDeep dark:bg-greylight rounded-xl justify-center align-middle shadow-md items-center flex-col">
            <h2 className="font-bold text-blue text-md lg:text-xl">Brawijaya University</h2>
            <span className="text-xs dark:text-white">Education</span>
          </div>
        </div>
      </section>
    </>
  );
}
