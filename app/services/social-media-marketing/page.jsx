import ContentButton from "@/components/ContentButton";
import GetStarted from "@/components/GetStarted";
import Newsletter from "@/components/Newsletter";
import BackgroundVideo from "next-video/background-video";

const socialMediaMarketing = () => {
  return (
    <div>
      <div
        style={{
          backgroundPosition: "bottom center",
          backgroundImage:
            "url('https://res-console.cloudinary.com/dxmpvvt2k/media_explorer_thumbnails/0d7e6827b9f600e2cf289056fd2bcbef/detailed')",
        }}
        className="flex items-center md:flex-row p-5 md:p-10 justify-between h-screen bg-green-800"
      >
        <div id="" className="basis-4/4 md:basis-2/4 text-white md:ms-20">
          <h1 className="font-bold text-4xl md:text-5xl mt-20 md:mt-0">
            Social Media Marketing
          </h1>
          <p className="text-2xl md:text-3xl mt-3">
            Data driven strategies to increase your brand awareness and get you
            ahead of your competition.
          </p>
        </div>
      </div>
      <section className="md:flex w-5/6">
        <div className="basis-3/4">
          <h1 className="mt-10 text-2xl md:text-4xl">Reaching your audience</h1>
          <p className="mt-8 me-5">
            Although it might seem pleasing to skip lectures especially when it
            is scheduled in the morning when we just start getting comfy on our
            beds or when we fill tired later in the day or even when we feel
            there is just no need of going to that boring lecture especially
            when the lecturer doesn’t take attendance serious or does not give
            an unexpected test and then we promise ourselves we’ll spend several
            hours reviewing the class material, and pull the duvet back over our
            heads. There are quite several reasons students skip lectures and
            while it may seem not very important there are added advantages to
            students who attend lectures, some of them include:
          </p>
        </div>
        <div className="basis-2/4">
          <ContentButton
            header="Still have questions?"
            paragraph="Curious about our processor what it's like to work with us? Pick a
          package; we're happy to answer to give you the best creative designs."
            button="CONTACT US"
          />
        </div>
      </section>
      <section className="p-5 m_extra bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]">
        <h1 className="text-center font-bold text-2xl uppercase">
          Our strengths
        </h1>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 mt-10 text-center slide_on_hover_val">
          <div className="slide_item border border-gray-200 shadow bg-green-500 rounded">
            <div id="more_services_1_about" className="items-center text-white">
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
                  <h1 className="text-xl font">Facebook Ads</h1>
                </div>
              </div>
              <div className="second bg-white">
                <h1 className="text-base bg-green-500 md:text-base lg:text-xl p-7 lg:block lg:hidden">
                  Facebook Ads
                </h1>
                <h1 className="text-base bg-green-500 md:text-base lg:text-xl p-7 hidden lg:block">
                  Facebook Ads
                </h1>
                <p className="text-gray-700 px-5">
                  We use Facebook ads for social media promotion by reaching a
                  large audience, fine-tuning ad targeting, and tracking
                  performance with robust analytics. They create targeted ad
                  campaigns, share business information, engage with posts,
                  build communities through groups, promote events, interact
                  with followers, and use live streaming to showcase products or
                  services.
                </p>
              </div>
            </div>
          </div>

          <div className="slide_item border border-gray-200 shadow bg-green-800 rounded">
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
                    className="bi bi-linkedin h-10 w-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </div>
                <div className="text-center w-full ">
                  <h1 className="text-xl font">Linkedin Ads</h1>
                </div>
              </div>
              <div className="second bg-white">
                <h1 className="text-base bg-green-800 md:text-base lg:text-xl p-7 lg:block lg:hidden">
                  Linkedin Ads
                </h1>
                <h1 className="text-base bg-green-800 md:text-base lg:text-xl p-7  hidden lg:block">
                  Linkedin Ads
                </h1>
                <p className="text-gray-700 px-5">
                  LasioWeb uses LinkedIn ads for social media promotion by
                  refining their profiles, creating effective LinkedIn Pages,
                  defining audience and goals, optimizing the page for search,
                  growing page followers, choosing the right ad format, and
                  using LinkedIn’s comprehensive targeting to reach the right
                  audience.
                </p>
              </div>
            </div>
          </div>

          <div className="slide_item border border-gray-200 shadow bg-green-600 rounded">
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
                    className="bi bi-google w-10 h-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>
                </div>
                <div className="text-center w-full ">
                  <h1 className="text-xl font">Google Ads</h1>
                </div>
              </div>
              <div className="second bg-white">
                <h1 className="text-base bg-green-600 md:text-base lg:text-xl p-7 lg:block lg:hidden">
                  Google Ads
                </h1>
                <h1 className="text-base bg-green-900 md:text-base lg:text-xl p-7  hidden lg:block">
                  Google Ads
                </h1>
                <p className="text-gray-700 px-5">
                  We use ad quality, keyword relevance,Continual testing,
                  optimization and website usability to create profitable
                  campaign.
                </p>
              </div>
            </div>
          </div>

          <div className="slide_item border border-gray-200 shadow bg-green-900 rounded">
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
                    className="bi bi-twitter-x h-10 w-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                  </svg>
                </div>
                <div className="text-center w-full ">
                  <h1 className="text-xl font">Twitter or X Ads</h1>
                </div>
              </div>
              <div className="second bg-white">
                <h1 className="text-base bg-green-900 md:text-base lg:text-xl p-7 lg:block lg:hidden">
                  Twitter or X Ads
                </h1>
                <h1 className="text-base bg-green-900 md:text-base lg:text-xl p-7  hidden lg:block">
                  Twitter or X Ads
                </h1>
                <p className="text-gray-700 px-5 mt-1">
                  LasioWeb uses Twitter Ads by crafting compelling subject
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
      <GetStarted />
      <Newsletter
        background="bg-green-800"
        button="bg-green-700"
        hover="hover:bg-green-500"
      />
    </div>
  );
};

export default socialMediaMarketing;
