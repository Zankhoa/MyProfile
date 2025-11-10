"use client";
//import Image from "next/image";
import { useContext, useEffect, useState, useRef } from "react";
import Head from "next/head";
// import Header from "../component/Header/Header";
import AppContext from "../component/AppContextFolder/AppContent";
import ThisCantBeReached from "../component/Home/ThisCantBeReached/ThisCantBeReached";
//import ScreenSizeDetector from "../component/CustomComponents/ScreeSizeDetector";
export default function Home() {
  const [ShowElement, setShowElement] = useState(false);
  const [ShowThisCantBeReached, setShowThisCantBeReached] = useState(true);
  const [ShowMe, setShowMe] = useState(false);
  // context Variable to clearInterval
  const context = useContext(AppContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      setShowElement(true);
    }, 4500);

    setTimeout(() => {
      setShowThisCantBeReached(false);
    }, 5400);

    setTimeout(() => {
      setShowElement(false);
      setShowMe(true);
      context?.setSharedState((prevState) => ({
        ...prevState,
        finishedLoading: true,
      }));
    }, 6000);
  }, []);

  console.log("website is rendering...");
  const meta = {
    title: "Abdellatif Anaflous - Lead Full Stack Software Engineer",
    description: `I've been working on Software development for more than 7 years. Get in touch with me to know more.`,
    image: "/titofCercle.png",
    type: "website",
  };
  const isProd = process.env.NODE_ENV === "production";
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {/* <meta property="og:title" content={meta.title} /> */}
      </Head>
      <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
        {context?.sharedState.finishedLoading ? (
          <></>
        ) : ShowThisCantBeReached ? (
          <ThisCantBeReached />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
