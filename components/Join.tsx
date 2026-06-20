import React from 'react'
import { Field, FieldLabel, FieldDescription } from './ui/field'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Join = () => {
    return (
        <div className='justify-center items-center p-14 py-16 w-full'>
            <div className="bg-green-950 p-12 text-center rounded-3xl">
                <h1 className='text-gray-500 text-2xl font-serif'>Join the Collective Effort</h1>
                <p className='text-white max-w-xl mx-auto py-4'>Subscribe to our editorial newsletter for deep-dives into enviromental science, policy updates, and immediate actions alerts.</p>
                <div className="max-w-md mx-auto flex flex-cols-2 gap-3 pt-5">
                    <Field className='min-w-4xs '>
                        <Input id="name" autoComplete="off" placeholder="Enter your proffesional email " className='py-6 bg-white ' />
                    </Field>
                    <Button className='py-6 min-w-5xs'>Subscribe</Button>
                </div>
            </div>
        </div>
    )
}

export default Join