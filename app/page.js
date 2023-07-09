"use client"
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { openPdfInNewTab } from './openPdf/openoPdf';
import Image from 'next/image'
import nazik from "../public/dev-ed-wave.png"
import design from "../public/frontend-development.png"
import code from "../public/backend.png"
import consulting from "../public/consulting.png"
import cakeshop from '../public/cakeshop.jpg'
import posapp from '../public/posapp.jpg'
import developer from '../public/developer.jpg'
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"
import { useState } from 'react'
import Resume from "./resume/Resume_Nazik.pdf"


export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  // const handleOpenPdf = (event) => {
  //   event.preventDefault();
  //   const pdfUrl = '../app/resume/Resume_Nazik.pdf';
  //   openPdfInNewTab(pdfUrl);
  // };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <head></head>
        <section className="min-h-screen text-center">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className='text-xl dark:text-white'>Nacodez</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={() => { setDarkMode(!darkMode) }} className=' cursor-pointer text-2xl dark:text-white' /></li>
              <li><a className=" bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md ml-8" href={Resume} target='_blank'>Resume</a></li>
            </ul>
          </nav>
          <div className=' text-center p-10 dark:text-white'>
            <h2 className=' text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Nazik Nassar</h2>
            <h3 className=' text-2xl py-2 md:text-3xl'>Web Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>
              Experienced web developer creating modern,
              user-friendly websites with expertise. Passionate about delivering seamless experiences
              and staying updated with latest technologies.
              Strong attention to detail and problem-solving skills for
              high-quality results.
            </p>
          </div>
          <div className='text-6xl flex justify-center gap-12 py-3 text-gray-600'>
            <a href="https://www.linkedin.com/in/nazik-nassar-514a7baa/" target='_blank' rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/Narcodz" target='_blank' rel="noopener noreferrer">
              <AiFillGithub />
            </a>
          </div>
          <div>
            <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx overflow-hidden md:h-98 md:w-98 mx-auto'>
              <Image src={nazik} layout='fill' objectFit='cover' alt=''/>
            </div>
          </div>
        </section>
        <section>
          <div className=' text-center'>
            <h3 className='text-3xl py-1 dark:text-white'>Services I Offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'> I create responsive and user-friendly websites using modern technologies such as HTML, CSS, JavaScript, and frameworks like React.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'> I build robust server-side applications using programming language like Node.jswith framework like Express.
            </p>
          </div>
          <div className='lg:flex justify-center gap-12 '>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={design} width={100} height={100} className='mx-auto mb-10' alt=''/>
              <h3 className=' text-lg font-medium pt-8 pb-2'>Frontend Development</h3>
              <p className='py-2'>Crafting engaging user experiences through clean and innovative frontend code</p>
              <h4 className='text-teal-600 py-4'>Technologies I use</h4>
              <p className='text-gray-800 py-1'>CSS</p>
              <p className='text-gray-800 py-1'>Html</p>
              <p className='text-gray-800 py-1'>React</p>
              <p className='text-gray-800 py-1'>JavaScript</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={code} width={100} height={100} className='mx-auto' alt=''/>
              <h3 className=' text-lg font-medium pt-8 pb-2'>Backend Development</h3>
              <p className='py-2'>Building robust and scalable backend systems that power seamless digital experiences.</p>
              <h4 className='text-teal-600 py-4'>Technologies I use</h4>
              <p className='text-gray-800 py-1'>Node</p>
              <p className='text-gray-800 py-1'>Express</p>
              <p className='text-gray-800 py-1'>MongoDB</p>
            </div>
            {/* <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={consulting} width={100} height={100} className='mx-auto' />
              <h3 className=' text-lg font-medium pt-8 pb-2'>Consulting</h3>
              <p className='py-2'>Creating elegant designs suited for your needs design theory</p>
              <h4 className='text-teal-600 py-4'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div> */}
          </div>
        </section>
        <section>
          <div className=' text-center'>
            <h1 className='text-3xl py-1 dark:text-white'>Portofolio</h1>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'> 
            // eslint-disable-next-line react/no-unescaped-entities
            I have designed and developed a portfolio website
              showcasing my work for a cake client. With a focus on creativity and functionality,
              I have crafted visually stunning and user-friendly pages that effectively highlight the client's cakes and services.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap justify-center text-center'>
            <div class="max-w-sm rounded overflow-hidden shadow-lg  basis-1/3 flex-1 dim: bg-white">
              <div class="h-64">
                <Image class="w-full h-full object-cover" src={cakeshop} alt="Cake Ordering App" />
              </div>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Cake Ordering App</div>
                <p class="text-gray-700 text-base">
                  Introducing the Cake Order App: a seamless web application for hassle-free cake ordering. Browse, customize, and securely place your cake orders with ease. Experience the convenience of ordering delicious cakes for any occasion.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MongoDB</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Node</span>
              </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg  basis-1/3 flex-1 dim: bg-white">
              <div class="h-64">
                <Image class="w-full h-full object-cover" src={posapp} alt="Cake Ordering App" />
              </div>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">POS App</div>
                <p class="text-gray-700 text-base">
                  
Experience the future of retail with our AI-based POS App. Powered by advanced machine learning algorithms, it offers intelligent inventory management, personalized customer insights, and automated sales analytics. Simplify your operations, boost sales, and stay ahead of the competition with our cutting-edge POS solution.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MongoDB</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Node</span>
              </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg  basis-1/3 flex-1 dim: bg-white">
              <div class="h-64">
                <Image class="w-full h-full object-cover" src={developer} alt="Cake Ordering App" />
              </div>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Small Scale Projects</div>
                <p class="text-gray-700 text-base">
                As an enthusiastic hobbyist and dedicated learner, I actively engage in developing small-scale projects to satisfy my curiosity and expand my knowledge. By delving into various technologies and embracing innovative ideas, I continuously strive to broaden my skill set and fuel my passion for exploration.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MonsterRolodex</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CoronaTracker</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#RecipeApp</span>
              </div>
            </div>

            {/* <div className='basis-1/3 flex-1'>
              <a href="https://long-tan-perch-gown.cyclic.app/">
                <Image src={web1} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
              </a>
            </div>
            <div className=' basis-1/3 flex-1'>
              <Image src={web2} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
            </div>
            <div className=' basis-1/3 flex-1'>
              <Image src={web3} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
            </div>
            <div className=' basis-1/3 flex-1'>
              <Image src={web4} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
            </div>
            <div className=' basis-1/3 flex-1'>
              <Image src={web5} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
            </div>
            <div className=' basis-1/3 flex-1'>
              <Image src={web6} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
            </div> */}
          </div>
        </section>
      </main>
    </div>

  )
}
