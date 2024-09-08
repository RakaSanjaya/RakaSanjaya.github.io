import React, { useState } from "react";
import Layouts from "../Layouts/Layout";
import InputBox from "../components/InputBox";
import Sosmed from "../components/Sosmed";
import axios from "axios";
import Swal from "sweetalert2";

function Contact() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    function formatTanggal(date) {
      const tanggal = date.getDate();
      const bulan = date.getMonth() + 1;
      const tahun = date.getFullYear();

      return `${tanggal}/${bulan}/${tahun}`;
    }

    const tanggalSekarang = new Date();
    const tanggalFormatted = formatTanggal(tanggalSekarang);

    const data = {
      Firstname: firstname,
      Lastname: lastname,
      Email: email,
      Phone: phone,
      Message: message,
      Timestamp: tanggalFormatted,
    };

    if (!data.Firstname) {
      Swal.fire({
        title: "Warning!",
        text: "Firstname must be filled",
        icon: "warning",
        confirmButtonText: "Mengerti",
      });
      return false;
    }
    if (!data.Lastname) {
      Swal.fire({
        title: "Warning!",
        text: "Lastname must be filled",
        icon: "warning",
        confirmButtonText: "Mengerti",
      });
      return false;
    }
    if (!data.Email) {
      Swal.fire({
        title: "Warning!",
        text: "Email must be filled",
        icon: "warning",
        confirmButtonText: "Mengerti",
      });
      return false;
    }
    if (!data.Phone) {
      Swal.fire({
        title: "Warning!",
        text: "Phone must be filled",
        icon: "warning",
        confirmButtonText: "Mengerti",
      });
      return false;
    }
    if (!data.Message) {
      Swal.fire({
        title: "Warning!",
        text: "Message must be filled",
        icon: "warning",
        confirmButtonText: "Mengerti",
      });
      return false;
    }
    axios
      .post("https://sheet.best/api/sheets/53d6d067-65e5-4873-bfdc-fa625d764aae", data)
      .then((res) => {
        setFirstname("");
        setLastname("");
        setEmail("");
        setPhone("");
        setMessage("");
        setError(null);
      })
      .catch((error) => {
        alert("Error submitting data:", error);
        setError("An error occurred while submitting the form. Please try again later.");
      });
    Swal.fire({
      title: "Success",
      text: "Your message has been sent",
      icon: "success",
      confirmButtonText: "OK",
    });
    return false;
  };

  return (
    <Layouts>
      <main className="py-28 md:mx-4">
        <section className="flex flex-col mx-auto md:grid md:grid-cols-2 items-center justify-center">
          <form onSubmit={handleSubmit} name="form-group">
            <div className="flex gap-3 w-11/12 mx-auto">
              <InputBox
                type="text"
                name="Firstname:"
                placeholder="Firstname"
                className={"w-1/2"}
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <InputBox
                type="text"
                name="Lastname:"
                placeholder="Lastname"
                className={"w-1/2"}
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <InputBox
              type="email"
              name="Email:"
              placeholder="Johndoe@mail.com"
              className={"w-11/12 mx-auto my-5"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputBox
              type="tel"
              name="Phone:"
              placeholder="08XX-XXXX-XXXX"
              className={"w-11/12 mx-auto my-5"}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div
              className="flex flex-col w-11/12 mx-auto my-5"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
              data-aos-delay="250">
              <label className="text-sm mb-2 dark:text-white" htmlFor="message">
                Message:
              </label>
              <textarea
                rows="5"
                maxLength="500"
                name="pesan"
                className="border w-full text-sm pl-3 rounded-md focus:outline-none py-3 placeholder:text-black  focus:border placeholder:text-opacity-50 focus:border-blue dark:bg-grey dark:text-white dark:placeholder:text-white dark:placeholder:text-opacity-70"
                placeholder="Send me a message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}></textarea>

              <button
                type="submit"
                data-aos-delay="30"
                className="flex justify-center my-5 w-full rounded-md mx-auto bg-black text-white border bprder-transparent py-3 text-sm hover:bg-transparent hover:text-black hover:border-black duration-300 dark:hover:bg-white dark:hover:text-dark"
                id="buttonSend">
                send message
              </button>
            </div>
          </form>
          <div>
            <div>
              <div data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
                <img src="/illustration/mail.png" alt="img-mail" className="w-8/12 lg:w-6/12 mx-auto" />
              </div>

              <div
                className="rounded-md p-3 w-11/12 mx-auto"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
                data-aos-delay="300">
                <h3 className="text-md font-semibold mb-2 text-center dark:text-white">
                  <span className="text-blue font-bold">Connect</span> With Me
                </h3>
                <div className="flex justify-center flex-wrap">
                  <Sosmed />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layouts>
  );
}

export default Contact;
