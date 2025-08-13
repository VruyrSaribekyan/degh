export const baseColors = {
  primary: '#18A866',
  primaryLight: '#E8F6F0',
  primaryDark: '#128952',
  grey: '#A2A3AD',
  greySecondary: '#ECECEC',
  grey200: '#E5E7EB',
  grey100: '#F3F4F6',
  grey50: '#F9FAFB',
  lightGrey: '#ECECEC',
  green10: '#E8F6F0',
  error: '#FB432E',
  errorSecondary: '#FF9C54',
  black: '#191919',
  black3: '#474747',
  black6: '#8C8C8C',
  blue: '#306AFF',
  warning: '#FF9C54',
  orange5: '#FFC398',
}

export type BaseColors = typeof baseColors
export type BaseColorType = keyof BaseColors

export const colors = {
  ...baseColors,
}

export type Colors = typeof colors
export type ColorType = keyof Colors
