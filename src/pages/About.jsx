import Layouts from "../Layouts/Layout";
import AboutBox from "../components/AboutBox";
import Education from "../components/Education";
import Experience from "../components/Experience";
import HeroSection from "../components/HeroSection";

function About() {
  return (
    <Layouts>
      <main className="mt-20">
        <HeroSection />
        <AboutBox />
        <Education />
        <Experience />
      </main>
    </Layouts>
  );
}
export default About;
