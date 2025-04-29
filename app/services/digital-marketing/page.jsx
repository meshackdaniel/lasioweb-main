"use client";
import Image from "next/image";
import GetStarted from "@/components/GetStarted";
import { Button, FormControl, useToast } from "@chakra-ui/react";
import { dmContactForm } from "@/lib/api";
import { useState } from "react";
import Newsletter from "@/components/Newsletter";

const initValues = {
  company: "",
  email: "",
  phone: "",
  url: "",
  comment: "",
};
const initState = { values: initValues };

const marketing = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const { values, isLoading } = state;
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
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    document.getElementById("sp").setAttribute("class", "hidden");
    try {
      await dmContactForm(values);
      document.getElementById("sp").setAttribute("class", "absolute");
      setState(initState);
      toast({
        title: "Message sent.",
        description: "We'll get back to you shortly.",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    } catch (error) {}
  };
  return (
    <div>
      <div
        style={{
          backgroundPosition: "top center",
          backgroundImage:
            "url('https://res.cloudinary.com/dj2ybe6v0/image/upload/v1728903200/Black_white_digital_marketing_facebook_cover_v14ggk.png')",
        }}
        className="flex items-center md:flex-row p-5 md:p-10 justify-between bg-red-800 h-screen"
      >
        <div id="" className="basis-4/4 md:basis-2/4 text-white md:ms-20">
          <h1 className="font-bold text-4xl md:text-5xl mt-20 md:mt-0">
            Digital Marketing
          </h1>
          <p className="text-2xl md:text-3xl mt-3">
            Let's give you a space in the world's largest market.
          </p>
        </div>
      </div>
      <section className="flex justify-around w-5/6"></section>
      <section className="md:flex md:w-5/6 ps-10 pe-5 md:pe-10">
        <div className="me-10 md:basis-4/4 lg:basis-2/4">
          <h1 className="font-bold">OUR APPROACH TO DIGITAL MARKETING</h1>
          <ul className="list-disc ms-5 mt-5">
            <li>Define Goals</li>
            <li>Create A Plan</li>
            <li>Implementation</li>
            <li>Measure Results</li>
          </ul>
          <h1 className="mt-5 font-bold">Ready to start your campaign?</h1>
          <p className="mt-5 w-5/6">
            Drop us a note or give us a call{" "}
            <a href="tel:+9070807080">09070807080</a>; we're happy to answer all
            your question.
          </p>
          <form
            onSubmit={onSubmit}
            className="mt-5 lg:w-5/6"
            style={{ fontSize: 1 }}
          >
            <div className="flex">
              <div className="basis-2/4 me-2">
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full block mb-5"
                  required
                  name="company"
                  value={values.company}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  required
                  placeholder="Phone Number"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  className="w-full block mb-5"
                />
              </div>
              <div className="basis-2/4 ms-2">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full block mb-5"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <input
                  type="url"
                  placeholder="Website URL"
                  className="w-full block mb-5"
                  name="url"
                  value={values.url}
                  onChange={handleChange}
                />
              </div>
            </div>

            <textarea
              id=""
              cols="30"
              rows="10"
              name="comment"
              required
              value={values.comment}
              onChange={handleChange}
              placeholder="How can we help you?"
              className="w-full h-32"
            ></textarea>
            {/* <button
              type="submit"
              className="px-7 py-4 text-white bg-red-700 hover:bg-red-800 float-right mt-4 text-sm"
            >
              SUBMIT
            </button> */}
            <div className="mt-7 w-fit float-right flex">
              <div className=" ">
                <div
                  className={`bg-red-700 flex justify-center items-center w-fit`}
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
                  className={`hover:scale-105 shadow-2xl bg-red-700 text-white text-base font-medium px-5 py-2.5`}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="ms-10 hidden md:block">
          <Image
            src="/assets/images/services/marketing.jpg"
            width={600}
            height={600}
          />
        </div>
      </section>
      <section className="p-5 m_extra bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]">
        <h1 className="text-center font-bold text-2xl uppercase">
          how we promote content
        </h1>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 mt-10 text-center slide_on_hover_val">
          <div className="slide_item border border-gray-200 shadow bg-red-500 rounded">
            <div id="more_services_1_about" className="items-center text-white">
              <div
                className="flex flex-col items-center first"
                style={{ margin: "auto" }}
              >
                <div className="mb-5 mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    className="bi bi-globe2 h-10 w-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                  </svg>
                </div>
                <div className="text-center w-full ">
                  <h1 className="text-xl font">Search Engine Marketing</h1>
                </div>
              </div>
              <div className="second bg-white">
                <h1 className="text-base bg-red-500 md:text-base lg:text-xl p-7 lg:block lg:hidden">
                  Search Engine Marketing
                </h1>
                <h1 className="text-base bg-red-500 md:text-base lg:text-xl p-7  hidden lg:block">
                  Search Engine Marketing
                </h1>
                <p className="text-gray-700 px-5">
                  LasioWeb LTD uses Search Engine Marketing (SEM) by identifying
                  relevant keywords, creating ad campaigns on platforms like
                  Google Ads and Bing Ads, bidding on keywords, writing engaging
                  ad copies, optimizing landing pages for conversions, and
                  tracking performance to refine the SEM strategy.
                </p>
              </div>
            </div>
          </div>

          <div className="slide_item border border-gray-200 shadow bg-red-800 rounded">
            <div
              id="more_services_2_about"
              className="items-center  text-white "
            >
              <div
                className="flex flex-col items-center first"
                style={{ margin: "auto" }}
              >
                <div className="mb-5 mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    className="bi bi-graph-up-arrow h-10 w-10"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                    />
                  </svg>
                </div>
                <div className="text-center w-full ">
                  <h1 className="text-xl font">SEO</h1>
                </div>
              </div>
              <div className="second bg-white">
                <h1 className="text-base bg-red-800 md:text-base lg:text-xl p-7 lg:block lg:hidden">
                  SEO
                </h1>
                <h1 className="text-base bg-red-800 md:text-base lg:text-xl p-7  hidden lg:block">
                  SEO
                </h1>
                <p className="text-gray-700 px-5">
                  LasioWeb uses SEO by optimizing keywords and website, creating
                  quality content, building reputable backlinks, and tracking
                  performance with analytics tools to enhance online visibility
                  and content promotion.
                </p>
              </div>
            </div>
          </div>

          <div className="slide_item border border-gray-200 shadow bg-red-600 rounded">
            <div
              id="more_services_1_about"
              className="items-center  text-white "
            >
              <div
                className="flex flex-col items-center first"
                style={{ margin: "auto" }}
              >
                <div className="mb-5 mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    className="bi bi-facebook w-10 h-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </div>
                <div className="text-center w-full ">
                  <h1 className="text-xl font">Social Media Marketing</h1>
                </div>
              </div>
              <div className="second bg-white">
                <h1 className="text-base bg-red-600 md:text-base lg:text-xl p-7 lg:block lg:hidden">
                  Social Media Marketing
                </h1>
                <h1 className="text-base bg-red-600 md:text-base lg:text-xl p-7  hidden lg:block">
                  Social Media Marketing
                </h1>
                <p className="text-gray-700 px-5">
                  We use Social Media Marketing by creating engaging content
                  tailored to each platform, interacting with followers, using
                  targeted ads, and analyzing performance metrics to refine its
                  strategy and effectively promote its content.
                </p>
              </div>
            </div>
          </div>

          <div className="slide_item border border-gray-200 shadow bg-red-900 rounded">
            <div id="more_services_2_about" className="items-center text-white">
              <div
                className="flex flex-col items-center first"
                style={{ margin: "auto" }}
              >
                <div className="mb-5 mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    className="bi bi-envelope-check w-10 h-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
                  </svg>
                </div>
                <div className="text-center w-full ">
                  <h1 className="text-xl font">Email Marketing</h1>
                </div>
              </div>
              <div className="second bg-white">
                <h1 className="text-base md:text-base bg-red-900 lg:text-xl p-7 lg:block lg:hidden">
                  Email Marketing
                </h1>
                <h1 className="text-base md:text-base bg-red-900 lg:text-xl p-7  hidden lg:block">
                  Email Marketing
                </h1>
                <p className="text-gray-700 px-5 mt-1">
                  LasioWeb uses Email Marketing by crafting compelling subject
                  lines, personalizing email content, segmenting its subscriber
                  list, sending regular newsletters, and analyzing open and
                  click-through rates to optimize its content promotion
                  strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-4/6 mb-10">
        <h1 className="uppercase text-center text-2xl font-semibold md:text-3xl">
          Our Capabilities
        </h1>
        <div className="grid md:grid-cols-1 md:grid-cols-3 mt-10 ">
          <div className="ms-10 mt-5 md:mt-0">
            <ul className="list-disc ms-5">
              <li>Market Research</li>
              <li>Competitive Analysis</li>
              <li>Channel Identification</li>
              <li>Campaign Strategy</li>
              <li>Landing Page Design</li>
              <li>Copywriting</li>
            </ul>
          </div>
          <div className="ms-10 mt-5 md:mt-0">
            <ul className="list-disc ms-5">
              <li>Content Calenders</li>
              <li>Google Adwords</li>
              <li>Yahoo Ads</li>
              <li>Mobile Ads</li>
              <li>SEO Setups and Audits</li>
              <li>SEO Copywriting</li>
            </ul>
          </div>
          <div className="ms-10 mt-5 md:mt-0">
            <ul className="list-disc ms-5">
              <li>Local SEO</li>
              <li>Facebook Ads</li>
              <li>Twitter Ads</li>
              <li>Linkedln Ads</li>
              <li>Copywriting for Social Ads</li>
              <li>Email Copywriting</li>
            </ul>
          </div>
        </div>
      </section>
      <GetStarted />
      <Newsletter
        background="bg-red-500"
        button="bg-red-800"
        hover="hover:bg-red-500"
      />
    </div>
  );
};

export default marketing;
