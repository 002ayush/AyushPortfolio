import { Card, CardContent, CardMedia, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
export default function About() {
  const [rotation,setRotation] = useState(180)
  const FlipCardInner = styled('div')({
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transition: 'transform 3s',
    transformStyle: 'preserve-3d',
    transform: `rotateY(${rotation}deg)`,
    
  })
  const FlipCard = styled('div')({
    perspective: '1000px',
    width: '50vw',
    height: '50vh',
    margin: '3px auto',
   
  })
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY) / (document.body.scrollHeight - window.innerHeight);
      const newRotation = scrollPercentage * rotation;
      setRotation(newRotation);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    
    <>
    <FlipCard>
      <FlipCardInner>
      <Card
        sx={{
          borderColor: "gray",
          borderWidth: "3px",
          width: "100%",
          borderRadius: "30px",
          bgcolor:'lightseagreen',
          height: "100%",
          margin: "auto",
          marginTop: "5px",
          backfaceVisibility : 'hidden',
           }}
      >
        <CardMedia
          component="img"
          image="/static/images/profile1.jpg"
          sx={{
            height: 80, // Specify the height
            // Make the media take the full width of the card
            width: 80,
            margin: "auto",
            fontFamily:'sans-serif',
            fontSize:'18px',
            marginTop: "3px",
            borderRadius: "10px", // Rounded corners
          
          }}
        />
        <CardContent >
          <Typography
            style={{ fontWeight: "bold" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            Ayush Mishra
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{fontSize:'x-small'}}>
            A dedicated and motivated professional with a strong passion for
            problem-solving and development. Highly proficient in data
            structures and algorithms, I excel at addressing complex challenges
            with innovative solutions. I blend technical expertise with
            effective communication and teamwork skills, and my openness to
            feedback fosters continuous learning and growth. I am quick to adapt
            to new technologies and industry trends, ensuring I stay at the
            forefront of the field.
          </Typography>
        </CardContent>
      </Card>
      </FlipCardInner>
      </FlipCard>
    </>
  );
}
