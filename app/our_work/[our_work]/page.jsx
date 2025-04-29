import { getProject } from "../../../sanity/sanity-utils";
// import project from "../../../sanity/schemas/project-schema";
import { getProjects } from "../../../sanity/sanity-utils";
const projects = await getProjects();
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";

export default async function Project({ params }) {
  const slug = params.our_work;
  const project = await getProject(slug);
  return (
    <div className="text-sm">
      {/* <Nav color="text-black hover:text-blue-500" /> */}
      <div
        id=""
        className="bg-blue-800 h-24 pb-2 top-0 w-full -z-10"
      ></div>
      <section className="w-full mt-0 py-6 our_work_menu">
        <div className="flex justify-between w-5/6 m-auto">
          <div className="flex">
            <Link href="/our_work">
              <svg
                className="w-5 h-5 mt-2 me-3 text-gray-800 dark:text-white menu_border"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </Link>
            <p className="stick mx-1"></p>
          </div>
          <div className="self-center text-2xl font-bold">{project.name}</div>
        </div>
      </section>
      <section className="w-5/6">
        <div>
          <Image
            src={project.image}
            height={1000}
            width={1000}
            className="m-auto object-cover max-w-full"
          />
        </div>
      </section>
      <section className="w-5/6 mb-10">
        <div className="w-4/6 md:w-3/6 lg:w-2/6">
          <div className="flex mt-0 mb-0">
            <svg
              style={{ marginTop: 2 }}
              className="w-4 h-4 me-3 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="font-bold">{project.date}</p>
          </div>
          <hr className="m-0 p-0 mb-3 mt-3" />
          <div className="flex mt-0 mb-0">
            <svg
              style={{ marginTop: 2 }}
              className="w-4 h-4 me-3 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
              />
            </svg>
            <p>
              <span className="font-bold">Client</span> {project.client}
            </p>
          </div>
          <hr className="m-0 p-0 mb-3 mt-3" />
          <div className="flex mt-0 mb-0">
            <svg
              style={{ marginTop: 2 }}
              className="w-4 h-4 me-3 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M1 10c1.5 1.5 5.25 3 9 3s7.5-1.5 9-3m-9-1h.01M2 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1ZM14 5V3a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2h8Z"
              />
            </svg>
            <p>
              <span className="font-bold">Project</span> {project.name}
            </p>
          </div>
          <hr className="m-0 p-0 mb-3 mt-3" />
          <div>
            <p
              className="uppercase border border-gray-200 font-bold p-2 rounded-full mb-3 text-xs"
              style={{ width: "fit-content" }}
            >
              {project.subCategory}
            </p>
            <p
              className="uppercase border border-gray-200 font-bold p-2 rounded-full mb-3 text-xs"
              style={{ width: "fit-content" }}
            >
              {project.category}
            </p>
          </div>
          <hr className="m-0 p-0 mb-2" />
          <Link target="_blank" href={project.url}>
            <button
              type="button"
              className="mt-7 px-6 py-3.5 text-base font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Project
              <svg
                style={{ marginTop: 2 }}
                className="w-4 h-4 ms-2 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 19 19"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7"
                />
              </svg>
            </button>
          </Link>
        </div>
      </section>
      {/* <section
        className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-5/6 overflow_height"
        id="to_filter"
      >
        {projects.map((project) => (
          <div
            // controls-carousel
            id={project.category}
            key={project._id}
            className={project.category + " all relative w-full"}
            data-carousel="static"
          >
            <div className="relative h-56 overflow-hidden rounded-lg ">
              <Link href={`/our_work/${project.slug}`}>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <Image
                    width={1000}
                    height={1000}
                    src={project.image}
                    className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                    alt=""
                  />
                </div>
              </Link>
              <Link href={`/our_work/${project.slug}`}>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item="active"
                >
                  <Image
                    width={1000}
                    height={1000}
                    src={project.secondImage}
                    className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                    alt=""
                  />
                </div>
              </Link>
              <Link href={`/our_work/${project.slug}`}>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <Image
                    width={1000}
                    height={1000}
                    src={project.thirdImage}
                    className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60  dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60  dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        ))}
      </section> */}
      <Newsletter background="bg-blue-800" button="bg-blue-700" hover="hover:bg-blue-500" />
    </div>
  );
}
