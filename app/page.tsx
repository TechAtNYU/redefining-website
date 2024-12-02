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

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 w-full">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Program_Banner />
        <Grid />
        <RecentEventsPage />
        <Clients />
        <Experience />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
