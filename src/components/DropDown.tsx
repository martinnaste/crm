import React from 'react'
import { FC } from 'react';
// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const DropDown:FC<IDropDownProps> = (props) => {
    const handleChange = (event: SelectChangeEvent) => {
        // setTimezoneSelected(event.target.value as string);
        props.stateSelectedCallback(event.target.value as string)
    };

    function renderDropDownOptions() {
        return props.dropDownList.map((item, index) => {
            return (
                <MenuItem value={item} key={index}>{item}</MenuItem>
            )
        })
    }

    return (
        <div>
            <FormControl fullWidth style={{width: "280px"}}>
                <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.state}
                    label={props.label}
                    onChange={handleChange}
                >
                    {renderDropDownOptions()}
                </Select>
            </FormControl>
        </div>
    )
}

interface IDropDownProps {
    label: string;
    dropDownList: string[];
    state: string;
    stateSelectedCallback: any;
}

export default DropDown