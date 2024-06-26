import { Theme } from "@emotion/react";

const breakpoints: [string, string, string] = ['320px', '768px', '1280px'];

export const theme: Theme = Object.freeze({
  color: {
    textPrimaryLight: 'rgba(255, 255, 255, 1)',
    textPrimaryDark: 'rgba(33, 34, 39, 1)',
    textSecondary: 'rgba(168, 203, 255, 1)',    
    bgDark: 'rgba(33, 34, 39, 0.5)',
    bgLight: 'rgba(255, 255, 255, 0.5)',   
    bgDropdownOptions: 'rgba(33, 34, 39, 0.8)',
    bgBtnSearch: 'rgba(220, 20, 60, 1)',
    bgBtnClose: 'rgba(33, 34, 39, 1)',
    bgInputSearch: 'rgba(220, 20, 60, 1)',    
    error: 'rgba(220, 20, 60, 1)',   
  },
  ff: {
    inconsolata: "'Inconsolata', monospace",
  },
  fw: {
    regular: 400,
    semiBold: 500,
    bold: 700,
  },
  fs: {
    s: '12px',
    m: '18px',
    l: '24px',
    xl: '30px',
    xxl: '36px',
  },
  mq: {
    mobile: `min-width: ${breakpoints[0]}`,
    tablet: `min-width: ${breakpoints[1]}`,
    desktop: `min-width: ${breakpoints[2]}`,
  },
});
