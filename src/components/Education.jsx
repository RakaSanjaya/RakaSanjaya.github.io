import EducationBox from "./EducationBox";

export default function Education() {
  return (
    <section className="my-20">
      <h2 class="font-bold text-2xl text-center mb-6 dark:text-white" data-aos="fade-up" data-aos-duration="800">
        <span class="text-blue">Edu</span>cation
      </h2>
      <div div className="flex flex-col align-middle items-center justify-center w-11/12 mx-auto md:flex-row">
        <div class="w-10/12 mx-auto md:w-1/2 mb-6 lg:mb-0" data-aos="fade-up" data-aos-duration="800">
          {" "}
          <img src="public/illustration/edu.png" alt="img-edu" class="flex justify-center md:w-10/12" />
        </div>
        <div class="flex flex-col w-full gap-5 justify-center mx-auto md:w-1/2">
          <EducationBox
            link={"https://ub.ac.id/id/"}
            judul={"UNIVERSITAS BRAWIJAYA"}
            desc={"Brawijaya University (2023 - Now)"}
            isGrauduate={false}
          />
          <EducationBox
            link={"https://www.cybermedia.sch.id/"}
            judul={"SMKS CYBER MEDIA"}
            desc={"Vocational High School (2020 - 2023)"}
            isGrauduate={true}
          />
          <EducationBox
            link={"https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/6094ef95-2bf5-e011-8a55-e36812f6e7ec"}
            judul={"SMPN 154 JAKARTA"}
            desc={"Junior High School (2017 - 2020)"}
            isGrauduate={true}
          />
          <EducationBox
            link={"https://dapo.kemdikbud.go.id/sekolah/215D48EB45C28E4FB764"}
            judul={"SDN CIKOKO 03"}
            desc={"Elementary School (2011 - 2017)"}
            isGrauduate={true}
          />
        </div>
      </div>
    </section>
  );
}
