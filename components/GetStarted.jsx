import Link from "next/link";

const GetStarted = () => {
  return (
    <>
      <section className="mt-10 bg-gray-200 font-semibold px-5 py-8">
        <div className="flex flex-col md:flex-row text-white justify-around items-center h-44">
          <h1 className="text-2xl md:text-4xl text-center md:text-star text-gray-900">
            Ready to Get Started? Let's get it sheduled.
          </h1>
          <a href="/contact">
            <button className="hover:bg-gray-500 hover:text-white hover:border-gray-900 border-solid text-gray-900 border-2 border-gray-600 p-3 md:p-3 rounded-3xl text-sm">
              WORK WITH US
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
