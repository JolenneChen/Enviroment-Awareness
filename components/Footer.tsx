import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='border-t-2 py-8 bg-white border-black'>
        <footer className='grid grid-cols-2 '>
            <div className="p-6">
                <h1 className=' font-bold font-serif text-xl text-black'>EcoEcho</h1>
                <p className='text-gray-700 text-black'>&copy; 2024 EcoEcho Collective. Dedicated to planetary restoration.</p>
            </div>
            <div className="flex justify-center items-center text-center p-6 gap-7">
                <Link href="#" className='underline underline-offset-4 text-black'>Privacy Policy</Link>
                <Link href="#" className='underline underline-offset-4 text-black'>Terms of Service</Link>
                <Link href="#" className='underline underline-offset-4 text-black'>Annual Report</Link>
                <Link href="#" className='underline underline-offset-4 text-black'>Contact Us</Link>
                <Link href="#" className='underline underline-offset-4 text-black'>Newsletter</Link>
            </div>
        </footer>
    </div>
  )
}

export default Footer