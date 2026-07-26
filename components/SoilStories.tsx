"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/tailgrids/core/carousel";
import Image from 'next/image';
import { Badge } from './ui/badge';
import { ArrowRightIcon} from '@phosphor-icons/react'



const SoilStories = () => {
    const slides = [
    {
        image: "/Images/Gardeners.jpg",
        country : "Brazil",
        title: "Maria's Canopy: A Corridor of Life",
        description: "How one community leader transformed a deforested cattle ranch into a thriving corridor for endangered jaguars, reconnecting fragmented forest blocks."
    },
    {
        image: "/Images/carrots.webp",
        country : "Japan",
        title: "Maria's Canopy: A Corridor of Life",
        description: "How one community leader transformed a deforested cattle ranch into a thriving corridor for endangered jaguars, reconnecting fragmented forest blocks."
    }
];
    return (
        <div className='text-center p-12 bg-[#bac5c2]'>
            <p className='text-4xl text-black font-serif'>Stories from the Soil</p>
            <p className='text-black  py-5 font-light text-[15px] '>Witness the transformation of landscapes and lives through our community-led restoration efforts.</p>
            <div className="w-full max-w-4xl mx-auto py-10">
                <Carousel className="w-full">
                    <CarouselContent>
                        {slides.map((slide, index) => (
                            <CarouselItem key={index}>
                                <div className="relative h-130 w-full ">
                                    
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        className="object-cover "
                                    />
                                    <div className="absolute inset-0 bg-black/30" />

                                    <div className="absolute inset-0 px-20 flex flex-col justify-center items-start p-10 text-white max-w-xl text-left  ">
                                        <Badge className=' bg-[#4f6952] text-xl p-4'>Feature Story : {slide.country}</Badge>
                                        <h1 className="text-5xl font-serif py-5">{slide.title}</h1>
                                        <p>{slide.description}</p>
                                        
                                        <a href="#" className="inline-flex hover:underline text-xl font-serif py-5">Read Full Story <span><ArrowRightIcon className="mt-1 ml-2"/></span></a>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                </Carousel>
            </div>
        </div>
    )
}

export default SoilStories