/**
 * Main styles
 */
import { responsiveWidths, getters } from "./constants";

export default {
  ".fx":{
    m: "0 auto",
    maxWidth: responsiveWidths,
    minHeight: "100%",
    width: "100%",
    px: getters
  },
  h1: {
    variant: "text.heading",
    fontSize: [4, 5, 6],
    color: "primary",
  },
  input: {
    padding: "10px 20px",
    border: "1px solid red",
    ":focus":{
      color: "zakon"
    }
  },
  h2: {
    variant: "text.heading",
    // fontSize: [14, 10, 5],
    color: "zakon",
    ":hover":{
      color:"red",
    }
  },
  a: {
    color: "primary",
    textDecoration: "none",
    ":hover": {
      color: "secondary",
    },
  },
  section: {
    py: "20px",
  },
};
