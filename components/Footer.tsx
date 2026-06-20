import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='border-t-2 py-8'>
        <footer className='grid grid-cols-2 '>
            <div className="p-6">
                <h1 className=' font-bold font-serif text-xl'>EcoEcho</h1>
                <p className='text-gray-700'>&copy; 2024 EcoEcho Collective. Dedicated to planetary restoration.</p>
            </div>
            <div className="flex justify-center items-center text-center p-6 gap-7">
                <Link href="#" className='underline underline-offset-4'>Privacy Policy</Link>
                <Link href="#" className='underline underline-offset-4'>Terms of Service</Link>
                <Link href="#" className='underline underline-offset-4'>Annual Report</Link>
                <Link href="#" className='underline underline-offset-4'>Contact Us</Link>
                <Link href="#" className='underline underline-offset-4'>Newsletter</Link>
            </div>
        </footer>
    </div>
  )
}

export default Footer