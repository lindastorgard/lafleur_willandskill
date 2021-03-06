/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import InstagramIcon from "./icons/instagramIcon";
import FacebookIcon from "./icons/facebookIcon";
import PinterestIcon from "./icons/pinterestIcon";
import TwitterIcon from "./icons/twitterIcon";

const Footer = () => {

  const linkStyle = {
    display: "block",
    textDecoration: "none",
    fontFamily: "body",
    color: "text",
    a: {
      display: "inline-block",
      mx: 0,
      my: 0,
      "::after": {
        content: '" "',
        display: "block",
        width: "0%",
        borderBottom: "1px solid",
        borderColor: "text",
        transition: "0.2s",
        borderRadius: "2px",
        mr: "auto",
      },
      ":hover": {
        "::after": {
          width: "100%",
        },
      }
    },
  };

  return (
    <footer
      sx={{
        backgroundColor: "primary",
        p: [3, 4, 6],
      }}
    >
      <h2 sx={{ mb: 2, fontWeight: "body" }}>La Fleur</h2>
      <div
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          justifyContent: "space-between",
        }}
      >
        <div sx={{ mb: [4, "0px"]}}>
          <p sx={{m: 0}}>Street</p>
          <p sx={{m: 0}}>Postal code</p>
          <p sx={{m: 0}}>City</p>
          <p sx={{m: 0, mb: 2}}>Country</p>
          <Link href="/">
            <a sx={{fontFamily: "body", display: "block"}}>+46 XX XXXX XXX</a>
          </Link>
          <Link href="/">
            <a sx={{fontFamily: "body", display: "block"}}>info@company.com</a>
          </Link>
        </div>
        <div>
          <div sx={{ display: "flex", flexDirection: "column", my: [2, 0 ]}}>
            <div sx={{ display: "flex" }}>
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <InstagramIcon width="25px" fill="black" />
                </a>
                <a
                  href="/"
                  sx={{ ml: 3, pb: 2 }}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <PinterestIcon width="18px" fill="black" />
                </a>
                <a
                  sx={{ ml: 3, pb: 2 }}
                  href="/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FacebookIcon width="16px" fill="black" />
                </a>
                <a
                  sx={{ ml: 3, pb: 2 }}
                  href="/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <TwitterIcon width="25px" fill="black" />
                </a>
            </div>
            <Link href="/" >
              <a sx={{fontFamily: "body", display: "block"}}>Blog</a>
            </Link>
            <Link href="/">
              <a sx={{fontFamily: "body", display: "block"}}>Our Story</a>
            </Link>
            <Link href="/">
              <a sx={{fontFamily: "body", display: "block"}}>Contact</a>
            </Link>
          </div>
        </div>
      </div>
      <p
        sx={{
          color: "text",
          fontSize: 0,
        }}
      >
        © {new Date().getFullYear()} La Fleur.
        <a
          href="/"
          sx={{
            color: "text",
            fontSize: 0,
            textDecoration: "none",
            ":hover": {
              fontWeight: "heading",
            },
          }}
        >
          &nbsp;Powered by Company X
        </a>
      </p>
    </footer>
  );
};

export default Footer;