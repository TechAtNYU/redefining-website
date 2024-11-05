"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import RecentEventsPage from "@/components/RecentEvents";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Program_Banner from "@/components/Program_Banner";
import {
  TeamGridSection,
  CloseIcon,
} from "@/components/blocks/teamgridorientation";
import TeamTitle from "@/components/TeamTitle";

const Home = () => {
  return (
    <main
      className=" w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex justify-center items-center flex-col overflow-clip"
    >
      <FloatingNav navItems={navItems} />
      <TeamTitle titleContent="2024-2025 Team" />
      <TeamGridSection />
    </main>
  );
};

export default Home;
