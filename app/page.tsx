import Image from "next/image";
import {useContext, useEffect, useState, useRef} from "react";
import Head from "next/head";
import Header from "../component/Header/Header";
import AppContext from "../component/AppContextFolder/AppContent";
import ScreenSizeDetector from "../component/CustomComponents/ScreeSizeDetector";
export default function Home() {
  const [ShowElement, setShowElement] = useState(false);
  const [ShowMe, setShowMe] = useState(false);
   // context Variable to clearInterval
  const context = useContext(AppContext);
  return (
    
  );
}
