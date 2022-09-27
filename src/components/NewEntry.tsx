import React, { useState } from 'react'
import './NewEntry.css'
import EntryBars from './EntryBars'
import Entries from './Entries'
import EntryModal from './EntryModal'
import SearchBar from './SearchBar'

const NewEntry = () => {
    const TEMPENTRIES: IEntry[] = [
        {Name: "John", Company: "BHP", Date: "27/9", Contact: "041234567", Info: "BHP Info"},
        {Name: "Barry", Company: "Rio Tinto", Date: "18/8", Contact: "041324576", Info: "Rio Info"},
        {Name: "Laura", Company: "Woodside", Date: "28/9", Contact: "Laura@woodside.com.au", Info: "Woodside Info"}
    ]
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
    Name: string;
    Date: string;
    Company: string;
    Contact: string;
    Info: string;
}

export default NewEntry