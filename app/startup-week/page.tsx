// Page for SW page (startup week)
"use client";

import { navItems } from "@/data";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import TeamTitle from "@/components/TeamTitle";
import SWPage from "@/components/StartupWeek";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <div
          className=" w-full dark:bg-black-200 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex justify-center items-center flex-col overflow-clip"
        >
          <TeamTitle titleContent="Startup Committee" />
          <SWPage />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Home;
