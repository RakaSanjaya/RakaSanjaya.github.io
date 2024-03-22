import Layout from "../Layouts/Layout";
import SkillsBox from "../components/SkillBox";

export default function Skills() {
  return (
    <Layout>
      <section className="pt-24 mb-24 w-11/12 mx-auto">
        <h2 class="text-center text-2xl dark:text-white lg:text-xl font-bold rounded-xl w-fit mb-6 mx-auto">
          <span class="text-blue">Tech</span> Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-20">
          <SkillsBox icon="Html-icon.png" text={"Html"} level={"Advanced"} />
          <SkillsBox icon="Css-icon.png" text={"CSS"} level={"Advanced"} />
          <SkillsBox icon="Bootstrap-icon.png" text={"Bootstrap"} level={"Intermediate"} />
          <SkillsBox icon="Tailwind-icon.png" text={"Tailwind"} level={"Advanced"} />
          <SkillsBox icon="Js-icon.png" text={"Javascript"} level={"Intermediate"} />
          <SkillsBox icon="React-icon.png" text={"React JS"} level={"Beginner"} />
          <SkillsBox icon="Nextjs-icon.png" text={"Next JS"} level={"Beginner"} />
          <SkillsBox icon="Nodejs-icon.png" text={"Node JS"} level={"Beginner"} />
          <SkillsBox icon="MySQL-icon.png" text={"MySQL"} level={"Beginner"} />
          <SkillsBox icon="Git-icon.png" text={"GIT"} level={"Beginner"} />
        </div>
        <h2 class="text-center dark:text-white text-2xl lg:text-xl font-bold rounded-xl w-fit mb-6 mx-auto">
          <span class="text-blue">Design</span> Tools
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
          <SkillsBox icon="Photoshop-icon.png" text={"Photoshop"} level={"Advanced"} />
          <SkillsBox icon="Illustrator-icon.png" text={"illustrator"} level={"Intermediate"} />
          <SkillsBox icon="Xd-icon.png" text={"Adobe XD"} level={"Advanced"} />
          <SkillsBox icon="Canva-icon.png" text={"Canva"} level={"Advanced"} />
          <SkillsBox icon="Figma-icon.png" text={"Figma"} level={"Intermediate"} />
          <SkillsBox icon="Blender-icon.png" text={"Blender"} level={"Beginner"} />
        </div>
      </section>
    </Layout>
  );
}
