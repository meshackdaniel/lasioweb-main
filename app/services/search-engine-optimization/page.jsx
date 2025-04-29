"use client";
import Image from "next/image";
import GetStarted from "@/components/GetStarted";
import { seoContactForm } from "@/lib/api";
import { useState } from "react";
import { Button, FormControl, useToast } from "@chakra-ui/react";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";

const initValues = {
  lastName: "",
  company: "",
  email: "",
  phone: "",
  url: "",
  package: "",
  budget1: "",
  budget2: "",
  budget3: "",
  message: "",
  firstName: "",
};
const initState = { values: initValues };

const seo = () => {
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
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    e.preventDefault();
    document.getElementById("sp").setAttribute("class", "hidden");
    try {
      await seoContactForm(values);
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

  const handlePackage = (target) => {
    if (target.target.value == "bronze") {
      console.log(target.target.value);
      document.getElementById("bronze-budget").style.display = "block";
      document.getElementById("silver-budget").style.display = "none";
      document.getElementById("gold-budget").style.display = "none";
    } else if (target.target.value == "silver") {
      console.log(target.target.value);
      document.getElementById("bronze-budget").style.display = "none";
      document.getElementById("silver-budget").style.display = "block";
      document.getElementById("gold-budget").style.display = "none";
    } else if (target.target.value == "gold") {
      console.log(target.target.value);
      document.getElementById("bronze-budget").style.display = "none";
      document.getElementById("silver-budget").style.display = "none";
      document.getElementById("gold-budget").style.display = "block";
    }
  };
  return (
    <div>
      <div
        style={{
          backgroundPosition: "bottom center",
          backgroundImage:
            "url('https://res.cloudinary.com/dj2ybe6v0/image/upload/v1728986524/Black_white_digital_marketing_facebook_cover_4_hifwbz.png')",
        }}
        className="flex items-center md:flex-row p-5 md:p-10 justify-between bg-green-800 h-screen bg-green-800"
      >
        <div id="" className="basis-4/4 md:basis-2/4 text-white md:ms-20">
          <h1 className="font-bold text-4xl md:text-5xl mt-20 md:mt-0">
            Search Engine Optimization
          </h1>
          <p className="text-2xl md:text-3xl mt-3">
            Always appear first on searches related to you.
          </p>
        </div>
      </div>
      <section className=" justify-around  w-5/6"></section>
      <section className="md:flex w-5/6">
        <div className="basis-2/4 justify-between">
          <h1 className="text-base text-center md:text-start md:text-2xl font-bold">
            PROFESSIONAL SEO THAT DRIVES RESULTS
          </h1>
          <p className="mt-3">
            We combine research-driven strategy, inventive design, and clean
            coding to architect change and build the best experiences for our
            clients audiences. Some of our optimization services include:
          </p>
          <ul className="list-disc ms-5 mt-5">
            <li>Conversion Rate Optimization</li>
            <li>A/B Testing</li>
            <li>Multivariate Testing</li>
            <li>User Experience Audit</li>
            <li>SEO Strategy</li>
            <li>Performance Enhancements</li>
            <li>Site Security</li>
            <li>Accesable Design</li>
            <li>Analytics Dashboards</li>
          </ul>
        </div>
        <div className="ms-10 hidden md:block">
          <Image
            src="/assets/images/services/seo_img1.jpg"
            width={600}
            height={600}
          />
        </div>
      </section>
      <section className="m_extra bg-gray-50 py-10 px-5">
        <h1 className="text-2xl text-center md:text-start md:text-2xl font-bold mt-5">
          SEO DONE THE RIGHT WAY!
        </h1>
        <p className="text-center w-5/6 md:w-3/6 m_auto mt-5 text-base">
          LasioWeb works with customers focused on local engine optimization or
          even global targeted keywords.
        </p>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 mt-10 text-center slide_on_hover_val">
          <div className="slide_item rounded bg-green-500">
            <div id="more_services_1_about" className="items-center text-white">
              <div
                className="flex flex-col items-center first"
                style={{ margin: "auto" }}
              >
                <div className="mb-5 mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    className="bi bi-code-square h-10 w-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
                  </svg>
                </div>
                <div className="text-center w-full ">
                  <h1 className="text-xl font">Onsite Optimization</h1>
                </div>
              </div>
              <div className="second bg-white bg-slate-800">
                <h1 className="text-base bg-green-500 md:text-base lg:text-xl p-7 lg:block lg:hidden">
                  Onsite Optimization
                </h1>
                <h1 className="text-base bg-green-500 md:text-base lg:text-xl p-7  hidden lg:block">
                  Onsite Optimization
                </h1>
                <p className="text-gray-700 px-5">
                  Full website audit and optimization using content, meta tags,
                  keyword density and more.
                </p>
              </div>
            </div>
          </div>

          <div className="slide_item bg-green-800 rounded">
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
                    className="bi bi-menu-up h-10 w-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.646 15.854a.5.5 0 0 0 .708 0L10.207 14H14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.793l1.853 1.854zM1 9V6h14v3H1zm14 1v2a1 1 0 0 1-1 1h-3.793a1 1 0 0 0-.707.293l-1.5 1.5-1.5-1.5A1 1 0 0 0 5.793 13H2a1 1 0 0 1-1-1v-2h14zm0-5H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2zM2 11.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5z" />
                  </svg>
                </div>
                <div className="text-center w-full ">
                  <h1 className="text-xl font">Content Creation & Marketing</h1>
                </div>
              </div>
              <div className="second bg-white bg-slate-800">
                <h1 className="text-base bg-green-800 md:text-base lg:text-xl p-7 lg:block lg:hidden">
                  Content Creation & Marketing
                </h1>
                <h1 className="text-base bg-green-800 md:text-base lg:text-xl p-7  hidden lg:block">
                  Content Creation & Marketing
                </h1>
                <p className="text-gray-700 px-5">
                  Our experts create keyword rich content and can assist you in
                  marketing them also.
                </p>
              </div>
            </div>
          </div>

          <div className="slide_item bg-green-600 rounded">
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
                    className="bi bi-eyeglasses h-10 w-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                  </svg>
                </div>
                <div className="text-center w-full ">
                  <h1 className="text-xl font">Research & Execution</h1>
                </div>
              </div>
              <div className="second bg-white">
                <h1 className="text-base bg-green-600 md:text-base lg:text-xl p-7 lg:block lg:hidden">
                  Research & Execution
                </h1>
                <h1 className="text-base bg-green-600 md:text-base lg:text-xl p-7  hidden lg:block">
                  Research & Execution
                </h1>
                <p className="text-gray-700 px-5">
                  We use keyword research and link acquisition to create
                  optimizations tailored to you.
                </p>
              </div>
            </div>
          </div>

          <div className="slide_item bg-green-900 rounded">
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
                  <h1 className="text-xl font">SEO Measuring & Web A...</h1>
                </div>
              </div>
              <div className="second bg-white">
                <h1 className="text-base bg-green-900 md:text-base lg:text-xl p-7 lg:block lg:hidden">
                  SEO Measuring & Web Analytics
                </h1>
                <h1 className="text-base bg-green-900 md:text-base lg:text-xl p-7  hidden lg:block">
                  SEO Measuring & Web Analytics
                </h1>
                <p className="text-gray-700 px-5 mt-1">
                  Analyzing results and measuring conversion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:ps-10 md:pe-10 md:flex w-5/6 mb-10">
        <div className="basis-2/4">
          <h1 className="w-5/6 text-xl md:text-4xl">
            Let our Years of proven SEO experience help boost your rankings and
            sales
          </h1>
          <h1 className="mt-7 text-lg font-bold">What You Get</h1>
          <ul className="mt-5 list-disc ms-5">
            <li>Free Comprehensive Site Analysis Report worth 50,000</li>
            <li>Expert & insightful recommendations</li>
            <li>Suggested solution/package details</li>
          </ul>
          <h1 className="mt-5 font-bold">OUR OPTIMIZATION CAPABILITIES</h1>
          <ul className="mt-5 list-disc ms-5">
            <li>Conversion Rate Optimization</li>
            <li>Landing Page Optimization</li>
            <li>e-Commerce Optimization</li>
            <li>Organic & Technical SEO</li>
            <li>Data Analyst & Insights</li>
            <li>User Experience Design</li>
          </ul>
        </div>
        <div className="basis-2/4">
          <h1 className="text-center font-bold mt-10 md:mt-0">
            REQUEST A FREE SEO SITE ANALYSIS IN SECOND
          </h1>
          <p className="text-center mt-2 mb-6">
            Complete the form below to get your free quote and analysis.
          </p>
          <form onSubmit={onSubmit} className="w-5/6 m_auto">
            <div className="md:flex">
              <input
                required
                type="text"
                placeholder="First Name"
                className="w-full block mb-5 me-2"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                placeholder="Last Name"
                className="w-full block mb-5 md:ms-2"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="md:flex">
              <input
                required
                type="text"
                placeholder="Company Name"
                className="w-full block mb-5 me-5"
                name="company"
                value={values.company}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                placeholder="Email"
                className="w-full block mb-5"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="md:flex">
              <div className="basis-2/4 md:me-2">
                <input
                  required
                  type="text"
                  placeholder="Phone Number"
                  className="w-full block mb-5"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
                <select
                  name="package"
                  id="package"
                  required
                  onChange={handlePackage}
                  className="w-full block mb-5 text-slate-500"
                  // style={{ color: "#808480" }}
                >
                  <option value="" className="text-slate-500">
                    Select your SEO Package
                  </option>
                  <option value="bronze">Bronze/5 Keywords Local</option>
                  <option value="silver">
                    Silver/10 Keywords Moderate Competitive
                  </option>
                  <option value="gold">Gold/20 keywords Competitive</option>
                </select>
              </div>
              <div className="basis-2/4 md:ms-2">
                <input
                  type="text"
                  placeholder="Website URL"
                  className="w-full block mb-5"
                  name="url"
                  value={values.url}
                  onChange={handleChange}
                />
                <select
                  name="budget1"
                  id="bronze-budget"
                  className="w-full mb-5 text-slate-100 hidden"
                  style={{ color: "#808480" }}
                  onChange={handleChange}
                >
                  <option value="">Choose your Budget</option>
                  <option value="$120">$120</option>
                  <option value="$170">$170</option>
                </select>
                <select
                  name="budget2"
                  id="silver-budget"
                  className="w-full mb-5 text-slate-100 hidden"
                  style={{ color: "#808480" }}
                  onChange={handleChange}
                >
                  <option value="">Choose your Budget</option>
                  <option value="$350">$350</option>
                  <option value="$500">$500</option>
                  <option value="Unknown">Unknown</option>
                </select>
                <select
                  name="budget3"
                  id="gold-budget"
                  onChange={handleChange}
                  className="w-full mb-5 text-slate-100 hidden"
                  style={{ color: "#808480" }}
                >
                  <option value="">Choose your Budget</option>
                  <option value="$400">$400</option>
                  <option value="$500">$500</option>
                  <option value="$700">$700</option>
                  <option value="#1000">$1000</option>
                  <option value="Unknown">Unknown</option>
                </select>
              </div>
            </div>

            <textarea
              name="message"
              id=""
              required
              cols="30"
              rows="10"
              placeholder="How can we help you on SEO?"
              className="w-full h-32"
              value={values.message}
              onChange={handleChange}
            ></textarea>
            {/* <button
              type="submit"
              className="px-7 py-4 text-white float-right mt-4 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              SUBMIT
            </button> */}
            <div className="mt-7 w-fit float-right flex">
              <div className=" ">
                <div
                  className={`bg-green-700 flex justify-center items-center w-fit`}
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
                  className={`hover:scale-105 shadow-2xl bg-green-700 text-white font-medium px-5 py-2.5`}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <div className="mt-24"></div>
      <GetStarted />
      <Newsletter
        background="bg-green-800"
        button="bg-green-700"
        hover="hover:bg-green-500"
      />
    </div>
  );
};

export default seo;
