"use client"
import React from 'react'
import { QuotesIcon } from '@phosphor-icons/react'
import Image from 'next/image'
interface StoriesProps {
    id: number;
    story: string,
    image: string,
    name: string,
    title: string
}

export const StoriesInfo = ({ params }: { params: StoriesProps }) => {
    return (
        <>
            <div className="grid grid-cols-1 min-w-xs mx-auto bg-white rounded-2xl justify-center items-center">
                <QuotesIcon size={32} />
                <div className="text-center p-5">
                    <p className='max-w-2xs mx-auto text-2xl font-serif '>{params.story}</p>
                </div>

                <hr />
                <div className="p-5 flex">
                    <div className="">
                        <Image src={params.image} width={50} height={600} alt="Project" className="relative max-h-72 rounded-full" ></Image>
                    </div>
                    <div className="grid grid-cols-1 text-left pl-3">
                        <h1>{params.name}</h1>
                        <p>{params.title}</p>
                    </div>

                </div>
            </div>
        </>
    )
}
const Stories = () => {
    const stories: StoriesProps[] = [
        {
            id: 1,
            story: "The chapter in Munich helped me find a way to contribute that actually felt impactful. It's not just talk; it's science-backed action every weekend",
            image: "/images/Lucas.jpg",
            name: "Lukas Werner",
            title: "Munich Chapter Member"
        },
        {
            id: 2,
            story: "I started as a volunteer, now I'm leading the coastal initiatives in Melbourne. EcoEcho gave me the resources to scale my passion into a movement.",
            image: "/images/Lucas.jpg",
            name: "Dr. Sarah Chen",
            title: "Regional Lead, Melbourne"
        },
    {
        id: 3,
        story: "Seeing the local forest bird population return after just three years of our focused restoration is the most rewarding thing I've done.",
        image: "/images/Lucas.jpg",
        name: "Marcus Thorne",
        title: "Forest Steward, Surrey"
        }
    ]
    
return (
    <div className='justify-center text-center w-full p-20 bg-[#e4eeeb]'>
        <h1 className='text-5xl font-serif italic'>Community Stories</h1>
        <p className='py-5'>Voices from the frontlines of the global Echo network, sharing impact and inspiration. </p>
        <div className="grid lg:grid-cols-3 justify-center text-center pt-10 max-w-6xl mx-auto">
            {stories.map(item => (
                <StoriesInfo params={item} key={item.id} />
            ))}
        </div>
    </div>

)
}

export default Stories