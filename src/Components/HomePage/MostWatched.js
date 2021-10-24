import React from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function ResponsiveFontSizes() {
  return (
    <Grid container spacing={12}>
      <div>
        <ThemeProvider theme={theme}>
          <Typography variant="h4">Most Watched Originals</Typography>
        </ThemeProvider>
      </div>
    </Grid>
  );
}