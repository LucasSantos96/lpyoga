"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";

const SummerSale = () => {
  return (
    <section className="">
      <div className="mx-5 lg:mx-[136px] pt-[104px] pb-[80px] bg-[#11141B] rounded-2xl px-[100px] relative top-[-220] lg:mr-[70px] flex flex-col lg:flex-row items-center">
        <div className=" w-[280px] lg:w-[310px] flex flex-col ">
          <p className="bg-white py-2 px-4 font-medium text-[12px] w-fit rounded-full mb-4 ">
            Summer Sale
          </p>
          <h2 className="text-5xl font-medium mb-5 text-white">
            Up To <br /> <span className="text-[#FFEFC4]">30% Off</span>
          </h2>
          <p className="text-[#A5A5A7]">
            Amet amet quam tincidunt faucibus eget ac porta. Dictum tristique in
            at est.
          </p>
          <Button
            className={
              "bg-[#62826B] text-[#FFEFC4] mt-10 rounded-full py-4 px-8 cursor-pointer transition-transform duration-300 hover:scale-110 mb-10 lg:mb-0 "
            }
            onClick={() =>
              window.open(
                "https://wa.me/5522981073895?text=vim%20pelo%20portif%C3%B3lio",
                "_blank"
              )
            }
          >
            Get Summer Sale
          </Button>
        </div>

        <div className="w-[300px] lg:w-[340px] lg:ml-[70px]">
          <div className="p-[30px] border border-[#A5A5A7] rounded-2xl">
            <h3 className="text-white font-medium mb-4 text-[20px]">
              Community Support and Connection
            </h3>
            <p className="text-[#A5A5A7] text-[14px]">
              Id massa id tortor interdum consectetur eu ultrices viverra est
              pellentesque.
            </p>
          </div>

          <div className="p-[30px] border border-[#a5a5a75d] rounded-2xl mt-[25px] ">
            <h3 className="text-white font-medium mb-4 text-[20px]">
              Community Support and Connection
            </h3>
            <p className="text-[#A5A5A7] text-[14px]">
              Id massa id tortor interdum consectetur eu ultrices viverra est
              pellentesque.
            </p>
          </div>
        </div>

        <div className="relative lg:left-10  top-20">
          <Image
            src={"/yoga10.png"}
            alt="layer"
            width={314}
            height={100}
            className="  "
          />
        </div>
      </div>
    </section>
  );
};

export default SummerSale;
