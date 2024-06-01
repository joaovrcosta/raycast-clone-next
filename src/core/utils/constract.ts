function parseRGB(rgbString: string) {
  const regex = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(\.\d+)?))?\)$/i
  const match = rgbString.match(regex)

  if (match) {
    const red = parseInt(match[1], 10)
    const green = parseInt(match[2], 10)
    const blue = parseInt(match[3], 10)
    const alpha = match[4] ? parseFloat(match[4]) : undefined

    return [red, green, blue].filter((value) => value !== undefined)
  } else {
    throw new Error('Invalid RGB string format')
  }
}

export function luma(color: any) {
  const rgb = parseRGB(color)
  // color can be a hx string or an array of RGB values 0-255
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2] // SMPTE C, Rec. 709 weightings
}

/**
 * contrastingColor - A function to check if a color will be contrasted or not
 *
 * @param color string - The color in RGB format
 * @returns boolean
 *
 */
export function contrastingColor(color: string) {
  return luma(color) >= 165 ? true : false
}
