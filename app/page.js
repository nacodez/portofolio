"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import nazik from "../public/dev-nacodez-waving.png";
import design from "../public/frontend-development.png";
import code from "../public/backend.png";
import cakeshop from "../public/cakeshop.jpg";
import booking from "../public/booking.jpg";
import cuttinghair from "../public/cutting-hair.jpg";
import { useState } from "react";
import Resume from "./resume/Resume_Nazik.pdf";
import Link from "next/link";
import ItemList from "./components/common/ItemList";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const frontEndSkills = [
    "React",
    "JavaScript",
    "TypeScript",
    "NextJS",
    "Redux",
    "GraphQL",
    "RTK Query",
    "UI Libraries (Material UI, Fluent UI)",
    "CSS Frameworks (Tailwind, Bootstrap)",
    "Testing (Jest)"
  ];
  const backEndSkills = [
    "NodeJS",
    "ExpressJS",
    "RESTful APIs",
    "GraphQL",
    "Firebase",
    "MongoDB",
    "Database Design",
    "Authentication/Authorization",
    "API Development"
  ];
  const toolsDevOps = [
    "Git & GitHub",
    "Docker",
    "CI/CD Pipelines",
    "AWS/Azure",
    "Webpack",
    "NPM/Yarn",
    "VS Code",
    "Postman"
  ];
  const databases = [
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "Firebase Firestore",
    "Database Optimization",
    "Query Performance"
  ];
  const methodologies = [
    "Agile Development",
    "Scrum",
    "Code Reviews",
    "TDD (Test Driven Development)",
    "Version Control",
    "Documentation",
    "Team Collaboration"
  ];

  const salonAppointmentSchedulerTags = ["#BookingApp", "#NextJS", "#FireBase"];
  const CakeBookingAppTags = ["#React", "NodeJS", "#MongoDB", "#ExpressJS"];
  const posAppTags = ["#React", "NodeJS", "#MongoDB", "#ExpressJS"];
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen text-center py-10">
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
            <h3 className=" text-2xl py-2 md:text-3xl">Web Application Developer</h3>
            <p className="text-lg py-2 text-gray-600 dark:text-gray-300">
              Dubai, UAE | 7+ Years Experience
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-2xl mx-auto dark:text-gray-300">
              Senior Full-Stack Developer specializing in React, Node.js, and modern web technologies.
              Proven track record of building scalable enterprise applications, optimizing performance,
              and leading development teams. Passionate about creating exceptional user experiences
              and implementing cutting-edge solutions.
            </p>
          </div>
          <div className="text-6xl flex justify-center gap-12 py-3 text-gray-600 dark:text-gray-400">
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
        </section>
        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1 dark:text-white">Technical Skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Comprehensive expertise across the full stack development lifecycle
            </p>
          </div>
          <div className="mt-8">
            {/* First row - 3 cards */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-6">
              <div className="text-center shadow-lg p-10 rounded-xl bg-white dark:bg-gray-100">
                <Image
                  src={design}
                  width={100}
                  height={100}
                  className="mx-auto mb-10"
                  alt="Frontend Development Icon"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Frontend Development
                </h3>
                <p className="py-2">
                  Modern user interfaces with React ecosystem and responsive design
                </p>
                <h4 className="text-teal-600 py-4">Technologies I use</h4>
                <ItemList
                  items={frontEndSkills}
                  className={"text-gray-800 py-1"}
                />
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl bg-white dark:bg-gray-100">
                <Image
                  src={code}
                  width={100}
                  height={100}
                  className="mx-auto"
                  alt="Backend Development Icon"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Backend Development
                </h3>
                <p className="py-2">
                  Scalable server-side solutions and API development
                </p>
                <h4 className="text-teal-600 py-4">Technologies I use</h4>
                <ItemList
                  items={backEndSkills}
                  className={"text-gray-800 py-1"}
                />
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl bg-white dark:bg-gray-100">
                <div className="w-24 h-24 mx-auto mb-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🛠️</span>
                </div>
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Tools & DevOps
                </h3>
                <p className="py-2">
                  Development tools and deployment pipelines
                </p>
                <h4 className="text-teal-600 py-4">Tools I use</h4>
                <ItemList
                  items={toolsDevOps}
                  className={"text-gray-800 py-1"}
                />
              </div>
            </div>

            {/* Second row - 2 cards centered */}
            <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="text-center shadow-lg p-10 rounded-xl bg-white dark:bg-gray-100">
                <div className="w-24 h-24 mx-auto mb-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🗄️</span>
                </div>
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Database Technologies
                </h3>
                <p className="py-2">
                  Data storage and optimization solutions
                </p>
                <h4 className="text-teal-600 py-4">Databases I use</h4>
                <ItemList
                  items={databases}
                  className={"text-gray-800 py-1"}
                />
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl bg-white dark:bg-gray-100">
                <div className="w-24 h-24 mx-auto mb-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Methodologies
                </h3>
                <p className="py-2">
                  Development practices and team collaboration
                </p>
                <h4 className="text-teal-600 py-4">Approaches I follow</h4>
                <ItemList
                  items={methodologies}
                  className={"text-gray-800 py-1"}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="text-center">
            <h3 className="text-3xl py-1 dark:text-white">Professional Experience</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white max-w-4xl mx-auto">
              7+ years of progressive experience in web development, specializing in enterprise solutions
              and modern technologies.
            </p>
          </div>
          <div className="max-w-4xl mx-auto mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Enterprise Development</h4>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>• Banking & Insurance Platform Development</li>
                <li>• Payroll Management Systems</li>
                <li>• Sitecore XM Cloud Implementation</li>
                <li>• Large-scale React Applications</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Technical Leadership</h4>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>• 40% Performance Optimization Achieved</li>
                <li>• Mentored Junior Developers</li>
                <li>• Code Standards & Best Practices</li>
                <li>• Cross-functional Team Collaboration</li>
              </ul>
            </div>


            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Certifications & Education</h4>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>• Sitecore XM Cloud Developer Certified</li>
                <li>• BSc Computer Science</li>
                <li>• International Client Experience</li>
                <li>• Agile Development Methodologies</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className=" text-center">
            <h1 className="text-3xl py-1 dark:text-white">Portfolio</h1>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              A collection of web applications showcasing modern development practices,
              full-stack capabilities, and user-centered design. Each project demonstrates
              different aspects of web development from booking systems to e-commerce solutions.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap justify-center text-center">
            <Link
              href={"https://salon-appointment-scheduler.vercel.app/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="max-w-sm rounded overflow-hidden shadow-lg basis-1/3 flex-1 bg-white dark:bg-gray-800">
                <div className="h-64">
                  <Image
                    className="w-full h-full object-cover"
                    src={cuttinghair}
                    alt="Salon Appointment Scheduler"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 dark:text-white">
                    Salon Appointment Scheduler
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    The Salon booking system is a web app designed to simplify
                    appointment scheduling for salons. Users can book services
                    by choosing a date, time, and type of service. Built with
                    Next.js and Firebase, it offers user authentication,
                    real-time updates, and a smooth booking experience,
                    enhancing efficiency and customer satisfaction.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <ItemList
                    items={salonAppointmentSchedulerTags}
                    className={
                      "inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2"
                    }
                  />
                </div>
              </div>
            </Link>

            <div className="max-w-sm rounded overflow-hidden shadow-lg basis-1/3 flex-1 bg-white dark:bg-gray-800">
              <div className="h-64">
                <Image
                  className="w-full h-full object-cover"
                  src={cakeshop}
                  alt="Cake Ordering App"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 dark:text-white">Cake Ordering App</div>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                  Introducing the Cake Order App: a seamless web application for
                  hassle-free cake ordering. Browse, customize, and securely
                  place your cake orders with ease. Experience the convenience
                  of ordering delicious cakes for any occasion.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <ItemList
                  items={CakeBookingAppTags}
                  className={
                    "inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2"
                  }
                />
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg basis-1/3 flex-1 bg-white dark:bg-gray-800">
              <div className="h-64">
                <Image
                  className="w-full h-full object-cover"
                  src={booking}
                  alt="Hotel Booking App"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 dark:text-white">Hotel Booking App</div>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                  A full-stack hotel booking app built with React and Node.js. Features real-time room availability, user authentication, and a complete booking workflow.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <ItemList
                  items={posAppTags}
                  className={
                    "inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2"
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
