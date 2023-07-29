import Image from "next/image";
import VisitorNavBar from "./Components/VisitorNavbar";
import Bricks from "./Components/Bricks";

export default function GuestSelected() {
  return (
    <div>
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
          <div className="flex w-[calc(250px*6)] animate-scroll">
            <Image
              className="h-[153px] w-[250px] "
              src="/image1GuestView.jpg"
              alt="image1GuestView"
              width={250}
              height={153}
            />
            <Image
              className="h-[153px] w-[250px] "
              src="/image2GuestView.jpg"
              alt="image2GuestView"
              width={250}
              height={153}
            />

            <Image
              className="h-[153px] w-[250px] "
              src="/image3GuestView.jpg"
              alt="image3GuestView"
              width={250}
              height={153}
            />

            <Image
              className="h-[153px] w-[250px] "
              src="/image1GuestView.jpg"
              alt="image1GuestView"
              width={250}
              height={153}
            />
            <Image
              className="h-[153px] w-[250px] "
              src="/image2GuestView.jpg"
              alt="image2GuestView"
              width={250}
              height={153}
            />
            <Image
              className="h-[153px] w-[250px]"
              src="/image1GuestView.jpg"
              alt="image1GuestView"
              width={250}
              height={153}
            />
          </div>
        </div>
      </div> 
      </div>
  );
}
