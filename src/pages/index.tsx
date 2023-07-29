import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import HomePageSelect from "./Components/SelectArtistOrGuest";
import GuestSelected from "./Components/GuestSelected";

export default function Home() {
  const router = useRouter();
  const [url, setUrl] = useState("/");

  useEffect(() => {
    if (router.asPath === "/#hash") {
      setUrl("/#hash");
    }
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>Brainster Artists Board</title>
        <meta name="description" content="Brainster" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {url === "/" && <HomePageSelect setUrl={setUrl} />}
        {url === "/#hash" && <GuestSelected setUrl={setUrl} />}
      </div>
    </>
  );
}
