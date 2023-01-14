import React,{ FC } from 'react'
import { IEntry } from './NewEntry'
import './EntryModal.css'

const EntryModal:FC<IEntryModalProps> = (props) => {
    return(
        <div className='modal' onClick={props.showModalHandler}>
            <div className='EntryModal-content' onClick={e => e.stopPropagation()}>
                <div className='EntryModal-content-container'>
                    <div className='EntryModal-scroll'>
                        <h3>Date</h3>
                        <p>{props.entry.Date?.toDate().toString()}</p>
                        <h3>Incoming / Outgoing</h3>
                        <p>{props.entry.InOut}</p>
                        <h3>Name</h3>
                        <p>{props.entry.Name}</p>
                        <h3>Comapny</h3>
                        <p>{props.entry.Company}</p>
                        <h3>Employee / Contractor / Family</h3>
                        <p>{props.entry.ECF}</p>
                        <h3>Date of Birth</h3>
                        <p>{props.entry.Dob?.format('dddd l')}</p>
                        <h3>Site / Department</h3>
                        <p>{props.entry.Sd}</p>
                        <h3>Phone Number</h3>
                        <p>{props.entry.PhoneNumber}</p>
                        <h3>Email</h3>
                        <p>{props.entry.Email}</p>
                        <h3>Timezone</h3>
                        <p>{props.entry.Timezone}</p>
                        <h3>Address</h3>
                        <p>{props.entry.Address}</p>
                        <h3>Next of Kin</h3>
                        <p>{props.entry.Kin}</p>
                        <h3>Next of Kin Phone Number</h3>
                        <p>{props.entry.KinNumber}</p>
                        <h3>GP / Doctors Practice</h3>
                        <p>{props.entry.GpDoc}</p>
                        <h3>Company Referral (EAP vs FFW)</h3>
                        <p>{props.entry.CompRef}</p>
                        <h3>Urgency</h3>
                        <p>{props.entry.Urgency}</p>
                        <h3>Message</h3>
                        <p>{props.entry.Message}</p>
                    </div>
                </div>
            </div>
        </div>
    )
    // return (
    //     <div className='modal' onClick={props.showModalHandler}>
    //         <div className='EntryModal-content' onClick={e => e.stopPropagation()}>
    //             <div className='EntryModal-content-container'>
    //                 <div className='EntryModal-scroll'>
    //                     <h3>Name</h3>
    //                     <p>{props.entry.Name}</p>
    //                     <h3>Company</h3>
    //                     <p>{props.entry.Company}</p>
    //                     <h3>Date</h3>
    //                     <p>{props.entry.Date?.toString()}</p>
    //                     <h3>Email</h3>
    //                     <p>{props.entry.Email}</p>
    //                     <h3>Phone Number</h3>
    //                     <p>{props.entry.Contact}</p>
    //                     <h3>Message</h3>
    //                     <p>{props.entry.Message}</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export interface IEntryModalProps {
    entry: IEntry;
    showModalHandler: any;
}

export default EntryModal