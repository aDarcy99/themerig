import {
  getContrastText
} from "../themerig-utils/palette-utils"
import deepmerge from "deepmerge";
import Color from "color";
import defaultTheme from "./default-theme";

const createTheme = (Theme = {}) => {
  if (!Theme) {
    return defaultTheme
  }
  if (typeof Theme !== "object" && Theme !== null) {
    TypeError("Parameter of createTheme is required to be an object")
  }
  //Check if typography variants is an object
  Theme.typography && typeof Theme.typography !== "object" ? TypeError("Typography variants is required to be an object.") : ""
  Theme.palette && typeof Theme.palette !== "object" ? TypeError("Palette variants is required to be an object.") : ""
  fillInTypography(Theme.typography)
  fillInPalette(Theme.palette)
  //Set Typography global variables
  //Deepmerge user created Theme and defaultTheme
  return deepmerge(defaultTheme, Theme)
}
export default createTheme

/**
* 
* @param {*} Palette 
*/
const fillInPalette = (Palette) => {
  if (Palette) {
    for (const [key, value] of Object.entries(Palette)) {
      if (Palette[key] && Palette[key].main) {
        const main = Color(Palette[key].main);
        Palette[key] = {
          lighter: main.lighten(0.28).hex(),
          light: main.lighten(0.14).hex(),
          dark: main.darken(0.14).hex(),
          darker: main.darken(0.28).hex(),
          text: getContrastText(Palette[key].main),
          ...Palette[key]
        }
      }
    }
  }
}

/**
* 
* @param {*} Typography 
*/
const fillInTypography = (Typography) => {
  if (Typography) {
    const rootFontSize = Typography.root && Typography.root.fontSize ? Typography.root.fontSize : defaultTheme.typography.root.fontSize
    for (const [key, value] of Object.entries(Typography)) {
      let defaultTypography = {};
      //check if the key exists in defaultTheme, if it does, make the defaultTypography with the typography that relates to that property, else use the basic default typography.
      if (defaultTheme.typography[key]) {
        defaultTypography = {
          fontSize: rootFontSize,
          fontFamily: defaultTheme.typography[key].fontFamily,
          fontWeight: defaultTheme.typography[key].fontWeight,
          lineHeight: defaultTheme.typography[key].lineHeight,
          textTransform: defaultTheme.typography[key].textTransform
        }
      } else {
        defaultTypography = {
          fontSize: rootFontSize,
          fontFamily: "initial",
          fontWeight: 400,
          lineHeight: "initial",
          textTransform: "initial"
        }
      }
      Typography[key] = deepmerge(defaultTypography, Typography[key])
    }
  }
}