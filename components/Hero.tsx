import Image from "next/image"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
const Hero = () => {
    return (
        <div className="relative w-full p-0 m-0 h-[calc(100vh-64px)] ">
            <Image src="/images/Forest.jpg" width={1240} height={600} alt="forest" className=" w-full h-screen object-cover" />
            <div className="absolute inset-0 flex flex-col justify-center items-center  ">
                <Badge className=" bg-amber-300 text-black">Bridging Activisism & Credibility</Badge>
                <h1 className="text-5xl font-bold text-white max-w-3xl text-center py-5">Restore the balance of our natural world</h1>
                <p className="text-white max-w-xl text-center px-6">We translate urgent enviromental science into actionable community restoration projects. Join a network of professionals dedicated to measurable ecological impact.
                </p>
                <div className=" m-4 text-2xl grid grid-cols-2 gap-3">
                    <Button className="text-white bg-black rounded-4xl px-4 py-6">Take Action</Button>
                    <Button className="text-black bg-white rounded-4xl px-4 py-6">Explore Initiative</Button>
                </div>
            </div>

        </div>
    )
}

export default Hero 