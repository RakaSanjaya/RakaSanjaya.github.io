export default function Illustration() {
  return (
    <section
      class="md:my-28 mt-20 flex flex-col mx-4 md:flex-row md:justify-center md:items-center"
      data-aos="fade-up"
      data-aos-duration="800">
      <img src="/public/illustration/img-programmer.png" alt="img-programmer" class="mx-auto w-9/12 md:w-3/12" />
      <p class="mx-auto text-md md:text-xl mt-5 md:mt-2 text-center">
        <span class="text-blue">Hi, I'm </span>
        <a
          href="https://id.wikipedia.org/wiki/Perancang_grafis"
          target="_blank"
          class="hover:text-blue ease-in-out duration-500 dark:text-white dark:hover:text-blue">
          {" "}
          Frontend Developer
        </a>
        <span class="text-blue"> and </span>
        <a
          href="https://id.wikipedia.org/wiki/Pengembang_web"
          target="_blank"
          class="hover:text-blue ease-in-out duration-500 dark:text-white dark:hover:text-blue">
          {" "}
          Graphic Designer
        </a>
      </p>
    </section>
  );
}
