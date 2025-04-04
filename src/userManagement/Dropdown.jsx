import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

import reactIcon from "../assets/reactjs.png"
import nodeJS from "../assets/nodejs.png"
import fullStack from "../assets/fullStack.png"
import smartphone from "../assets/smartphone.png"

function Dropdown({onDropdownChange}) {
  const [value, setValue] = useState(''); 

  const handleChange = (event) => {
    setValue(event.target.value);
    onDropdownChange(event.target.value); // Passing the selected value to the parent component
  };

  return (
    <FormControl className='w-full'>
      <InputLabel id="demo-simple-select-label">Select an Role</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Select an Role"
        onChange={handleChange}
      >
        <MenuItem value={10}>Frontend Developer
        <span className='ml-2'>
          <img id='1' className='inline-block' width={25} src={reactIcon} alt="" />
        </span>
        </MenuItem>
        <MenuItem value={20}>Backend Developer
        <span className='ml-2'>
          <img className='inline-block' width={25} src={nodeJS} alt="" />
        </span>
        </MenuItem>
        <MenuItem value={30}>FullStack Developer
        <span className='ml-2'>
          <img className='inline-block' width={25} src={fullStack} alt="" />
        </span>
        </MenuItem>
        <MenuItem value={40}>Mobile App Developer
        <span className='ml-2'>
          <img className='inline-block' width={25} src={smartphone} alt="" />
        </span>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default Dropdown;
