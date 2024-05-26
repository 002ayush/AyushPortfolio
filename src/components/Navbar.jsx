import About from "./About";
import CircularMotion from "./CircularMotion";
import CodingProfiles from "./CodingProfiles";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";
function Navbar() {
  return (
    <>
      <div className="bg-stone-600 xsm:w-screen msm:w-screen xsm:h-[800px] msm:h-[543px]">
        <ul className="flex msm:flex-row xsm:gap-2 gap-28 xsm:flex-col xsm:text-center msm:fixed  right-10  cursor-pointer text-opacity-85 z-50  top-0">
          <li className=" hover:opacity-70 hover:text-black">Home</li>
          <li className=" hover:opacity-70 hover:text-black">Projects</li>
          <li className=" hover:opacity-70 hover:text-black">Feedback</li>
        </ul>

        <div className="flex msm:flex-row xsm:flex-col    msm:justify-around msm:absolute msm:mt-20 w-screen msm:m-auto">
          <div>
            <Skills />
          </div>

          <div>
            <CircularMotion />
          </div>
        </div>
      </div>
      {/* <div className="border border-black absolute top-[543px] w-screen"></div> */}
      <section>
        <div>
          <About />
        </div>
      </section>
      <section className="ml-5 w-screen">
        <Resume />
      </section>
      <section className="ml-5">
        <Experiences />
      </section>
      <section className="ml-5">
        <Projects />
      </section>
      <section className="ml-5">
        <CodingProfiles/>
      </section>
      
    </>
  );
}

export default Navbar;
