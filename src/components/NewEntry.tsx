import React, { useState } from 'react'
import './NewEntry.css'
import EntryBars from './EntryBars'
import Entries from './Entries'
import EntryModal from './EntryModal'
import SearchBar from './SearchBar'
import dayjs, { Dayjs } from 'dayjs'

const NewEntry = () => {
    const TEMPENTRIES: IEntry[] = [
        {Date: dayjs(), InOut: "Incoming", Name: "John", Company: "BHP", ECF: "Employee", Dob: dayjs(),Sd: "Site Department", PhoneNumber: "+61444123232", Email: "Email@mail.com", Timezone: "UTC +8", Address: "123 Road Street", Kin: "Paul", KinNumber: "123412", GpDoc: "Doctor name1", CompRef: "Company Referred 1", Urgency: "Very Urgent", Message: "Test Message"},
        {Date: dayjs(), InOut: "Outgoing", Name: "Sarah", Company: "Rio", ECF: "Employee", Dob: dayjs(),Sd: "Department", PhoneNumber: "+61445843232", Email: "Emai3l@mail.com", Timezone: "UTC +8", Address: "1234 Road Street", Kin: "Mohammed", KinNumber: "123412", GpDoc: "Doctor name4", CompRef: "Company Referred 6", Urgency: "Not Urgent", Message: "Test Message1"},
        {Date: dayjs(), InOut: "Incoming", Name: "Matthew", Company: "BHP", ECF: "Employee", Dob: dayjs(),Sd: "Site Department", PhoneNumber: "+61444883232", Email: "Email1@mail.com", Timezone: "UTC +8", Address: "1233 Road Street", Kin: "Kim", KinNumber: "123412", GpDoc: "Doctor name2", CompRef: "Company Referred 2", Urgency: "Urgent", Message: "Test Message2"},
    ]
    // const TEMPENTRIES: IEntry[] = [
    //     {Name: "John", Company: "BHP", Date: "27/9", Contact: "041234567", Info: "BHP Info"},
    //     {Name: "Barry", Company: "Rio Tinto", Date: "18/8", Contact: "041324576", Info: "Rio Info"},
    //     {Name: "Laura", Company: "Woodside", Date: "28/9", Contact: "Laura@woodside.com.au", Info: "Woodside Info"}
    // ]
    const [entries, setEntries] = useState<IEntry[]>(TEMPENTRIES)
    // const [entries, setEntries] = useState<IEntry[]>([])
    const [searchedEntries, setSearchedEntries] = useState<IEntry[]>([])
    const [showModal, setShowModal] = useState(false)
    const [entryModal, setEntryModal] = useState<IEntry>()

    function submitEntry(entry: IEntry) {
        setEntries([...entries, entry])
    }

    function deleteEntry(entry: IEntry) {
        setEntries(prev => prev.filter(entries => entries !== entry ))
    }

    function showModalHandler(entry: IEntry) {
        setShowModal(!showModal)
        if(entry){
            setEntryModal(entry)
        } else {
            setEntryModal(undefined)
        }
    }

    function onSubmit(query: string) {
        var tempSearchArr = entries.filter((entry) => {
            var objectString = Object.values(entry).join('')
            if(query === ''){
                return ''
            } else if(objectString.toLowerCase().includes(query.toLowerCase())){
                return entry
            } else {
                return ''
            }
        })
        if(tempSearchArr) {
            setSearchedEntries(tempSearchArr)
        } else {
            setSearchedEntries([])
        }
    }

    return (
        <div className='NewEntry'>
            <h2>New Entries Here</h2>
            <EntryBars submitEntry={submitEntry}/>
            <SearchBar onSubmit={onSubmit}/>
            <Entries entries={searchedEntries.length > 0 ? searchedEntries : entries} deleteEntry={deleteEntry} showModal={showModalHandler}/>
            {(showModal && entryModal) && <EntryModal entry={entryModal} showModalHandler={showModalHandler}/>}
        </div>
    )
}

export interface IEntry {
    // Name: string;
    // Date: string;
    // Company: string;
    // Contact: string;
    // Info: string;
    Date: Dayjs | null;
    InOut: string | null | undefined;
    Name: string | null | undefined;
    Company: string | null | undefined;
    ECF: string | null | undefined;
    Dob: Dayjs | null;
    Sd: string | null | undefined;
    PhoneNumber: string | null | undefined;
    Email: string | null | undefined;
    Timezone: string | null | undefined;
    Address: string | null | undefined;
    Kin: string | null | undefined;
    KinNumber: string | null | undefined;
    GpDoc: string | null | undefined;
    CompRef: string | null | undefined;
    Urgency: string | null | undefined;
    Message: string | null | undefined;
}

export default NewEntry