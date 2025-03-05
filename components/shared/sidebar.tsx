"use client"

import React, { useState } from 'react'
import { ComboboxDemoItem } from '../ui/comboboxitems'
import { TimePicker } from '../ui/time-picker'
import { SelectTier } from '../ui/selecttier'
import { Input } from '../ui/input'

const SideBar = () => {

  const [date, setDate] = useState<Date | undefined>(new Date())

  const handleDateChange = (newDate: Date | undefined) => {
    if (newDate) {
      setDate(new Date(newDate))
    } else {
      setDate(undefined)
    }
  }
  
  return (
    <div className='border-r h-screen px-3'>
        <p className='text-2xl font-extrabold p-8 border-b'>Enter Product Information</p>
        <div className='px-4 py-2 flex flex-col'>
            <p className='pl-1'>Enter the Product name/ID: </p>
            <ComboboxDemoItem />
        </div>
        <div className='px-4 py-2 flex flex-col'>
            <p className='pl-1'>Set Time: </p>
            <div className="grid">
            <div className="grid gap-2">
              <TimePicker date={date} setDate={handleDateChange} />
            </div>
            {date && <p className="text-sm text-muted-foreground pl-1">Selected time: {date.toLocaleTimeString()}</p>}
          </div>
        </div>
        <div className='px-4 py-2 flex flex-col'>
            <p className='pl-1'>City Tier: </p>
            <SelectTier />
        </div>
        <div className='px-4 py-2 flex flex-col'>
            <p className='pl-1'>Sales of Product: </p>
            <Input placeholder='Amount'/>
        </div>
        <div className='px-4 py-2 flex flex-col'>
            <p className='pl-1'>Product Weight: </p>
            <Input placeholder='in grams'/>
        </div>
        <div className='px-4 py-2 flex flex-col'>
            <p className='pl-1'>Product Rating: </p>
            <Input placeholder='...'/>
        </div>
    </div>
  )
}

export default SideBar
