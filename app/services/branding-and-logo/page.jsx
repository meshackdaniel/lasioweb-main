import Image from "next/image";
import ContentButton from "@/components/ContentButton";
import Newsletter from "@/components/Newsletter";
import Link from "next/link";
const branding = () => {
  return (
    <div>
      <div style={{backgroundPosition: "top center",backgroundImage: "url('https://res.cloudinary.com/dj2ybe6v0/image/upload/v1728899515/branding-bg_sdugfd.png')"}} className="flex items-center md:flex-row p-5 md:p-10 justify-between bg-blue-800 h-screen">
        <div id="" className="basis-4/4 md:basis-2/4 text-white md:ms-20">
          <h1 className="font-bold text-4xl md:text-5xl mt-20 md:mt-0">
            Branding & Logo
          </h1>
          <p className="text-2xl md:text-3xl mt-3">
          Create your identity and story in few steps.
          </p>
        </div>
      </div>
      <section className="md:flex w-5/6 text-slate-800">
        <div className="md:w-2/4 me-5">
          <h1 className="text-2xl md:text-4xl text-black mb-5">
            We don't just design pretty logos
          </h1>
          <p>
            As a business owner, having a logo is crucial for your brand
            identity. It’s not just a tiny image, but a powerful tool that
            communicates your company’s values, tells a story, and enables
            customers to connect with your brand.
          </p>
          <p className="mt-5">
            Here’s why you should consider getting your logo from LasioWeb LTD:
          </p>
          <ol className="list-disc ms-4 md:ms-8 grid gap-0 grid-cols-2 mt-5">
            <li>Professionalism</li>
            <li>Custom Design</li>
            <li>Brand Consistency</li>
            <li>High Quality</li>
            <li>Affordable Pricing</li>
            <li>Excellent Customer Service</li>
          </ol>
          <p className="mt-4">
            {" "}
            A logo designed by Lasioweb LTD not only enhances your brand image
            but also helps in building trust with your customers. So, why wait?{" "}
            <Link className="text-blue-500 hover:text-blue-700" href="/contact">
              Contact us
            </Link>{" "}
            and get your logo designed by Lasioweb LTD today!
          </p>
        </div>
        <div className="w-4/4 mt-10 md:mt-0 md:w-2/4 md:ms-5">
          <Image
            src="/assets/images/services/branding.png"
            width={500}
            height={500}
          />
        </div>
      </section>
      <div className="w-5/6 m_auto mb-10">
        <Link href="/contact">
          <ContentButton
            header="Still have questions?"
            paragraph="Curious about our process or what it's like to work with us? Pick a
          package; we're happy to answer to give you the best creative designs."
            button="PURCHASE A PACKAGE"
          />
        </Link>
      </div>
      <Newsletter background="bg-blue-800" button="bg-blue-700" hover="hover:bg-blue-500" />
    </div>
  );
};

export default branding;
