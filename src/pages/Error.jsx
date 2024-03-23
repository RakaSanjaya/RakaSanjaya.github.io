import { Link } from "react-router-dom";
import Layout from "../Layouts/Layout";
export default function Error() {
  return (
    <Layout>
      <section className="h-[100vh] py-20 flex justify-center align-middle">
        <div className="flex flex-col justify-center align-middle items-center">
          <img src="/illustration/error.png" alt="error" className="w-4/5 md:w-2/5 mb-5" />
          <h3 className="font-bold dark:text-white">OOPS!</h3>
          <p className="text-3xl font-bold text-center dark:text-white mb-5">
            Page Not <span className="text-blue">Found</span>
          </p>
          <Link to="/" className="btn py-3 text-white bg-dark px-12 rounded-full dark:bg-white dark:text-dark font-bold text-sm">
            Back to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
}
