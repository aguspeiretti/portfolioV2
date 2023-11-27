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
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const pp = Poppins({ subsets: ["latin"], weight: "400" });
const rbm = Roboto_Mono({ subsets: ["latin"], weight: "600" });

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              <li
                onClick={() => scrollToSection("about")}
                className="enlaces  cursor-pointer "
              >
                About
              </li>

              <li
                onClick={() => scrollToSection("section-experience")}
                className="enlaces pt-4 cursor-pointer"
              >
                Eperience
              </li>
              <li
                onClick={() => scrollToSection("section-proyects")}
                className="enlaces pt-4 cursor-pointer"
              >
                Proyects
              </li>
            </ul>
          </div>
          <div>
            <Link href="https://github.com/aguspeiretti" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className=" text-slate-400 mr-4  cursor-pointer icons "
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/agus-peiretti/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className=" text-slate-400 mr-4  cursor-pointer icons "
              />
            </Link>
            <Link
              href="https://api.whatsapp.com/send/?phone=543518015096&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className=" text-slate-400  cursor-pointer mr-4 icons "
              />
            </Link>

            <FontAwesomeIcon
              icon={faEnvelope}
              className=" text-slate-400 cursor-pointer  mr-4 icons "
            />
          </div>
        </div>
      </div>
      <div className="rightContainer w-1/2  text-slate-400 pr-32 flex flex-col overflow-y-scroll  ">
        <p className="pt-32" id="about">
          Hello there, I'm Agus Peiretti, a Fullstack MERN developer. I've got a
          solid grip on
          <strong className="text-slate-100 "> MongoDB</strong>,{" "}
          <strong className="text-slate-100 ">Express</strong>,{" "}
          <strong className="text-slate-100 ">React</strong>, and{" "}
          <strong className="text-slate-100 ">Node.js</strong> I get a kick out
          of building kick-ass applications from the ground up, covering both
          the techy server side and the user-friendly experience. Lately, I've
          been diving into
          <strong className="text-slate-100 "> Next.js</strong> and the exciting
          world of
          <strong className="text-slate-100 "> mobile app development</strong>.
          I believe in staying on the tech pulse, so I'm always learning and
          keeping myself up-to-date.
        </p>
        <p className="mt-8 mb-32">
          For me, each project is a chance to let my creative juices flow. I'm
          all about understanding what users really need and turning those needs
          into slick, functional, and eye-catching solutions. Check out some of
          my cool projects below!
        </p>
        <section className="w-full " id="section-experience">
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
                    Development of a custom software for a local marketing
                    company, specifically designed to facilitate mass email and
                    WhatsApp messaging. Notable for its focus on security, it
                    includes a secure login system and a form that automatically
                    adds data to the database, streamlining information
                    management.
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
            <li className="w-full mt-8 bg-indigo-100 bg-opacity-0 hover:bg-opacity-10 hover:backdrop-blur-lg rounded-md p-2 cursor-pointer duration-500 ">
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
                    Development of an e-commerce platform that provides a
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
            <li className="w-full mt-8 bg-indigo-100 bg-opacity-0 hover:bg-opacity-10 hover:backdrop-blur-lg rounded-md p-2 cursor-pointer duration-500 ">
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
            <li className="w-full mt-8 bg-indigo-100 bg-opacity-0 hover:bg-opacity-10 hover:backdrop-blur-lg rounded-md p-2 cursor-pointer duration-500 ">
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
        <section className="proyects mt-32" id="section-proyects">
          <ul>
            <Link href="https://mdq-surf-c23be.web.app/" target="_blank">
              <li className="w-full mt-8 bg-indigo-100 bg-opacity-0 hover:bg-opacity-10 hover:backdrop-blur-lg rounded-md p-2 cursor-pointer duration-500 ">
                <div className="display flex w-full">
                  <span class="w-1/6 mb-2 mt-1 mr-8  whitespace-nowrap ">
                    <Image
                      src={"/img/surf.png"}
                      width={400}
                      height={300}
                      alt="proyecy1"
                    />
                  </span>
                  <div className="w-5/6">
                    <h3 className="font-extrabold text-slate-100 ">
                      MDQ Surf Shop
                    </h3>
                    <p className="text-sm leading-normal mb-2 mt-2">
                      Introducing an e-commerce platform developed entirely in
                      React, with the implementation of Redux for the cart
                      functionality. Styles have been crafted using pure CSS.
                      This site provides a comprehensive experience that
                      includes a fully functional shopping cart, along with the
                      ability to book classes."
                    </p>
                  </div>
                </div>
              </li>
            </Link>
            <Link href="https://forest-gym.web.app/" target="_blank">
              <li className="w-full mt-8 bg-indigo-100 bg-opacity-0 hover:bg-opacity-10 hover:backdrop-blur-lg rounded-md p-2 cursor-pointer duration-500 ">
                <div className="display flex w-full">
                  <span class=" w-1/6 mb-2 mt-1 mr-8  whitespace-nowrap ">
                    <Image
                      src={"/img/gym.png"}
                      width={400}
                      height={300}
                      alt="proyecy1"
                    />
                  </span>
                  <div className="w-5/6">
                    <h3 className="font-extrabold text-slate-100 ">
                      Forest Gym
                    </h3>
                    <p className="text-sm leading-normal mb-2 mt-2">
                      A platform that enables class reservations through email,
                      complemented by a web presence providing relevant
                      information.
                    </p>
                  </div>
                </div>
              </li>
            </Link>
            <Link
              href="https://aguspeiretti.github.io/ruca-textil/"
              target="_blank"
            >
              <li className="w-full mt-8 bg-indigo-100 bg-opacity-0 hover:bg-opacity-10 hover:backdrop-blur-lg rounded-md p-2 cursor-pointer duration-500 ">
                <div className="display flex w-full">
                  <span class=" w-1/6 mb-2 mt-1 mr-8  whitespace-nowrap ">
                    <Image
                      src={"/img/ruca.png"}
                      width={400}
                      height={300}
                      alt="proyecy1"
                    />
                  </span>
                  <div className="w-5/6">
                    <h3 className="font-extrabold text-slate-100 ">
                      Ruca Textil
                    </h3>
                    <p className="text-sm leading-normal mb-2 mt-2">
                      The website in question stands out as a source of
                      information and product reference in sample format.
                      Providing an illustrative perspective, this page offers a
                      selective and enlightening presentation of various
                      products.
                    </p>
                  </div>
                </div>
              </li>
            </Link>
            <Link
              href="https://aguspeiretti.github.io/tiendaVintashh/"
              target="_blank"
            >
              <li className="w-full mt-8 bg-indigo-100 bg-opacity-0 hover:bg-opacity-10 hover:backdrop-blur-lg rounded-md p-2 cursor-pointer duration-500 ">
                <div className="display flex w-full">
                  <span class=" w-1/6 mb-2 mt-1 mr-8  whitespace-nowrap ">
                    <Image
                      src={"/img/tienda.png"}
                      width={400}
                      height={300}
                      alt="proyecy1"
                    />
                  </span>
                  <div className="w-5/6">
                    <h3 className="font-extrabold text-slate-100 ">
                      Tienda Vintash
                    </h3>
                    <p className="text-sm leading-normal mb-2 mt-2">
                      This online platform serves as a showcase for
                      representative products, enabling interested customers to
                      establish contact through WhatsApp for more details and
                      manage their inquiries in a personalized manner.
                    </p>
                  </div>
                </div>
              </li>
            </Link>
            <Link href="https://donde-comemo.vercel.app/" target="_blank">
              <li className="w-full mt-8 bg-indigo-100 bg-opacity-0 hover:bg-opacity-10 hover:backdrop-blur-lg rounded-md p-2 cursor-pointer duration-500 ">
                <div className="display flex w-full">
                  <span class=" w-1/6 mb-2 mt-1 mr-8  whitespace-nowrap ">
                    <Image
                      src={"/img/cel.png"}
                      width={400}
                      height={300}
                      alt="proyecy1"
                    />
                  </span>
                  <div className="w-5/6">
                    <h3 className="font-extrabold text-slate-100 ">
                      Donde comemo
                    </h3>
                    <p className="text-sm leading-normal mb-2 mt-2">
                      Optimized for mobile devices, this project features a
                      registration or login screen that activates the favorites
                      function. The 'Home' displays an image carousel and
                      provides access to the main categories. A bottom
                      navigation menu facilitates exploration of sections such
                      as Restaurants, Bars, Cafés, organized by zones and
                      categories. Each section includes descriptive cards and
                      links to expanded details
                    </p>
                  </div>
                </div>
              </li>
            </Link>
            <Link href="https://pitupedia-6c1ab.web.app/" target="_blank">
              <li className="w-full mt-8 bg-indigo-100 bg-opacity-0 hover:bg-opacity-10 hover:backdrop-blur-lg rounded-md p-2 cursor-pointer duration-500 ">
                <div className="display flex w-full">
                  <span class=" w-1/6 mb-2 mt-1 mr-8  whitespace-nowrap ">
                    <Image
                      src={"/img/pitu.png"}
                      width={400}
                      height={300}
                      alt="proyecy1"
                    />
                  </span>
                  <div className="w-5/6">
                    <h3 className="font-extrabold text-slate-100 ">
                      Pitupedia
                    </h3>
                    <p className="text-sm leading-normal mb-2 mt-2">
                      A mini personal project—a simple website aimed at
                      promoting speech development in children through the
                      association of images and sounds. An interactive
                      experience designed to inspire and stimulate early
                      learning.
                    </p>
                  </div>
                </div>
              </li>
            </Link>
            <Link href="https://entriviados-g.web.app/" target="_blank">
              {" "}
              <li className="w-full mt-8 bg-indigo-100 bg-opacity-0 hover:bg-opacity-10 hover:backdrop-blur-lg rounded-md p-2 cursor-pointer duration-500 ">
                <div className="display flex w-full">
                  <span class=" w-1/6 mb-2 mt-1 mr-8  whitespace-nowrap ">
                    <Image
                      src={"/img/trivia.png"}
                      width={400}
                      height={300}
                      alt="proyecy1"
                    />
                  </span>
                  <div className="w-5/6">
                    <h3 className="font-extrabold text-slate-100 ">
                      Entriviados
                    </h3>
                    <p className="text-sm leading-normal mb-2 mt-2">
                      A small trivia game designed to practice the fundamental
                      basics of JavaScript. It provides the option to choose
                      both categories and the playtime duration. Additionally,
                      an Auth0 login feature has been incorporated for a
                      personalized gaming experience.
                    </p>
                  </div>
                </div>
              </li>
            </Link>
          </ul>
        </section>
        <footer className="mt-20 text-sm  mb-12">
          <h3 className="font-extrabold text-slate-100">
            Thanks for checking out my site!
          </h3>
          <p className="text-sm">
            Right now, I'm on the lookout for new opportunities. Hit me up
            anytime, whether it's about job stuff or just to shoot the breeze!
            I'll do my best to get back to you. Cheers!
          </p>
        </footer>
      </div>
    </main>
  );
}
