import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Logo from "../asset/Logo.svg";
import Image from "next/image";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="py-4">
      <nav>
        <div className="flex items-center justify-between mr-auto ml-auto  w-11/12">
          <div>
            <Image src={Logo} />
          </div>

          <button className="inline-block py-5 px-11 bg-sky-500 bg-black text-white rounded-lg ">
            ANALYZE ASAS
          </button>
        </div>
      </nav>

      <div className="  pb-12 pt-10  md:pb-14 md:pt-10 lg:pb-16 lg:pt-10 text-center flex justify-center">
        <h1 className=" lg:w-2/5 md:w-3/5 w-4/5  text-2xl  md:text-3xl  lg:text-4xl font-medium">
          List of Algorand Standard Asset on Asalytics
        </h1>
      </div>
    </header>
    {children}
    <footer>{/* <span>Im here to stay (Footer)</span> */}</footer>
  </div>
);

export default Layout;
