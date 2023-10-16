import React, { useState } from 'react'

const Selectable = () => {
    const [selected, setSelected] = useState([]);
    console.log(selected)
  return (
    <div className="flex flex-col gap-3 self-start">
      <p className='mt-[25px] text-white text-[18px] font-[600]'>Choose as many as you would like to be entered to win. <span className='text-[red] font-[700] text-[20px]'>*</span></p>
      <div>
        <input type="checkbox" id="home game" name="Home Game Tickets" value="Home Game Tickets" onClick={(e) => {
            if(selected.includes(e.target.value)){
                const removed = selected.filter(option => option !== e.target.value )
                setSelected(removed);
            } else{
                setSelected([...selected, e.target.value])
            }
        }} className='bg-[white]'/> Home Game Tickets (Est. value $500 - $800)
      </div>
      <div>
        <input type="checkbox" id="Signed Merchandise" name="Signed Merchandise" value="Signed Merchandise" onClick={(e) => {
            if(selected.includes(e.target.value)){
                const removed = selected.filter(option => option !== e.target.value )
                setSelected(removed);
            } else{
                setSelected([...selected, e.target.value])
            }
        }} /> Signed Merchandise (Est. value $500)
      </div>
      <div>
        <input type="checkbox" id="Swag Prize Package" name="Swag Prize Package" value="Swag Prize Package" onClick={(e) => {
            if(selected.includes(e.target.value)){
                const removed = selected.filter(option => option !== e.target.value )
                setSelected(removed);
            } else{
                setSelected([...selected, e.target.value])
            }
        }} /> Swag Prize Package (Est. value $300)
      </div>
      <div>
        <input type="checkbox" id="All Options" name="All Options" value="All Options" onClick={(e) => {
            if(selected.includes(e.target.value)){
                const removed = selected.filter(option => option !== e.target.value )
                setSelected(removed);
            } else{
                setSelected([...selected, e.target.value])
            }
        }} /> Check this box to enter me in all options.
      </div>
      <p className="text-default-500 text-small">Selected: {selected.join(", ")}</p>
    </div>
  )
}

export default Selectable