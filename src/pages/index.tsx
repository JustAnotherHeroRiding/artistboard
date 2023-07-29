import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import HomePageSelect from "./Components/SelectArtistOrGuest";
import GuestSelected from "./Components/GuestSelected";

export default function Home() {
  const router = useRouter();
  const [url, setUrl] = useState(router.asPath)


  return (
    <>
      <Head>
        <title>Brainster Artists Board</title>
        <meta name="description" content="Brainster" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      {url === '/' && (
       <HomePageSelect setUrl={setUrl} />
      )}
      {url === '/#hash' && (
        <GuestSelected />
      )}
      </main>
      </>
    
  );
}
