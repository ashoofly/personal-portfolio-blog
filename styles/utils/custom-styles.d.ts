import { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    h2_serif: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h2_serif?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h2_serif: true;
  }
}