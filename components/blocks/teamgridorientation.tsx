"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./use-outside-click";

export function TeamGridSection() {
  const [active, setActive] = useState<(typeof cards)[number] | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));
  function closeFunction(active: any, setActive: any) {
    console.log(active);
    console.log(cards);
    setActive(false);
  }
  console.log(active);
  console.log(cards);
  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            key={`overlay-bg-${id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.05,
              },
            }}
            className="fixed inset-0 bg-black/60 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-black rounded-full h-6 w-6"
              onClick={() => closeFunction(active, setActive)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-y-scroll overflow-x-hidden mt-20"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={2000}
                  height={2000}
                  src={active.src}
                  alt={active.title}
                  className="w-full md:h-100 lg:h-80% lg:h-full sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-auto md:h-fit pb-20 flex flex-col items-start gap-4 overflow-y-scroll dark:text-neutral-400  [scrollbar-width:none]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <div className="w-full h-auto overflow-y-hidden z-auto">
        <ul className="max-w-[90%] mx-auto w-full grid grid-cols-1 lg:grid-cols-4 items-start gap-4">
          {cards.map((card, index) => (
            <motion.div
              layout // This ensures that layout animations happen, but cards won't disappear
              key={card.description}
              onClick={() => setActive(card)} // Ensure this sets the right active state
              className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <div className="flex gap-4 flex-col w-full">
                <motion.div
                  layoutId={`image-${card.title}-${index}`} // Ensure unique layoutId across items
                >
                  <Image
                    width={1000}
                    height={1000}
                    src={card.src}
                    alt={card.title}
                    className=" md:h-100 lg:h-80% w-full rounded-lg object-cover object-top"
                  />
                </motion.div>

                <div className="flex justify-center items-center flex-col">
                  <motion.h3
                    layoutId={`title-${card.title}-${index}`} // Ensure unique layoutId across items
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                  >
                    {card.title}
                  </motion.h3>

                  <motion.p
                    layoutId={`description-${card.description}-${index}`} // Ensure unique layoutId across items
                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </ul>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Indeera Saha",
    title: "Co-President",
    src: "/team-assets/headshots/indeera.png",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Indeera is a Junior studying Computer Science at NYU Tandon School of
          Engineering. She started at Tech@NYU through the tech treks program
          her freshman year, rising up to be come the co-lead her sophomore year
          before becoming Co-President. She is passionate about making tech
          accessible to everyone and is excited to continue to grow the club and
          its community.
        </p>
      );
    },
  },
  {
    description: "Lena Lin",
    title: "Co-President",
    src: "/team-assets/headshots/lena.jpeg",
    ctaText: "linkedIn",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          I am someone who believes that unorthodoxy → innovation → creativity.
          From how I present myself to how I approach problem-solving, my
          constant goal is to create something unique, unconventional, and new.
          My passion for creative expression comes from the need to express the
          unsatisfied desires, unheard complaints, and unrealized potential of
          marginalized communities. This passion, accompanied by an intense
          drive to think outside of the box, was what began my professional path
          as a multimedia designer. Through my experiences in various
          roles—graphic designer, marketing director, creative consultant—at
          social justice focused non-profits, I grew a fascination with
          exploring atypical uses of technology: chatbots as an art form, AI and
          ML in generating therapeutic art, design as a tool of social
          resistance. I excel in diverse environments, where collaboration and
          innovation go hand-in-hand. My ultimate career goal is to create
          tangible impact through design and engineering efforts that are not
          only shockingly creative, but also equally as shockingly practical. If
          any of this is interesting to you, please don’t hesitate to reach out
          to me at lenalin@nyu.edu or visit my website: lenalin.com!
        </p>
      );
    },
  },
  {
    description: "Andrew Lee",
    title: "Secetary",
    src: "/team-assets/headshots/andrew_l.jpg",
    ctaText: "linkedIn",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Andrew Lee is a CS Major @ NYU. He has a passion for tech and
          entrepreneurship. He is a co-founder of a startup called
          "SweaterWeather" that aims to revolutionize the way we think about
          fashion. He is also a co-founder of a non-profit called "The
          Unorthodox" that aims to provide resources and opportunities to
          underprivileged students.
        </p>
      );
    },
  },
  {
    description: "Katy Lee",
    title: "Events Lead",
    src: "/team-assets/headshots/katy.jpeg",
    ctaText: "linkedIn",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return <p>I want to have fun!</p>;
    },
  },
  {
    description: "Kaitlyn Zou",
    title: "Event Coordinator",
    src: "/team-assets/headshots/Kaitlyn_Zou.jpg",
    ctaText: "linkedIn",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return <p>A great coworker -- Anonymous</p>;
    },
  },
  {
    description: "Lucy Hartigan",
    title: "Event Coordinator",
    src: "/team-assets/headshots/Lucy_Hartigan.jpeg",
    ctaText: "linkedIn",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return <p>A great coworker -- Anonymous</p>;
    },
  },
  {
    description: "Liz Kim",
    title: "Event Coordinator",
    src: "/team-assets/headshots/Liz_kim.jpeg",
    ctaText: "linkedIn",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return <p>A great coworker -- Anonymous</p>;
    },
  },
  {
    description: "Yulduz Furkhati",
    title: "Social Media Lead",
    src: "/team-assets/headshots/youli.png",
    ctaText: "linkedIn",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return <p>A great coworker -- Anonymous</p>;
    },
  },
  {
    description: "Lauren Zhou",
    title: "Content & Marketing lead",
    src: "/team-assets/headshots/lauren.jpg",
    ctaText: "linkedIn",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return <p>A great coworker -- Anonymous</p>;
    },
  },
  {
    description: "Kyle Park",
    title: "Tech Treks Lead",
    src: "/team-assets/headshots/kyle.png",
    ctaText: "linkedIn",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return <p>A great coworker -- Anonymous</p>;
    },
  },
  {
    description: "Kevin Dang",
    title: "Tech Treks Co-Lead",
    src: "/team-assets/headshots/Kevin_Dong.jpg",
    ctaText: "linkedIn",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return <p>A great coworker -- Anonymous</p>;
    },
  },
  {
    description: "Bryan Ko",
    title: "Tech Treks Co-Lead",
    src: "/team-assets/headshots/bryanko.jpg",
    ctaText: "linkedIn",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return <p>A great coworker -- Anonymous</p>;
    },
  },
  {
    description: "Sean Lai",
    title: "Startup Co-Lead",
    src: "/team-assets/headshots/sean_l.jpg",
    ctaText: "linkedIn",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return <p>A great coworker -- Anonymous</p>;
    },
  },
  {
    description: "Michael Shen",
    title: "Startup Co-Lead",
    src: "/team-assets/headshots/michael_s.png",
    ctaText: "linkedIn",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return <p>A great coworker -- Anonymous</p>;
    },
  },
  {
    description: "Parul Veda",
    title: "Startup Co-Lead",
    src: "/team-assets/headshots/peda.jpg",
    ctaText: "linkedIn",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return <p>A great coworker -- Anonymous</p>;
    },
  },
  {
    description: "Aileen Li",
    title: "Mentorship Co-Lead",
    src: "/team-assets/headshots/ali.jpg",
    ctaText: "linkedIn",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return <p>A great coworker -- Anonymous</p>;
    },
  },
  {
    description: "Ryan Kawahara",
    title: "Mentorship Co-Lead",
    src: "/team-assets/headshots/ryan_k.jpg",
    ctaText: "linkedIn",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return <p>A great coworker -- Anonymous</p>;
    },
  },
  {
    description: "To Be Announced...",
    title: "Grad Representative",
    src: "/team-assets/headshots/temp.jpg",
    ctaText: "linkedIn",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return <p>A great coworker -- Anonymous</p>;
    },
  },
  {
    description: "To Be Announced....",
    title: "Dev Team Project lead",
    src: "/team-assets/headshots/temp.jpg",
    ctaText: "linkedIn",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return <p>A great coworker -- Anonymous</p>;
    },
  },
  {
    description: "(Coming Soon...)",
    title: "Dev Team Program lead",
    src: "/team-assets/headshots/temp.jpg",
    ctaText: "linkedIn",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return <p>A great coworker -- Anonymous</p>;
    },
  },
];

// showcase the proper src path to work with next/image
