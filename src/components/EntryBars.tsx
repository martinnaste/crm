import React, { FC, useState } from 'react'
import './EntryBars.css'
import { IEntry } from './NewEntry'

const EntryBars:FC<IEntryBarsProps> = (props) => {
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [date, setDate] = useState('')
    const [contact, setContact] = useState('')
    const [info, setInfo] = useState('')

    function SubmitResult() {
        var entry: IEntry = {
            Name: name,
            Company: company,
            Date: date,
            Contact: contact,
            Info: info
        }
        props.submitEntry(entry)
        setName('')
        setCompany('')
        setDate('')
        setContact('')
        setInfo('')
    }
     
    return (
        <div>
            <div>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(event) => {setName(event.target.value)}}
                    placeholder='Please Enter a name here'
                    className='Entrybar'
                />
                <input 
                    type="text" 
                    value={company} 
                    onChange={(event) => {setCompany(event.target.value)}}
                    placeholder='Please Enter a company here'
                    className='Entrybar'
                />
                <input 
                    type="text" 
                    value={date} 
                    onChange={(event) => {setDate(event.target.value)}}
                    placeholder='Please Enter a date here'
                    className='Entrybar'
                />
                <input 
                    type="text" 
                    value={contact} 
                    onChange={(event) => {setContact(event.target.value)}}
                    placeholder='Please Enter a contact here'
                    className='Entrybar'
                />
                <input 
                    type="text" 
                    value={info} 
                    onChange={(event) => {setInfo(event.target.value)}}
                    placeholder='Please Enter a info here'
                    className='Entrybar'
                />
            </div>
            <div className='SubmitEntries-container'>
                <h2 className='SubmitEntries' onClick={() => {SubmitResult()}}>Submit</h2>
            </div>
        </div>
    )
}

export interface IEntryBarsProps {
    submitEntry : any;
}

export default EntryBars