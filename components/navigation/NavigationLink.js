/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from 'next/link';

const NavigationLink = ({ children, href, color }) => {
  return (
    <li
      sx={{
        listStyle: "none",
        position: "relative",
        height: ["auto", "25px"],
        ml: 4
      }}
    >
      <Link href={href}>
        <a 
          sx={{
            display: "inline-block",
            position: "relative",
            textDecoration: "none",
            fontFamily: "body",
            fontSize: [4, 2],
            zIndex: 2,
            "::after": {
              content: '" "',
              display: "block",
              width: "0%",
              borderBottom: "1px solid",
              borderColor: color,
              transition: "0.2s",
              borderRadius: "2px",
              margin: "auto",
            },
            ":hover": {
              "::after": {
                width: "100%",
              },
            }
          }}
        >
          {children}
        </a>
      </Link>
    </li>
  );
};

export default NavigationLink;