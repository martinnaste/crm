import React, { FC, useState } from 'react'
import "./SearchBar.css"

const SearchBar:FC<ISearchBarProps> = (props) => {
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <div className='SearchBar-container'>
            <div className='SearchBar-Wrapper'>
                <input 
                    className='SearchInput'
                    type="text"
                    value={searchQuery} 
                    placeholder='Enter Search Query'
                    onChange={(e) => {
                        setSearchQuery(e.target.value)
                        props.onSubmit(e.target.value)
                    }}
                />
                <h3 className='Search-Button'>🔎</h3>
            </div>
        </div>
    )
}

export interface ISearchBarProps {
    onSubmit: any
}

export default SearchBar