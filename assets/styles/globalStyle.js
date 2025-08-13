import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    height: 100%;
  }
  html,
  body {
    font-family: 'Averta PE', sans-serif;
  }
  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }

  /* 
    div,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a,
    li,
    ul,
    svg,
    img,
    section,
    video,
    main,
    span,
    header,
    button {
      outline-width: 1px;
      outline-style: solid;
      outline-color: rgb(74, 195, 74);
   } 
   */

  table td {
    padding: 12px;

  }
  @media screen and (max-width: 767.98px) {
    table thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    table tr {
      display: block;
    }

    table td {
      display: block;
    }

    table td::before {
      content: attr(data-label);
      display: block;
    }
  }
  .Toastify__toast {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 17px;
    box-shadow: 0 4px 54px rgba(0, 0, 0, 0.05);
    font-family: 'Averta PE', sans-serif;
    padding: 18px 21px;
    border-radius:5px;
    color: #191919;
    .Toastify__toast-body {
      padding-right: 39px;
    }
  }
  .Toastify__toast-icon {
    margin-right: 30px;
  }
  .grecaptcha-badge { visibility: hidden; }
  
  .blur {
    filter: blur(4px);
  }
  /* react-intl-tel-input styles */ 
   .react-tel-input {
    width: 100% !important;
    position: relative;
  }

  .form-control {
    width: 100% !important;
    height: 45px !important;
    border-radius: 10px !important;
    @media screen and (-webkit-min-device-pixel-ratio: 0) {
      font-size: 1rem !important;
    }

    &:focus,
    &:active {
      border: 1px solid purple;
    }
    &:disabled {
      background-color: gray;
    }
  }
  .flag-dropdown {
    border: 1px solid gray !important;
  }
  /* for background image*/
  .bgImage {
    z-index: 0;
  }
  :root {
    --toastify-z-index: 9991;
  }
`
