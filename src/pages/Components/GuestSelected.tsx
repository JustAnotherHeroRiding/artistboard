import Bricks from "./Bricks";
import VisitorNavBar from "./VisitorNavbar";
import Image from "next/image";

export default function GuestSelected() {
  return (
    <>
      <VisitorNavBar />
      <div className="relative mb-8 flex flex-row items-center justify-between">
        <p className="z-10 ml-4 mt-8 w-36 text-2xl font-bold text-brainster-200">
          Looking for a masterpiece?
        </p>
        <button className="z-10 mr-4 mt-8 border bg-brainster-200 px-4 py-1 text-xs font-bold text-brainster-100">
          Find one now!
        </button>
        <Bricks left={0} />
      </div>
      <div className="w-full bg-brainster-300">
        <div className="relative m-auto h-[200px] w-auto overflow-hidden">
          <ul className="flex w-[calc(250px*6)] animate-scroll">
            <li className="w-[250px]">
              <Image
                className="w-[250px] h-[153px] "
                src="/image1GuestView.jpg"
                alt="image1GuestView"
               
              />
            </li>
            <li className="w-[250px]">
              <Image
                className="w-[250px] h-[153px] "
                src="/image2GuestView.jpg"
                alt="image2GuestView"
               
              />
            </li>
            <li className="w-[250px]">
              {" "}
              <Image
                className="w-[250px] h-[153px] "
                src="/image3GuestView.jpg"
                alt="image3GuestView"

              />
            </li>
            <li className="w-[250px]"> <Image
                className="w-[250px] h-[153px] "
                src="/image1GuestView.jpg"
                alt="image1GuestView"
              /></li>
            <li className="w-[250px]"><Image
                className="w-[250px] h-[153px] "
                src="/image2GuestView.jpg"
                alt="image2GuestView"
              /></li>
            <li className="w-[250px]"><Image
                className="w-[250px] h-[153px]"
                src="/image1GuestView.jpg"
                alt="image1GuestView"
              /></li>
          </ul>
        </div>
      </div>
     {/*  <div className="relative mt-20 overflow-hidden bg-brainster-300">
        <Image
          className="absolute h-[153px] -translate-x-1/2 animate-scroll"
          src="/image1GuestView.jpg"
          alt="image1GuestView"
          width={207.619}
          height={153}
        />
        <Image
          className="ml-[31%] h-[153px] animate-scroll"
          src="/image2GuestView.jpg"
          alt="image2GuestView"
          width={207.619}
          height={153}
        />
        <Image
          className="absolute right-[-40%] top-0 h-[153px] animate-scroll"
          src="/image3GuestView.jpg"
          alt="image3GuestView"
          width={207.619}
          height={153}
        />
      </div>
      <div className="relative mb-[100px] mt-20 overflow-hidden bg-brainster-300">
        <Image
          className="absolute left-[-42%] h-[153px]"
          src="/image1GuestView.jpg"
          alt="image1GuestView"
          width={207.619}
          height={153}
        />
        <Image
          className="ml-[14%] h-[153px]"
          src="/image4GuestView.jpg"
          alt="image4GuestView"
          width={207.619}
          height={153}
        />
        <Image
          className="absolute right-[-22%] top-0 h-[153px]"
          src="/image3GuestView.jpg"
          alt="image3GuestView"
          width={207.619}
          height={153}
        />
      </div> */}
    </>
  );
}
