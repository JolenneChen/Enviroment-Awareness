import React from 'react'
import { Field } from './ui/field'
import { Button } from './ui/button'
import { Input } from './ui/input'

const Local = () => {
    return (
        <div className='justify-center items-center p-30 py-16 w-full bg-[#f5fffc]'>
            <div className="bg-white border border-black p-12 rounded-3xl">
                <h1 className='text-gray-500 text-xl font-serif'>Find your local chapter</h1>
                <div className=" flex flex-cols-2 gap-8 pt-5 p-2">
                    <Field className='min-w-4xs'>
                        <Input id="name" autoComplete="off" placeholder="Enter your proffesional email " className='py-8 bg-white rounded-3xl' />
                    </Field>
                    <Button className='py-8 min-w-3xs rounded-3xl'>Subscribe</Button>
                </div>
            </div>
        </div>    )
}

export default Local