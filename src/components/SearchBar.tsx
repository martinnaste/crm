import React, { FC } from 'react'
import { TextField } from '@mui/material'
// import { ToggleButton } from '@mui/material'
// import SearchIcon from '@mui/icons-material/Search';
import "./SearchBar.css"

const SearchBar:FC<ISearchBarProps> = (props) => {
    // const [searchQuery, setSearchQuery] = useState('')



    return (
        // <div className='SearchBar-container'>
        //     <div className='SearchBar-Wrapper'>
        //         <input 
        //             className='SearchInput'
        //             type="text"
        //             value={searchQuery} 
        //             placeholder='Enter Search Query'
        //             onChange={(e) => {
        //                 setSearchQuery(e.target.value)
        //                 props.onSubmit(e.target.value)
        //             }}
        //         />
        //         <h3 className='Search-Button'>🔎</h3>
        //     </div>
        // </div>
        <div className='SearchBar-Container'>
            <div className='SearchBar-Wrapper'>
                <div className='SearchInputWrapper'>
                    <TextField 
                        label='Search' 
                        placeholder='Search' 
                        onChange={(e) => {
                            props.onSubmit(e.target.value)
                        }} 
                        className="SearchInput"
                    />
                    {/* <ToggleButton value="submit" style={{height: "56px", width: "56px"}}>
                        <SearchIcon />
                    </ToggleButton> */}
                </div>
            </div>
        </div>
    )
}

export interface ISearchBarProps {
    onSubmit: any
}

export default SearchBar