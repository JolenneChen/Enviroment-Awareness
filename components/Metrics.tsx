"use client"
import { TreeIcon, WindIcon , DropIcon , UsersThreeIcon } from '@phosphor-icons/react'

const Metrics = () => {
  return (
    <div className='bg-[#dae7e4] p-12'>
        <p className='text-2xl font-serif'>Live Impact Metrics</p>
        <p className='text-xl font-light'>Real-time data from our global restoration network, verified by satellite telemetry.</p>
        <div className="grid grid-cols-4 gap-10 max-w-7xl mx-auto py-12">
            <div className="p-12 bg-white rounded-4xl border-2">
                <TreeIcon size={32}/>
                <p className='text-3xl font-serif py-3'>4,284,012</p>
                <p className='font-light'>Trees Planted</p>
            </div>
            <div className="p-12 bg-[#2a3329] rounded-4xl border-2">
                <WindIcon size={32} className='text-white'/>
                <p className='text-3xl font-serif py-3 text-white'>4,284,012</p>
                <p className='font-light text-white'>Trees Planted</p>
            </div>
            <div className="p-12 bg-white rounded-4xl border-2">
                <DropIcon size={32}/>
                <p className='text-3xl font-serif py-3'>4,284,012</p>
                <p className='font-light'>Trees Planted</p>
            </div>
            <div className="p-12 bg-[#8cb8ab]  rounded-4xl border-2">
                <UsersThreeIcon size={32}/>
                <p className='text-3xl font-serif py-3 text-[#30463f]'>4,284,012</p>
                <p className='font-light text-[#30463f]'>Trees Planted</p>
            </div>
        </div>
    </div>

  )
}

export default Metrics