export default function SkillsBox({ icon, text, level }) {
  return (
    <div
      class="group relative flex justify-between px-3 align-middle items-center border-slate-500 w-full border h-16 rounded-md overflow-hidden hover:bg-whiteDeep hover:bg-opacity-50 duration-500 ease-in hover:border-blue hover:cursor-pointer dark:hover:bg-greylight"
      data-aos="flip-right"
      data-aos-duration="800"
      data-aos-delay="500">
      <img src={`../../public/logo/${icon}`} alt={text} class="w-7" />
      <div class="relative">
        <h3 class="group font-bold text-sm tracking-wider translate-y-2 group-hover:-translate-y-0 z-auto duration-300 ease-out text-end dark:text-white">
          {text}
        </h3>
        <h5 class="group text-xs translate-y-8 group-hover:-translate-y-0 duration-500 ease-out text-end dark:text-white">
          {level}
        </h5>
      </div>
    </div>
  );
}
