import Head from "next/head";
import Bottombar from "~/components/bottombar/bottombar";
import Topbar from "~/components/topbar/topbar";

const ourdoctors = () => {
  return (
    <>
      <Head>
        <title>Our Doctors</title>
      </Head>
      <div className="flex min-h-screen flex-col bg-neutral-100">
        <div>
          <Topbar />
          <div>Our Doctors</div>
        </div>
        
      </div>
      <Bottombar />
    </>
  );
};
export default ourdoctors;
