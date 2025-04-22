"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { sendNewsletterForm } from "@/lib/api";
import { ChevronRight, ShieldCheck } from "lucide-react";

const initValues = {
  email: "",
};
const initState = { values: initValues };

const Nav = () => {
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

  const onSubscribe = async (e) => {
    e.preventDefault();
    document.getElementById("submitButton").setAttribute("class", "hidden");
    try {
      setState((prev) => ({
        ...prev,
        isLoading: true,
      }));
      await sendNewsletterForm(values);
      setState(initState);
      toast({
        title: "Thank you for subscribing.",
        description: "You can now receive updates via your email.",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      document
        .getElementById("submitButton")
        .setAttribute(
          "class",
          "absolute z-20 bg-black w-5/6 text-white focus:ring-4 focus:ring-black font-medium rounded-lg text-base px-5 py-2.5 mb-2 mx-auto"
        );
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error.message,
      }));
    }
  };

  const pathname = usePathname();
  var textColor;
  var bgColor;
  var hoverColor;
  var bgGradient;

  switch (pathname) {
    case "/about":
      textColor = "text-white";
      hoverColor = "md:hover:text-green-500";
      bgGradient = "bg-gradient-to-b from-stone-100 via-stone-100 to-green-400";
      bgColor = "bg-red-500 md:hover:scale-105";
      break;
    case "/services/search-engine-optimization":
      textColor = "text-white";
      hoverColor = "md:hover:text-green-500";
      bgGradient = "bg-gradient-to-b from-stone-100 via-stone-100 to-green-400";
      bgColor = "bg-red-500 md:hover:scale-105";
      break;
    case "/services/social-media-marketing":
      textColor = "text-white";
      hoverColor = "md:hover:text-green-500";
      bgGradient = "bg-gradient-to-b from-stone-100 via-stone-100 to-green-400";
      bgColor = "bg-red-500 md:hover:scale-105";
      break;
    case "/blog":
      textColor = "text-white";
      hoverColor = "md:hover:text-green-500";
      bgGradient = "bg-gradient-to-b from-stone-100 via-stone-100 to-green-400";
      bgColor = "bg-red-500 md:hover:scale-105";
      break;
    case "/request":
      textColor = "text-white";
      hoverColor = "md:hover:text-green-500";
      bgGradient = "bg-gradient-to-b from-stone-100 via-stone-100 to-green-400";
      bgColor = "bg-red-500 md:hover:scale-105";
      break;
    case "/services":
      textColor = "text-white";
      hoverColor = "md:hover:text-red-500";
      bgGradient = "bg-gradient-to-b from-stone-100 via-stone-100 to-red-400";
      bgColor = "bg-red-500 :mdhover:scale-105";
      break;
    case "/services/digital-marketing":
      textColor = "text-white";
      hoverColor = "md:hover:text-red-500";
      bgGradient = "bg-gradient-to-b from-stone-100 via-stone-100 to-red-400";
      bgColor = "bg-red-500 md:hover:scale-105";
      break;
    default:
      textColor = "text-white";
      hoverColor = "md:hover:text-blue-500";
      bgGradient = "bg-gradient-to-b from-stone-100 via-stone-100 to-blue-400";
      bgColor = "bg-red-500 md:hover:scale-105";
      break;
  }
  function handleClick() {
    document.getElementById("sub_nav").style.display = "none";
    document.getElementById("body").style.overflowY = "scroll";
  }
  function handleMenu() {
    document.getElementById("sub_nav").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
  }
  return (
    <nav className="absolute z-10 top-0 w-full">
      <div className={`sub_nav hidden ${bgGradient}`} id="sub_nav">
        <div className="flex justify-between m-4">
          <a href="/" className="flex flex-center gap-2">
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={60}
              height={60}
              className="object-contain"
            />
            {/* <p>LasioWeb</p> */}
          </a>
          <svg
            onClick={handleClick}
            className={`w-6 h-6 mt-5 me-3 text-black`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </div>
        <div className="">
          <ul className="flex text-black flex-col p-4 mt-14 font-bold md:p-0 text-3xl ms-0  md:static rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <a
                href="/about"
                className="flex justify-between items-center py-2 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0"
              >
                <p>About</p>
                <ChevronRight className="text-black w-7 h-7" />
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="flex justify-between items-center py-2 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0"
              >
                Services
                <ChevronRight className="text-black w-7 h-7" />
              </a>
            </li>
            <li>
              <a
                href="/our_work"
                className="flex justify-between items-center py-2 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0"
              >
                <p>Our work</p>
                <ChevronRight className="text-black w-7 h-7" />
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="flex justify-between items-center py-2 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0"
              >
                <p>Blog</p>
                <ChevronRight className="text-black w-7 h-7" />
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="flex justify-between items-center py-2 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0"
              >
                <p>Contact</p>
                <ChevronRight className="text-black w-7 h-7" />
              </a>
            </li>
          </ul>
          <form
            class="w-5/6 md:w-3/5 lg:w-2/5 mx-auto mt-10"
            onSubmit={onSubscribe}
          >
            <p className="mb-4 font-semibold">
              Sign up for our Newsletter and get mails of our popular offers
            </p>
            <div class="">
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                className="border rounded-lg  border-black text-black text-sm block w-full px-3.5 py-4 placeholder-black focus:ring-black focus:border-black mb-5"
                placeholder="Email address"
                required
              />
            </div>
            <div className="absolute w-5/6 z-10 bg-black rounded-lg">
              <div className="bg-red w-fit mx-auto">
                <Button
                  disabled={true}
                  variant="solid"
                  colorScheme="black"
                  isLoading={isLoading}
                  className="mx-auto"
                >
                  Subscribe
                </Button>
              </div>
            </div>
            <button
              // type="submit"
              id="submitButton"
              className={`absolute z-20 bg-black w-5/6 text-white focus:ring-4 focus:ring-black font-medium rounded-lg text-base px-5 py-2.5 mb-2 mx-auto`}
            >
              Subscribe
            </button>
          </form>
          {/* <div className="flex mt-20 ms-8 text-black">
            <ShieldCheck className="w-7 h-7" />
            <p>Privacy policy</p>
          </div> */}
        </div>
      </div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex flex-center gap-2">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={60}
            height={60}
            className="object-contain"
          />
          {/* <p>LasioWeb</p> */}
        </Link>
        <div className="flex md:order-2">
          <Link href="/request">
            <button
              type="button"
              className={`text-white ${bgColor} shadow-lg font-bold uppercase md:focus:ring-4 focus:outline-none rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0`}
            >
              Get Quote
            </button>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${textColor} w-14 h-14`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              onClick={handleMenu}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ">
          <ul className="text-sm uppercase flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 bg-white md:bg-transparent w-full ms-0 smh-screen  md:static rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
            <li>
              <Link
                href="/about"
                className={`block font-bold py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent ${hoverColor} md:p-0`}
                aria-current="page"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`block font-bold py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent ${hoverColor} md:p-0`}
              >
                Services
              </Link>
            </li>
            <li>
              <a
                href="/our_work"
                className={`block font-bold py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent ${hoverColor} md:p-0`}
              >
                Our work
              </a>
            </li>
            <li>
              <Link
                href="/blog"
                className={`block font-bold py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent ${hoverColor} md:p-0`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block font-bold py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent ${hoverColor} md:p-0`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
