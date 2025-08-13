import { keyframes as keyFrames } from 'styled-components'

const toLeft = keyFrames`
    0% {
        transform: translate(0%, 0);
    }
    100% {
        transform: translate(-100%, 0);
    }
`

const appear = keyFrames`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const fadeOut = keyFrames`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`

const moveVerticallyFadeIn = (
  translateFrom: string,
  translateEnd: string,
) => keyFrames`
  0% {
    opacity: 0;
    transform: translate(${translateFrom});
  }
  100% {
    opacity: 1;
    transform: translate(${translateEnd});
  }
`

const circleImgSlider = keyFrames`
    0%,3%    {
        transform: rotate(0);
        -webkit-transform: rotate(0);
    }
    22%,27%  {
        transform: rotate(-90deg);
        -webkit-transform: rotate(-90deg);
    }
    47%,52%  {
        transform: rotate(-180deg);
        -webkit-transform: rotate(-180deg);
    }
    72%,77%  {
        transform: rotate(-270deg);
        -webkit-transform: rotate(-270deg);
    }
    98%,100% {
        transform: rotate(-360deg);
        -webkit-transform: rotate(-360deg);
    }
`

const rotate = keyFrames`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

const translate = (start: string, end: string) => keyFrames`
    0% {
      transform: translate(${start});
    }
    100% {
      transform: translate(${end});
    }
`
const translateY = (start: string, end: string) => keyFrames`
    0% {
      transform: translateY(${start});
    }
    100% {
      transform: translateY(${end});
    }
`

const pulse = keyFrames`
	0% {
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
	}

	70% {
		box-shadow: 0 0 0 30px rgba(0, 0, 0, 0);
	}

	100% {
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
`

export const keyframes = {
  toLeft,
  appear,
  moveVerticallyFadeIn,
  circleImgSlider,
  fadeOut,
  rotate,
  translate,
  pulse,
  translateY,
}

export type KeyFrames = typeof keyframes
