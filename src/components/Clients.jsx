import React from 'react'
import {airbnb, coinbase, binance, dropbox} from '../assets'

const Clients = () =>  (
    <div className='grid grid-cols-2 grid-rows-2 sm:grid-rows-1 sm:grid-cols-4 justify-between gap-6 my-8 items-center'>
      <img src={coinbase} alt="coinbase" className='h-[32px] sm:h-[41px]'/>
      <img src={binance} alt="binance" className='h-[32px] sm:h-[41px]'/>
      <img src={dropbox} alt="dropbox" className='h-[32px] sm:h-[41px]'/>
      <img src={airbnb} alt="airbnb" className='h-[32px] sm:h-[41px]'/>
    </div>
  )

export default Clients