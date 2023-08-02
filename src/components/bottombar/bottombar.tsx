import { Facebook } from "lucide-react";

const Bottombar = () => {
  return (
    <>
      <div className="min-h-[4.5vh] items-center flex justify-between bg-green-800">
        <div className="ml-6 text-neutral-100">
          <span>©2023 Armando Fernando Alonso</span>
          <span> | All rights reserved</span>
        </div>
        <div className="flex ">
          <div className="mr-6">
            <a href="https://www.facebook.com/animalcentralkuching">
              <Facebook size={30} className="my-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottombar;
