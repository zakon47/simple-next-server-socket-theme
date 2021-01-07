import base from "./base";
import variants from "./variants";
import buttons from "./buttons";
import layout from "./layout";
import navigation from "./navigation";
import { responsiveWidths } from './constants';

export default {
  initialColorModeName: "default",
  useColorSchemeMediaQuery: true,
  // useCustomProperties: false,      //если нужно отключить useColor через --var
  colors: {
    primary: "#333",
    secondary: "#222",
    backgroundColor: "transparent",
    text: "#333",
    line: "#ccc",
    boxShadow: "#a5a5a5",
    backgroundLight: "#fff",
    href:"#333",
    hrefHover:"#222",
    url: "url(/layout/bg.png)",
    modes:{
      dart:{
        primary: "#ccc",
        secondary: "#fff",
        backgroundLight: "#484848",
        text: "#eee",
        href:"#ccc",
        hrefHover:"#fff",
        buttonBg:"red",
        backgroundColor: "#333",
        line: "#000",
        boxShadow: "#000",
        url: "url(/layout/bg2.png)",
      }
    }
  },
  fonts: {
    body:
      'Nunito, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
  },
  // fontSizes: ["12px", "11px", "10px"],
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      fontSize: "1.4rem",
      ...base,
      ...buttons,
      ...layout,
      ...navigation,
    },
  },
  breakpoints: responsiveWidths,
  ...variants,
};
