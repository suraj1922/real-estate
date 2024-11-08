import React, { useEffect } from 'react';
import aboutimg from '../assets/images/hero1.webp';
import { useDarkMode } from '../components/DarkModeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <section id='about' className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}>
      <div>
        <img data-aos="zoom-in" src={aboutimg} alt="about image" className='rounded-2xl lg:w-[500px] lg:h-[600px]' />
      </div>
      <div className='flex flex-col justify-center items-start gap-8'>
        <h1 data-aos="zoom-in" className={`text-red-500 ${darkMode ? 'dark:text-white' : ''}`}>WHO WE ARE</h1>
        <h1 data-aos="zoom-in" data-aos-delay="200" className={`text-[40px] font-semibold leading-10 ${darkMode ? 'dark:text-white' : 'text-black'}`}>
          Welcome to Our Real Estate Agency
        </h1>
        <p data-aos="zoom-in" data-aos-delay="400" className={`text-xl text-gray-600 ${darkMode ? 'dark:text-white' : ''} text-justify`}>
          At our agency, we pride ourselves on offering top-notch real estate services. With years of experience in the market, our team is dedicated to helping you find the perfect home or investment property. We prioritize customer satisfaction and strive to exceed your expectations every step of the way.
        </p>

        <button className={`bg-red-600 ${darkMode ? 'dark:bg-red-700 dark:hover:bg-white dark:hover:text-black' : 'hover:bg-black'} text-lg p-4 text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300`}>
          READ MORE
        </button>
      </div>
    </section>
  );
};

export default About;
