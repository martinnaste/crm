import React from 'react'
import { useState, FC } from 'react';
import Input from '@mui/joy/Input';
import { FormLabel } from '@mui/joy';
import { FormControl } from '@mui/material';

export const TextInput:FC<ITextInputProps> = (props) => {
    return (
        <div>
            <FormControl>
                <FormLabel>{props.label}</FormLabel>
                <Input placeholder={props.placeholder}/>
            </FormControl>
        </div>
    )
}

interface ITextInputProps {
    label: string;
    placeholder: string;
}
