// rafce
"use client"
interface ImpactProps {
    id: number,
    number: number,
    quantity:string,
    desc: string
}
export const ImpactInfo = ({ params }: { params: ImpactProps }) => {
    return (
        <div className="bg-gray-200 w-full p-6 px-4 justify-center items-center">
            <div className="bg-white max-w-2xl p-12 rounded-3xl text-center">
                <h1 className=" text-green-700 text-5xl font-bold font-serif">{params.number}{params.quantity}</h1>
                <p className="font-mono">{params.desc}</p>
            </div>
        </div>
    )
}

const Impact = () => {
    const projects: ImpactProps[] = [
        {
            id: 1,
            number:2.4,
            quantity: "M",
            desc: "trees planted"
        },
        {
            id: 2,
            number: 15,
            quantity:"K",
            desc: "Hectares protected"
        },
        {
            id: 3,
            number: 84,
            quantity:"",
            desc: "Active Policies"
        }

    ]
    return (
        <div className="bg-gray-200 w-full p-12 justify-center items-center">
            <div className="grid grid-cols-1 text-center">
                <h1 className="text-3xl py-2 font-serif">Measurable Impact</h1>
                <p>Data-driven results from our collective efforts</p>
            </div>
            <div className="grid lg:grid-cols-3 ">
                {projects.map(item => (
                    <ImpactInfo params={item} key={item.id} />
                ))}
            </div>
        </div>

    )
}

export default Impact