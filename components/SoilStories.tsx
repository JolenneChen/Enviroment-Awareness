import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/tailgrids/core/carousel";
import Image from 'next/image';


const SoilStories = () => {
    return (
        <div className='text-center p-12 bg-[#bac5c2]'>
            <p className='text-4xl text-black font-serif'>Stories from the Soil</p>
            <p className='text-black  py-5 font-light text-[15px] '>Witness the transformation of landscapes and lives through our community-led restoration efforts.</p>
            <div className="w-full max-w-4xl mx-auto py-10">
                <Carousel className="w-full">
                    <CarouselContent>

                        {images.map((image, index) => (
                            <CarouselItem key={index}>
                                <div className="relative h-[400px] w-full">
                                    <Image
                                        src={image}
                                        alt={`Banner ${index + 1}`}
                                        fill
                                        className="object-cover rounded-xl"
                                    />
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