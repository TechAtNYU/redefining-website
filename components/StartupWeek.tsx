import React from "react";
import { ProgramPicGrid, ProgramPicGridItem } from "./programs/ProgramPicGrid";
import { StartupGridItems } from "@/data";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { FeaturesSectionDemo } from "./ui/Feature";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
const SWPage = () => {
  return (
    <div className="w-full md:w-[80%] justify-center px-10 dark:text-white-100 text-black-200">
      <p className="md:text-base text-sm md:font-normal font-light w-[60%] text-center justify-self-center">
        Are you interested in startups? Do you want to learn more about them and
        meet startup founders? Join the Tech@NYU Startup Week Committee! Help us
        plan, organize, and run a week of startup events for fellow students,
        sharing your love of startups with the wider NYU community.
      </p>
      <h1 className="text-xl font-medium text-center py-5 leading-snug tracking-wide">
        Our Committee Roles
      </h1>
      <FeaturesSectionDemo />
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
      <ProgramPicGrid className="w-full py-20">
        {StartupGridItems.map((item, i) => (
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

export default SWPage;
