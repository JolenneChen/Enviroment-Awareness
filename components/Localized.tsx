import React from 'react'

const Localized = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-12 md:gap-0 bg-[#eef5f3] w-full p-12'>
            
            <div className=" bg-[#dfe4e3] m-12 p-12 max-w-2xl mx-auto  justify-center text-center rounded-3xl">
                <p className='text-gray-500 md:py-5'>NETWORK IMPACT</p>
                <div className="grid grid-rows-3 md:gap-12 gap-6 max-w-2xl ">
                    <div className="flex justify-between ">
                        <p className='mt-3'>Active Chapters</p>
                        <p className='text-4xl font-serif font-bold ml-12'>142</p>
                    </div>
                    <div className="flex justify-between ">
                        <p className='mt-3'>Restored Hectares</p>
                        <p className='text-4xl font-serif font-bold'>12.4k</p>
                    </div>
                    <div className="flex justify-between ">
                        <p className='mt-3'>Global Volunteers</p>
                        <p className='text-4xl font-serif font-bold'>85k+</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-10 md:max-w-xl">
                <p className='text-gray-500'>NOV 15 • VANCOUVER, BC</p>
                <h1 className='text-5xl font-serif'>Find your people, start your project.</h1>
                <p>EcoEcho chapters operate autonomously but are supported by our global scientific board. Each chapter focuses on the unique environmental challenges of their bioregion.</p>
                <div className="grid grid-rows-3 gap-5">
                    <div className="">
                        <h1 className='text-xl font-medium'> Decentralized Governance</h1>
                        <p>Every chapter has a vote in global platform initiatives and funding allocation.</p>
                    </div>
                    <div className="">
                        <h1 className='text-xl font-medium'>Scientific Backing</h1>
                        <p>Access to proprietary satellite data and ecological restoration protocols.</p>
                    </div>
                    <div className="">
                        <h1 className='text-xl font-medium'>Resource Sharing</h1>
                        <p>Shared tool libraries, volunteer networks, and local funding grants.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Localized