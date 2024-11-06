"use client";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import RecentEventsPage from "@/components/RecentEvents";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Program_Banner from "@/components/Program_Banner";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navItems } from "@/data";
import { Spotlight } from "@/components/ui/Spotlight";
import MagicButton from "@/components/MagicButton";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

const Error404 = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-colmx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <div className="pb-20 md:pb-30 pt-36">
          <div>
            <Spotlight
              className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
              fill="white"
            />
            <Spotlight
              className="h-[80vh] w-[50vw] top-10 left-full"
              fill="purple"
            />
            <Spotlight
              className="left-80 top-28 h-[80vh] w-[50vw]"
              fill="blue"
            />
          </div>
          <div
            className="md:h-screen sm:h-80 w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
          >
            {/* Radial gradient for the container to give a faded look */}
            <div
              // chnage the bg to bg-black-100, so it matches the bg color and will blend in
              className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
            />
          </div>

          <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              {/* We need to have a higher rez no bckg img TODO */}
              <Image src="/logo.png" alt="Tech@NYU" width={800} height={400} />

              {/**
               *  Link: https://ui.aceternity.com/components/text-generate-effect
               *
               *  change md:text-6xl, add more responsive code
               */}
              <TextGenerateEffect
                words="ERROR 404: Page Not Found"
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
              />
            </div>
          </div>
        </div>
        {navItems.slice(2).map((navItem, idx) => (
          <Link
            key={`large-link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Error404;
