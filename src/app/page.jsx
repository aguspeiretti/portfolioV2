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
    <main className="bgMain w-screen h-screen pl-32 flex  ">
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
            Full-Stack Developer with Frontend Excellence.
          </h1>
          <p className="parraf w-5/6">
            Focused on understanding user needs and translating them into
            functional and compelling solutions.
          </p>
        </div>
        <div className="flex flex-col h-1/2  w-full  items-start justify-between pb-20">
          <div className="text-slate-200 ">
            <ul className=" flex flex-col">
              <li className=" cursor-pointer ">About</li>
              <li className="pt-4 cursor-pointer">Eperience</li>
              <li className="pt-4 cursor-pointer">Proyects</li>
            </ul>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faGithub}
              className=" text-slate-400 mr-4  cursor-pointer icons "
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className=" text-slate-400 mr-4  cursor-pointer icons "
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              className=" text-slate-400  cursor-pointer mr-4 icons "
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className=" text-slate-400 cursor-pointer  mr-4 icons "
            />
          </div>
        </div>
      </div>
      <div className="rightContainer w-1/2 pt-32 text-slate-400 pr-32 flex flex-col overflow-y-scroll">
        <p className="mb-32">
          Hello, I am Agus Peiretti, a Fullstack MERN developer. I have trained
          with a solid foundation in{" "}
          <strong className="text-slate-100 ">MongoDB</strong>,{" "}
          <strong className="text-slate-100 ">Express</strong>,{" "}
          <strong className="text-slate-100 ">React</strong>, and{" "}
          <strong className="text-slate-100 ">Node.js</strong> technologies. I
          love creating complete and dynamic applications from scratch, covering
          both the server side and the user experience, although I continue to
          train in technologies such as{" "}
          <strong className="text-slate-100 ">Next.js</strong> and{" "}
          <strong className="text-slate-100 ">
            {" "}
            mobile application development.
          </strong>{" "}
          I think that an important part is to be able to adapt to a constantly
          evolving technological environment. That’s why I keep myself updated
          and in constant study. I see each project as an opportunity to
          demonstrate my creativity, and one of my objectives is focused on
          trying to understand the user’s needs and transform them into
          functional and attractive solutions. You can see some of my projects
          below.
        </p>
        <section className="w-full ">
          <ol className="w-full">
            <li className="w-full">
              <div className="display flex w-full">
                <header class=" mb-2 mt-1 mr-8 text-xs font-semibold uppercase whitespace-nowrap ">
                  OCT — Present
                </header>
                <div className="">
                  <h3 className="font-extrabold text-slate-100 ">
                    Frontend - Marca informativa Cba
                  </h3>
                  <h4>Frontend engineer </h4>
                  <p className="text-sm leading-normal mb-2 mt-2">
                    I developed custom software for a local marketing company,
                    specifically designed to facilitate mass email and WhatsApp
                    messaging. Notable for its focus on security, it includes a
                    secure login system and a form that automatically adds data
                    to the database, streamlining information management.
                  </p>
                  <p className="text-sm leading-normal mb-2">
                    The platform allows for comprehensive management of users
                    and companies, with functions for registration,
                    modification, and deletion. It also incorporates the
                    creation of broadcast lists for effectively segmenting
                    personalized marketing campaigns.
                  </p>
                  <ul className="mt-2 flex flex-wrap">
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-sky-700/10 px-3 py-1 text-xs font-medium leading-5 text-zinc-300 ">
                        React
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-sky-700/10 px-3 py-1 text-xs font-medium leading-5 text-zinc-300 ">
                        MongoDb
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-sky-700/10 px-3 py-1 text-xs font-medium leading-5 text-zinc-300 ">
                        Express
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-sky-700/10 px-3 py-1 text-xs font-medium leading-5 text-zinc-300 ">
                        NodeJs
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="w-full mt-12">
              <div className="display flex w-full">
                <header class=" mb-2 mt-1 mr-8 text-xs font-semibold uppercase whitespace-nowrap ">
                  jun - ago 2023
                </header>
                <div className="">
                  <h3 className="font-extrabold text-slate-100 ">
                    Frontend - Akumal Uniformes
                  </h3>
                  <h4>Frontend engineer </h4>
                  <p className="text-sm leading-normal mb-2 mt-2">
                    I developed an e-commerce platform that provides a
                    comprehensive experience for both users and administrators.
                    It includes a contact form and an efficient system for
                    sending orders through WhatsApp. For internal management,
                    the platform features an admin panel that allows for the
                    intuitive creation, modification, and deletion of products.
                  </p>

                  <ul className="mt-2 flex flex-wrap">
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-sky-700/10 px-3 py-1 text-xs font-medium leading-5 text-zinc-300 ">
                        Next js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-sky-700/10 px-3 py-1 text-xs font-medium leading-5 text-zinc-300 ">
                        Firebase
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="w-full mt-12">
              <div className="display flex w-full">
                <header class=" mb-2 mt-1 mr-8 text-xs font-semibold uppercase whitespace-nowrap ">
                  oct - dec 2022
                </header>
                <div className="">
                  <h3 className="font-extrabold text-slate-100 ">
                    Frontend - Ruca Textil
                  </h3>
                  <h4>Frontend engineer </h4>
                  <p className="text-sm leading-normal mb-2 mt-2">
                    The website in question distinguishes itself as a source of
                    information and product references presented in a showcase
                    format. Offering an illustrative perspective, this page
                    delivers a curated and enlightening presentation of diverse
                    products.
                  </p>

                  <ul className="mt-2 flex flex-wrap">
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-sky-700/10 px-3 py-1 text-xs font-medium leading-5 text-zinc-300 ">
                        Javascript{" "}
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-sky-700/10 px-3 py-1 text-xs font-medium leading-5 text-zinc-300 ">
                        CSS
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-sky-700/10 px-3 py-1 text-xs font-medium leading-5 text-zinc-300 ">
                        HTML
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="w-full mt-12">
              <div className="display flex w-full">
                <header class=" mb-2 mt-1 mr-8 text-xs font-semibold uppercase whitespace-nowrap ">
                  jul - ago 2022
                </header>
                <div className="">
                  <h3 className="font-extrabold text-slate-100 ">
                    Frontend - Tienda Vintashh
                  </h3>
                  <h4>Frontend engineer </h4>
                  <p className="text-sm leading-normal mb-2 mt-2">
                    This online platform serves as a showcase for representative
                    products, allowing interested customers to establish contact
                    through WhatsApp to obtain more details and manage their
                    inquiries in a personalized manner.
                  </p>

                  <ul className="mt-2 flex flex-wrap">
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-sky-700/10 px-3 py-1 text-xs font-medium leading-5 text-zinc-300 ">
                        Javascript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-sky-700/10 px-3 py-1 text-xs font-medium leading-5 text-zinc-300 ">
                        CSS
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-sky-700/10 px-3 py-1 text-xs font-medium leading-5 text-zinc-300 ">
                        HTML
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}
