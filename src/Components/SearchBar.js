/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const filter = createFilterOptions();

export default function FreeSoloCreateOption() {
  const [value, setValue] = React.useState(null);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            title: `Add "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={top100Films}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      renderOption={(option) => option.title}
      style={{ width: 330 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Search Keywords or Episode Number" variant="outlined" />
      )}
    />
  );
}

// Episode names
const top100Films = [
  { title: 'Episode 01', year: 2016 },
  { title: 'Episode 02', year: 2016 },
  { title: 'Episode 03', year: 2016 },
  { title: 'Episode 04', year: 2016 },
  { title: 'Episode 05', year: 2016 },
  { title: 'Episode 06', year: 2016 },
  { title: 'Episode 07', year: 2016 },
  { title: 'Episode 08', year: 2016 },
  { title: 'Episode 09', year: 2016 },
  { title: 'Episode 10', year: 2016 },
  { title: 'Episode 11', year: 2016 },
  { title: 'Episode 12', year: 2016 },
  { title: 'Episode 13', year: 2016 },
  { title: 'Episode 14', year:2016 },
  { title: 'Episode 15', year: 2016 },
  { title: 'Episode 16', year: 2016 },
  { title: 'Episode 17', year: 2016 },
  { title: 'Episode 18', year: 2016 },
  { title: 'Episode 19', year: 2016 },
  { title: 'Episode 20', year: 2016 },
  { title: 'Episode 21', year: 2016 },
  { title: 'Episode 22', year: 2016 },
  { title: 'Episode 23', year: 2016 },

];
