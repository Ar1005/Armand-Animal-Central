import Link from "next/link";
import { MapPin, Clock3 } from "lucide-react";

const Others = () => {
  return (
    <>
      <div className="flex min-h-[50vh] flex-col bg-neutral-100">
        <div className="my-6 flex justify-center">
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5996/5996258.png"
              className="h-40- w-40 rounded-full border-4 border-black"
            ></img>
            <span className="text-2xl font-semibold">
              We are looking forward to seeing you!
            </span>
          </div>
        </div>
        <div className="mx-96 my-5 flex justify-between">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center text-2xl">
              <MapPin
                className="rounded-full border border-4 border-black"
                size={110}
              />
              <span className="font-semibold">Address</span>
              <span className="text-sm">70, Jalan Tabuan</span>
              <span className=" text-sm">93100 Kuching, Sarawak</span>
              <span className=" mb-4 text-sm">
                To get the location press the button below
              </span>
            </div>
            <Link
              href="https://goo.gl/maps/N6RR1YK3bG3baEW78"
              className="rounded-lg border-2  bg-green-800 px-8 py-3 text-xl text-neutral-100 shadow-xl hover:bg-green-700 hover:text-neutral-200"
            >
              Location
            </Link>
          </div>
          <div>
            <div className="mr-20 flex flex-col items-center">
              <div className="flex flex-col items-center text-2xl">
                <Clock3 className="h-24 w-24 rounded-full border border-4 border-black" />
                <span className="font-semibold">Working Hours</span>
                <span className="text-sm">Mon-Sun: 9:00am - 9:00pm</span>
                <span className="text-sm">Public Holiday: 9:am - 5:00pm</span>
                <span className="mb-4 text-sm">
                  *Public Holiday is subject to change
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center text-2xl">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3414/3414702.png"
                  className="h-24 w-24 rounded-full border border-4 border-black"
                />
                <span className="">Contact Info</span>
                <span className="text-sm">Press the button below</span>
                <span className="text-sm">to request for housecall</span>
                <span className="mb-4 text-sm">or other enquires</span>
              </div>
              <Link
                href="https://wa.me/+60169377234"
                className="rounded-lg border-2 bg-green-800 px-5 py-3 text-3xl text-neutral-100 shadow-xl hover:bg-green-700 hover:text-neutral-200"
              >
                House Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Others;
