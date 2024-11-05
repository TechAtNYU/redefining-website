// Page for SW page (startup week)
"use client";

import { navItems } from "@/data";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import {
  TeamGridSection,
  CloseIcon,
} from "@/components/blocks/teamgridorientation";
import TeamTitle from "@/components/TeamTitle";
import SWPage from "@/components/StartupWeek";

const Home = () => {
  return (
    <main
      className=" w-full dark:bg-black-200 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex justify-center items-center flex-col overflow-clip"
    >
      <FloatingNav navItems={navItems} />
      <TeamTitle titleContent="Startup Committee" />
      <SWPage />
    </main>
  );
};

export default Home;
