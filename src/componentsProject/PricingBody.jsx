import { CheckIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const PricingBody = () => {
    return (
        <div className='flex flex-col justify-center items-center py-24 gap-6 bg-neutralSilver px-14'>
            <div className='flex flex-row flex-wrap justify-center items-center gap-12'>

                {/* MONTHLY PLAN */}
                <div className='flex flex-col w-[300px] justify-center items-center bg-white duration-300 hover:bg-[#fff2ed] hover:translate-y-[-3px] rounded-b-xl'>
                    <div className='flex justify-center items-center w-full py-4 rounded-t-xl bg-[#cc6332]'>
                        <p className='text-white text-[20px] font-semibold tracking-wide'>MONTHLY</p>
                    </div>

                    <div className='flex justify-center items-center w-full py-12 bg-[#ff7c3f]'>
                        <h3 className='text-white text-[32px] tracking-wider font-semibold'>
                            <small>£</small>
                            25
                            <small>/ Month</small>
                        </h3>
                    </div>

                    <div className='flex justify-center items-center gap-1.5 pt-10'>
                        <CheckIcon className='text-[#ff7c3f]' />
                        <p className='text-neutralDGrey text-[18px]'>7 days free trial</p>
                    </div>
                    <div className='flex justify-center items-center gap-1.5 pt-7'>
                        <CheckIcon className='text-[#ff7c3f]' />
                        <p className='text-neutralDGrey text-[18px]'>Monthly purchase</p>
                    </div>
                    <div className='flex justify-center items-center gap-1.5 pt-7'>
                        <CheckIcon className='text-[#ff7c3f]' />
                        <p className='text-neutralDGrey text-[18px]'>Multiple user access</p>
                    </div>
                    <div className='flex justify-center items-center gap-1.5 pt-7'>
                        <CheckIcon className='text-[#ff7c3f]' />
                        <p className='text-neutralDGrey text-[18px]'>Regular updates</p>
                    </div>
                    <div className='flex justify-center items-center gap-1.5 pt-7'>
                        <CheckIcon className='text-[#ff7c3f]' />
                        <p className='text-neutralDGrey text-[18px]'>Support</p>
                    </div>

                    <div className='flex justify-center items-center py-12'>
                        <Link to="/create_subscription" state={{ priceId: "price_1PgNsEDwjbcVhxIpfQrMuQln", purchase_type: "subscription", plan: 'monthly' }}>
                            <button className='bg-[#ff7c3f] px-6 py-2 text-white text-[16px] rounded-sm hover:bg-[#cc6332] duration-300 hover:scale-90'>
                                <p>PAY NOW</p>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* QUARTERLY PLAN */}
                <div className='flex flex-col w-[300px] justify-center items-center bg-white duration-300 hover:bg-[#faf1e4] hover:translate-y-[-3px] rounded-b-xl'>
                    <div className='flex justify-center items-center w-full py-4 rounded-t-xl bg-[#b16a06]'>
                        <p className='text-white text-[20px] font-semibold tracking-wide'>QUARTERLY</p>
                    </div>

                    <div className='flex justify-center items-center w-full py-12 bg-[#dd8507]'>
                        <h3 className='text-white text-[32px] tracking-wider font-semibold'>
                            <small>£</small>
                            80
                            <small>/ Quarter</small>
                        </h3>
                    </div>

                    <div className='flex justify-center items-center gap-1.5 pt-10'>
                        <CheckIcon className='text-[#dd8507]' />
                        <p className='text-neutralDGrey text-[18px]'>7 days free trial</p>
                    </div>
                    <div className='flex justify-center items-center gap-1.5 pt-7'>
                        <CheckIcon className='text-[#dd8507]' />
                        <p className='text-neutralDGrey text-[18px]'>Quarterly purchase</p>
                    </div>
                    <div className='flex justify-center items-center gap-1.5 pt-7'>
                        <CheckIcon className='text-[#dd8507]' />
                        <p className='text-neutralDGrey text-[18px]'>Multiple user access</p>
                    </div>
                    <div className='flex justify-center items-center gap-1.5 pt-7'>
                        <CheckIcon className='text-[#dd8507]' />
                        <p className='text-neutralDGrey text-[18px]'>Regular updates</p>
                    </div>
                    <div className='flex justify-center items-center gap-1.5 pt-7'>
                        <CheckIcon className='text-[#dd8507]' />
                        <p className='text-neutralDGrey text-[18px]'>Support</p>
                    </div>

                    <div className='flex justify-center items-center py-12'>
                        <Link to="/create_subscription" state={{ priceId: "price_1Pl57yDwjbcVhxIpBwzsEoBJ", purchase_type: "subscription", plan: 'quarterly' }}>
                            <button className='bg-[#dd8507] px-6 py-2 text-white text-[16px] rounded-sm hover:bg-[#b16a06] duration-300 hover:scale-90'>
                                <p>PAY NOW</p>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* YEARLY PLAN */}
                <div className='flex flex-col w-[300px] justify-center items-center bg-white duration-300 hover:bg-[#ffece7] hover:translate-y-[-3px] rounded-b-xl'>
                    <div className='flex justify-center items-center w-full py-4 rounded-t-xl bg-[#cc421e]'>
                        <p className='text-white text-[20px] font-semibold tracking-wide'>YEARLY</p>
                    </div>

                    <div className='flex justify-center items-center w-full py-12 bg-[#ff5325]'>
                        <h3 className='text-white text-[32px] tracking-wider font-semibold'>
                            <small>£</small>
                            250
                            <small>/ Year</small>
                        </h3>
                    </div>

                    <div className='flex justify-center items-center gap-1.5 pt-10'>
                        <CheckIcon className='text-[#ff5325]' />
                        <p className='text-neutralDGrey text-[18px]'>14 days free trial</p>
                    </div>
                    <div className='flex justify-center items-center gap-1.5 pt-7'>
                        <CheckIcon className='text-[#ff5325]' />
                        <p className='text-neutralDGrey text-[18px]'>Annual purchase</p>
                    </div>
                    <div className='flex justify-center items-center gap-1.5 pt-7'>
                        <CheckIcon className='text-[#ff5325]' />
                        <p className='text-neutralDGrey text-[18px]'>Multiple user access</p>
                    </div>
                    <div className='flex justify-center items-center gap-1.5 pt-7'>
                        <CheckIcon className='text-[#ff5325]' />
                        <p className='text-neutralDGrey text-[18px]'>Regular updates</p>
                    </div>
                    <div className='flex justify-center items-center gap-1.5 pt-7'>
                        <CheckIcon className='text-[#ff5325]' />
                        <p className='text-neutralDGrey text-[18px]'>24 Hours Support</p>
                    </div>

                    <div className='flex justify-center items-center py-12'>
                        <Link to="/create_subscription" state={{ priceId: "price_1Pl5EyDwjbcVhxIpJrnsLIy0", purchase_type: "subscription", plan: 'yearly' }}>
                            <button className='bg-[#ff5325] px-6 py-2 text-white text-[16px] rounded-sm hover:bg-[#cc421e] duration-300 hover:scale-90'>
                                <p>PAY NOW</p>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Custom PLAN */}
                <div className='flex flex-col w-[300px] justify-center items-center bg-white duration-300 hover:bg-[#fcebff] hover:translate-y-[-3px] rounded-b-xl'>
                    <div className='flex justify-center items-center w-full py-4 rounded-t-xl bg-[#85069a]'>
                        <p className='text-white text-[20px] font-semibold tracking-wide'>CUSTOMIZED</p>
                    </div>

                    <div className='flex justify-center items-center w-full py-12 bg-[#a608c1]'>
                        <h3 className='text-white text-[32px] tracking-wider font-semibold'>
                            <small>£</small>
                            6000
                            <small>/ Year</small>
                        </h3>
                    </div>

                    <div className='flex justify-center items-center gap-1.5 pt-10'>
                        <CheckIcon className='text-[#a608c1]' />
                        <p className='text-neutralDGrey text-[18px]'>Company Branding</p>
                    </div>
                    <div className='flex justify-center items-center gap-1.5 pt-7'>
                        <CheckIcon className='text-[#a608c1]' />
                        <p className='text-neutralDGrey text-[18px]'>Database & Server Installation</p>
                    </div>
                    <div className='flex justify-center items-center gap-1.5 pt-7'>
                        <CheckIcon className='text-[#a608c1]' />
                        <p className='text-neutralDGrey text-[18px]'>10 000 Annotated Images</p>
                    </div>
                    <div className='flex justify-center items-center gap-1.5 pt-7'>
                        <CheckIcon className='text-[#a608c1]' />
                        <p className='text-neutralDGrey text-[18px]'>Website installation</p>
                    </div>
                    <div className='flex justify-center items-center gap-1.5 pt-7'>
                        <CheckIcon className='text-[#a608c1]' />
                        <p className='text-neutralDGrey text-[18px]'>24 Hours Support</p>
                    </div>

                    <div className='flex justify-center items-center py-12'>
                    <Link to="/create_subscription" state={{ priceId: "price_1Pl5G4DwjbcVhxIp9l0VbjuJ", purchase_type: "custom", plan: 'oneoff' }}>
                        <button className='bg-[#a608c1] px-6 py-2 text-white text-[16px] rounded-sm hover:bg-[#85069a] duration-300 hover:scale-90'>
                            <p>PAY NOW</p>
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingBody