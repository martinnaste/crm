import * as React from 'react';
import { forwardRef }from 'react';
import { IMaskInput } from 'react-imask';

interface CustomProps {
	onChange: (event: { target: { name: string; value: string } }) => void;
	name: string;
}

export const MobileMask = forwardRef<HTMLElement, CustomProps>(
	function TextMaskCustom(props, ref: any) {
	  	const { onChange, ...other } = props;
		return (
			<IMaskInput
				{...other}
				mask="(+00) 000 000 000"
				// mask={props.phoneType === "mobile" ? "(+00) 000 000 000" : "(+00) 00 0000 0000"}
				definitions={{
					'#': /[1-9]/,
				}}
				onAccept={onChange && ((value: any) => onChange({ target: { name: props.name, value } }))}
				overwrite
				inputRef={ref}
			/>
		);
	},
);

export const LandLineMask = forwardRef<HTMLElement, CustomProps>(
	function TextMaskCustom(props, ref: any) {
	  	const { onChange, ...other } = props;
		return (
			<IMaskInput
				{...other}
				mask="(+00) 00 0000 0000"
				definitions={{
					'#': /[1-9]/,
				}}
				onAccept={onChange && ((value: any) => onChange({ target: { name: props.name, value } }))}
				overwrite
				inputRef={ref}
			/>
		);
	},
);