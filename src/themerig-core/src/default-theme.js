import colors from "../themerig-colors/themerig-colors";

const getSpacing = (multiplier) => {
  return (value) => multiplier * value;
}
const getFontSize = () => {

}

const defaultTheme = {
  palette: {
    primary: {
      lighter: "#B9A4F8",
      light: "#997AF5",
      main: "#7950F2",
      dark: "#5926EF",
      darker: "#4310D8",
      text: "white",
    },
    secondary: {
      lighter: "#FFE793",
      light: "#FFDE67",
      main: "#FFD43B",
      dark: "#FFCA0F",
      darker: "#E2B000",
      text: "black",
    },
    error: {
      lighter: "#FFD0D0",
      light: "#FF9E9E",
      main: "#FF6B6B",
      dark: "#FF3838",
      darker: "#FF0606",
      text: "black",
    },
    success: {
      lighter: "#90E09E",
      light: "#71D882",
      main: "#51CF66",
      dark: "#36C24D",
      darker: "#2DA340",
      text: "black",
    },
    action: {
      active: 0,
      hover: 0,
      focused: 0
    },
    border: {
      lighter: "#FFFFFF",
      light: "#F0F2F4",
      main: "#CED4DA",
      dark: "#ACB6C0",
      darker: "#8A99A7",
      text: "black",
    },
    defaults: {
      background: "white",
      surface: colors.grey[0],
      text: colors.grey[7],
      seperator: colors.grey[3],
      border: colors.grey[4],
      disabled: colors.grey[5],
    }
  },
  typography: {
    root: {
      fontSize: 16,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 400,
      lineHeight: "normal",
      textTransform: "initial"
    },
    h1: {
      fontSize: 72,
      fontFamily: "inherit",
      fontWeight: 500,
      lineHeight: "normal",
      textTransform: "initial"
    },
    h2: {
      fontSize: 56,
      fontFamily: "inherit",
      fontWeight: 500,
      lineHeight: "normal",
      textTransform: "initial"
    },
    h3: {
      fontSize: 42,
      fontFamily: "inherit",
      fontWeight: 500,
      lineHeight: "normal",
      textTransform: "initial"
    },
    h4: {
      fontSize: 36,
      fontFamily: "inherit",
      fontWeight: 400,
      lineHeight: "normal",
      textTransform: "initial"
    },
    h5: {
      fontSize: 28,
      fontFamily: "inherit",
      fontWeight: 400,
      lineHeight: "normal",
      textTransform: "initial"
    },
    h6: {
      fontSize: 20,
      fontFamily: "inherit",
      fontWeight: 400,
      lineHeight: "normal",
      textTransform: "initial"
    },
    body1: {
      fontSize: 16,
      fontFamily: "inherit",
      fontWeight: 400,
      lineHeight: "normal",
      textTransform: "initial"
    },
    body2: {
      fontSize: 14,
      fontFamily: "inherit",
      fontWeight: 400,
      lineHeight: "normal",
      textTransform: "initial"
    },
    subtitle: {}
  },
  spacing: getSpacing(8),
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
  ],
  viewports: {
    xs: "",
    sm: "",
    md: "",
    lg: "",
    xl: ""
  },
  options: {
    typography: {
      scale: 1.25,
    },
    palette: {
      colorShiftAmount: 0.15
    },
    spacing: {
      multiplier: 8
    }
  }
}

export default defaultTheme;