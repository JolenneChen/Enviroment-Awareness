import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import Image from 'next/image'

const DonHome = () => {
    return (
        <div className="bg-[#e8f3f0]">
            <div className=" mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-24">
                <section className='grid items-center lg:grid-cols-2 gap-14 lg:gap-20'>

                    <div className=" px-4 py-1.5 text-xs font-bold tracking-wider text-[#4b6862]">

                        <Badge className=" bg-amber-300 text-black">A Global Network for Local Change</Badge>

                        <h1 className="text-6xl font-bold text-black  font-serif">Invest in the
                            Future of our Planet</h1>
                        <p className="text-black  py-5 font-light text-xl">Your contribution fuels transparent, data-driven environmental restoration. From local urban micro-forests to massive reforestation projects, EcoEcho ensures every dollar creates a measurable echo of change.
                        </p>

                    </div>
                    <div className="relative min-h-107.5 overflow-hidden rounded-3xl ">
                        <Image src={"/Images/DonorTree.jpg"} width={500} height={600} alt="Project" className="w-fit rounded-3xl" ></Image>
                        <div className="absolute right-6 bottom-8 left-6 rounded-xl p-5 bg-[rgba(255,255,255,0.5)] ">
                            <h1 className='text-black text-2xl'>$4.2M+</h1>
                            <p className=' text-black '>Global impact funded by donors like you last year.</p>
                        </div>
                    </div>
                </section>

            </div >
        </div>
    )
}

export default DonHome
