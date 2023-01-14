import React from 'react';
import { FC } from 'react';
// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const TimezonePicker:FC<ITimePickerProps> = (props) => {
    const TimezoneData = [
        {DisplayName: "UTC -12:00", ID: "International Date Line West"},
        {DisplayName: "UTC -11:00", ID: "Coordinated Universal Time-11"},
        {DisplayName: "UTC -10:00", ID: "Pacific/Hoinolulu"},
        {DisplayName: "UTC -09:00", ID: "America/Alaska"},
        {DisplayName: "UTC -08:00", ID: "America/Los Angeles"},
        {DisplayName: "UTC -07:00", ID: "Mountain Time (US and Canada)"},
        {DisplayName: "UTC -06:00", ID: "Central Time (US and Canada)"},
        {DisplayName: "UTC -05:00", ID: "Eastern Time (US and Canada)"},
        {DisplayName: "UTC -04:30", ID: "America/Caracas"},
        {DisplayName: "UTC -04:00", ID: "Atlantic Time (Canada)"},
        {DisplayName: "UTC -03:30", ID: "America/Newfoundland"},
        {DisplayName: "UTC -03:00", ID: "America/Sao Paulo"},
        {DisplayName: "UTC -02:00", ID: "Coordinated Universal Time-2"},
        {DisplayName: "UTC -01:00", ID: "America/Cape Verde"},
        {DisplayName: "UTC +00:00", ID: "GMT/Coordinated Universal Time"},
        {DisplayName: "UTC +01:00", ID: "Europe/Berlin"},
        {DisplayName: "UTC +02:00", ID: "Europe/Istanbul"},
        {DisplayName: "UTC +03:00", ID: "Europe/Minsk"},
        {DisplayName: "UTC +03:30", ID: "Asia/Tehran"},
        {DisplayName: "UTC +04:00", ID: "Asia/Dubai"},
        {DisplayName: "UTC +04:30", ID: "Asia/Kabul"},
        {DisplayName: "UTC +05:00", ID: "Asia/Karachi"},
        {DisplayName: "UTC +05:30", ID: "Asia/Kolkata"},
        {DisplayName: "UTC +05:45", ID: "Asia/Kathmandu"},
        {DisplayName: "UTC +06:00", ID: "Asia/Dhaka"},
        {DisplayName: "UTC +06:30", ID: "Asia/Yangon"},
        {DisplayName: "UTC +07:00", ID: "Asia/Bangkok"},
        {DisplayName: "UTC +08:00", ID: "Australia/Perth"},
        {DisplayName: "UTC +09:00", ID: "Asia/Tokyo"},
        {DisplayName: "UTC +09:30", ID: "Australia/Darwin"},
        {DisplayName: "UTC +10:00", ID: "Australia/Sydney"},
        {DisplayName: "UTC +11:00", ID: "Pacific/Guadalcanal"},
        {DisplayName: "UTC +12:00", ID: "Pacific/Auckland"},
        {DisplayName: "UTC +13:00", ID: "Pacific/Samoa"},

    ];

    // const [timezoneSelected, setTimezoneSelected] = useState<string>('');

    const handleChange = (event: SelectChangeEvent) => {
        // setTimezoneSelected(event.target.value as string);
        props.stateSelectedCallback(event.target.value as string)
    };

    function renderTimezoneOptions() {
        return TimezoneData.map((timezone, index) => {
            return (
                <MenuItem value={timezone.DisplayName} key={index}>{timezone.DisplayName.concat(" ", timezone.ID)}</MenuItem>
            )
        })
    }

    return (
        // <Box sx={{ minWidth: 120 }}>
        <div>
            <FormControl fullWidth style={{width: "280px"}}>
                <InputLabel id="demo-simple-select-label">Timezone</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.state}
                    label="timezone"
                    onChange={handleChange}
                >
                    {renderTimezoneOptions()}
                </Select>
            </FormControl>
        </div>
        // </Box>
    );
}

interface ITimePickerProps {
    state: string;
    stateSelectedCallback: any;
}

