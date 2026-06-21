import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Upcoming = () => {
    return (
        <div className='bg-[#e8f7f2] w-full p-10 px-20 h-[calc(100vh-64px)]'>
            <p className='text-5xl font-serif italic max-w-xl px-5'>Upcoming Restoration Events</p>
            <div className="flex flex-cols-2 justify-between py-6 ">
                <p className='max-w-xl px-5 text-xl'>Hands-on opportunities to contribute to local biodiversity and ecosystem health across the network.</p>
                <Link href="#" className='underline'>View more events</Link>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-5">
                    <Image src={"/Images/cleaning.jpg"} width={650} height={600} alt='cleaning' className='rounded-3xl'></Image>
                    <h1 className='text-gray-500'>OCT 24, 2024  -  PORTLAND, OR</h1>
                    <h1 className='text-4xl font-serif text-gray-700 py-4'>The Great Estuary Replanting Day</h1>
                    <p className='text-gray-500 max-w-[550px] font-medium '>Join over 200 local members as we introduce 5,000 native grass plugs to the Willamette delta to combat shoreline erosion and restore habitat.</p>
                </div>
                <div className="grid grid-cols-2 gap-0 max-w-3xl">
                    <Image src={"/Images/planting.jpg"} width={350} height={600} alt='cleaning' className='rounded-3xl' ></Image>
                    <div className="">
                        <p>NOV 2 - BOULDER, CO</p>
                        <h1 className='text-3xl font-serif py-5 max-w-md'>Soil Health & Regenerative Workshop</h1>
                        <p>Learn the fundamentals of soil microbiology while </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Upcoming