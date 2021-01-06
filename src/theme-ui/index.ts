import base from "./base";
import { responsiveWidths } from "./constants";
import variants from "./variants";

export default {
  initialColorModeName: "light",
  useColorSchemeMediaQuery: true,
  colors: {
    text: "#222",
    background: "#fff",
    primary: "#07c",
    secondary: "#609",
  },
  fonts: {
    body:
      'Nunito, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background",
      ...base,
    },
  },
  ...variants,
};
