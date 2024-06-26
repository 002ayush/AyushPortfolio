
import { useEffect, useState } from "react";
import About from "./About";
import CircularMotion from "./CircularMotion";
import CodingProfiles from "./CodingProfiles";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";

function Navbar() {
    
    const handleClick = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return width;
  };
  const width = useWindowWidth();
  const [toggle,isToggle] = useState(false);
  return (
    

    <>
       
       
        <div className=" w-screen xsm:h-[1000px] msm:h-[543px]">
        {(width <= 600) && <div  onClick={()=>isToggle(!toggle)}><div className="border-2 border-white w-10 mt-2"></div>
       <div className="border-2 border-white w-10 mt-1"></div>
       <div className="border-2 border-white w-10 mt-1"></div></div>}
         {(width >= 600 || toggle) && <ul  className="transition-all delay-1000 ease-in-out flex msm:flex-row msm:gap-4 xsm:gap-2 gap-36 xsm:flex-col xsm:text-center msm:fixed  end-4  cursor-pointer text-opacity-85 z-50  top-0">
            <li className="hover:text-xl hover:opacity-70 "><a onClick={()=>handleClick('home')} href="#home">Home</a></li>
            <li className="hover:text-xl hover:opacity-70"><a onClick={()=>handleClick('about')} href="#about">About</a></li>
            <li className="hover:text-xl hover:opacity-70"><a onClick={()=>handleClick('project')} href="#project">Projects</a></li>
          </ul>}

          <div id="home" className="flex msm:flex-row xsm:flex-col msm:items-center   msm:justify-around msm:absolute msm:mt-10 w-screen ">
            <div>
              <Skills />
            </div>

            <div>
             
              
              <CircularMotion />
            
              
            </div>
          </div>
        </div>
        {/* <div className="border border-black absolute top-[543px] w-screen"></div> */}
        <section id="about">
            <About />   
        </section>
        <section>
          <Resume />
        </section>
        <section>
          <Experiences />
        </section>
        <section id="project">
          <Projects />
        </section>
        <section>
          <CodingProfiles />
        </section>
      
    </>
  );
}

export default Navbar;
