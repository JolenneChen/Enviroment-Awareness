"use client"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ArrowRightIcon } from "@phosphor-icons/react"
interface ProjectProps {
    id: number
    image: string,
    topic: string,
    title: string,
    description: string,
}
export const ProjectInfo = ({params}: {params:ProjectProps}) => {
    return (
        <>
            <div className="grid grid-cols-1 max-w-xl bg-white rounded-xl overflow-hidden pb-2">
                <Image src={params.image} width={600} height={600} alt="Project" className="relative max-h-72" ></Image>
                <Badge className="absolute m-3">{params.topic}</Badge>
                <div className="px-5 py-3">
                    <h1 className="font-bold text-xl pb-2">{params.title}</h1>
                    <p className="font-extralight">{params.description}</p>

                    <div className="grid grid-cols-2 w-full pt-6">
                        <p className="font-bold hover:underline cursor-pointer" >Read Report</p>
                        <Button className="bg-white text-black hover:bg-white justify-self-end"><ArrowRightIcon /></Button>
                    </div>
                </div>
            </div>
        </>
    )
}

const Project = () => {
    const projects: ProjectProps[] = [
        {
            id:1,
            image: "/images/project.jpg",
            topic: "Deforestation",
            title: "Project Canopy Alpha",
            description: "Restoring foundational tree cover in degraded temperate zones to rebuild local biodiversy networks and stabilzie soil ecosystem"
        },
        {
            id:2,
            image: "/images/water.jpg",
            topic: "Water Policy",
            title: "Aquifier Protection",
            description: "Legisiative advocacy to secure underground water reserves against industrial depletion"
        },
        {
            id:3,
            image: "/images/project.jpg",
            topic: "Water Policy",
            title: "Aquifier Protection",
            description: "Legisiative advocacy to secure underground water reserves against industrial depletion"
        }
    ]
    return (
        <div className="relative bg-gray-100 p-12 ">
            <div className="text-black w-full pb-6" >
                <h1 className=" text-4xl font-serif">Current Initiatives</h1>
                <p className="max-w-xl py-5">Focused, strategic campaigns designed to adress critical enviromental vulnerabilities with scientific precision.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-15">
                {projects.map(item => (
                    <ProjectInfo params={item} key={item.id} />
                ))}
            </div>



        </div>
    )
}

export default Project