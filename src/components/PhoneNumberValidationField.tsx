import * as React from 'react';
import { FC, useState }from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import FaxIcon from '@mui/icons-material/Fax';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import TextField from '@mui/material/TextField';
import { LandLineMask, MobileMask } from './PhoneNumberMasks';

interface State {
	textmask: string;
	numberformat: string;
}

const PhoneNumberValidationField:FC<IPhoneNumberValidationFieldProps> = (props) => {
    const [phoneType, setPhoneType] = useState<string | null>("mobile")
    const [values, setValues] = useState<State>({
		textmask: '(+61)',
		numberformat: '(+61)',
	});

    const handlePhoneTypeClicked = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
        // setPhoneType(newValue)
        setPhoneType((prevValue) => {
			if(newValue && prevValue !== newValue){
				return newValue
			} else {
				return prevValue
			}
		})
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
		props.onChangeCallback(event.target.value)
	};

    return (
        <div style={{display: 'flex', justifyContent: 'center', height: '56px'}}>
			<ToggleButtonGroup
				value={phoneType}
				exclusive
				onChange={handlePhoneTypeClicked}
			>
				<ToggleButton value="mobile" title="Mobile Number : (+ Area Code) 9 remaining digits">
					<PhoneIphoneIcon />
				</ToggleButton>
				<ToggleButton value="landline" title="Land Line Number : (+ Area Code) (Land Line code e.g. '08') 8 digit Land Line number">
					<FaxIcon />
				</ToggleButton>
			</ToggleButtonGroup>
            {phoneType === "mobile" &&
				<TextField
					label={props.label}
					value={values.numberformat}
					onChange={handleChange}
					name="numberformat"
					InputProps={{
						inputComponent: MobileMask as any
					}}
					className={props.className}
				/>
			}
			{phoneType === "landline" &&
				<TextField
					label={props.label}
					value={values.numberformat}
					onChange={handleChange}
					name="numberformat"
					InputProps={{
						inputComponent: LandLineMask as any
					}}
					className={props.className}
				/>
			}
		</div>
    )
}

interface IPhoneNumberValidationFieldProps {
    label: string;
	onChangeCallback: any;
	className: string;
}

export default PhoneNumberValidationField