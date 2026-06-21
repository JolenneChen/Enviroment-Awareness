import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const Comhero = () => {
    return (
        <div>
            <div className=" w-full p-0 m-0 h-[calc(100vh-64px)] bg-amber-600">
                <div className="flex flex-col justify-center items-center h-screen object-cover ">
                    <Badge className=" bg-amber-300 text-black ">A Global Network for Local Change</Badge>
                    <h1 className='text-5xl font-serif pt-5'>Collective action for a </h1>
                    <h1 className="text-5xl font-bold text-black max-w-3xl text-center">regenerative future.</h1>
                    <p className="text-black max-w-xl text-center px-6 py-5">EcoEcho is more than a platform; it&apos;s a global ecosystem of restorationists, activists, and thinkers working together to heal the planet.
                    </p>
                    <div className=" m-4 text-2xl grid grid-cols-2 gap-3">
                        <Button className="text-white bg-black rounded-4xl px-4 py-6">Become a Member</Button>
                        <Button className="text-black bg-white rounded-4xl px-4 py-6">Explore Chapters</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Comhero