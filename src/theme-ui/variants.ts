/**
 * Shared styles
 * @variants
 */

import { responsiveWidths } from "./constants";

export default {
  text: {
    heading: {
      fontFamily: "heading",
      m: 0,
      lineHeight: 1,
    },
  },
  header: {
    ".wrapper": {
      margin: "0 auto",
      maxWidth: responsiveWidths,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    ".brand": {
      mr: [0, 0, 4],
    },
    ".menu": {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    a: {
      textDecoration: "none",
      color: "primary",
      p: 3,
      display: "inline-block",
      fontSize: 2,
    },
  },
};
