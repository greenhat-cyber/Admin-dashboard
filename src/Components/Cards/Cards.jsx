import React from 'react'
import './Cards.css'

function Cards(props) {
  return (
    <div className='cards'>
        <span className='m-0 p-0'style={{ color: "rgb(119, 255, 0)" ,fontSize:"25px"}}>{props?.data.courses}</span>
        <span className='m-0 p-0'style={{ fontSize:"18px"}} >{props?.data.batches}</span>
        <p className='m-0 p-0'>{props?.data.startDate}</p>
        <p className='m-0 p-0'>{props?.data.endDate}</p>
    </div>
  )
}

export default Cards