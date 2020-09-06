/** @jsx jsx */
import { jsx } from "theme-ui";
import NavigationLink from "./NavigationLink";
import InstagramIcon from "../icons/instagramIcon";
import FacebookIcon from "../icons/facebookIcon";
import PinterestIcon from "../icons/pinterestIcon";
import TwitterIcon from "../icons/twitterIcon";
import Link from 'next/link';
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'

const NavigationDesktop = () => {
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
        display: ["none", null, "flex"],
        alignItems: "center",
        position: "fixed",
        zIndex: 2,
        width: "100%",
        height: "70px",
        backgroundColor:
          showBackground || !landingpage ? "background" : "transparent",
        transition: showBackground
          ? ".6s cubic-bezier(.5,0,.5,1)"
          : ".6s cubic-bezier(.5,0,.5,1)",
        px: 4,
        py: 2,
      }}
    >
      <Link href="/">
          <img 
            sx={{
              width: "80px"
            }} 
            src={showBackground || !landingpage ? "/LaFleurBlack.png" : "/LaFleur.png"}
            alt="logo" />
      </Link>
      <ul
        sx={{
          m: "auto",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          p: 0,
          li: {
            a: {
              color: showBackground || !landingpage ? "black" : "white",
            },
          },
        }}
      >
          <NavigationLink href="/" color={showBackground || !landingpage ? "highlight" : "white"}>
            <a>Blog</a>
          </NavigationLink>
          <NavigationLink href="/" color={showBackground || !landingpage ? "highlight" : "white"}>
            <a>Our Story</a>
          </NavigationLink>
          <NavigationLink href="/" color={showBackground || !landingpage ? "highlight" : "white"}>
            <a>Contact</a>
          </NavigationLink>
      </ul>
      <div sx={{ display: "flex" }}>
          <a href="#" target="_blank" rel="noreferrer noopener">
            <InstagramIcon
              width="20px"
              fill={showBackground || !landingpage ? "highlight" : "white"}
            />
          </a>
          <a
            sx={{ ml: 3 }}
            href="#"
            target="_blank"
            rel="noreferrer noopener"
          >
            <PinterestIcon
              width="14px"
              fill={showBackground || !landingpage ? "highlight" : "white"}
            />
          </a>
          <a
            sx={{ ml: 3 }}
            href="#"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FacebookIcon
              width="12px"
              fill={showBackground || !landingpage ? "highlight" : "white"}
            />
          </a>
          <a
            sx={{ ml: 3 }}
            href="#"
            target="_blank"
            rel="noreferrer noopener"
          >
            <TwitterIcon
              width="20px"
              fill={showBackground || !landingpage ? "highlight" : "white"}
            />
          </a>
      </div>
    </nav>
  );
};

export default NavigationDesktop;