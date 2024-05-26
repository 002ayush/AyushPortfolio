import { useEffect, useRef } from "react";
import { Avatar } from "@mui/material";

const icons = [
  "/static/images/github.png",
  "/static/images/linkdin.png",

  "/static/images/twitter.png",

  // Add more icon paths as needed
];
const location = [
  "https://github.com/002ayush",
  "https://www.linkedin.com/in/ayushmishra11/",
  "https://x.com/mishraayush_",
];

function CircularMotion() {
  const containerRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    const radius = 150; // Adjust the radius to cover the entire Avatar
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
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center w-96 h-96 rounded-full"
    >
      <Avatar
        alt="Profile"
        src="/static/images/profile1.jpg"
        sx={{ width: 256, height: 266,opacity : 0.5}}
      />
      {icons.map((icon, index) => (
        <div
          key={index}
          ref={(el) => (iconRefs.current[index] = el)}
          className="absolute w-8 h-8"
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
  );
}

export default CircularMotion;
