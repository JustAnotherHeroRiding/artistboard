import Image from "next/image";


  
export default function VisitorNavBar() {

  return (
        <div className="py-4 relative">
        <div className="shadow-figma flex flex-row justify-between">
        <Image
          key={typeof window === "undefined" ? "" : "client"}

          src="/Logo.png"
          className="flex-shrink-0 p-4 -left-4 absolute -bottom-8"
          alt="Logo"
          width={145.093}
          height={145.14}
        />
          <h1 className="text-center ml-[25%]  sm:ml-[18%] md:ml-[15%] lg:ml-[12%] xl:ml-[9%] text-3xl text-brainster-200">
            Street ARTists
          </h1>
          <Image
          src="/auction.png"
          className="flex-shrink-0 my-auto mr-8 mb-4"
          alt="Logo"
          width={33}
          height={33}
        />
        </div>
      </div>
  );
}
