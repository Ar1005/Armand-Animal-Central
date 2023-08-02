import { Pencil } from "lucide-react";

const Testimony = () => {
  return (
    <>
      <div className="flex min-h-[75vh] justify-center bg-green-800">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="mt-6">
              <span className="text-5xl text-neutral-100 ">
                Here's what our beloved clients had to say!
              </span>
            </div>
          </div>
          <div className="mt-6 flex flex-col justify-between gap-10">
            <div className=" flex flex-col rounded-lg bg-white p-4 drop-shadow-lg">
              <div className="flex flex-col items-center text-xl">
                <Pencil className="mb-4" />
                <span>
                  "So far have been here three times. The new place is much more
                  clean, airy and spacious.
                </span>
                <span>
                  The doctors have been very kind to my cat. Not sure what the
                  usual rate is out there but I think this place charges quite
                  decently."
                </span>
              </div>
              <span className="mt-6">Deborah D.</span>
            </div>
            <div className=" flex flex-col rounded-lg bg-white p-4 drop-shadow-lg">
              <div className="flex flex-col items-center text-xl">
                <Pencil className="mb-4" />
                <span>
                  "I really like this new animal central veterinary place
                  because the place
                </span>
                <span>
                  the place is very spacious and comfortable. Clean and large
                  treatment room makes your beloved cat comfortable to be
                  treated."
                </span>
              </div>
              <span className="mt-6">Nixon D. W.</span>
            </div>
            <div className=" flex flex-col rounded-lg bg-white p-4 drop-shadow-lg">
              <div className="flex flex-col items-center text-xl">
                <Pencil className="mb-4" />
                <span>
                  "Very good clinic for your pets. Dr Davies and his team are
                  very good in treating your fur babies.
                </span>
                <span>
                Vaccines,blood tests, xrays are all available for your pets. Price very reasonable. Recomended."
                </span>
              </div>
              <span className="mt-6">Nur Izzah Ibrahim</span>
            </div>
            <div className=" flex flex-col rounded-lg bg-white p-4 drop-shadow-lg">
              <div className="flex flex-col items-center text-xl">
                <Pencil className="mb-4" />
                <span>
                  "Love this clinic, suitable for working people since it is open till 9.30pm
                </span>
                <span>
                Not waiting for too long to get treatment even on weekend. The fee is affordable."
                </span>
              </div>
              <span className="mt-6">Nur Aini b. Mohammad Nasir</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimony;
