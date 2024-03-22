import Layout from "../Layouts/Layout";
import BoxImage from "../components/BoxImage";
import { designProjects, websiteProjects } from "../assets/json/dataProject";

export default function Projects() {
  return (
    <Layout>
      <main className="my-20 py-8">
        <section className="flex flex-col gap-20">
          <div>
            <h2 class="font-bold text-2xl text-center dark:text-white mb-6" data-aos="fade-up" data-aos-duration="800">
              <span class="text-blue">Design </span>Project
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-11/12 mx-auto gap-1">
              {designProjects.map(({ id, title, desc, image, icon }) => (
                <BoxImage key={id} image={image} title={title} desc={desc} icon={icon} />
              ))}
            </div>
          </div>
          <div>
            <h2 class="font-bold text-2xl text-center dark:text-white mb-6" data-aos="fade-up" data-aos-duration="800">
              <span class="text-blue">Website </span>Project
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-11/12 mx-auto gap-1">
              {websiteProjects.map(({ id, title, desc, image, icon }) => (
                <BoxImage key={id} image={image} title={title} desc={desc} icon={icon} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
