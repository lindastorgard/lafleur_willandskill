/** @jsx jsx */
import { jsx } from "theme-ui";

const Button = ({ title, form }) => {
  return (
    <button
      type="submit" form={form} value="Submit"
      sx={{
        border: "1px solid black",
        color: "black",
        backgroundColor: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: 2,
        cursor: "pointer",
        fontFamily: "heading",
        fontWeight: "body",
        textTransform: "uppercase",
        "&:hover": {
          color: "white",
          backgroundColor: "black",
        }
      }}
    >
      {title}
    </button>
  );
};

export default Button;