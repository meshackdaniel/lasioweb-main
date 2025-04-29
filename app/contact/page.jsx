"use client";
import { sendContactForm } from "@/lib/api";
import { Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import Nav from "@/components/Navblack";
import Newsletter from "@/components/Newsletter";
const initValues = {
  name: "",
  phone: "",
  company: "",
  email: "",
  message: "",
};
const initState = { values: initValues };

const contact = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const { values, error, isLoading } = state;
  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  const onSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("sp").setAttribute("class", "hidden");
    try {
      setState((prev) => ({
        ...prev,
        isLoading: true,
      }));
      await sendContactForm(values);
      document
        .getElementById("sp")
        .setAttribute("class", "absolute");
      setState(initState);
      toast({
        title: "Message sent.",
        description: "We'll get back to you shortly.",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      document
        .getElementById("submitButton")
        .setAttribute(
          "class",
          "absolute text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        );
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error.message,
      }));
    }
  };
  return (
    <div className="text-sm">
      <section className="contact_hero bg-blue-800 mt-0 p-10" id="send_message">
        <h1 className="mt-32 text-4xl text-white font-bold ">Contact us</h1>
        <p className="text-white mb-10 md:mb-0">Lets talk about your ideas.</p>
        <section className="bg-white md:w-3/6 lg:w-2/6 p-10 drop-shadow md:absolute form">
          <form method="post" onSubmit={onSubmit}>
            <div id="toast"></div>
            {/* {error && (
              <div
                id="toast-warning"
                className="mb-5 flex items-center w-full max-w-xs p-4 text-gray-500 bg-orange-100 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 justify-between"
                role="alert"
              >
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                  </svg>
                  <span className="sr-only">Warning icon</span>
                </div>
                <div className="ms-3 text-sm font-normal">{error}.</div>
                <button
                  type="button"
                  className="ms-auto -mx-1.5 -my-1.5 bg-orange-100 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                  data-dismiss-target="#toast-warning"
                  aria-label="Close"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="red"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
            )} */}
            <h1 className="text-base md:text-2xl font-bold uppercase mb-5">
              Send us a message
            </h1>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="name"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={values.name}
                onChange={handleChange}
              />
              <label
                for="name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Full name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={values.email}
                onChange={handleChange}
              />
              <label
                for="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className=" md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="tel"
                  // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="phone"
                  id="phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  value={values.phone}
                  onChange={handleChange}
                />
                <label
                  for="phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number (123-456-7890)
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  value={values.company}
                  onChange={handleChange}
                />
                <label
                  for="company"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company (Ex. Google)
                </label>
              </div>
            </div>
            <textarea
              id="message"
              rows="3"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="How can we help you?"
              name="message"
              value={values.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="mt-7 w-fit mx-auto flex">
              <div className=" ">
                <div
                  className={`bg-blue-700 flex justify-center items-center rounded-lg w-fit`}
                  style={{ width: 115 }}
                >
                  <Button
                    disabled={true}
                    variant="solid"
                    colorScheme=""
                    isLoading={isLoading}
                  ></Button>
                </div>
              </div>
              <div className="absolute" id="sp">
                <button
                  style={{ width: 115 }}
                  className={`hover:scale-105 shadow-2xl bg-blue-700 text-white font-medium rounded-lg px-5 py-2.5`}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
      </section>
      <section
        className="sm:block md:block lg:flex w-5/6"
        id="send_message_2nd_section"
      >
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 me-3 mt-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <div className="me-10">
            <h1 className="text-base md:text-xl font-bold">Our Location</h1>
            <p>
              35 Area 5, Aso, <br />
              Mararaba, Nassarawa
            </p>
          </div>
        </div>
        <div className="flex mt-5 md:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 me-3 mt-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <div>
            <h1 className="text-base md:text-xl font-bold">How can we help?</h1>
            <a href="mailto:lasiowebs@gmail.com">lasiowebs@gmail.com</a>
          </div>
        </div>
      </section>
      {/* <Newsletter background="bg-blue-900" button="bg-blue-700" hover="hover:bg-blue-500" /> */}
    </div>
  );
};

export default contact;
