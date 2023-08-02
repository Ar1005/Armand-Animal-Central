import Topbar from "~/components/topbar/topbar";
import Head from "next/head";
import Bottombar from "~/components/bottombar/bottombar";

const ourstaff = () => {
  return (
    <>
      <Head>
        <title>Our Staff</title>
      </Head>
      <div className="flex min-h-screen flex-col bg-neutral-100">
        <div>
          <Topbar />
          <div>Our Staff</div>
        </div>
        
      </div>
      <Bottombar />
    </>
  );
};
export default ourstaff;
