import Navbar from "./../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className=" flex flex-col h-screen justify-center items-center">
        <p className=" text-teal-700 font-bold">This is working</p>{" "}
      </div>
    </>
  );
}
