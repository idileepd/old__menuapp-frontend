import { Theme } from '@/types/Theme';

export const theme: Theme = {
  colors: {
    primary: {
      main: '#EF4F5F',
      dark: '#EB447C',
      light: '#fff6f7',
      mainTitle: '#212736',
    },
    secondary: { main: '#343a40', light: '#ced4da', dark: '#212529' },
    other: { main: '#DC9D09', dark: '#A65B43' },
    background: { default: '#f4f6fb', white: '#fff', paper: '#F8F9FC' },
    foodAttributes: {
      default: '#DC9D09',
      bestSeller: '#DC9D09',
      mustTry: '#EB447C',
      guitenFree: '#DC9D09',
    },
  },
  spacings: {
    margin: {
      left: '16px',
    },
  },
};

// import { createTheme } from '@mui/material';

// export const theme = createTheme({
//   typography: {
//     fontFamily: 'Rubik',
//   },
//   palette: {
//     primary: {
//       main: '#F03E3E',
//       light: '#ff8787',
//       dark: '#e03131',
//     },
//     secondary: { main: '#343a40', light: '#ced4da', dark: '#212529' },
//     background: { default: '#fff', paper: '#fff' },
//   },
// });

// /*

// --- 01 TYPOGRAPHY SYSTEM

// - Font sizes (px)
// 10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

// - Font weights
// Default: 400
// Medium: 500
// Semi-bold: 600
// Bold: 700

// - Line heights
// Default: 1
// Small: 1.05
// Medium: 1.2
// Paragraph default: 1.6
// Large: 1.8

// - Letter spacing
// -0.5px
// 0.75px

// --- 02 COLORS

// - Primary: #e67e22
// - Tints:
// #fdf2e9
// #fae5d3
// #eb984e

// - Shades:
// #cf711f
// #45260a

// - Accents:
// - Greys

// #888
// #767676 (lightest grey allowed on #fff)
// #6f6f6f (lightest grey allowed on #fdf2e9)
// #555
// #333

// --- 05 SHADOWS

// 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);

// --- 06 BORDER-RADIUS

// Default: 9px
// Medium: 11px

// --- 07 WHITESPACE

// - Spacing system (px)
// 2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
// */
