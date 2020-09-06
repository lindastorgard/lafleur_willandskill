/** @jsx jsx */
import { jsx } from "theme-ui";

const IngressSection = ({ title }) => {
  return (
    <article
      sx={{
        mx: [2, null, 7],
        my: [5, 6, 7]
      }}
    >
      <h1 
        sx={{
          m: 0,
          fontSize: 5,
          fontFamily: "heading",
          fontWeight: "body",
          color: "text",
          display: "block",
          textAlign: "center",
        }}
      >{title}
      </h1>
      <p 
        sx={{
          textAlign: "center",
          maxWidth: ["400px", "600px", "800px"],
          m: "0 auto",
          // mb: 6,
          py: [2],
          fontSize: [1, 2, null],
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </article>
  );
};

export default IngressSection;