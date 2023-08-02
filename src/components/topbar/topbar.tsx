import Link from "next/link";

const Topbar = () => {
  return (
    <>
      <div className="flex justify-between bg-green-800 px-3 py-5 shadow-xl">
        <div className="mx-8 mx-auto flex w-full items-center justify-between">
          <div className="flex gap-x-10 font-sans text-neutral-100 ml-4">
            <Link href="/ourdoctors" className="">Our Doctors</Link>
            <Link href="/ourstaff">Our Staff</Link>
            <Link href="/aboutus">About Us</Link>
          </div>
          <Link href="/dashboard">
            <img
              src="https://imgtr.ee/images/2023/08/01/9fef4735e45a161f2e6c9c1a820303e8.png"
              className="mr-40 h-28 w-40"
            />
          </Link>
          <a
            href="/contactus"
            className="rounded-lg bg-white px-10 py-6 font-sans text-neutral-900 hover:bg-neutral-200 hover:text-neutral-800 mr-4"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

export default Topbar;
