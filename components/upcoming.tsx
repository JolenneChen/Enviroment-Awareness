"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArrowRightIcon } from '@phosphor-icons/react'
const Upcoming = () => {
    return (
        <div className='bg-[#e8f7f2] w-full p-10 md:px-20 md:h-[calc(100vh-64px)]'>
            <p className='text-5xl font-serif italic max-w-xl px-5'>Upcoming Restoration Events</p>
            <div className="flex flex-cols-2 justify-between py-6 ">
                <p className='max-w-xl px-5 text-xl'>Hands-on opportunities to contribute to local biodiversity and ecosystem health across the network.</p>
                <Link href="#" className='underline'>View more events</Link>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-20 md:0">
                <div className="px-5">
                    <Image src={"/Images/cleaning.jpg"} width={650} height={600} alt='cleaning' className='rounded-3xl'></Image>
                    <h1 className='text-gray-500'>OCT 24, 2024  -  PORTLAND, OR</h1>
                    <h1 className='text-4xl font-serif text-gray-700 py-4'>The Great Estuary Replanting Day</h1>
                    <p className='text-gray-500 max-w-137.5 font-medium '>Join over 200 local members as we introduce 5,000 native grass plugs to the Willamette delta to combat shoreline erosion and restore habitat.</p>
                </div>
                <div className="grid grid-cols-1 gap-4 max-w-3xl ">
                    <div className="md:grid md:grid-cols-2 gap-0 ">
                        <Image src={"/Images/planting.jpg"} width={300} height={350} alt='cleaning' className='rounded-3xl' ></Image>
                        <div className="max-w-2xs">
                            <p className='text-gray-500'>NOV 2 - BOULDER, CO</p>
                            <h1 className='text-3xl font-serif py-3 max-w-md'>Soil Health & Regenerative Workshop</h1>
                            <p>Learn the fundamentals of soil microbiology while assisting local community farms.</p>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-2  ">
                        <Image src={"/Images/forest.jpg"} width={300} height={600} alt='cleaning' className='rounded-3xl' ></Image>
                        <div className="max-w-2xs">
                            <p className='text-gray-500'>NOV 15 • VANCOUVER, BC</p>
                            <h1 className='text-3xl font-serif py-3 max-w-md'>Urban Canopy Mapping Session</h1>
                            <p>A data-driven initiative to identify critical heat islands and plan native tree placement. </p>
                        </div>
                    </div>
                    <hr />
                    <Link href="#" className='inline-flex items-center'>Explore more Events<ArrowRightIcon /> </Link> 
                </div>


            </div>
        </div>
    )
}

export default Upcoming