"use client"
import React from 'react'
import { Button } from './ui/button'
import { TreeIcon } from '@phosphor-icons/react'

interface ImpactProps {
    id: number,
    title: string,
    Icon: React.ElementType,
    desc: string,
    amount: number,
    benefit1: string,
    benefit2: string,
    benefit3: string,


}
export const ImpactInfo = ({ params }: { params: ImpactProps }) => {
    return (
        <div className=" w-full p-6 px-4 justify-center items-center">
            <div className={`bg-[#e7eeec] max-w-2xl p-12 rounded-3xl grid grid-cols-1 h-full gap-6 hover:shadow-2xl hover:translate-y-2
                ${
                    params.id === 2
                    ? "bg-black text-white"
                    : "bg-[bg-[#e7eeec] text-black"
                }`}
                >
                <params.Icon size={32} />
                <h1 className="  text-3xl font-serif">{params.title}</h1>
                <p className="font-light">{params.desc}</p>
                <p className='text-4xl font-bold font-serif' >${params.amount}/mo</p>

                <p>{params.benefit1}</p>
                <p>{params.benefit2}</p>
                <p>{params.benefit3}</p>
                <Button className='bg-[#e7eeec] border border-black text-black p-6 hover:bg-black hover:text-white'>Select {params.title}</Button>

            </div>
        </div>
    )
}

const Impactlvl = () => {
    const projects: ImpactProps[] = [
        {
            id: 1,
            title: "Seedling",
            Icon: TreeIcon,
            desc: "Supports the research and sourcing of native species for urban biodiversity hubs.",
            amount: 25,
            benefit1: "10 trees planted annually",
            benefit2: "Monthly impact newsletter",
            benefit3: "",
        },
        {
            id: 2,
            title: "Grove",
            Icon: TreeIcon,

            desc: "Funds a recurring planting project and provides local community stewardship training.",
            amount: 100,
            benefit1: "50 trees planted annually",
            benefit2: "GPS coordinates of your site",
            benefit3: "Digital Donor Badge",
        },
        {
            id: 3,
            title: "Forest",
            Icon: TreeIcon,

            desc: "Sponsors a full ecosystem restoration project including water filtration systems.",
            amount: 500,
            benefit1: "300 trees planted annually",
            benefit2: "Dedicated project manager",
            benefit3: "Annual impact report printed",
        }

    ]
    return (
        <div className="bg-white">
            <div className="text-center py-10 text-black">
                <h1 className='text-5xl font-serif mb-5'>Choose Your Impact Level</h1>
                <p className='text-light'>Select a monthly contribution or a one-time gift to support our long-term regeneration goals.</p>
            </div>
            <div className='max-w-5xl mx-auto'>
                <div className="grid lg:grid-cols-3">
                    {projects.map(item => (
                        <ImpactInfo params={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Impactlvl