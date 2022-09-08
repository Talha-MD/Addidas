import React, { useState } from 'react'
import Data from '../API/Data'
import Percet from './Percet'

export default function Workout() {
    const [Work]=useState(Data.Work)
  return (
    <div className='bg-gray-300'>
        <div className='grid md:grid-cols-2 grid-cols-1 lg:mx-28'>
            <div className='mt-20  mx-4'>
                <h1 className='text-2xl italic'>{Work.story}</h1>
                <p className='my-3'>{Work.Sport}</p>
                <p>{Work.Sport1}</p>
            </div>
            <div className='mt-20 mx-4'>
                <h1 className='text-2xl italic'>{Work.story1}</h1>
                <p className='my-3'>{Work.workout}</p>
                <p>{Work.workout1}</p>
            </div>
        </div>
        <div>
            <Percet/>
        </div>

    </div>
  )
}
