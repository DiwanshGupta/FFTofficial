import React from "react";

const Service = () => {
  return (
    <div className="py-8  container m-auto items-center">
      <div className="flex flex-col gap-12 ">
        <div className="flex flex-col md:flex-row justify-between p-3 bg-[#FEAF05] sm:gap-20     md:gap-14 lg:gap-44">
          {" "}
          <p className="bg-white h-fit justify-center m-auto p-5 rounded-xl shadow-2xl hover:shadow-lg shadow-gray-600">
            Welcome to Fifteen for teen,
            <br /> Elevate Your College Experience
            <br />
            Embark on a transformative journey where education meets inspiration
            at Fifteen for teens. We're not just an educational firm; we're
            architects of your academic success and personal growth. <br /> 🎓
            College-Centric Learning: Immerse yourself in meticulously crafted
            resources tailored for college triumph. <br />
            💡 Innovation in Education: Embrace the future with our pioneering
            methodologies and cutting-edge approaches. <br />
            🌐 Global Perspectives: Navigate a dynamic curriculum that mirrors
            the evolving global landscape, preparing you for success on an
            international scale. <br />
            👥 Community and Collaboration: Connect, collaborate, and thrive
            alongside like-minded individuals who share your passion for
            knowledge and growth.
          </p>
          <img
            src="pexels-stanley-morales-1454360.jpg "
            className="md:h-[10rem]  m-auto items-center lg:h-[20rem] sm:h-[10rem] hidden md:block md:mr-4 rounded-lg"
            alt="images"
          />{" "}
        </div>
        <div className="flex flex-col md:flex-row justify-between p-3 bg-[#FEAF05] sm:gap-20     md:gap-14 lg:gap-44">
          {" "}
          <img
            src="pexels-agung-pandit-wiguna-3401403.jpg"
            className="md:h-[10rem] m-auto items-center lg:h-[20rem] sm:h-[10rem] hidden md:block md:mr-4 rounded-lg"
            alt="images"
          />{" "}
          <p className="bg-white justify-center flex flex-col items-start m-auto p-5 h-fit rounded-xl shadow-2xl hover:shadow-lg shadow-gray-600">
            We provide notes, important questions, informative videos, and many
            more things to help every college student to score a great result.
            Also, we have a vast community which also have an interactive group
            where all students from variety of colleges and with distinct
            knowledge, interact with each other and explore, understand, and
            grow together...
            <button className="btnhero h-fit">Courses</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
