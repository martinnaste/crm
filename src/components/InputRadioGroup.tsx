import * as React from 'react';
import { FC } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

// export default function RowRadioButtonsGroup()
export const InputRadioGroup:FC<IInputRadioGroup> = (props) => {
    function renderFormLabels() {
        return props.labels.map((label, index) => {
            return (
                <FormControlLabel 
                    key={index}
                    control={<Radio />}
                    label={label}  
                    value={label} 
                    checked={props.checkSelected(label, props.checkedState)}
                    onChange={(e) => {props.handleRadioClick(e, props.checkedStateCallback)}}                
                />
            )
        })
    }

    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">{props.title}</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                {renderFormLabels()}
            </RadioGroup>
        </FormControl>
    );
}

interface IInputRadioGroup {
    title: string;
    labels: string[];
    checkSelected: any;
    checkedState: string;
    handleRadioClick: any;
    checkedStateCallback: any;
}