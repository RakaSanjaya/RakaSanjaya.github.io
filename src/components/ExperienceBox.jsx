export default function ExperienceBox({ link, judul, desc, time }) {
  return (
    <a href={link} hrefLang="id" target="_blank" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
      <div className="w-full flex flex-col gap-3 py-8 text-center mx-auto rounded-xl bg-whiteDeep dark:bg-greylight shadow-md hover:border-blue border border-transparent duration-300 hover:cursor-pointer hover:bg-whiteDeep">
        <h3 className="font-bold text-md text-center dark:text-white">{judul}</h3>
        <div className="text-[14px] text-blue font-bold text-center">{desc}</div>
        <span className="text-[10px] text-centerdark:text-white dark:text-white">{time}</span>
      </div>
    </a>
  );
}
