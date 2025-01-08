import React from 'react'

const Dropdown = ({title, options, func}) => {
  return (
    <div>
        <select onChange={func} className='select' defaultValue={title} name="format" id="format">
            <option defaultChecked disabled>{title}</option>
            {
                options.map((o, i) => (
               <option key={i} value={o}>{o.toUpperCase()}</option>

                ))
            }
        </select>
    </div>
  )
}

export default React.memo(Dropdown)