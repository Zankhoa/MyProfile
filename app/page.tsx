"use client";
import { useContext, useEffect, useState, useRef } from "react";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "../component/Header/Header";
import AppContext from "../component/AppContextFolder/AppContent";
import ThisCantBeReached from "../component/Home/ThisCantBeReached/ThisCantBeReached";
import MyName from "../component/Home/MyName/MyName";
import SocialMediaArround from "../component/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../component/Home/AboutMe/AboutMe";
import MyExperience from "../component/Home/MyExperience/MyExperience";

export default function Home() {
  const [ShowElement, setShowElement] = useState(false);
  const [ShowThisCantBeReached, setShowThisCantBeReached] = useState(true);
  const [ShowMe, setShowMe] = useState(false);
  // context Variable to clearInterval
  const context = useContext(AppContext);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
    setTimeout(() => {
      setShowElement(false);
      setShowMe(true);
      context.sharedState.finishedLoading = true;
      context.setSharedState(context.sharedState);
    }, 6000);
  }, [context, context.sharedState]);

    useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  console.log("website is rendering...");
  const meta = {
    title: "Pham Van Khoa - Junior Software Engineer",
    description: `I've been working on Software development for more than 2 years. Get in touch with me to know more.`,
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
      <MyName finishedLoading={context.sharedState.finishedLoading} />
      <SocialMediaArround finishedLoading={context.sharedState.finishedLoading} />
      {context.sharedState.finishedLoading ? <AboutMe ref={aboutRef} /> : <></>}
      {context.sharedState.finishedLoading ? <MyExperience /> : <></>}
      </div>
    </>
  );
}
