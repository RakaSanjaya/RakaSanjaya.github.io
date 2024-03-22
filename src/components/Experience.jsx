import ExperienceBox from "./ExperienceBox";

export default function Experience() {
  return (
    <section className="my-20 w-11/12 mx-auto">
      <h2 class="font-bold dark:text-white text-2xl text-center mb-6" data-aos="fade-up" data-aos-duration="800">
        <span class="text-blue">Expe</span>rience
      </h2>
      <div className="grid md:grid-cols-3 gap-6 ">
        <ExperienceBox
          link={"https://jayaprint.id/"}
          judul={"JAYAPRINT"}
          desc={"Digital Marketer"}
          time={"July 2022 - September 2022"}
        />
        <ExperienceBox
          link={"https://pancaalifsukses.com/"}
          judul={"PT Panca Alif Sukses"}
          desc={"Digital Marketer"}
          time={"March 2023 - August 2023"}
        />
        <ExperienceBox
          link={"https://www.instagram.com/odiedit_aja?igsh=MTg1eWxldjg4cm0xdw=="}
          judul={"Freelance"}
          desc={"Photo Editor"}
          time={"December 2021 - August 2022"}
        />
      </div>
    </section>
  );
}
