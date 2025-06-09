import Head from "next/head";
import { Fragment } from "react";
import ColorState from "../src/context/colorState";
import NavState from "../src/context/navState";
import PreLoader from "../src/layouts/PreLoader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Ibrahim Shanaa Personal Portfolio</title>
      </Head>
      <NavState>
        <ColorState>
          <PreLoader />
          <Component {...pageProps} />
        </ColorState>
      </NavState>
    </Fragment>
  );
}

export default MyApp;
