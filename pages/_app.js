import RootLayout from "@/components/root_layout";
import React, { useState, useEffect } from "react";
import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";

import "aos/dist/aos.css";
import Adminlayout from "@/components/buttons/admin/admin_layout";

const App = ({ Component, pageProps }) => {
  const [isAdminRoute, setIsAdminRoute] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const parts = router.pathname.split("/");
    if (parts.includes("admin")) {
      setIsAdminRoute(true);
    }
  }, [router]);
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="12x32"
          href="/images/logo.png"
        ></link>
        <title>Different Treks</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        /> */}
      </Head>
      {isAdminRoute ? (
        <Adminlayout>
          <Component {...pageProps} />
        </Adminlayout>
      ) : (
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      )}
    </>
  );
};

export default App;
