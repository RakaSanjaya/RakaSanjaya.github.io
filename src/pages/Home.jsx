import Layouts from "../Layouts/Layout";
import HeroSection from "../components/HeroSection";
import Illustration from "../components/Illustration";
import TechStack from "../components/TechStack";
import RecentProjects from "../components/RecentProjects";

function Home() {
  return (
    <>
      <Layouts>
        <main className={`mt-20`}>
          <HeroSection />
          <Illustration />
          <TechStack />
          <RecentProjects />
        </main>
      </Layouts>
    </>
  );
}

export default Home;
