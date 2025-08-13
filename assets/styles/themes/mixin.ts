export const AvertaPE = `font-family: 'Averta PE'`

export enum MixinName {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H6 = 'H6',
  textButton = 'textButton',
  textButton2 = 'textButton2',
  textNormal = 'textNormal',
  textNormal2 = 'textNormal2',
  textLink = 'textLink',
  textSmall = 'textSmall',
  textSmall2 = 'textSmall2',
  textSmall3 = 'textSmall3',
  textSmall4 = 'textSmall4',
  textHighlighted = 'textHighlighted',
}

export const mixins = {
  H1: `
    font-size: 3.125rem;
    font-weight: 600;
    line-height: 62px;
    letter-spacing: 0px;
    ${AvertaPE};
  `, // 50px
  H2: `
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 49px;
    letter-spacing: 0px;
    ${AvertaPE};
  `, // 40px
  H3: `
    font-size: 1.875rem;
    font-weight: 600;
    line-height: 37px;
    letter-spacing: 0px;
    ${AvertaPE};
  `, // 30px
  H4: `
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: 0px;
    ${AvertaPE};
  `, // 20px
  H5: `
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0px;
    ${AvertaPE};
  `, // 18px
  H6: `
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 22.05px;
    ${AvertaPE};
  `, // 18px
  textButton: `
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 17px;
    ${AvertaPE};
  `, // 14px
  textButton2: `
    font-size: 1rem;
    font-weight: 600;
    line-height: 25px;
    ${AvertaPE};
  `, // 16px
  textNormal: `
    font-size: 1rem;
    font-weight: 400;
    line-height: 20px;
    ${AvertaPE};
  `, // 16px
  textNormal2: `
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 25px;
    ${AvertaPE};
  `, // 18px
  textLink: `
    font-size: 1rem;
    font-weight: 600;
    line-height: 20px;
    ${AvertaPE};
  `, // 16p
  textSmall: `
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 17px;
    ${AvertaPE};
  `, // 14px
  textSmall2: `
    font-size: 0.688rem;
    font-weight: 400;
    line-height: 13px;
    ${AvertaPE};
  `, // 11px
  textSmall3: `
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 15px;
    ${AvertaPE};
  `, // 12px
  textSmall4: `
    font-size: 0.5rem;
    font-weight: 600;
    line-height: 10px;
    ${AvertaPE};
  `, // 8px
  textHighlighted: `
    font-size: 1.563rem;
    font-weight: 600;
    line-height: 30px;
    ${AvertaPE};
  `, // 25px
  textXSmall: `
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 15px;
    ${AvertaPE};
  `, // 12px
  textXXSmall: `
    font-size: 0.625rem;
    font-weight: 400;
    line-height: 13px;
    ${AvertaPE};
  `, // 10px
  textCaption: `
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 25px;
    ${AvertaPE};
  `, // 20px
  //Flexbox containers
  flexbox: () => `
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
`,

  inlineFlex: () => `
  display: -webkit-inline-box;
  display: -moz-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
`,

  // Flexbox direction
  flexDirection: (row: string) => {
    if (row === 'row-reverse') {
      return `
        -webkit-box-direction: reverse;
        -webkit-box-orient: horizontal;
        -moz-box-direction: reverse;
        -moz-box-orient: horizontal;
        -webkit-flex-direction: ${row};
        -ms-flex-direction: ${row};
        flex-direction: ${row};
    `
    } else if (row === 'column') {
      return `
        -webkit-box-direction: normal;
        -webkit-box-orient: vertical;
        -moz-box-direction: normal;
        -moz-box-orient: vertical;
        -webkit-flex-direction: ${row};
        -ms-flex-direction: ${row};
        flex-direction: ${row};
    `
    } else if (row === 'column-reverse') {
      return `
        -webkit-box-direction: reverse;
        -webkit-box-orient: vertical;
        -moz-box-direction: reverse;
        -moz-box-orient: vertical;
        -webkit-flex-direction: ${row};
        -ms-flex-direction: ${row};
        flex-direction: ${row};
    `
    } else {
      return `
        -webkit-box-direction: normal;
        -webkit-box-orient: horizontal;
        -moz-box-direction: normal;
        -moz-box-orient: horizontal;
        -webkit-flex-direction: ${row};
        -ms-flex-direction: ${row};
        flex-direction: ${row};
    `
    }
  },

  // Flexbox wrap
  flexWrap: (wrap: string) => {
    if (wrap === 'nowrap') {
      return `
      -webkit-flex-wrap: ${wrap};
      -ms-flex-wrap: none;
      flex-wrap: ${wrap};
    `
    } else {
      return `
      -webkit-flex-wrap: ${wrap};
      -ms-flex-wrap: ${wrap};
      flex-wrap: ${wrap};
    `
    }
  },

  // Flexbox flow
  flexFlow: (values: string = 'row nowrap') => `
    -webkit-flex-flow: ${values};
    -ms-flex-flow: ${values};
    flex-flow: ${values};
  `,

  // Flexbox order
  flexOrder: (int: number = 0) => `
    -webkit-box-ordinal-group: ${int} + 1;
    -moz-box-ordinal-group: ${int} + 1;
    -webkit-order: ${int};
    -ms-flex-order: ${int};
    order: ${int};
  `,

  // Flexbox grow
  flexGrow: (int: number = 1) => `
    -webkit-box-flex: ${int};
    -moz-box-flex: ${int};
    -webkit-flex-grow: ${int};
    -ms-flex: ${int};
    flex-grow: ${int};
  `,

  // Flexbox shrink
  flexShrink: (int: number = 0) => `
    -webkit-flex-shrink: ${int};
    -moz-flex-shrink: ${int};
    -ms-flex: ${int};
    flex-shrink: ${int};
  `,

  // Flexbox basis
  flexBasis: (value: string = 'auto') => `
    -webkit-flex-basis: ${value};
    flex-basis: ${value};
  `,
  // flex
  // fg string = '1 0 1' передает '1 1 1' либо '1'
  flex: (fg: string = '1', fs: string = '0', fb: string = 'auto') => {
    // Set a variable to be used by box-flex properties
    let fgBoxflex = fg

    // Box-Flex only supports a flex-grow value so lets grab the
    // first item in the list and just return that.
    if (fg.split(' ').length > 1) {
      fgBoxflex = fg.split(' ')[0]
    }

    return `
      -webkit-box: ${fgBoxflex};
      -moz-box: ${fgBoxflex};
      -webkit-flex: ${fg} ${fs} ${fb};
      -ms-flex: ${fg} ${fs} ${fb};
      flex: ${fg} ${fs} ${fb};
    `
  },
  // Flexbox justify content
  justifyContent: (value: string = 'flex-start') => {
    if (value === 'flex-start') {
      return `
        -webkit-box-pack: start;
        -moz-box-pack: start;
        -ms-flex-pack: start;
        -webkit-justify-content: ${value};
        justify-content: ${value};
      `
    } else if (value === 'flex-end') {
      return `
      -webkit-box-pack: end;
      -moz-box-pack: end;
      -ms-flex-pack: end;
      -webkit-justify-content: ${value};
      justify-content: ${value};
     `
    } else if (value === 'space-between') {
      return `
        -webkit-box-pack: justify;
        -moz-box-pack: justify;
        -ms-flex-pack: justify;
        -webkit-justify-content: ${value};
        justify-content: ${value};
      `
    } else if (value === 'space-around') {
      return `
      -ms-flex-pack: distribute;
      -webkit-justify-content: ${value};
      justify-content: ${value};
    `
    } else {
      return `
        -webkit-box-pack: $value;
        -moz-box-pack: $value;
        -ms-flex-pack: $value;
        -webkit-justify-content: ${value};
        justify-content: ${value};
      `
    }
  },
  //Flexbox align items
  alignItems: (value: string = 'stretch') => {
    if (value === 'flex-start') {
      return `
      -webkit-box-align: start;
      -moz-box-align: start;
      -ms-flex-align: start;

    `
    } else if (value === 'flex-end') {
      return `
      -webkit-box-align: end;
      -moz-box-align: end;
      -ms-flex-align: end;
      -webkit-align-items: ${value};
      align-items: ${value};
    `
    } else {
      return `
        -webkit-box-align: ${value};
        -moz-box-align: ${value};
        -ms-flex-align: ${value};
        -webkit-align-items: ${value};
        align-items: ${value};
    `
    }
  },
  // Flexbox align self
  alignSelf: (value: string = 'auto') => {
    if (value === 'flex-start') {
      return `
        -ms-flex-item-align: start;
        -webkit-align-self: ${value};
        align-self: ${value};
    `
    } else if (value === 'flex-end') {
      return `
        -ms-flex-item-align: end;
        -webkit-align-self: ${value};
        align-self: ${value};
    `
    } else {
      return `
        -ms-flex-item-align: ${value};
        -webkit-align-self: ${value};
        align-self: ${value};
    `
    }
  },
  // Flexbox align content
  alignContent: (value: string = 'stretch') => {
    if (value === 'flex-start') {
      return `
      -ms-flex-line-pack: start;
      -webkit-align-content: ${value};
      align-content: ${value};
    `
    } else if (value === 'flex-end') {
      return `
      -ms-flex-line-pack: end;
      -webkit-align-content: ${value};
      align-content: ${value};
    `
    } else {
      return `
        -ms-flex-line-pack: ${value};
        -webkit-align-content: ${value};
        align-content: ${value};
      `
    }
  },
  translate: (x: string, y: string) => {
    return `
      -webkit-transform: translate(${x},${y});
      -moz-transform: translate(${x},${y});
      -ms-transform: translate(${x},${y});
      -o-transform: translate(${x},${y});
      transform: translate(${x},${y});
    `
  },
  rotate: (degrees: string) => {
    return `
      -moz-transform: rotate(${degrees});  
      -o-transform: rotate(${degrees});  
      -webkit-transform: rotate(${degrees});
      filter:  progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=#{cos(${degrees})}, M12=-#{sin(${degrees})}, M21=#{sin(${degrees})}, M22=#{cos(${degrees})});
      -ms-filter: "progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=#{cos(${degrees})}, M12=-#{sin(${degrees})}, M21=#{sin(${degrees})}, M22=#{cos(${degrees})})";
      zoom: 1;
    `
  },
  transition: (transition: string) => {
    return `
      -webkit-transition: ${transition};
      -moz-transition:    ${transition};
      -o-transition:      ${transition};
      -ms-transition:     ${transition};
      transition:         ${transition};
    `
  },
  transitionDelay: (delay: string) => {
    return `
      -webkit-transition-delay: ${delay};
      -moz-transition-delay: ${delay};
      -o-transition-delay: ${delay};
      transition-delay: ${delay};
    `
  },
  translateY: (degrees: string) => {
    return `
      -webkit-transform: translateY(${degrees});
      -moz-transform: translateY(${degrees});
      -ms-transform: translateY(${degrees});
      -o-transform: translateY(${degrees});
      transform: translateY(${degrees});
    `
  },
  translateX: (degrees: string) => {
    return `
      -webkit-transform: translateX(${degrees});
      -moz-transform: translateX(${degrees});
      -ms-transform: translateX(${degrees});
      -o-transform: translateX(${degrees});
      transform: translateX(${degrees});
    `
  },
  boxShadow: (value: string) => {
    return `
      -webkit-box-shadow:${value};
      -moz-box-shadow:${value};
      box-shadow:${value};
    `
  },
  boxSizing: () => {
    return `
      -webkit-box-sizing: border-box;
      -moz-box-sizing:    border-box;
      -o-box-sizing:      border-box;
      box-sizing:         border-box;
    `
  },
}

export type Mixins = typeof mixins
