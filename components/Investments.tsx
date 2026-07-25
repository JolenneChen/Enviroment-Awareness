"use client"
import { ShieldCheckIcon, UserIcon, MoneyIcon } from '@phosphor-icons/react'
import { Button } from '@base-ui/react'
import { Toggle } from "@/components/tailgrids/core/toggle";

const Investments = () => {
    return (
        <div className='md:p-12 max-w-7xl mx-auto bg-[#f4ffff] '>
            <div className="bg-white p-12 border shadow-2xl text-center justify-center">
                <ShieldCheckIcon size={32} className='mx-auto' />
                <h1 className='text-4xl font-serif'>Complete Your Investments</h1>
                <p className='max-w-md font-light mx-auto'>Your transaction is secured by end-to-end 256-bit bank-grade encryption.</p>
                <div className="grid md:grid-cols-2 grid-cols-1 max-w-6xl gap-6 mx-auto py-8 text-left">
                    <div className="">
                        <p className='inline-flex'><UserIcon size={20} className='' />Contributor Details</p>
                        <hr />
                        <br />
                        <fieldset className='pb-8'>
                            <legend>Full Name</legend>
                            <input type="text" placeholder='Jane Doe' className='border-4 rounded-4xl p-2 max-w-120 w-full' />
                        </fieldset>
                        <fieldset>
                            <legend>Email Address</legend>
                            <input type="text" placeholder='Jane.Doe@gmail.com' className='border-4 rounded-4xl p-2 max-w-120 w-full' />
                        </fieldset>

                    </div>

                    <div className="">
                        <p className='inline-flex'><MoneyIcon size={20} className='mr-3' />Payment Information</p>
                        <hr />
                        <br />

                        <fieldset className=' pb-8'>
                            <legend>Card Number</legend>
                            <input type="text" placeholder='0000 0000 0000 0000' className='border-4 rounded-4xl p-2 max-w-120 w-full' />
                        </fieldset>
                        <div className='flex max-w-120 w-full ' >
                            <fieldset className='flex-1'>
                                <legend>Expiry</legend>
                                <input type="text" placeholder='MM/YY' className='border-4 rounded-4xl p-2 w-full' />
                            </fieldset>
                            <fieldset className='flex-1'>
                                <legend>CVC</legend>
                                <input type="text" placeholder='123' className='border-4 rounded-4xl p-2 w-full' />
                            </fieldset>
                        </div>
                    </div>

                </div>
                <div className="bg-[#f1efef] w-full rounded-3xl border-[#b6b6b6] border-2 grid md:grid-cols-2 py-3 max-w-275 mx-auto text-left ">
                    <div className="p-10">
                        <div className="inline-flex text-left">
                            <Toggle label="Enable Feature X" defaultChecked />
                            <p className='pl-2'>Cover Transaction Fees ($0.85)</p>
                        </div>

                        <div className="inline-flex text-left pt-5 ">
                            <Toggle label="Enable Feature X" defaultChecked />
                            <p className='pl-2'>Make this contribution anonymous</p>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 bg-white border-2 rounded-3xl justify-self-end p-6 px-10 mr-20 m-5">
                        <p>Total Contribution</p>
                        <h1 className='text-4xl font-serif'>$100.85</h1>
                    </div>
                </div>
                <Button className="bg-black p-6 w-full max-w-275 mr-15 rounded-4xl text-white text-xl py-5 mt-12">Process Secure Investment</Button>
                <p className='text-center font-light text-md max-w-6xl mx-auto py-5'>By clicking above, you agree to our terms of service and acknowledge that your contribution will be used for environmental regeneration projects as specified in our charter. All contributions are tax-deductible.</p>
            </div>
        </div>
    )
}

export default Investments