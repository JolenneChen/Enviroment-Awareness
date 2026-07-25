"use client"
import Image from 'next/image'
import { ArrowRightIcon } from '@phosphor-icons/react'
import React from 'react'

const Travel = () => {
    return (
        <div className='grid grid-cols-5 p-12 pb-22 bg-[#f4ffff]  '>
            <div className="text-left max-w-126 col-span-2 pl-10">
                <h1 className='text-5xl font-serif font-bold'>Where your Echo Travels</h1>
                <p className='font-light py-8'>We believe in radical transparency. Every cent is tracked and audited by third-party environmental stewards to ensure maximum terrestrial impact.</p>
                <div className="grid grid-cols-1 gap-6">
                    <p className=' text-xl bg-[#e8ebeb] rounded-2xl p-8'><span className='bg-[#f4ffff] rounded-full py-5 p-3 mr-5 text-lg'>85%</span>Direct Ground Restoration</p>
                    <p className=' text-xl bg-[#e8ebeb] rounded-2xl p-8'><span className='bg-[#f4ffff] rounded-full py-5 p-3 mr-5 text-lg'>10%</span>Scientific Research & Labs</p>
                    <p className=' text-xl bg-[#e8ebeb] rounded-2xl p-8'><span className='bg-[#f4ffff] rounded-full py-5 p-4 mr-5 text-lg'>5%</span>Operational Sustainment</p>
                </div>
                <p className='font-light py-5 inline-flex'>Read the 2023 Transparency Report <ArrowRightIcon className='mt-1 ml-2'/></p>
            </div>
            <div className="col-span-3  ">
                <div className="grid grid-cols-3 gap-2 ">
                    <Image src={"/Images/Seedling1.jpg"} alt='seed' width={330} height={300} className='rounded-4xl h-full mt-20'/>
                    <Image src={"/Images/Island.jpg"} alt='Island' width={330} height={300} className='rounded-4xl'/>
                    <Image src={"/Images/nature.jpg"} alt='nature' width={330} height={300} className='rounded-4xl h-full mt-20'/>

                    

                </div>


            </div>


        </div>
    )
}

export default Travel