import React from 'react'
import {airbnb, coinbase, binance, dropbox} from '../assets'

const Clients = () =>  (
    <div className='flex flex-col ss:flex-row justify-between gap-6 my-8 items-center'>
      <img src={airbnb} alt="airbnb" className='h-[41px]'/>
      <img src={coinbase} alt="coinbase" className='h-[41px]'/>
      <img src={binance} alt="binance" className='h-[41px]'/>
      <img src={dropbox} alt="dropbox" className='h-[41px]'/>
    </div>
  )

export default Clients