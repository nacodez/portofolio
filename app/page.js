"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Resume from "./resume/Resume_Nazik.pdf";

import SkillCard from "./components/common/SkillCard";
import ExperienceCard from "./components/common/ExperienceCard";
import ProjectCard from "./components/common/ProjectCard";
import StatCard from "./components/common/StatCard";

import {
  frontEndSkills,
  backEndSkills,
  toolsDevOps,
  databases,
  methodologies,
  experienceData,
  projectsData,
  navigationLinks,
  socialLinks,
  personalInfo
} from "./data/constants";

import design from "../public/frontend-development.png";
import code from "../public/backend.png";
import cakeshop from "../public/cakeshop.jpg";
import booking from "../public/booking.jpg";
import cuttinghair from "../public/cutting-hair.jpg";
import meetingRoom from "../public/meeting-room.jpg";
import employeeDashboard from "../public/employee-dashboard.jpg";

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [isVisible, ref];
};

const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return [count, ref];
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  
  const [yearsCount, yearsRef] = useCountUp(7);
  const [projectsCount, projectsRef] = useCountUp(25);
  const [performanceCount, performanceRef] = useCountUp(40);
  
  const [skillsVisible, skillsRef] = useScrollAnimation();
  const [experienceVisible, experienceRef] = useScrollAnimation();
  const [portfolioVisible, portfolioRef] = useScrollAnimation();
  const [contactVisible, contactRef] = useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('Thank you! Your message has been sent successfully. I\'ll get back to you soon!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => setSubmitStatus(''), 7000);
      } else {
        setSubmitStatus(`Error: ${data.error || 'Failed to send message. Please try again.'}`);
        
        setTimeout(() => setSubmitStatus(''), 5000);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('Network error. Please check your connection and try again.');
      
      setTimeout(() => setSubmitStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const projectImages = {
    'hotel-booking': booking,
    'salon-scheduler': cuttinghair,
    'cake-ordering': cakeshop,
    'meeting-room-booking': meetingRoom,
    'employee-dashboard': employeeDashboard
  };
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
              {personalInfo.name}
            </h2>
            <h3 className=" text-2xl py-2 md:text-3xl">{personalInfo.title}</h3>
            <p className="text-lg py-2 text-gray-600 dark:text-gray-300">
              {personalInfo.location} | {personalInfo.experience}
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-2xl mx-auto dark:text-gray-300">
              {personalInfo.subtitle} {personalInfo.description}
            </p>
          </div>
          <div className="text-6xl flex justify-center gap-12 py-3 text-gray-600 dark:text-gray-400">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon === 'AiFillLinkedin' ? <AiFillLinkedin /> : <AiFillGithub />}
              </a>
            ))}
          </div>
        </section>
        
        <section className="py-20 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700">
          <div className="max-w-6xl mx-auto px-10 md:px-20 lg:px-40">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Professional Achievements
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Delivering exceptional results through expertise and dedication
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <StatCard
                count={yearsCount}
                suffix="+"
                title="Years Experience"
                description="Full-stack development expertise"
                cardRef={yearsRef}
              />
              
              <StatCard
                count={projectsCount}
                suffix="+"
                title="Projects Completed"
                description="Enterprise & personal applications"
                cardRef={projectsRef}
              />
              
              <StatCard
                count={performanceCount}
                suffix="%"
                title="Performance Boost"
                description="Average optimization achieved"
                cardRef={performanceRef}
              />
            </div>
          </div>
        </section>
        
        <section id="skills" ref={skillsRef} className={`transition-all duration-1000 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <h3 className="text-3xl py-1 dark:text-white">Technical Skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Comprehensive expertise across the full stack development lifecycle
            </p>
          </div>
          <div className="mt-8">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-6">
              <SkillCard
                image={design}
                title="Frontend Development"
                description="Modern user interfaces with React ecosystem and responsive design"
                subtitle="Technologies I use"
                items={frontEndSkills}
              />
              
              <SkillCard
                image={code}
                title="Backend Development"
                description="Scalable server-side solutions and API development"
                subtitle="Technologies I use"
                items={backEndSkills}
              />
              
              <SkillCard
                icon="🛠️"
                title="Tools & DevOps"
                description="Development tools and deployment pipelines"
                subtitle="Tools I use"
                items={toolsDevOps}
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <SkillCard
                icon="🗄️"
                title="Database Technologies"
                description="Data storage and optimization solutions"
                subtitle="Databases I use"
                items={databases}
              />
              
              <SkillCard
                icon="⚡"
                title="Methodologies"
                description="Development practices and team collaboration"
                subtitle="Approaches I follow"
                items={methodologies}
              />
            </div>
          </div>
        </section>
        <section id="experience" ref={experienceRef} className={`py-10 transition-all duration-1000 ${experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <h3 className="text-3xl py-1 dark:text-white">Professional Experience</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white max-w-4xl mx-auto">
              7+ years of progressive experience in web development, specializing in enterprise solutions
              and modern technologies.
            </p>
          </div>
          <div className="max-w-4xl mx-auto mt-8 grid md:grid-cols-3 gap-6">
            {experienceData.map((experience, index) => (
              <ExperienceCard
                key={index}
                title={experience.title}
                items={experience.items}
              />
            ))}
          </div>
        </section>

        <section id="portfolio" ref={portfolioRef} className={`transition-all duration-1000 ${portfolioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className=" text-center">
            <h1 className="text-3xl py-1 dark:text-white">Portfolio</h1>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              A collection of web applications showcasing modern development practices,
              full-stack capabilities, and user-centered design. Each project demonstrates
              different aspects of web development from booking systems to e-commerce solutions.
            </p>
          </div>
          <div className="py-10">
            {/* First row - 3 projects */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mb-10 justify-center">
              {projectsData.slice(0, 3).map((project) => (
                <ProjectCard
                  key={project.id}
                  href={project.href}
                  image={projectImages[project.id]}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                />
              ))}
            </div>
            
            {/* Second row - 2 projects centered */}
            <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {projectsData.slice(3, 5).map((project) => (
                <ProjectCard
                  key={project.id}
                  href={project.href}
                  image={projectImages[project.id]}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" ref={contactRef} className={`py-20 bg-gray-50 dark:bg-gray-900 transition-all duration-1000 ${contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto px-10 md:px-20 lg:px-40">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Let&apos;s Work Together
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Ready to bring your project to life? Get in touch and let&apos;s discuss how I can help.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg border ${
                  submitStatus.toLowerCase().includes('error') || submitStatus.toLowerCase().includes('failed') || submitStatus.toLowerCase().includes('network')
                    ? 'bg-red-100 dark:bg-red-900 border-red-400 dark:border-red-600 text-red-700 dark:text-red-300'
                    : 'bg-green-100 dark:bg-green-900 border-green-400 dark:border-green-600 text-green-700 dark:text-green-300'
                }`}>
                  {submitStatus}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-10 md:px-20 lg:px-40">
            <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
              <div>
                <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  {navigationLinks.map((link) => (
                    <p 
                      key={link.id}
                      onClick={() => scrollToSection(link.id)} 
                      className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer"
                    >
                      {link.label}
                    </p>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4">Get In Touch</h4>
                <p className="text-gray-400 mb-4">
                  Open to new opportunities and collaborations
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.label}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      {social.icon === 'AiFillLinkedin' ? 
                        <AiFillLinkedin className="text-2xl" /> : 
                        <AiFillGithub className="text-2xl" />
                      }
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 {personalInfo.name}. Built with Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
