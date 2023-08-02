import Topbar from "~/components/topbar/topbar";
import Head from "next/head";
import Bottombar from "~/components/bottombar/bottombar";

const aboutus = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div className="flex min-h-screen flex-col bg-neutral-100">
        <div>
          <Topbar />
          <div>
            <div className="my-8 flex ">
              <div className="mb-8 ml-4 text-8xl font-extrabold italic drop-shadow-sm">
                Animal Central Veterinary
              </div>
            </div>
            <div className="mb-10 mt-2 flex flex-col justify-center">
              <div className="flex items-center">
                <div className="ml-8 flex flex-col">
                  <div>
                    <span className="mb-8 flex text-6xl font-bold italic">
                      Dr Davies Belayong Banda, DVM
                    </span>
                    <span className="mb-4 flex text-4xl text-green-800">
                      Veterinarian, Practice Owner
                    </span>
                  </div>
                  <span className="mr-8 text-2xl font-semibold text-neutral-900">
                    Animal Central was founded by the compassionate and skilled
                    Dr. Davies Belayong Banda, a dedicated veterinary doctor
                    with a profound love for animals since 2006. His decision to
                    work closely with animals stems from the deep sense of
                    tranquility they bring him, as well as his commitment to
                    ensuring their well-being. Each day, he begins his day
                    around 8 am, eagerly opening his clinic doors to care for
                    the precious animals under his charge.
                  </span>
                </div>
                <img
                  src="https://imgtr.ee/images/2023/08/02/e4443cc9393ba51adf4b2b717ac6d86a.jpeg"
                  className="mr-8 rounded-lg drop-shadow-xl"
                />
              </div>
              <div className="mx-8 flex items-center">
                <img
                  src="https://imgtr.ee/images/2023/08/02/9ff4d239110a8e1d5908c1b1232104c9.jpeg"
                  className="rounded-lg"
                />
                <span className="ml-8 text-2xl font-semibold text-neutral-900">
                  Dr. Davies takes immense joy in interacting with animals, as
                  they offer pure, unconditional happiness, and he finds great
                  satisfaction in helping them overcome any fears or ailments
                  they may have. His caring nature extends not only to the
                  animals but also to his dedicated staff, whom he values and
                  supports.
                </span>
              </div>
              <div className="mx-8 flex items-center">
                <span className="ml-8 mr-8 text-2xl font-semibold text-neutral-900">
                  Every daily routine serves as a testament to Dr. Davies's
                  unwavering commitment to his profession. He continuously tests
                  and hones his skills to ensure that every furry companion can
                  return home safely and filled with happiness. While he once
                  experienced the loss of his beloved dog, it served as a
                  poignant reminder of the profound bond between humans and
                  animals. Dr. Davies's unwavering dedication and passion shine
                  through as he strives to offer the best possible care to every
                  pet that comes his way.
                </span>
                <img
                  src="https://imgtr.ee/images/2023/08/01/d177e5b0de2ce3cbc674e6f12844e233.jpeg"
                  className="h-[70vh] w-[65vh] rounded-lg"
                />
              </div>
              <div className="mx-8 flex items-center">
                <img
                  src="https://imgtr.ee/images/2023/08/02/6c29357954b481ec70b712f3481ec221.jpeg"
                  className="h-[70vh] w-[85vh] rounded-lg"
                />
                <span className="ml-8 text-2xl font-semibold text-neutral-900">
                  Through every challenge he faces, Dr. Davies views his role as
                  a veterinarian as a precious gift from above. He embraces
                  every lesson that comes his way, using them as stepping stones
                  for improvement. His constant desire to elevate his clinic
                  ensures that each pet owner who seeks his expertise will leave
                  with their furry friends in the best hands possible."
                </span>
              </div>
            </div>
          </div>
        </div>
        <Bottombar />
      </div>
    </>
  );
};
export default aboutus;
