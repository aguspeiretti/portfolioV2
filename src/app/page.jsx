"use client";
import React, { useEffect, useState } from "react";
import { Inter, Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { fa1 } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const inter = Inter({ subsets: ["latin"] });
const pp = Poppins({ subsets: ["latin"], weight: "400" });
const rbm = Roboto_Mono({ subsets: ["latin"], weight: "600" });

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="bgMain w-screen h-screen px-32   ">
      <div
        className="glow"
        style={{
          position: "absolute",
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      ></div>
      <div className="leftContainer w-1/2 h-screen pt-32  ">
        <div className="h-1/2">
          <h3 className={`${rbm.className} hi pb-5 `}>Hi my name is</h3>
          <h1 className="text-5xl title font-extrabold pb-5">Agus Peiretti</h1>
          <h1 className="title text-2xl  pb-5">
            Full-Stack Developer with Frontend Excellence
          </h1>
          <p className="parraf w-5/6">
            "Focused on understanding user needs and translating them into
            functional and compelling solutions."
          </p>
        </div>
        <div className="flex h-1/2 items-end pb-20">
          <FontAwesomeIcon
            icon={faGithub}
            className="w-6 text-slate-400 mr-4  cursor-pointer icons "
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="w-6 text-slate-400 mr-4  cursor-pointer icons "
          />
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="w-6 text-slate-400  cursor-pointer mr-4 icons "
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            className="w-6 text-slate-400 cursor-pointer  mr-4 icons "
          />
        </div>
      </div>
      <div className="rightContainer w-1/2 "></div>
    </main>
  );
}
