import Color from "color";
/**
 * @param {*} color Any value compatible for use with Color()
 * @returns Contrast text of color used in paramter
 */
export const getContrastText = (color) => {
  return Color(color).isDark() ? "white" : "black";
}

/**
 * 
 * @param {*} props 
 * @param {*} shade 
 * @param {*} fallback 
 * @returns 
 */
export const fillInColorProperty = (props, shade, fallback, options = {
  skipTheme: false,
  skipColor: false
}) => {
  if (props.color && !options.skipColor) {
    return props.color[shade]
  } else if (props.theme && !options.skipTheme) {
    return props.theme.palette.primary[shade]
  } else {
    return fallback
  }
}

export const fillInColorVariant = (Variant) => {
  if (Variant.main) {
    const main = Color(Variant.main)
    return {
      lighter: main.lighten(0.28).hex(),
      light: main.lighten(0.14).hex(),
      dark: main.darken(0.14).hex(),
      darker: main.darken(0.28).hex(),
      text: getContrastText(Variant.main),
      ...Variant
    }
  }
}