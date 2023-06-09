"use client";
import {
  PlayCircleIcon,
  BookOpenIcon,
  MicrophoneIcon,
  WrenchScrewdriverIcon,
  Squares2X2Icon,
  ArrowLongDownIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(
      /iPhone|iPad|iPod|Android|BlackBerry|Windows Phone/i.test(
        window.navigator.userAgent
      )
    );
  }, []);

  return (
    <>
      {isMobile ? (
        
        <h1 className="text-4xl text-white text-center">
          This template only has design for desktop and not for mobile devices.
        </h1>
        
      ) : (
        <>
          <section className="w-full h-auto flex justify-between px-20 mt-32 pb-5">
            <div className="w-[700px] relative">
              <svg
                className="absolute top-[-32px] right-[-61px]"
                width="64"
                height="65"
                viewBox="0 0 64 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.9478 0.834961L40.5191 23.9986L63.6827 32.5699L40.5191 41.1412L31.9478 64.3048L23.3765 41.1412L0.212891 32.5699L23.3765 23.9986L31.9478 0.834961Z"
                  fill="#D9D9D9"
                />
              </svg>

              <div className="border-b border-b-white pb-10">
                <h1 className="text-8xl font-extrabold uppercase">
                  Platform <br></br>
                  for
                  <span className="text-[#E44320]"> skills </span>&
                  <span className="flex items-center gap-4">
                    <img src="/images/avatars.png" alt="avatars" />
                    <span>learning</span>
                  </span>
                </h1>
              </div>

              <div className="pt-10 flex justify-between">
                <button className="bg-white  rounded-[10px] p-3 flex gap-3">
                  <p className="text-black font-semibold">Start Learning</p>
                  <PlayCircleIcon className="h-6 w-6 text-black" />
                </button>

                <div>
                  <p>
                    We provide Best User <br />
                    experience Courses
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-end">
              <img
                src="/images/men.png"
                alt="men"
                className="-translate-x-1/3 max-2xl:hidden"
              />
              <img
                src="/images/women.png"
                alt="women"
                className="absolute top-0 right-0 -z-10 max-xl:scale-75 max-xl:top-[-63px] max-xl:right-[-63px]"
              />
              <svg
                width="89"
                height="83"
                viewBox="0 0 89 83"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="20.1264"
                  cy="63.3072"
                  r="19.5748"
                  transform="rotate(-90 20.1264 63.3072)"
                  fill="#E44320"
                />
                <circle
                  cx="20.1264"
                  cy="20.292"
                  r="19.5748"
                  transform="rotate(-90 20.1264 20.292)"
                  fill="#D9D9D9"
                />
                <circle
                  cx="68.4569"
                  cy="63.3073"
                  r="19.5748"
                  transform="rotate(-90 68.4569 63.3073)"
                  fill="#D9D9D9"
                />
                <circle
                  cx="68.4569"
                  cy="20.292"
                  r="19.5748"
                  transform="rotate(-90 68.4569 20.292)"
                  fill="#E44320"
                />
              </svg>
            </div>
          </section>

          <section className="w-full h-auto bg-white flex justify-between gap-1">
            <div className="pt-1 relative">
              <div className="bg-[#1C1718] w-96 h-80 p-3 rounded-tr-3xl">
                <div className="bg-white  rounded-3xl">
                  <div className="absolute top-14 left-14">
                    <BookOpenIcon className="text-black w-6 H-6" />
                    <p className="uppercase text-black">
                      eleanor <br /> sullivan
                    </p>
                    <p className="text-gray-600">UXD, CEO</p>
                  </div>

                  <div className="flex justify-end">
                    <img src="/images/men-two.png" alt="men-two" />
                  </div>

                  <button className="bg-[#1C1718] p-3 absolute left-14 bottom-14 rounded-full flex gap-2 items-center">
                    <MicrophoneIcon className="text-[#E44320] w-5 h-5" />
                    <p className="text-[#E44320] font-semibold">UXPERT</p>
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-1 w-full">
              <div className="bg-[#1C1718] w-full h-80 p-3 rounded-tr-3xl rounded-tl-3xl overflow-y-hidden">
                <div className="bg-white w-full h-56 rounded-3xl flex items-center justify-center flex-col relative mb-12">
                  <p className="text-center text-gray-600 uppercase ">topic</p>

                  <p className="text-center text-black uppercase font-semibold text-2xl">
                    how to start your <br /> research
                  </p>
                  <div className="flex justify-center pt-2">
                    <img src="/images/avatars-two.png" alt="avatars2" />
                  </div>

                  <div className="bg-[#E44320] rounded-full w-10 h-10 flex justify-center items-center translate-y-12">
                    <ArrowLongDownIcon className="text-white w-6 h-6" />
                  </div>
                </div>
                <div className="bg-[#E44320] w-full h-14 p-3 rounded-3xl"></div>
              </div>
            </div>

            <div className="pt-1 relative">
              <div className="bg-[#1C1718] w-96 h-80 p-5 rounded-tl-3xl">
                <p className="text-white uppercase pb-3">topics</p>

                <div className="flex gap-4 py-2">
                  <button className="py-2 px-14 bg-[#1C1718] border border-white rounded-full text-white uppercase">
                    video editing
                  </button>
                  <div className="bg-[#E44320] rounded-full w-10 h-10 flex justify-center items-center">
                    <WrenchScrewdriverIcon className="text-white w-6 h-6" />
                  </div>
                </div>

                <div className="flex gap-4 py-2">
                  <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
                    <Squares2X2Icon className="text-[#1C1718]  w-6 h-6" />
                  </div>
                  <button className="py-2 px-14 bg-[#1C1718] border border-white rounded-full text-white uppercase">
                    machine learning
                  </button>
                </div>

                <div className="py-2">
                  <button className="py-2 px-14 bg-white rounded-full uppercase">
                    artificial intelligence
                  </button>
                </div>
                <div className="py-2">
                  <button className="py-2 px-10 bg-[#1C1718] border border-white rounded-full text-white uppercase">
                    UX/UI
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
