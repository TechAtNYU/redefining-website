import React from "react";
import { ProgramPicGrid, ProgramPicGridItem } from "./programs/ProgramPicGrid";
import { TTPhotoGridItems, TTcompanies } from "@/data";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { Feature } from "./ui/Feature";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import {
  IconCloud,
  IconCurrencyDollar,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
const TechTreksPage = () => {
  const TTGridIterm = [
    {
      title: "Members",
      description:
        "You will be a part of a 12-15 person semesterly cohort that meets every week on Tuesdays and Fridays. You will meet other students who are beginning their journeys in tech, connect with industry professionals, learn from workshops, and add fun software projects to your portfolio!",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Tutors",
      description:
        "You will aid the members in building their projects by offering your expertise on Tuesdays, with optional additional office hours. In return, you will get all the perks that regular members get!",
      icon: <IconRouteAltLeft />,
    },
  ];
  return (
    <div className="w-full md:w-[80%] justify-center px-10">
      <p className="md:text-base text-sm md:font-normal font-light w-[60%] text-center justify-self-center">
        Initially created to expose freshmen to the tech industry, we realized
        there were sophomores and juniors just as new to the industry. Tech
        Treks now has two participant types: members and tutors!
      </p>
      <h1 className="text-xl font-medium text-center pt-5 leading-snug tracking-wide">
        Two Tracks
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  relative z-10 py-10 mx-auto justify-center">
        {TTGridIterm.map((feature, tindex) => (
          <Feature key={feature.title} {...feature} index={tindex} />
        ))}
      </div>
      <div className="flex flex-col items-center pb-10">
        <h1 className="heading lg:max-w-[45vw] pb-5">
          Interested in <span className="text-purple">Applying?</span>
        </h1>
        {/* <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p> */}
        <a href="javascript:void(0);" className=" cursor-default">
          <MagicButton
            title="Application Closed"
            // icon={<FaLocationArrow />}
            icon={null}
            position="right"
          />
        </a>
      </div>
      <div className="flex flex-col items-center max-lg:mt-10 pb-20">
        {/* <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div> */}
        {/* TODO: Please format imgs we use to be roughly consitent portportions or hard code in the ids to special width height */}
        <h1 className="heading py-10">
          <span className="text-purple">Previous Companies</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {TTcompanies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                />
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <ProgramPicGrid className="w-full py-20">
        {TTPhotoGridItems.map((item, i) => (
          <ProgramPicGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </ProgramPicGrid>
      {/* Some component that showcases past sponsors */}
    </div>
  );
};

export default TechTreksPage;
