import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Layouts({ children }) {
  return (
    <section className="bg-whiteDeep dark:bg-dark bg-opacity-40 transition-all ease-in">
      <Header />
      <ScrollToTop />
      {children}
      <Footer />
    </section>
  );
}
