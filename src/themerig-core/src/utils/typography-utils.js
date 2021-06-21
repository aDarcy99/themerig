/**
 * @param Props 
 * @param Measurement The measurement used when getting fontSize
 * 
 * @returns A react-jss compatible object 
 */
 export const getTypographyStyles = (props, options = {
  rootFontSize: 16,
  measurement: "rem",
}) => {
  //Convert props fontSize to css compatible value, based off of options.measurement paramater
  if (options.measurement == "rem") {
    props.fontSize = `${props.fontSize / rootFontSize}rem`
  } else if (options.measurement == "px") {
    props.fontSize = `${props.fontSize}px`
  } else {
    TypeError("options.Measurement parameter of the getTypographyStyles function required to be 'px' or 'rem'.")
  }

  return {
    fontSize: props.fontSize || props.as && props.as.fontSize,
    fontWeight: props.fontWeight || props.as && props.as.fontWeight,
    lineHeight: props.lineHeight || props.as && props.as.lineHeight,
    textTransform: props.textTransform || props.as && props.as.textTransform
  }
}
/**
 * @param Props 
 * 
 * @returns A react-jss compatible object 
 */
export const getTypographySpacing = (props) => {
  if (props.paragraph) {
    return {
      marginBottom: `${props.theme.spacing(2)}px`
    }
  } else if (props.heading) {
    return {
      marginBottom: `${props.theme.spacing(4)}px`
    }
  }
}