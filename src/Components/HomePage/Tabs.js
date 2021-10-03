import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
 
function TabPanel(props) {
  const { children, value, index, ...other } = props;
 
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
 
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
 
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    
  },
}));
 
export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <Grid container spacing={3}>
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">

          <Grid item xs={3}>
          <Tab label="Originals" {...a11yProps(0)} />
          {/* </Grid> */}

          {/* <Grid item xs={3}> */}
          <Tab label="Tv Shows" {...a11yProps(1)} />
          {/* </Grid>

          <Grid item xs={3}> */}
          <Tab label="Movies" {...a11yProps(2)} />
          {/* </Grid>

          <Grid item xs={3}> */}
          <Tab label="Sports" {...a11yProps(2)} />
          {/* </Grid>

          <Grid item xs={3}> */}
          <Tab label="Games" {...a11yProps(2)} />
          </Grid>

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Originals
      </TabPanel>
      <TabPanel value={value} index={1}>
        Tv Shows
      </TabPanel>
      <TabPanel value={value} index={2}>
        Movies
      </TabPanel>
      <TabPanel value={value} index={3}>
        Sports
      </TabPanel>
      <TabPanel value={value} index={4}>
        Games
      </TabPanel>
    </div>
    </Grid>
  );
}
