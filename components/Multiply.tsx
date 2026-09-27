import { Button } from '@base-ui/react'
import React from 'react'

const Multiply = () => {
  return (
    <div className='text-center bg-[#dde9e4] p-25 text-black'>
        <h1 className='text-4xl font-serif'>Ready to multiply your impact?</h1>
        <p className='text-black py-8 font-light text-[15px] '>Join 500,000+ partners dedicated to cooling the planet.</p>
        <div className=" grid grid-cols-2 max-w-xl mx-auto">
            <Button className="bg-black rounded-full text-white p-5">Join The Movement</Button>
            <a href="https://www.thrive.org.uk/?gad_source=1&gad_campaignid=18741447752&gbraid=0AAAAAC6KlWjTBVgwHuKADOEN3A9NjMrVP&gclid=CjwKCAjwvZHTBhAlEiwA1ug5P_bipZVHHLnZyMTV92SrfnoBrWdwVb0ThGbUb28YFL6bcKBpKgTkKBoCi7MQAvD_BwE"className='py-5 hover:underline'>View 2024 Report</a>

        </div>
    </div>
  )
}

export default Multiply