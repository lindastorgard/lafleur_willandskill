/** @jsx jsx */
import { jsx } from "theme-ui";
import Hamburger from "./Hamburger";
import { useState, useEffect } from "react";
import DropDownMobile from "./dropdownMobile";
import NavigationLink from "./NavigationLink";
import InstagramIcon from "../icons/instagramIcon";
import FacebookIcon from "../icons/facebookIcon";
import PinterestIcon from "../icons/pinterestIcon";
import TwitterIcon from "../icons/twitterIcon";
import Link from 'next/link';
import { useRouter } from 'next/router'

const NavigationMobile = ({}) => {
  const [open, setOpen] = useState(false);
  const [landingpage, setLandingPage] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === "/") {
      setLandingPage(true);
    }
  }, [router.pathname]);

  const pageScroll = function () {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 30) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", pageScroll);
    return () => window.removeEventListener("scroll", pageScroll);
  });

  return (
    <nav
      sx={{
        display: ["flex", null, "none"],
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        zIndex: 2,
        width: "100%",
        height: "60px",
        px: 4,
        py: 2,
        backgroundColor:
          showBackground || !landingpage ? "background" : "transparent",
        transition: showBackground
          ? ".6s cubic-bezier(.5,0,.5,1)"
          : ".6s cubic-bezier(.5,0,.5,1)",
        a: {
          ml: "24px",
        },
      }}
    >
      <Link href="/">
        <img 
        sx={{
          width: "80px"
        }}
        src={showBackground || !landingpage ? "/LaFleurBlack.png" : "/LaFleur.png"}
        alt="logo"
        /> 
      </Link>
      <Hamburger
        setOpen={setOpen}
        open={open}
        color={showBackground || !landingpage ? "highlight" : "white"}
      />
      <DropDownMobile open={open}>
        <ul
          sx={{
            p: 0,
            li: {
              a: {
                m: 1,
                color: "black",
              },
            },
          }}
        >
          <NavigationLink href={`/`}>
            <a>About</a>
          </NavigationLink>
          <NavigationLink href={`/`}>
            <a>Products</a>
          </NavigationLink>
          <NavigationLink href={`/`}>
            <a>Contact</a>
          </NavigationLink>
        </ul>
        <div 
          sx={{ 
            display: "flex", 
            ml: 3, 
            mt: 7 
          }}
        >
          <a 
            href="#"
            target="_blank" 
            rel="noreferrer noopener"
          >
            <InstagramIcon width="30px" fill="black" />
          </a>
          <a
            sx={{ ml: 3 }}
            href="#"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FacebookIcon width="18px" fill="black" />
          </a>
          <a
            sx={{ ml: 3 }}
            href="#"
            target="_blank"
            rel="noreferrer noopener"
          >
            <TwitterIcon width="30px" fill="black" />
          </a>
          <a
            sx={{ ml: 3 }}
            href="#"
            target="_blank"
            rel="noreferrer noopener"
          >
            <PinterestIcon width="22px" fill="black" />
          </a>
        </div>
      </DropDownMobile>
    </nav>
  );
};

export default NavigationMobile;