import React, { FC, useState } from 'react'
import { IEntry } from './NewEntry'
import './Entry.css'

const Entry:FC<IEntryProps> = (props) => {
    const [checked, setChecked] = useState(false)

    function onClickDelete() {
        props.deleteEntry(props.entry)
    }

    function onClickRow() {
        props.showModal(props.entry)
    }

    return (
        <>
            <tr key={props.index} className={checked ? 'CheckedRow' : ''} onClick={() => {onClickRow()}}>
                <td className='CheckCircleR' onClick={(e) => {setChecked(!checked); e.stopPropagation()}}/>
                <td>
                    {props.entry.Name}
                </td>
                <td>
                    {props.entry.Company}
                </td>
                <td>
                    {props.entry.Date}
                </td>
                <td>
                    {props.entry.Contact}
                </td>
                <td>
                    {props.entry.Info}
                </td>
                <td className='DeleteCircleR' onClick={(e) => {onClickDelete(); e.stopPropagation()}}/>
            </tr>
        </>
    )
}

export interface IEntryProps {
    entry: IEntry;
    index: number;
    deleteEntry: any;
    showModal: any;
}

export default Entry