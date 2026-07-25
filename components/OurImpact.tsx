import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import Image from 'next/image'

const OurImpact = () => {
    return (
        <div className="bg-[#e8f3f0]">
            <div className=" mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-24">
                <section className=' items-center  gap-14 lg:gap-20 text-center'>

                    <div className=" px-4 py-1.5 text-xs font-bold tracking-wider text-[#4b6862]">
                        <p className='font-light text-xl py-5'>Measurable Change</p>
                        

                        <h1 className="text-5xl font-bold text-black  font-serif">Turning data into forests, one echo at a time</h1>
                        <p className="text-black  py-5 font-light text-[15px] ">We track the tangible heartbeat of our planet. Every tree planted and every ton of carbon offset is a testament to our collective momentum. Join thousands in restoring our home.
                        </p>

                    </div>
                    <div className="relative min-h-107.5 overflow-hidden rounded-3xl ">
                        <Image src={"/Images/NordForest (2).jpg"} width={1200} height={600} alt="Project" className="w-fit rounded-3xl" ></Image>
                       
                    </div>
                </section>

            </div >
        </div>
    )
}

export default OurImpact
