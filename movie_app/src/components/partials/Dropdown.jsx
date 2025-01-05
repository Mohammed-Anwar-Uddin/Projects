import React from 'react'

const Dropdown = ({title, options, func}) => {
  return (
    <div>
        <select onClick={func} className='select' defaultValue={"0"} name="format" id="format">
            <option value="0" disabled>{title}</option>
            {
                options.map((o, i) => (
               <option key={i} value={o}>{o.toUpperCase()}</option>

                ))
            }
        </select>
    </div>
  )
}

export default Dropdown