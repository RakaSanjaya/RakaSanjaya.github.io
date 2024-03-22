export default function EducationBox({ link, judul, desc, isGrauduate }) {
  return (
    <>
      <a href={link} target="_blank">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          class={`text-center relat ive py-10 bg-whiteDeep rounded-xl shadow-md border border-transparent dark:bg-greylight dark:hover:bg-greylighten hover:bordered hover:border-blue duration-500 ease-out md:px-10 md:py-6 ${
            isGrauduate ? "before:content-['Passed']" : "before:content-['NOW']"
          } ${
            isGrauduate ? "before:bg-green-600" : "before:bg-red-600"
          } before:absolute before:rounded-md lg:before:top-2 before:w-20 lg:before:right-2 before:text-white lg:before:py-2 before:px-2 lg:before:text-xs lg:before:w-20 before:right-2 before:top-2 before:py-1 before:text-xs before:tracking-wide`}>
          <h3 class="font-bold text-blue text-md md:text-base">{judul}</h3>
          <span class="text-xs dark:text-white">{desc}</span>
        </div>
      </a>
    </>
  );
}
