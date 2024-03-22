import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function TechIcon({ icon, children, className }) {
  return (
    <div
      data-aos="flip-right"
      data-aos-delay="500"
      data-aos-duration="800"
      data-aos-easing="ease-out"
      class={`flex flex-col align-middle group duration-500 hover:saturate-100 ease-out hover:scale-105 z-[1] relative cursor-pointer`}>
      <img src={`public/logo/${icon}-icon.png`} alt={icon} width="60px" className={`mx-auto ${className} duration-1000`} />
      <span class="text-center mx-auto text-xs relative font-medium mt-3 opacity-0 group-hover:opacity-100 bg-whiteDeep z-50 bg-opacity-40 shadow-md py-1 px-3 rounded-md delay-300 translate-y-4 group-hover:translate-y-0 duration-1000 ease-out dark:bg-greylighten dark:text-white">
        {children}
      </span>
    </div>
  );
}
