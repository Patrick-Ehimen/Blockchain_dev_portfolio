import {
  FixedSideSocials,
  Experience,
  PortfolioProjects1,
  PortfolioProjects2,
} from "../components";

import { Frame29, Square } from "../assets";

const Portfolio = () => {
  return (
    <div>
      <section className="md:mx-[150px] mx-[30px] mt-[100px] flex flex-col mb-[15px] md:flex-row">
        <div className="font-fira-code text-white text-[32px] flex">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-row">
              <span className="text-[#64ffdb] flex flex-row">#</span>
              Experience
            </div>
            <div className="md1:w-96 md:w-48 h-1 ml-2 mt-[25px] bg-[#FFBF00]"></div>
          </div>
        </div>
      </section>
      <div className="md:ml-[150px] ml-[50px] font-fira-code text-[#939BA8] w-6/12">
        // Click on the work experiences to see more details
      </div>

      <Experience />

      <section className="lg:flex-row md:my-[150px] my-[50px] flex flex-col bg-[#0A192F]">
        <div className="md:flex-row flex-col">
          <div className="flex flex-col font-fira-code mx-[50px] md:ml-[150px] md:w-[500px]">
            <div className="md:text-[25px] text-[18px] flex">
              <span className="text-[#64FFDB]">/</span>
              <h3 className="text-white">projects</h3>
            </div>
            <div className="text-white md:text-[20px] mb-[50px] text-[35px]">
              List of my projects
            </div>
          </div>

          <div className="md:ml-[150px] ml-[50px]">
            <div className="md:text-[25px] text-[18px] flex">
              <span className="text-[#FFBF00]">#</span>
              <h3 className="text-white">complete-dapps</h3>
            </div>
            <div className="text-[#939BA8] md:hidden font-fira-code text-[17px] mt-[20px] -mb-[10px]">
              //Scroll to the left to see more projects
            </div>
          </div>

          <div className="flex ">
            <PortfolioProjects1 />
          </div>

          <div className="">
            <PortfolioProjects2 />
          </div>
        </div>

        <img
          src={Frame29}
          className="absolute md:bottom-10 md:flex hidden right-4"
        />
        <img src={Square} className="absolute md:bottom-10 top-36 right-0" />
        {/* <img
          src={Square}
          className="absolute md:hidden md:bottom-10 bottom-0 right-0"
        /> */}

        <FixedSideSocials />
      </section>
    </div>
  );
};

export default Portfolio;
