"use client";
import { useContext, useEffect, useState, useRef } from "react";
import Head from "next/head";
import Header from "../component/Header/Header";
import AppContext from "../component/AppContextFolder/AppContent";
import ThisCantBeReached from "../component/Home/ThisCantBeReached/ThisCantBeReached";
export default function Home() {
  const [ShowElement, setShowElement] = useState(false);
  const [ShowThisCantBeReached, setShowThisCantBeReached] = useState(true);
  const [ShowMe, setShowMe] = useState(false);
  // context Variable to clearInterval
  const context = useContext(AppContext);
  const homeRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
    // ? INFORMATIONAL next function will show the component after changing the state of ShowMe
    setTimeout(() => {
      setShowElement(false);
      setShowMe(true);
      context.sharedState.finishedLoading = true;
      context.setSharedState(context.sharedState);
    }, 6000);
  }, [context, context.sharedState]);

  console.log("website is rendering...");
  const meta = {
    title: "Abdellatif Anaflous - Lead Full Stack Software Engineer",
    description: `I've been working on Software development for more than 7 years. Get in touch with me to know more.`,
    image: "/titofCercle.png",
    type: "website",
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
      {context.sharedState.finishedLoading ? <></> : ShowThisCantBeReached ? <ThisCantBeReached /> : <></>}
      <Header finishedLoading={context.sharedState.finishedLoading} sectionsRef={homeRef} />
      </div>
    </>
  );
}
