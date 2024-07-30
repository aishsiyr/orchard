import React from "react";
import Link from "next/link";
import Latest from "./Latest";
import Resources from "./Resources";

const About = () => {
  return (
    <div className="flex pt-16  justify-center">
      <div className="max-w-3xl">
        <div className="flex items-center justify-center ">
          {/* Main Content */}
          <div className="text-md">
            <h1 className="text-4xl font-bold">Hey I'm Aishwarya</h1>
            <div className="l pt-6">
              <p className="mx-auto leading-loose">
                I'm a frontend developer, ML enthusiast and also a budding
                entrepreneur. Currently building{" "}
                <Link href="https://overtly.io" text-blue-400>
                  Overtly.io
                </Link>
                , <Link href="http://drunkonverse.io"> DrunkOnVerse </Link> and
                <Link href="http://Noteable.io"> Noteable. </Link>
              </p>
              <div className="text-md pt-6 leading-loose ">
                You'll find writing about technologies I'm interested in time to
                time, or how I'm learning and growing in my career, sharing
                knowledge along the way. I also{" "}
                <strong>
                  use this as a medium to write about some reflections,
                  experiences, learnings and how I view the world.
                </strong>
              </div>
              {/* <Link
                href="/MyJourney"
                className="text-[#71c6f4] pt-6 hover:underline font-medium flex items-center"
              >
                Find out about my journey
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="ml-1 size-4"
                >
                  <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                  <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
                </svg>
              </Link> */}

              <div className="pt-10">
                <Latest />
              </div>
              <div className="pt-10">
                <Resources />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
