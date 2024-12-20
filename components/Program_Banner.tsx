import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Program_Banner = () => {
  return (
    <section className="w-full py-20 ">
      <h1 className="heading z-100">
        Our <span className="text-purple">Programs</span>
      </h1>
      <p className="text-xl text-white text-center">
        Click/Hover each one to learn more!
      </p>
      {/* remove bg-white dark:bg-black */}
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {/* add des prop */}
        <Card
          title="Tech Treks"
          icon={<AceternityIcon order="Tech Treks" />}
          target="Freshmen & Sophomores"
          des="Explore the tech industry through company visits, workshops, and networking events. Get a taste of what it's like to work at top tech companies while being mentored on developing projects."
          href="/tech-treks"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            // add these classed for the border rounded overflowing -> rounded-3xl overflow-hidden
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="Mentorship"
          icon={<AceternityIcon order="Mentorship" />}
          target={"All Students"}
          des="A tech@nyu staple, our mentorship program pairs you with an industry professional who will guide you through your career journey. Get advice, feedback, and support from someone who's been there."
          href={"/mentorship"}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            // change bg-black to bg-pink-900
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              // change the colors of the
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          {/* remove this one */}
          {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
        </Card>
        <Card
          title="Startup Week Committee"
          icon={<AceternityIcon order="StartupWeek" />}
          target="All Students"
          des="Join the team that organizes our annual Startup Week, a week-long event series that brings together students, startups, and industry professionals. Plan events, reach out to sponsors, and help make the magic happen."
          href="/startup-week"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[255, 211, 252]]}
          />
        </Card>
        <Card
          title="Dev Team"
          icon={<AceternityIcon order="Dev Team" />}
          target="All Students"
          des="TBA Soon! Join a small cohort and develop projects with real impact and that will help you land a job or internship. This is for Experienced Developers."
          href="/"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-violet-800 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Program_Banner;

const Card = ({
  title,
  icon,
  target,
  children,
  // add this one for the desc
  des,
  href,
}: {
  title: string;
  icon: React.ReactNode;
  target?: string;
  children?: React.ReactNode;
  des: string;
  href: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a href={href}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        // change h-[30rem] to h-[35rem], add rounded-3xl
        className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
        style={{
          //   add these two
          //   you can generate the color from here https://cssgradient.io/
          background: "rgb(2,0,36)",
          backgroundColor:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,111,121,1) 48%, rgba(29,0,255,1) 100%)",
        }}
      >
        {/* change to h-10 w-10 , add opacity-30  */}
        <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
        <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
        <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
        <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-20 px-10">
          <div
            // add this for making it center
            // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
            className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-60 mx-auto flex items-center justify-center"
          >
            {icon}
          </div>
          <h2
            // change text-3xl, add text-center
            className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200  mx-auto"
          >
            {title}
          </h2>
          <p
            className="text-xl underline opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          >
            {target}
          </p>
          {/* add this one for the description */}
          <p
            className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
            style={{ color: "#E4ECFF" }}
          >
            {des}
          </p>
          <div
            className="opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          >
            <AceternityIcon order="Learn More" />
          </div>
        </div>
      </div>
    </a>
  );
};
// add order prop for the Phase number change
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      {/* this btn is from https://ui.aceternity.com/components/tailwindcss-buttons border magic */}
      {/* change rounded-lg, text-purple px-5 py-2 */}
      {/* remove focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cuz we don't need to focus */}
      {/* remove text-sm font-medium h-12 , add font-bold text-2xl */}
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-white backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
    // remove the svg and add the button
    // <svg
    //   width="66"
    //   height="65"
    //   viewBox="0 0 66 65"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    // >
    //   <path
    //     d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
    //     stroke="currentColor"
    //     strokeWidth="15"
    //     strokeMiterlimit="3.86874"
    //     strokeLinecap="round"
    //     style={{ mixBlendMode: "darken" }}
    //   />
    // </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
