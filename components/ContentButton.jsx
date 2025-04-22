import React from "react";

const ContentButton = (props) => {
  return (
    <>
      <section
        className={`text-center px-2 py-7 bg-gray-200 text-gray-900`}
      >
        <h1 className="text-3xl mb-5 font-semibold">{props.header}</h1>
        <p className="mb-3 text-lg">
          {props.paragraph}
        </p>
        <button className={`px-7 bg-black hover:bg-gray-600 text-white py-4 m_auto mt-4 font-bold`}>
          {props.button}
        </button>
      </section>
    </>
  );
};

export default ContentButton;
