import React from "react";
import Layout from "../components/layout";
import type { AppProps } from "next/app";

import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
