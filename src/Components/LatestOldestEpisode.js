import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {

    height: 240,
    position: 'absolute',
    right: '2%',
    // pointerEvents: 'none',
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    maxWidth: 400,
    color: 'black'
  },
});

export default function FileSystemNavigator() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem nodeId="1" label="Latest Episode">

        <TreeItem nodeId="2" label="Latest Episode" />
        <TreeItem nodeId="3" label="Oldest Episode" />
      
      </TreeItem>
   </TreeView>
   </Grid>
  );
}
