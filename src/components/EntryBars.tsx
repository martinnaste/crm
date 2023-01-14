import { Button, TextField } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'
import React, { FC, useState, useRef, useEffect } from 'react'
import { BasicDatePicker } from './DatePicker'
import { BasicDateTimePicker } from './DateTimePicker'

import './EntryBars.css'
import { InputRadioGroup } from './InputRadioGroup'
import { IEntry } from './NewEntry'
import { TextInput } from './TextInput'
import { TimezonePicker } from './TimezonePicker'
import PhoneNumberValidationField from './PhoneNumberValidationField'
import DropDown from './DropDown'
import { Size, useWindowSize } from './useWindowSize'

const EntryBars:FC<IEntryBarsProps> = (props) => {
    const size: Size = useWindowSize();
    
    const [date, setDate] = useState<Dayjs | null>(dayjs())
    const [InOutCheck, setInOutCheck] = useState<string>("Incoming")
    // const nameRef = useRef<any>()
    const [name, setName] = useState<string | null>()
    // const companyRef = useRef<any>()
    const [company, setCompany] = useState<string | null>()
    const [ECFCheck, setECFCheck] = useState<string>("Employee")
    // const sdRef = useRef<any>()
    const [sd, setSd] = useState<string | null>()
    // const contactRef = useRef<any>()
    const [phoneNumber, setPhoneNumber] = useState<string | null>()
    const [dob, setDob] = useState<Dayjs | null>(null);
    // const emailRef = useRef<any>()
    const [email, setEmail] = useState<string | null>()
    const [timezoneSelected, setTimezoneSelected] = useState<string>('');
    // const addressRef = useRef<any>()
    const [address, setAddress] = useState<string | null>()
    // const kinRef = useRef<any>()
    const [kin, setKin] = useState<string | null>()
    // const kinNumberRef = useRef<any>()
    const [kinNumber, setKinNumber] = useState<string | null>()
    // const gpDocRef = useRef<any>()
    const [gpDoc, setGpDoc] = useState<string | null>()
    // const compRefRef = useRef<any>()
    const [compRef, setCompRef] = useState<string | null>()
    // const urgencyRef = useRef<any>()
    const [urgency, setUrgency] = useState<string | null>()
    // const [InOutCheck, setInOutCheck] = useState<string>("Incoming")
    const [message, setMessage] = useState<string | null>()
    
    const messageRef = useRef<any>()
    const gridRef = useRef<any>()
    // const isRadioSelected = (value: string, state: string) => {
    //     return state === value
    // }
    
    // const handleRadioClick = (e: ChangeEvent<HTMLInputElement>, stateCallback: React.Dispatch<React.SetStateAction<string>>) => {
    //     // stateCallback(e.currentTarget.value)
    //     stateCallback((prevValue) => {
    //         return prevValue = e.currentTarget.value
    //     })
    // }

    function SubmitResult() {
        // var entry: IEntry = {
        //     Name: name,
        //     Company: company,
        //     Date: date,
        //     Contact: contact,
        //     Info: info
        // }
        var entry: IEntry = {
            Date: date,
            InOut: InOutCheck,
            Name: name,
            Company: company,
            ECF: ECFCheck,
            Dob: dob,
            Sd: sd,
            PhoneNumber: phoneNumber,
            Email: email,
            Timezone: timezoneSelected,
            Address: address,
            Kin: kin,
            KinNumber: kinNumber,
            GpDoc: gpDoc,
            CompRef: compRef,
            Urgency: urgency,
            Message: message
        }
        // console.log(
        //     date?.toISOString(), ", ", name, ", ", company,  ", ", sd, ", ", contact,  ", ", dob?.toISOString(), ", ", email, ", ", timezoneSelected, ", ", address, ", ", kin, ", ", kinNumber, ", ", gpDoc, ", ", compRef, ", ", urgency, ", ", InOutCheck, ", ", ECFCheck,  ", ", message
        // )
        props.submitEntry(entry)
    }


    useEffect(() => {
        const colCount = window.getComputedStyle(gridRef.current).gridTemplateColumns.split(' ').length;
        const colPosition = 17 % colCount;
        const calcWidth = (((colCount - colPosition + 1) * 300) + ((colCount - colPosition)) * 10) - 20
        messageRef.current.style.width = `${calcWidth}px`
    },[size.width])

    return (
        <>
            <div style={{margin: "50px", marginBottom: '20px'}}>
                <div className='GridWrapper'>
                    <div className='GridDiv' ref={gridRef}> {/*style={{display: "flex", justifyContent: 'center', flexWrap: "wrap", padding: "8px"}} */}
                        <div className='EntryFieldWrapper'>
                            <BasicDateTimePicker state={date} stateCallback={setDate}/>
                        </div>
                        <div>
                            {/* <InputRadioGroup 
                                title="Incoming / Outgoing" 
                                labels={["Incoming",  "Outgoing"]} 
                                checkSelected={isRadioSelected} 
                                checkedState={InOutCheck} 
                                handleRadioClick={handleRadioClick}
                                checkedStateCallback={setInOutCheck}
                            /> */}
                            <DropDown 
                                label="Incoming / Outgoing" 
                                dropDownList={["Incoming",  "Outgoing"]}
                                state={InOutCheck}
                                stateSelectedCallback={setInOutCheck}
                            />
                        </div>
                        <div className='EntryFieldWrapper'>
                            <TextField label='Full Name' placeholder='Enter Full Name' onChange={(e) => {setName(e.target.value)}} className="TextField"/>
                        </div>
                        <div className='EntryFieldWrapper'>
                            {/* <TextInput label='Company Name' placeholder='Enter Company Name'/> */}
                            <TextField label='Company Name' placeholder='Enter Company Name' onChange={(e) => {setCompany(e.target.value)}} className="TextField"/>
                        </div>
                        <div>
                            {/* <InputRadioGroup 
                                title={'Employee / Contractor / Family'} 
                                labels={["Employee", "Contractor", "Family"]} 
                                checkSelected={isRadioSelected} 
                                checkedState={ECFCheck} 
                                handleRadioClick={handleRadioClick} 
                                checkedStateCallback={setECFCheck}                            
                            /> */}
                            <DropDown 
                                label="Employee / Contractor / Family" 
                                dropDownList={["Employee", "Contractor", "Family"]}
                                state={ECFCheck}
                                stateSelectedCallback={setECFCheck}
                            />
                        </div>
                        <div className='EntryFieldWrapper'>
                            <TextField label='Site / Department' placeholder='Enter Site / Department' onChange={(e) => {setSd(e.target.value)}} className="TextField"/>
                        </div>
                        <div className='EntryFieldWrapper'>
                            {/* <TextField label='Contact Number' placeholder='Contact Number' onChange={(e) => {setContact(e.target.value)}} className="TextField" /> */}
                            <PhoneNumberValidationField label='Phone Number' onChangeCallback={setPhoneNumber} className="PhoneNumberField"/>
                        </div>
                        <div className='EntryFieldWrapper'>
                            <BasicDatePicker state={dob} stateCallback={setDob}/>
                        </div>
                        <div className='EntryFieldWrapper'>
                            <TextField label='Email' placeholder='Enter Email' onChange={(e) => {setEmail(e.target.value)}} className="TextField"/>
                        </div>
                        <div className='EntryFieldWrapper'>
                            <TimezonePicker state={timezoneSelected} stateSelectedCallback={setTimezoneSelected}/>
                        </div>
                        <div className='EntryFieldWrapper'>
                            <TextField label='Address' placeholder='Enter Address' onChange={(e) => {setAddress(e.target.value)}} className="TextField"/>
                        </div>
                        <div className='EntryFieldWrapper'>
                            <TextField label='Next of Kin' placeholder='Next of Kin' onChange={(e) => {setKin(e.target.value)}} className="TextField"/>
                        </div>
                        <div className='EntryFieldWrapper'>
                            {/* <TextField 
                                label='Next of Kin Phone Number' 
                                placeholder='Enter Next of Kin Phone Number' 
                                onChange={(e) => {setKinNumber(e.target.value)}} 
                                helperText="Next of Kin Phone Number" 
                                className="TextField"
                            /> */}
                            <PhoneNumberValidationField label='Next of Kin Phone Number' onChangeCallback={setKinNumber} className="PhoneNumberField"/>
                        </div>
                        <div className='EntryFieldWrapper'>
                            <TextField label='GP / Doctors Practice' placeholder='Enter GP / Doctors Practice' onChange={(e) => {setGpDoc(e.target.value)}} className="TextField"/>
                        </div>
                        <div className='EntryFieldWrapper'>
                            <TextField 
                                className="TextField"
                                label='Company Referred - (EAP vs FFW)' 
                                placeholder='Enter Company Referred - (EAP vs FFW)' 
                                onChange={(e) => {setCompRef(e.target.value)}} 
                                // helperText="Has your company referred you? (EAP vs FFW)" 
                                title="Has your company referred you? (EAP vs FFW)" 
                            />
                        </div>
                        <div className='EntryFieldWrapper'>
                            <TextField 
                                className="TextField"
                                label='Reason for Urgency / Any risk to note' 
                                placeholder='Enter Reason for Urgency / Any risk to note' 
                                onChange={(e) => {setUrgency(e.target.value)}} 
                                // helperText="Reason for Urgency / Any risk to note" 
                                title="Reason for Urgency / Any risk to note" 
                            />
                        </div>
                        <div className='EntryFieldWrapper' style={{width: '280px', paddingLeft: '10px'}}>
                            <TextField className="TextField" label='Message' placeholder='Enter Message' onChange={(e) => {setMessage(e.target.value)}} ref={messageRef}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='SubmitEntries-container'>
                {/* <h2 className='SubmitEntries' onClick={() => {SubmitResult()}}>Submit</h2> */}
                <Button variant='contained' color='inherit' disableElevation size='large' style={{background: "white"}} onClick={() => {SubmitResult()}}>Submit</Button>
            </div>
        </>
    )
     
    // return (
    //     <>
        
    //         <div>
    //             <div style={{display: "flex", justifyContent: 'center', flexWrap: "wrap"}}>
    //                 <div>
    //                     <h4 className='entryWrapper'>Full Name</h4>
    //                     <input 
    //                         type="text" 
    //                         ref={nameRef} 
    //                         // onChange={(event) => {setName(event.target.value)}}
    //                         placeholder='Please Enter a name here'
    //                         className='Entrybar'
    //                     />
    //                 </div>
    //                 <div>
    //                     <h4 className='entryWrapper'>Company Name</h4>    
    //                     <input 
    //                         type="text" 
    //                         ref={companyRef} 
    //                         // onChange={(event) => {setCompany(event.target.value)}}
    //                         placeholder='Please Enter a company here'
    //                         className='Entrybar'
    //                     />
    //                 </div>
    //                 <div>
    //                     <h4 className='entryWrapper'>Date and Time</h4>
    //                     <BasicDateTimePicker />
    //                     {/* <input 
    //                         type="text" 
    //                         ref={dateRef} 
    //                         // onChange={(event) => {setDate(event.target.value)}}
    //                         placeholder='Please Enter a date here'
    //                         className='Entrybar'
    //                     /> */}
    //                 </div>
    //                 <div>
    //                     <h4 className='entryWrapper'>Contact Number</h4>
    //                     <input 
    //                         type="text" 
    //                         ref={contactRef} 
    //                         // onChange={(event) => {setContact(event.target.value)}}
    //                         placeholder='Please Enter a contact here'
    //                         className='Entrybar'
    //                     />
    //                 </div>
    //                 <div>
    //                     <h4>Info</h4>
    //                     <input 
    //                         type="text" 
    //                         ref={infoRef} 
    //                         // onChange={(event) => {setInfo(event.target.value)}}
    //                         placeholder='Please Enter a info here'
    //                         className='Entrybar'
    //                     />
    //                 </div>
    //                 <div style={{width: "266px"}}>
    //                     <h4 className='entryWrapper'>Incoming / Outgoing</h4>
    //                     <div>
    //                         <input
    //                             type="radio"
    //                             value="Incoming"
    //                             id="Incoming"
    //                             // onChange={handleRadioClick}
    //                             onChange={(e) => {handleRadioClick(e, setInOutCheck)}}
    //                             // checked={isIORadioSelected("Incoming")}
    //                             checked={isRadioSelected("Incoming", InOutCheck)}
    //                         />
    //                         <label htmlFor="Incoming">Incoming</label>
    //                     </div>
    //                     <div>
    //                         <input
    //                             type="radio"
    //                             value="Outgoing"
    //                             id="Outgoing"
    //                             // onChange={handleRadioClick}
    //                             onChange={(e) => {handleRadioClick(e, setInOutCheck)}}
    //                             // checked={isIORadioSelected("Outgoing")}
    //                             checked={isRadioSelected("Outgoing", InOutCheck)}
    //                         />
    //                         <label htmlFor="Outgoing">Outgoing</label>
    //                     </div>
    //                 </div>
    //                 <div style={{width: "266px"}}>
    //                     <h4 className='entryWrapper'>Employee / Contractor / Family</h4>
    //                     <div>
    //                         <input
    //                             type="radio"
    //                             value="Employee"
    //                             id="Employee"
    //                             // onChange={handleRadioClick}
    //                             onChange={(e) => {handleRadioClick(e, setECFCheck)}}
    //                             // checked={isECFRadioSelected("Employee")}
    //                             checked={isRadioSelected("Employee", ECFCheck)}
    //                         />
    //                         <label htmlFor="Employee">Employee</label>
    //                     </div>
    //                     <div>
    //                         <input
    //                             type="radio"
    //                             value="Contractor"
    //                             id="Contractor"
    //                             // onChange={handleRadioClick}
    //                             onChange={(e) => {handleRadioClick(e, setECFCheck)}}
    //                             // checked={isECFRadioSelected("Contractor")}
    //                             checked={isRadioSelected("Contractor", ECFCheck)}
    //                         />
    //                         <label htmlFor="Contractor">Contractor</label>
    //                     </div>
    //                     <div>
    //                         <input
    //                             type="radio"
    //                             value="Family"
    //                             id="Family"
    //                             // onChange={handleRadioClick}
    //                             onChange={(e) => {handleRadioClick(e, setECFCheck)}}
    //                             // checked={isECFRadioSelected("Family")}
    //                             checked={isRadioSelected("Family", ECFCheck)}
    //                         />
    //                         <label htmlFor="Family">Family</label>
    //                     </div>
    //                 </div>
    //                 <div>
    //                     <h4 className='entryWrapper'>Site / Department</h4>
    //                     <input 
    //                         type="text" 
    //                         ref={sdRef} 
    //                         // onChange={(event) => {setInfo(event.target.value)}}
    //                         placeholder='Site / Department Info'
    //                         className='Entrybar'
    //                     />
    //                 </div>
    //                 <div>
    //                     <h4>Date of Birth</h4>
    //                     <input 
    //                         type="text" 
    //                         ref={sdRef} 
    //                         // onChange={(event) => {setInfo(event.target.value)}}
    //                         placeholder='Site / Department Info'
    //                         className='Entrybar'
    //                     />
    //                 </div>
    //                 <div>
    //                     <h4>Email</h4>
    //                     <input 
    //                         type="text" 
    //                         ref={emailRef} 
    //                         // onChange={(event) => {setInfo(event.target.value)}}
    //                         placeholder='Email'
    //                         className='Entrybar'
    //                     />
    //                 </div>
    //                 <div>
    //                     <h4>Timezone</h4>
    //                     {/* Dropdown */}
    //                     <input 
    //                         type="text" 
    //                         ref={emailRef} 
    //                         // onChange={(event) => {setInfo(event.target.value)}}
    //                         placeholder='Email'
    //                         className='Entrybar'
    //                     />
    //                 </div>
    //                 <div>
    //                     <h4>Address</h4>
    //                     <input 
    //                         type="text" 
    //                         ref={addressRef}
    //                         // onChange={(event) => {setInfo(event.target.value)}}
    //                         placeholder='Address'
    //                         className='Entrybar'
    //                     />
    //                 </div>
    //                 <div>
    //                     <h4>Next of Kin</h4>
    //                     <input 
    //                         type="text" 
    //                         ref={kinRef}
    //                         // onChange={(event) => {setInfo(event.target.value)}}
    //                         placeholder='Next of Kin'
    //                         className='Entrybar'
    //                     />
    //                 </div>
    //                 <div>
    //                     <h4>Next of Kin Phone Number</h4>
    //                     {/* Phone number item */}
    //                     <input 
    //                         type="text" 
    //                         ref={kinNumberRef}
    //                         // onChange={(event) => {setInfo(event.target.value)}}
    //                         placeholder='Next of Kin'
    //                         className='Entrybar'
    //                     />
    //                 </div>
    //                 <div>
    //                     <h4>GP / Doctors Practice</h4>
    //                     {/* Phone number item */}
    //                     <input 
    //                         type="text" 
    //                         ref={gpDocRef}
    //                         // onChange={(event) => {setInfo(event.target.value)}}
    //                         placeholder='GP / Doctors Practice'
    //                         className='Entrybar'
    //                     />
    //                 </div>
    //                 <div>
    //                     <h4>{`Has your company referred you? (EAP vs FFW)`}</h4>
    //                     {/* Phone number item */}
    //                     <input 
    //                         type="text" 
    //                         ref={compRefRef}
    //                         // onChange={(event) => {setInfo(event.target.value)}}
    //                         placeholder='Company Referral'
    //                         className='Entrybar'
    //                     />
    //                 </div>
    //                 <div>
    //                     <h4>Reason for Urgency / Any risk to note</h4>
    //                     {/* Phone number item */}
    //                     <input 
    //                         type="text" 
    //                         ref={urgencyRef}
    //                         // onChange={(event) => {setInfo(event.target.value)}}
    //                         placeholder='Urgency / Risk Note'
    //                         className='Entrybar'
    //                     />
    //                 </div>
    //             </div>
    //         </div>
    //         <div className='SubmitEntries-container'>
    //             <h2 className='SubmitEntries' onClick={() => {SubmitResult()}}>Submit</h2>
    //         </div>
    //     </>
    // )
}

export interface IEntryBarsProps {
    submitEntry : any;
}

export default EntryBars