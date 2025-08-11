"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="">
      <div className="bg-[#62826B] text-[#EFF3EC] text-[12px] text-center py-[18px] ">
        <p>
          <span className="text-[#FFEFC4]">Try a Free Class Today </span>- No
          commitment, Just Relaxation and Rejuvenation
        </p>
      </div>

      {/*Menu Desktop */}
      <div className=" hidden mx-[136px] lg:flex items-center justify-between py-[33px] ">
        <Image src={"/logo-shanty.png"} alt="logo" width={150} height={100} />
        <nav>
          <ul className="font-medium text-[15px] flex gap-5  cursor-pointer">
            <Link href="/" className={"hover:text-[#62826B]"} nome={"Home"}>
              Home
            </Link>

            <Link
              href="/#aboutus"
              scroll={true}
              className={"hover:text-[#62826B]"}
              nome={"Home"}
            >
              About Us
            </Link>

            <Link
              href="/#services"
              className={"hover:text-[#62826B]"}
              nome={"Home"}
            >
              Services
            </Link>

            <Link
              href="/#contact "
              className={"hover:text-[#62826B]"}
              nome={"Home"}
            >
              Contact Us
            </Link>
          </ul>
        </nav>
        <div className="flex gap-2">
          <Link
            href="https://wa.me/5522981073895?text=vim%20pelo%20portif%C3%B3lio"
            target="_blank"
            className="p-3 border border-[#3837374c] rounded-full hover:text-[#62826B] px-8"
          >
            Join class
          </Link>

          <Link
            href="https://wa.me/5522981073895?text=vim%20pelo%20portif%C3%B3lio"
            target="_blank"
            className="p-3 border border-[#3837374c] rounded-full hover:text-[#62826B]"
          >
            <Image src={"/phone.svg"} alt="phone" width={24} height={24} />
          </Link>
        </div>
      </div>

      {/*Menu mobile*/}
      <div className="mx-5 lg:hidden py-8 flex items-center">
        <Image src={"/logo-shanty.png"} alt="logo" width={100} height={100} />
        <div className={`${isOpen ? "flex" : "hidden"} `}>
          <nav className="bg-[#eff3ec] absolute px-30 h-full w-full pt-20 top-[55px] right-0 z-1 shadow-[0_20px_105px_-34px_rgb(0,0,0,0.8)]">
            <ul className="font-bold  text-[20px] flex gap-5  cursor-pointer lh:hidden flex-col items-center">
              <Link href="/" className={"hover:text-[#62826B]"} nome={"Home"}>
                Home
              </Link>
              <Link
                href="/#aboutus"
                scroll={true}
                className={"hover:text-[#62826B]"}
                nome={"Home"}
              >
                About Us
              </Link>
              <Link
                href="/#services"
                className={"hover:text-[#62826B]"}
                nome={"Home"}
              >
                Services
              </Link>

              <Link
                href="/#contact "
                className={"hover:text-[#62826B]"}
                nome={"Home"}
              >
                Contact Us
              </Link>
            </ul>
            <div className=" mt-12 flex items-center flex-col-reverse gap-4">
              <Link
                href="https://wa.me/5522981073895?text=vim%20pelo%20portif%C3%B3lio"
                target="_blank"
                className="p-2 border border-[#3837374c] rounded-full hover:text-[#62826B] px-4 text-cente w-fit h-fit text-[14px]"
              >
                Join class
              </Link>

              <Link
                href="https://wa.me/5522981073895?text=vim%20pelo%20portif%C3%B3lio"
                target="_blank"
                className="p-3 border border-[#3837374c] rounded-full hover:text-[#62826B] w-fit h-fit"
              >
                <Image src={"/phone.svg"} alt="phone" width={24} height={24} />
              </Link>
            </div>
          </nav>
        </div>
        {/*Button mobile */}
        <button
          onClick={handleMenu}
          className="lg:hidden flex absolute right-0 mr-5 top-24 z-10 "
        >
          {isOpen ? (
            <Image src={"/x.png"} alt="x menu" width={30} height={30} />
          ) : (
            <Image src={"/menu.png"} alt="x menu" width={30} height={30} />
          )}
        </button>
      </div>

      <hr className="border-[#38373712]" />
    </header>
  );
};

export default Header;
