"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`sm:px-16 px-6 w-full flex items-center py-5 font-display fixed top-0 z-20 ${scrolled ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
        : "bg-white/0"}`}
      >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link
            href='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}>

            <p className='text-black text-lg font-bold cursor-pointer transition'>
              SneakerSaaS
            </p>

          </Link>


          <div className='list-none flex flex-row gap-8 items-center'>

            <button
              type='button'
              className='button-glow rounded-md bg-black px-4 py-2 text-md text-white transition duration-300 hover:bg-white hover:text-black'

            >
              Sign in
            </button>

          </div>
        </div>

      </nav>
    </>
  );
};

export default Nav;




