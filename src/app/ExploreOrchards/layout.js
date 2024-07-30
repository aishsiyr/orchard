"use client";

import { Figtree } from "next/font/google";
import { ThemeProvider, useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Navbar from "../Homepage/Overview/navbar";
import Switcher13 from "../themeformodes/theme";

const rhd = Figtree({ subsets: ["latin"] });

function BentoBox() {
  const { theme } = useTheme();

  const boxStyle = theme === 'light' 
    ? 'bg-[#f2f8fa] text-black' 
    : 'bg-neutral-800 text-white';

  const boxAnimation = 'transition-transform duration-300 ease-in-out transform hover:scale-105';

  return (
    <div className="p-4">
    <div className="grid grid-cols-1 qs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
  {/* Full-width box on the first row, spans 2 columns on larger screens */}
  <div className={`p-4 ${boxStyle} rounded-lg ${boxAnimation} h-56 w-full flex justify-center items-center col-span-1 lg:col-span-2 xl:col-span-2`}>
    Box 1
  </div>
  
  {/* Adjusted second box to be full width on smaller screens */}
  <div className={`p-4 ${boxStyle} rounded-lg ${boxAnimation} h-56 w-full flex justify-center items-center col-span-1 lg:col-span-1 xl:col-span-1`}>
    Box 1a
  </div>
  
  {/* Two boxes in the second row */}
  <div className={`p-4 ${boxStyle} rounded-lg ${boxAnimation} h-56 w-full flex justify-center items-center col-span-1`}>
    Box 2
  </div>
  
  <div className={`p-4 ${boxStyle} rounded-lg ${boxAnimation} h-56 w-full flex justify-center items-center col-span-1`}>
    Box 3
  </div>
  <div className={`p-4 ${boxStyle} rounded-lg ${boxAnimation} h-56 w-full flex justify-center items-center col-span-1`}>
    Box 3
  </div>
  
  {/* Full-width box on the third row, spans 2 columns on larger screens */}
  <div className={`p-4 ${boxStyle} rounded-lg ${boxAnimation} h-56 w-full flex justify-center items-center col-span-1 lg:col-span-2 xl:col-span-2`}>
    Box 4
  </div>
  
  {/* Two boxes in the fourth row */}
  <div className={`p-4 ${boxStyle} rounded-lg ${boxAnimation} h-56 w-full flex justify-center items-center col-span-1`}>
    Box 5
  </div>
  
  <div className={`p-4 ${boxStyle} rounded-lg ${boxAnimation} h-56 w-full flex justify-center items-center col-span-1`}>
    Box 6
  </div>
  <div className={`p-4 ${boxStyle} rounded-lg ${boxAnimation} h-56 w-full flex justify-center items-center col-span-1 lg:col-span-2 xl:col-span-2`}>
    Box 4
  </div>
</div>

  </div>
  
  
  
  );
}

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <html lang="en">
      <ThemeProvider attribute="class">
        <body className={`${rhd.className} max-w-3xl flex-auto p-10 mx-auto leading-loose`}>
          <Navbar />
          <BentoBox />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
