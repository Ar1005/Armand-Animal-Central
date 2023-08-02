import Head from "next/head";
import Topbar from "~/components/topbar/topbar";
import Others from "~/components/others/others";
import Testimony from "~/components/testimony/testimony";
import Bottombar from "~/components/bottombar/bottombar";

const dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="flex min-h-screen flex-col bg-neutral-100">
        <div>
          <Topbar />
          <div>
            <div className="my-8 flex flex-col items-center justify-center">
              <div className="mb-8 text-8xl font-extrabold italic drop-shadow-sm">
                Animal Central Veterinary
              </div>
              <img
                src="https://imgtr.ee/images/2023/08/01/ddfc86d51fa1729dc35d4e2ec7740856.jpeg"
                className="rounded-lg border"
              />
            </div>
            <div>
              <div className="flex justify-center gap-3 text-5xl">
                <span className="text-3xl italic">
                  Your Pet's well-being comes first
                </span>
              </div>
            </div>
            <div className="flex ">
              <div className="mt-6 mb-20 flex justify-between gap-10">
                <div className="ml-10 flex rounded-lg bg-white p-4 drop-shadow-lg">
                  <div className=" flex items-center">
                    <img
                      src="https://img.freepik.com/free-photo/cute-pet-collage-isolated_23-2150007407.jpg?w=1380&t=st=1690904585~exp=1690905185~hmac=218df6313a9ae38a728ab8f6cb8d0b0abe2e6ac71bc0bf5a1b177e156acbc3cf"
                      className="h-64 w-64 rounded-full"
                    />
                  </div>
                  <div>
                    <div className="mr-10">
                      <span className="ml-10 mt-2 flex items-center justify-start text-2xl font-bold">
                        We treat your pet like family
                      </span>
                      <span className="ml-10 flex items-center justify-start text-lg">
                        At Animal Central we understand that your
                      </span>
                      <span className="ml-10 flex items-center justify-start text-lg">
                        pet is a very special part of your family.
                      </span>
                      <span className="ml-10 flex items-center justify-start text-lg">
                        Everyday we strive to provide you with
                      </span>
                      <span className="ml-10 flex items-center justify-start text-lg">
                        the best veterinary care as possible.
                      </span>
                      <span className="ml-10 flex items-center justify-start text-lg">
                        We take great care to do this so that
                      </span>
                      <span className="ml-10 flex items-center justify-start text-lg">
                        we may eliminate or lessens the stress
                      </span>
                      <span className="ml-10 flex items-center justify-start text-lg">
                        you or your pet may feel when coming to the Vet.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-between gap-10">
                  <div className="ml-10 flex rounded-lg bg-white p-4 drop-shadow-lg">
                    <div className="flex items-center">
                      <img
                        src="https://imgtr.ee/images/2023/08/01/d4b954c0a2d4771d929f83dc098097a6.jpeg"
                        className="w-68 h-48 rounded-full"
                      />
                    </div>
                    <div className="mr-10">
                      <span className="ml-10 mt-2 flex items-center justify-start text-2xl font-bold">
                        We Treat them with a lot of Care
                      </span>
                      <span className="ml-10 flex items-center justify-start text-lg">
                        We take great pride in offering a wide arrange
                      </span>
                      <span className="ml-10 flex items-center justify-start text-lg">
                        of high quality care tailored to meet your pets
                      </span>
                      <span className="ml-10 flex items-center justify-start text-lg">
                        needs. This includes laser treatments, acupuncture
                      </span>
                      <span className="ml-10 flex items-center justify-start text-lg">
                        sessions, advanced ultrasound diagnostics, x-ray,
                      </span>
                      <span className="ml-10 flex items-center justify-start text-lg">
                        imaging, blood testing and many other various
                      </span>
                      <span className="ml-10 flex items-center justify-start text-lg">
                        exception services.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-between gap-10">
                  <div className="ml-10 flex rounded-lg bg-white p-4 drop-shadow-lg">
                    <div className="flex items-center">
                      <img
                        src="https://imgtr.ee/images/2023/08/01/d177e5b0de2ce3cbc674e6f12844e233.jpeg"
                        className="w-68 h-56 rounded-full"
                      />
                    </div>
                    <div className="mr-10">
                      <span className="ml-10 mt-2 flex items-center justify-start text-2xl font-bold">
                        Compassionate, stress
                      </span>
                      <span className="ml-10  flex items-center justify-start text-2xl font-bold">
                        free Veterinary Care
                      </span>
                      <span className="ml-10 flex items-center justify-start text-lg">
                        Whether its a routine check-up, dental care
                      </span>
                      <span className="ml-10 flex items-center justify-start text-lg">
                        or surgery you can count on our team to treat
                      </span>
                      <span className="ml-10 flex items-center justify-start text-lg">
                        your pet like one of our own. We truly believe
                      </span>
                      <span className="ml-10 flex items-center justify-start text-lg">
                        in the power of the human-animal bond, and
                      </span>
                      <div className="flex flex-col">
                        <span className="ml-10 flex items-center justify-start text-lg">
                          will always go the extra mile to make your
                        </span>
                        <span className="ml-10 flex items-center justify-start text-lg">
                          pet feel safe and comfortable at your appointment.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimony />
      <Others/>
      <Bottombar />
    </>
  );
};

export default dashboard;
