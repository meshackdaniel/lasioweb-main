import Link from "next/link";
import GetStarted from "@/components/GetStarted";
// import Nav from "@/components/Nav";
import Newsletter from "@/components/Newsletter";
import BackgroundVideo from "next-video/background-video";

const webDev = () => {
  return (
    <div className="text-sm">
      <div
        style={{
          backgroundPosition: "bottom center",
          backgroundImage:
            "url('https://res.cloudinary.com/dj2ybe6v0/image/upload/v1728913870/Black_white_digital_marketing_facebook_cover_2_ckkxgt.png",
        }}
        className="flex items-center md:flex-row p-5 md:p-10 justify-between bg-blue-800 h-screen"
      >
        <div id="" className="basis-4/4 md:basis-2/4 text-white md:ms-20">
          <h1 className="font-bold text-4xl mt-20 md:mt-0">
            Web Design & Development
          </h1>
          <p className="text-2xl mt-3">
            Everyone can set up a website this days. We build strategic engaging
            websites that enforce credibility and communicate key messages and
            turning them into profits.
          </p>
        </div>
      </div>
      <section className="flex justify-around w-5/6"></section>
      <section className="md:flex w-5/6 mb-10">
        <div className="basis-2/4 md:me-5">
          <h1 className="font-bold">READY FOR A NEW WEBSITE?</h1>
          <p className="mt-1">
            Ready to get started or really curious about our process?{" "}
            <Link href="/contact">
              Contact Us and we'll get back to you speedily.{" "}
            </Link>
            Or talk to an expert! <a href="tel:+2349070807080">09070807080</a>
          </p>
          <h1 className="mt-3 font-bold">GET STARTED</h1>
          <p className="mt-1">
            Let us help you grow your business through the web.
          </p>
          <p>Request for a quote and we'll contact you shortly.</p>
          <button
            type="button"
            className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium text-sm px-4 py-4 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <Link href="/request">Request for a quote</Link>
          </button>
        </div>
        <div className="basis-2/4 mt-5 md:mt-0 md:ms-5">
          <p>
            Did you receive a quote from anorther agency without them asking key
            questions about how your business actually works and your vision?
            They probably cant build you a website that meets your needs without
            a full picture.
          </p>
          <p className="mt-5">
            LasioWeb starts by asking the right questions. During your
            consultation , we'll find out as much as we can about your business
            by asking questions like:
          </p>
          <ul className="mt-5 list-disc ms-5">
            <li>What Makes You Different</li>
            <li>Identify who your customers are</li>
            <li>What Product or Service do you offer</li>
            <li>Your Target Audience</li>
          </ul>
          <p className="mt-5">
            We then create a solution to accomplish your business goals and KPI
          </p>
          <h1 className="mt-10 font-bold">OUR CAPABILITIES</h1>
          <div className="md:flex mt-3 justify-between ms-5">
            <ul className=" list-disc">
              <li>Copywriting</li>
              <li>Brand Identity</li>
              <li>Responsive Design</li>
            </ul>
            <ul className=" list-disc">
              <li>e-commerce</li>
              <li>Data Analysis</li>
              <li>Conent Management System</li>
            </ul>
          </div>
        </div>
      </section>
      <GetStarted />
      <Newsletter
        background="bg-blue-800"
        button="bg-blue-700"
        hover="hover:bg-blue-500"
      />
    </div>
  );
};

export default webDev;
