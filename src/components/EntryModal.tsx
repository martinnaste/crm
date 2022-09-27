import React,{ FC } from 'react'
import { IEntry } from './NewEntry'
import './EntryModal.css'

const EntryModal:FC<IEntryModalProps> = (props) => {
    return (
        <div className='modal' onClick={props.showModalHandler}>
            <div className='EntryModal-content' onClick={e => e.stopPropagation()}>
                <div className='EntryModal-content-container'>
                    <div className='EntryModal-scroll'>
                        <h3>Name</h3>
                        <p>{props.entry.Name}</p>
                        <h3>Company</h3>
                        <p>{props.entry.Company}</p>
                        <h3>Date</h3>
                        <p>{props.entry.Date}</p>
                        <h3>Contact</h3>
                        <p>{props.entry.Contact}</p>
                        <h3>Info</h3>
                        <p>{props.entry.Info}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export interface IEntryModalProps {
    entry: IEntry;
    showModalHandler: any;
}

export default EntryModal