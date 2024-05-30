import { useEffect, useRef, useState } from "react";
import { Avatar } from "@mui/material";
import Typed from "typed.js";

const icons = [
  "/static/images/github.png",
  "/static/images/linkedin.png",

  "/static/images/twitter.png",

  // Add more icon paths as needed
];
const location = [
  "https://github.com/002ayush",
  "https://www.linkedin.com/in/ayushmishra11/",
  "https://x.com/mishraayush_",
];

function CircularMotion() {
 
  const iconRefs = useRef([]);
  const [fradius,setFRadius] = useState(150)
   useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth <= 600) {
        setFRadius(80); // Smaller radius for small screens
      } else {
        setFRadius(150); // Default radius for larger screens
      }
    };

    updateRadius(); // Initial check
    window.addEventListener('resize', updateRadius); // Update radius on resize

    return () => window.removeEventListener('resize', updateRadius);
  }, []);
  useEffect(() => {
    const radius = fradius
    let angle = 0;
    const numIcons = icons.length;

    const moveElements = () => {
      icons.forEach((_, index) => {
        const element = iconRefs.current[index];
        const angleOffset = (360 / numIcons) * index + angle;
        const x = radius * Math.cos((angleOffset * Math.PI) / 180);
        const y = radius * Math.sin((angleOffset * Math.PI) / 180);

        element.style.transform = `translate(${x}px, ${y}px)`;
      });

      angle += 0.2;
      if (angle >= 360) {
        angle = 0;
      }

      requestAnimationFrame(moveElements);
    };

    moveElements();

    return () => cancelAnimationFrame(moveElements);
  },[fradius]);
  
  
  const el = useRef()
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['My Name is Ayush Kumar Mishra',"I am a Web Developer","I am a Android Developer","I am a UI/UX Designer"],
      typeSpeed: 50,
      loop : true,
      backSpeed:50
    });


    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
     <div className="text-2xl"><span className="mix-blend-color-dodge" ref={el}></span></div>
    <div
     
      className={`flex text-white flex-col msm:items-center xsm:items-center xsm:mt-20 xsm:m-auto msm:justify-center msm:w-fit msm:h-fit xsm:w-fit xsm:h-fit xsm:justify-center rounded-full`}
    >
     
     
   
      <Avatar
        alt="Profile"
        src="/static/images/profile1.jpg"
        sx={{ width: 256, height: 266,opacity : 0.5,'@media (max-width: 600px)' : {
          width : 80,
          height : 80
          }}}
      />
      {icons.map((icon, index) => (
        <div
          key={index}
          ref={(el) => (iconRefs.current[index] = el)}
          className="absolute w-12 h-12"
        >
          <a href={`${location[index]}`} target="_blank">
            <img
              src={icon}
              alt={`Icon ${index}`}
              className="w-full h-full rounded-full"
            />
          </a>
        </div>
      ))}
    
    </div>
    </>
  );
}

export default CircularMotion;
