"use client";
import React, { useState } from "react";
import { AiOutlineLogout, AiOutlineShoppingCart } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { FaHome, FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/app/slice/authSlice";
import Swal from "sweetalert2";

const Navbar = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const handleLogout = () => {
    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Dispatch logout action
        dispatch(logout());
        Swal.fire("Logged Out!", "You have been logged out.", "success");
      }
    });
  };
  return (
    <>
      <section>
        <div className=" shadow-md fixed top-0 left-0 w-full z-40 ease-in duration-300 navbg">
          <div className="py-3 px-2 md:px-16 lg:px-16 items-center container mx-auto ">
            <div className="flex  items-center  justify-around">
              <div className="flex flex-row items-center gap-2 ">
                <div className="block md:hidden z-40" onClick={handleNav}>
                  {nav ? (
                    <>
                      <RxCross2
                        size={20}
                        className="text-[#bbc84a] cursor-pointer"
                      />
                    </>
                  ) : (
                    <>
                      {" "}
                      <HiMenu
                        size={20}
                        className="text-yellow-700 cursor-pointer"
                      />
                    </>
                  )}
                </div>
                <Link href={"/"}>
                  <img
                    src="fft.jpg"
                    className="md:h-[4rem] h-[3rem] w-[3rem] rounded-full md:w-[4rem]"
                    alt="FFT"
                  />{" "}
                </Link>
              </div>
              <div className="flex hidden md:block justify-start items-center gap-8">
                <div className="flex gap-4  font-semibold text-xl text-white">
                  <Link href={"/"} className=" flex items-center gap-1">
                    <FaHome className="cursor-pointer" />{" "}
                    <span className="text-xl cursor-pointer"> Home</span>{" "}
                  </Link>
                  <Link href={"/pages/content"} className="cursor-pointer">
                    Content
                  </Link>
                  <Link href={"/pages/about"} className="cursor-pointer">
                    About us
                  </Link>
                  <Link href={"/pages/subjects"} className="cursor-pointer">
                    Subjects
                  </Link>
                  <Link
                    href={"/"}
                    className=" flex items-center gap-1 cursor-pointer"
                  >
                    <FaSearch className="text-xs  hover:animate-spin" />
                    <span>Search</span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-row items-center gap-5 md:gap-11">
                <Link
                  href={"/"}
                  className="font-semibold text-yellow-200 text-lg animate-bounce   flex items-center gap-1 "
                >
                  <AiOutlineShoppingCart />
                  Store
                </Link>

                {token ? (
                  <>
                    {" "}
                    <div
                      onClick={handleLogout}
                      className="md:text-lg font-bold bg-white text-yellow-400 rounded-full p-3  text-xs"
                    >
                      <AiOutlineLogout />
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <Link href={"/pages/login"}>
                      {" "}
                      <div className="md:text-lg  text-white bg-yellow-600 rounded-lg p-3 font-semibold text-xs">
                        Login / Register
                      </div>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div
              className={`absolute w-1/2 md:hidden navbg sm:w-2/5 h-screen py-2 px-3 text-xl font-medium ease-in shadow-sm backdrop-blur-md bg-white/90 top-0 duration-200 ${
                nav ? "left-0" : "left-[-100%] "
              } pt-20`}
            >
              <div className="flex flex-col gap-8 items-center font-semibold text-xl text-yellow-500">
                <span className=" flex items-center gap-1 border-b border-yellow-500/35 w-24  justify-center">
                  <FaHome className="cursor-pointer" />{" "}
                  <span className="text-xl cursor-pointer" onClick={handleNav}>
                    {" "}
                    Home
                  </span>{" "}
                </span>
                <span
                  onClick={handleNav}
                  className="border-b cursor-pointer border-yellow-500/35 w-24  justify-center flex"
                >
                  Content
                </span>
                <span
                  onClick={handleNav}
                  className="border-b border-yellow-500/35 cursor-pointer w-24  justify-center flex"
                >
                  About us
                </span>
                <span
                  onClick={handleNav}
                  className=" flex items-center gap-1 border-b border-yellow-500/35 w-24  justify-center"
                >
                  <FaSearch className="text-xs  hover:animate-spin" />
                  <span>Search</span>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
