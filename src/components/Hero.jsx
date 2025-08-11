"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  const handleSubmit = () => {
    window.open(
      "https://wa.me/5522981073895?text=vim%20pelo%20portif%C3%B3lio",
      "_blank"
    );
  };
  return (
    <section className="mx-5 lg:mx-[136px] flex  lg:justify-between items-center ">
      <div className="lg:w-[440px] mt-10 lg:mt-34 ">
        <p className="text-[15px] font-medium">Welcome To Shanty</p>
        <h1 className="text-6xl">Discover the Power of Yoga & Meditation</h1>
        <p className="text-[#A5A5A7] text-[15px] mt-6">
          Id massa id tortor interdum consectetur eu ultrices viverra. <br />
          Est aliquet pellentesque potenti.
        </p>

        <Button
          className={
            " cursor-pointer transition-transform duration-300 hover:scale-110 text-[#FFEFC4] bg-[#62826B] px-8 py-4 rounded-full mt-6 w-full sm:w-fit  lg:w-fit"
          }
          onClick={handleSubmit}
        >
          Let’s Get Started
        </Button>

        <div className="flex items-center mt-[115px] mb-40">
          <Image
            src={"/person1.webp"}
            alt="people"
            width={90}
            height={60}
            className="rounded-full "
          />
          <Image
            src={"/person2.webp"}
            alt="people"
            width={90}
            height={60}
            className="rounded-full relative right-10"
          />
          <span className="rounded-full bg-gray-200 text-[#62826B] h-[60px] w-[60px] flex items-center justify-center font-medium relative right-20">
            81K+
          </span>
          <p className="relative right-14">Worldwide Members</p>
        </div>
      </div>

      <div className="hidden lg:block">
        <Image
          src={"/yoga1.jpg"}
          alt="img"
          width={524}
          height={100}
          className="rounded-2xl"
        />

        <div className="flex">
          <div className="rounded-2xl relative top-[-60px] right-14 shadow p-1 bg-white">
            <Image
              src={"/yoga3.jpg"}
              alt="img"
              width={184}
              height={100}
              className="rounded-2xl shadow"
            />
            <p className="font-medium text-[12px] p-2">Yoga for beginners</p>

            <div className="flex items-center space-x-1 px-2 pb-2">
              <Image src={"/video.svg"} alt="img" width={20} height={20} />
              <p className="text-[#62826B] text-[10px] "> 6 Videos</p>

              <Image src={"/clock.svg"} alt="img" width={20} height={20} />
              <p className="text-[#62826B] text-[10px] "> 12 Hours </p>
            </div>
          </div>

          <Image
            src={"/yoga8.jpg"}
            alt="img"
            width={364}
            height={100}
            className="rounded-2xl relative top-2 right-8"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
