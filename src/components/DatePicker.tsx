import * as React from 'react';
import { FC } from 'react';
import { Dayjs } from 'dayjs';
import 'dayjs/locale/en-au';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const BasicDatePicker:FC<IBasicDatePicker> = (props) => {

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"en-au"}>
			<DatePicker
				className='DatePicker'
				label="Date of Birth"
				value={props.state}
				onChange={(newValue) => {
				props.stateCallback(newValue);
				}}
				renderInput={(params) => <TextField {...params} />}
			/>
		</LocalizationProvider>
	);
}

interface IBasicDatePicker {
    state: Dayjs | null;
    stateCallback: any;
}