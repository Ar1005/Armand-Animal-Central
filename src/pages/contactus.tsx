import { Link } from "lucide-react";
import React, { useState } from "react";
import Bottombar from "~/components/bottombar/bottombar";
import Topbar from "~/components/topbar/topbar";

const Contactus = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-neutral-100">
        <Topbar />
        <div className="mb-8 ml-4 flex justify-center text-8xl font-extrabold italic drop-shadow-sm">
          Animal Central Veterinary
        </div>
        <div className="my-12 flex w-full items-center justify-center">
          <div className="absolute top-40 mt-48 rounded bg-white px-8 py-12 shadow drop-shadow-lg lg:px-28">
            <p className="text-center text-xl font-bold leading-7 text-neutral-900 md:text-3xl">
              Get in Contact with us
            </p>
            <div className="mt-12 items-center md:flex">
              <div className="flex flex-col md:w-72">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Name
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input name"
                  type="name"
                  className="focus:oultine-none mt-4 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700"
                  placeholder="Please input  name"
                />
              </div>
              <div className="mt-4 flex flex-col md:ml-6 md:mt-0 md:w-72">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Email Address
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input email address"
                  type="name"
                  className="focus:oultine-none mt-4 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700"
                  placeholder="Please input email address"
                />
              </div>
            </div>
            <div className="mt-8 items-center md:flex">
              <div className="mt-4 flex w-full  flex-col md:mt-0">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Subject
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input country name"
                  type="name"
                  className="focus:oultine-none mt-4 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700"
                  placeholder="Please input country name"
                />
              </div>
            </div>
            <div>
              <div className="mt-8 flex w-full flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Message
                </label>
                <textarea
                  tabIndex={0}
                  aria-label="leave a message"
                  role="textbox"
                  type="name"
                  className="focus:oultine-none mt-4 h-36 resize-none rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700"
                  defaultValue={""}
                />
              </div>
            </div>
            <p className="mt-4 text-xs leading-3 text-gray-600">
              By clicking submit you agree to our terms of service, privacy
              policy and how we use data as stated
            </p>
            <div className="flex w-full items-center justify-center">
              <a
                className="mt-4 rounded-lg  border-2 bg-green-800 px-8 py-3 text-xl text-neutral-100 shadow-xl hover:bg-green-700 hover:text-neutral-200"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
              >
                SUBMIT
              </a>
            </div>
          </div>
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Contactus;
