import Head from "next/head";
import styles from "./layout.module.css";
import Menu from "../../features/navigation/menu";
import { FC, useEffect, useRef, useState } from "react";
import Footer from "./Footer";

import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { Provider, useDispatch, useSelector } from "react-redux";

import StoreProvider from "../../StoreProvider";

import localFont from "next/font/local";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const netflixFont = localFont({
  src: [
    {
      path: "../../../public/fonts/Netflix-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Netflix-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Netflix-Medium.otf",
      weight: "500",
      style: "semibold",
    },
  ],
  variable: "--font-netflix",
});

interface IProps {
  children: React.ReactNode[] | React.ReactNode;
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const Layout: FC<IProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <div className={netflixFont.className}>
          <div className="font-netflix flex flex-col text-white md:px-10 lg:px-[60px]">
            <Menu />
            <div>{children}</div>

            <Footer />
          </div>
        </div>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default Layout;
