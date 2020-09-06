/** @jsx jsx */
import { jsx } from "theme-ui";

const HeroSection = () => (
  <section>
    <div 
      sx={{
        backgroundImage: `url("/heroimage.jpg")`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "right top",
        position: "relative"
      }}
    >
        <div 
          sx={{
            width: ["80%", null, "600px"],
            position: "absolute",
            top: ["50%", null, "40%"],
            left: "5%",
          }}
        >
            <img sx={{
              width: ["300px", "500px", null],
              height: "auto"
            }} src="/LaFleur.png" alt="logo" />
          <p 
            sx={{ 
              color: "white" 
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
  </section>
  
);

export default HeroSection;