import Boximage from "./BoxImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { websiteProjects } from "../assets/json/dataProject";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function RecentProjects() {
  return (
    <>
      <section className="mx-8 my-14">
        <h2
          class="text-center text-2xl lg:text-xl font-bold text-blue rounded-xl w-fit mb-6 mx-auto"
          data-aos="fade-up"
          data-aos-duration="800">
          <span class="text-black dark:text-white">Recent</span> Project
        </h2>
        <div className="hidden md:block">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={3}
            scrollbar={{ draggable: false }}>
            {websiteProjects.map(
              ({ id, title, desc, image, icon }) =>
                id && (
                  <SwiperSlide>
                    <Boximage id={id} image={image} title={title} desc={desc} icon={icon} />
                    {" "}
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </div>

        <div className="md:hidden">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            scrollbar={{ draggable: true }}>
            {websiteProjects.map(
              ({ id, title, desc, image, icon }) =>
                id && (
                  <SwiperSlide>
                    {" "}
                    <Boximage
                      id={id}
                      image={image}
                      title={title}
                      desc={desc}
                      icon={["Html-icon.png", "Css-icon.png", "Js-icon.png", "Tailwind-icon.png"]}
                    />
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </div>
      </section>
    </>
  );
}
