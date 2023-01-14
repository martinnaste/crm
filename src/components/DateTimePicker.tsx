import * as React from 'react';
import { FC } from 'react';
import { Dayjs } from 'dayjs';
import 'dayjs/locale/en-au';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export const BasicDateTimePicker:FC<IBasicDateTimePicker> = (props) => {
  	return (
		<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"en-au"}>
			<DateTimePicker
				renderInput={(props) => <TextField {...props}/>}
				label="Date Time"
				value={props.state}
				onChange={(newValue: Dayjs | null) => {
					props.stateCallback(newValue);
				}}
				className="TextField"
			/>
		</LocalizationProvider>
	);
}

interface IBasicDateTimePicker {
	state: Dayjs | null;
	stateCallback: any;
}