import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import BackgroundVideo from "next-video/background-video";
import { ArrowRight } from "lucide-react";

const blog = () => {
  return (
    <>
      <BackgroundVideo
        src="https://res.cloudinary.com/dj2ybe6v0/video/upload/v1728897796/Blue_White_3D_Project_Plan_Business_Presentation_29_ypygtc.mp4"
        className="h-screen w-full max-w-screen-2xl bg-green-800"
      ></BackgroundVideo>
      <div className="absolute top-0 left-0 h-screen w-full flex items-center px-10">
        <div className="max-w-screen-xl">
          <h1 className="font-bold text-white text-5xl  md:mt-0 relative">
            Blog
          </h1>
          <p className="text-2xl md:text-3xl md:w-4/6 mt-3 text-white">
            Get a wide range of knowledge around computer and other related
            technology.
          </p>
        </div>
      </div>
      <section className="justify-between min-h-24" id="posts">
        <div className="mx-14">
          <h1 className="text-3xl mb-5">All Posts</h1>
          <div className="grid md:grid-cols-2 gap-x-5">
            <Link
              href="/blog/who-is-a-ux-designer"
              className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-xl"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Who is a UX Designer
              </h5>
              <div className="flex gap-5 my-5 text-sm">
                <p>
                  <span className="font-bold">Published:</span> March 18, 2024
                </p>
                <p>
                  <span className="font-bold">Author:</span> Meshack Daniel
                </p>
              </div>
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                At its core, a UX Designer focuses on the user—understanding
                their needs, behaviors, and pain points. They bridge the gap
                between a product’s functionality and the human experience,
                ensuring that websites, apps, or even physical products feel
                seamless to use.
              </p>
              <div className="flex items-center gap-x-1 underline">
                <button>Continue Reading</button>
                <ArrowRight className="w-4 h-4 text-black" />
              </div>
            </Link>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Who is a UX Designer
                </h5>
              </a>
              <div className="flex gap-5 my-5 text-sm">
                <p>
                  <span className="font-bold">Published:</span> March 18, 2024
                </p>
                <p>
                  <span className="font-bold">Author:</span> Meshack Daniel
                </p>
              </div>
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                At its core, a UX Designer focuses on the user—understanding
                their needs, behaviors, and pain points. They bridge the gap
                between a product’s functionality and the human experience,
                ensuring that websites, apps, or even physical products feel
                seamless to use.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="basis-1/3">
          <h1 className="text-3xl hidden md:block">Browse Topics</h1>
          <ul className="mt-2">
            <li className="py-1">🤑 Money</li>
            <li className="py-1">🛠 Tech</li>
            <li className="py-1">🚀 Productivity</li>
            <li className="py-1">🚀 Design</li>
            <li className="py-1">🚀 Programming</li>
          </ul>
        </div> */}
      </section>
      <Newsletter
        background="bg-green-800"
        button="bg-green-700"
        hover="hover:bg-green-500"
      />
    </>
  );
};

export default blog;
