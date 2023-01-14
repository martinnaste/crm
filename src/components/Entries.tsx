import React, { FC } from 'react'
import { IEntry } from './NewEntry'
import './Entries.css'
import Entry from './Entry'

const Entries:FC<IEntriesProps> = (props) => {
    function allEntries() {
        return(
            props.entries.map((entry, index) => {
                return(
                    <>
                        <Entry entry={entry} index={index} deleteEntry={props.deleteEntry} showModal={props.showModal}/>
                    </>
                );
            })
        )
    }

    return (
        <div className='Entries-container'>
            <div className='Entries-wrapper'>
                <table>
                    <thead>
                        <tr>
                            <th className='CheckCircle'/>
                            <th>
                                Full Name
                            </th>
                            <th>
                                Company
                            </th>
                            <th>
                                Date
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Phone Number
                            </th>
                            <th>
                                Message
                            </th>
                            <th className='DeleteCircle'/>
                        </tr>
                    </thead>
                    <tbody>
                        {allEntries()}
                    </tbody>
                </table>
            </div>
        </div>
    )

    // return (
    //     <div className='Entries-container'>
    //         <div className='Entries-wrapper'>
    //             <table>
    //                 <thead>
    //                     <tr>
    //                         <th className='CheckCircle'/>
    //                         <th>
    //                             Name
    //                         </th>
    //                         <th>
    //                             Company
    //                         </th>
    //                         <th>
    //                             Date
    //                         </th>
    //                         <th>
    //                             Contact
    //                         </th>
    //                         <th>
    //                             Info
    //                         </th>
    //                         <th className='DeleteCircle'/>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {allEntries()}
    //                 </tbody>
    //             </table>
    //         </div>
    //     </div>
    // )
}

export interface IEntriesProps {
    entries: IEntry[];
    deleteEntry: any;
    showModal: any;
}

export default Entries