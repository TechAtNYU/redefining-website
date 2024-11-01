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
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
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
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={2000}
                  height={2000}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-200 lg:h-full sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top transform translate-y-1"
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
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
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
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
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
                  className="h-60 w-full rounded-lg object-cover object-top"
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
    description: "Bryan Ko",
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
    description: "Aileen Li",
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
];

// showcase the proper src path to work with next/image
