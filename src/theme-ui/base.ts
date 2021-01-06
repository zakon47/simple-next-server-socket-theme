/**
 * Main styles
 */
import { responsiveWidths } from "./constants";

export default {
  ".container": {
    maxWidth: responsiveWidths,
    m: "0 auto",
  },
  h1: {
    variant: "text.heading",
    fontSize: [4, 5, 6],
    color: "primary",
  },
  a: {
    color: "primary",
    textDecoration: "none",
    ":hover": {
      color: "secondary",
      textDecoration: "underline",
    },
  },
  section: {
    py: 5,
  },
};
