export type FormValues = {
  errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H';
  width: number;
  margin: number;
  color: {
    light: string; // backgroundColor
    dark: string; // foregroundColor
  };
};
