"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Program_Banner from "@/components/Program_Banner";
import {
  TeamGridSection,
  CloseIcon,
} from "@/components/blocks/teamgridorientation";

const Home = () => {
  return (
    <>
      <TeamGridSection />
    </>
  );
};

export default Home;
