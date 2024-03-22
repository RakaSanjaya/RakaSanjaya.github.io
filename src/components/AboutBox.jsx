export default function AboutBox() {
  return (
    <section class="flex flex-col w-11/12 md:w-11/12 justify-center mx-auto gap-5 my-5 md:my-24">
      <div
        class="about-me bg-whiteDeep dark:bg-greylight dark:text-white shadow-md p-5 md:py-8 md:px-10 rounded-xl"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800">
        <h2 class="text-center text-2xl font-bold mb-2">
          <span class="text-blue">About </span>Me
        </h2>

        <p class="text-sm text-center">
          Nama saya
          <span class="font-bold text-blue"> Raka Sanjaya, </span>
          Saya adalah Mahasiswa yang berkuliah di Jurusan
          <span class="font-bold text-blue"> Teknologi Informasi. </span>
          Hobi saya adalah Mendengarkan musik, Coding, dan Membaca. Saya Bercita-cita menjadi seorang
          <span class="font-bold text-blue"> Graphic Designer </span>, Dan
          <span class="font-bold text-blue"> Fullstack Web Developer.</span>
        </p>
      </div>
      <div class="flex flex-col md:flex-row gap-5">
        <div
          class="visi bg-whiteDeep dark:bg-greylight dark:text-white shadow-md p-5 md:py-8 md:px-10 rounded-xl md:w-1/2"
          data-aos="flip-right"
          data-aos-duration="800"
          data-aos-delay="100">
          <h2 class="text-center text-2xl font-bold mb-2">
            <span class="text-blue">VI</span>SI
          </h2>

          <p class="text-sm text-center">
            Menjadi Seseorang yang Profesional Dibidang
            <span class="font-bold text-blue"> Graphic Design, Information and Technology, Software Engineer </span>
            dan menjadi Seorang yang bermanfaaat di Lingkungan Sekitar, Masyarakat, Bangsa, dan Negara.
          </p>
        </div>

        <div
          class="misi bg-whiteDeep dark:bg-greylight dark:text-white shadow-md p-5 md:py-8 md:px-10 rounded-xl md:w-1/2"
          data-aos="flip-right"
          data-aos-duration="800"
          data-aos-delay="100">
          <h2 class="text-center text-2xl font-bold mb-2">
            <span class="text-blue">MI</span>SI
          </h2>

          <p class="text-sm text-center">
            Misi Saya adalah
            <span class="font-bold text-blue"> Belajar dengan konsisten </span>
            tentang Ilmu yang ingin dikuasai, Bekerja keras, Pantang menyerah, dan tetap semangat, serta melakukan kegiatan yang
            <span class="font-bold text-blue"> bermanfaat bagi orang banyak.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
