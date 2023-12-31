import { type Dispatch, useState, type SetStateAction } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export interface HomePageSelectProps {
    setUrl: Dispatch<SetStateAction<string>>;
  }
  
  export default function HomePageSelect({ setUrl }: HomePageSelectProps) {
    const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("Choose");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  const handleClick = async () => {
    await router.push("/#hash");
  };

  return (
        <>
        <div className="py-4">
        <div className="py-2 shadow-figma">
          <h1 className="text-center text-2xl text-brainster-200">
            Street ARTists
          </h1>
        </div>
      </div>
      <main className="mb-[500px] flex flex-col items-center justify-center">
        <Image
          src="/Logo.png"
          className="flex-shrink-0 p-4"
          alt="Logo"
          width={145.093}
          height={145.14}
        />

        <div className="relative">
          <div
            className="group"
          >
            <h2 className="absolute right-1/2 top-16 z-50 w-52 translate-x-1/2 px-4 text-4xl text-brainster-200">
              Join as Artist
            </h2>
            <select
              value={selectedOption}
              onChange={handleChange}
              className="absolute top-28 z-50 w-24 translate-x-2  appearance-none bg-transparent px-2 
      text-sm text-brainster-200 outline"
            >
              <option value="Choose">Choose</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
            </select>
            <div
              className="pointer-events-none absolute inset-y-0 top-28 z-50  flex  h-[20px] 
      w-[20px] translate-x-20 items-center text-gray-700"
            >
              <Image
                src="/ArrowSelect.png"
                alt="ArrowSelect"
                width={16}
                height={16}
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="230"
              height="277"
              className="absolute right-1/2 translate-x-1/2 
            scale-100 transition-all  duration-200 ease-in-out group-hover:z-10 group-hover:scale-110"
              viewBox="0 0 260 277"
              fill="none"
            >
              <path d="M0 116L260 276.5V0H0V116Z" fill="#EDD5BB" />
            </svg>
          </div>
          <div className="group"
           onClick={ () => {
            void handleClick();
            setUrl('/#hash')
         }}>
            <h2 className="absolute right-1/2 top-60 z-50 w-52 translate-x-1/2 px-4 text-4xl text-white">
              Join as Visitor
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="230"
              height="277"
              className="absolute right-1/2 top-20 translate-x-1/2
            scale-100 transition-all  duration-200 ease-in-out group-hover:z-10 group-hover:scale-110"
              viewBox="0 0 260 277"
              fill="none"
            >
              <path d="M260 160.5L0 0V276.5H260V160.5Z" fill="#A26A5E" />
            </svg>
          </div>
        </div>
      </main>
      </>
  );
}
