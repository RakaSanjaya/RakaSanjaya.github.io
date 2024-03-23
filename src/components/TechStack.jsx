import TechIcon from "./TechIcon";

export default function TechStack() {
  return (
    <section className="my-20">
      <h2
        class="text-center text-2xl lg:text-xl font-bold text-blue rounded-xl w-fit mb-6 mx-auto"
        data-aos="fade-up"
        data-aos-duration="800">
        <span class="text-black dark:text-white">Tech</span> Stack
      </h2>
      <div
        className="grid grid-cols-3 md:flex md:flex-wrap md:justify-between mx-8 md:items-start p-5 gap-6"
        data-aos="fade-up"
        data-aos-duration="800">
        <TechIcon icon="Html">HTML 5</TechIcon>
        <TechIcon icon="Css">CSS 3</TechIcon>
        <TechIcon icon="Js">Javascript</TechIcon>
        <TechIcon icon="React" className={"group-hover:rotate-180"}>
          React JS
        </TechIcon>
        <TechIcon icon="Nextjs">Next JS</TechIcon>
        <TechIcon icon="Bootstrap">Bootstrap</TechIcon>
        <TechIcon icon="Tailwind">Tailwind</TechIcon>
        <TechIcon icon="Nodejs">Node JS</TechIcon>
        <TechIcon icon="MySQL">MySQL</TechIcon>
      </div>
    </section>
  );
}
