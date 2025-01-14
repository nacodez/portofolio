"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import nazik from "../public/dev-nacodez-waving.png";
import design from "../public/frontend-development.png";
import code from "../public/backend.png";
import cakeshop from "../public/cakeshop.jpg";
import posapp from "../public/posapp.jpg";
import cuttinghair from "../public/cutting-hair.jpg";
import { useState } from "react";
import Resume from "./resume/Resume_Nazik.pdf";
import Link from "next/link";
import ItemList from "./components/common/ItemList";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const frontEndSkills = [
    "CSS",
    "Html",
    "React",
    "NextJS",
    "JavaScript",
    "TypeScript",
  ];
  const backEndSkills = ["NodeJS", "ExpressJS", "Firebase", "MongoDB"];
  const salonAppointmentSchedulerTags = ["#BookingApp", "#NextJS", "#FireBase"];
  const CakeBookingAppTags = ["#React", "NodeJS", "#MongoDB", "#ExpressJS"];
  const posAppTags = ["#React", "NodeJS", "#MongoDB", "#ExpressJS"];
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <head></head>
        <section className="min-h-screen text-center">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl dark:text-white">Nacodez</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                  className=" cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md ml-8"
                  href={Resume}
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className=" text-center p-10 dark:text-white">
            <h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Nazik Nassar
            </h2>
            <h3 className=" text-2xl py-2 md:text-3xl">Web Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              Experienced web developer creating modern, user-friendly websites
              with expertise. Passionate about delivering seamless experiences
              and staying updated with latest technologies. Strong attention to
              detail and problem-solving skills for high-quality results.
            </p>
          </div>
          <div className="text-6xl flex justify-center gap-12 py-3 text-gray-600">
            <a
              href="https://www.linkedin.com/in/nazik-nassar-514a7baa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/Nacodez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
          <div>
            <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx overflow-hidden md:h-98 md:w-98 mx-auto">
              <Image
                src={nazik}
                layout="fill"
                objectFit="cover"
                alt=""
                sizes="100"
              />
            </div>
          </div>
        </section>
        <section>
          <div className=" text-center">
            <h3 className="text-3xl py-1 dark:text-white">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              {" "}
              I create responsive and user-friendly websites using modern
              technologies such as HTML, CSS, JavaScript, and frameworks like
              React.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              {" "}
              I build robust server-side applications using programming language
              like Nextjs and Node.js.
            </p>
          </div>
          <div className="lg:flex justify-center gap-12 ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto mb-10"
                alt=""
              />
              <h3 className=" text-lg font-medium pt-8 pb-2">
                Frontend Development
              </h3>
              <p className="py-2">
                Crafting engaging user experiences through clean and innovative
                frontend code
              </p>
              <h4 className="text-teal-600 py-4">Technologies I use</h4>
              <ItemList
                items={frontEndSkills}
                className={"text-gray-800 py-1"}
              />
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={code}
                width={100}
                height={100}
                className="mx-auto"
                alt=""
              />
              <h3 className=" text-lg font-medium pt-8 pb-2">
                Backend Development
              </h3>
              <p className="py-2">
                Building robust and scalable backend systems that power seamless
                digital experiences.
              </p>
              <h4 className="text-teal-600 py-4">Technologies I use</h4>
              <ItemList
                items={backEndSkills}
                className={"text-gray-800 py-1"}
              />
            </div>
          </div>
        </section>
        <section>
          <div className=" text-center">
            <h1 className="text-3xl py-1 dark:text-white">Portofolio</h1>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              {/* {eslint-disable-next-line react/no-unescaped-entities} */}I
              have designed and developed a portfolio website showcasing my work
              for a cake client. With a focus on creativity and functionality, I
              have crafted visually stunning and user-friendly pages that
              effectively highlight the clients cakes and services.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap justify-center text-center">
            <Link
              href={"https://salon-appointment-scheduler.vercel.app/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="max-w-sm rounded overflow-hidden shadow-lg  basis-1/3 flex-1 dim: bg-white">
                <div class="h-64">
                  <Image
                    class="w-full h-full object-cover"
                    src={cuttinghair}
                    alt="Cake Ordering App"
                  />
                </div>
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">
                    Salon Appointment Scheduler
                  </div>
                  <p class="text-gray-700 text-base">
                    The Salon booking system is a web app designed to simplify
                    appointment scheduling for salons. Users can book services
                    by choosing a date, time, and type of service. Built with
                    Next.js and Firebase, it offers user authentication,
                    real-time updates, and a smooth booking experience,
                    enhancing efficiency and customer satisfaction.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <ItemList
                    items={salonAppointmentSchedulerTags}
                    className={
                      "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    }
                  />
                </div>
              </div>
            </Link>

            <div class="max-w-sm rounded overflow-hidden shadow-lg  basis-1/3 flex-1 dim: bg-white">
              <div class="h-64">
                <Image
                  class="w-full h-full object-cover"
                  src={cakeshop}
                  alt="Cake Ordering App"
                />
              </div>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Cake Ordering App</div>
                <p class="text-gray-700 text-base">
                  Introducing the Cake Order App: a seamless web application for
                  hassle-free cake ordering. Browse, customize, and securely
                  place your cake orders with ease. Experience the convenience
                  of ordering delicious cakes for any occasion.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <ItemList
                  items={CakeBookingAppTags}
                  className={
                    "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  }
                />
              </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg  basis-1/3 flex-1 dim: bg-white">
              <div class="h-64">
                <Image
                  class="w-full h-full object-cover"
                  src={posapp}
                  alt="Cake Ordering App"
                />
              </div>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">POS App</div>
                <p class="text-gray-700 text-base">
                  Experience the future of retail with our AI-based POS App.
                  Powered by advanced machine learning algorithms, it offers
                  intelligent inventory management, personalized customer
                  insights, and automated sales analytics. Simplify your
                  operations, boost sales, and stay ahead of the competition
                  with our cutting-edge POS solution.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <ItemList
                  items={posAppTags}
                  className={
                    "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  }
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
