import { MailCheckIcon, MapPinIcon, TabletSmartphoneIcon } from 'lucide-react'
import React from 'react'

const ContactBody = () => {
    return (
        <div className='flex flex-col justify-center items-center py-12 gap-6'>
            <h1 className='text-[36px] font-semibold'>Get in Touch</h1>
            <p className='text-[20px] text-neutralGrey text-center'>Consectetur a erat per sem nisi leo placerat dui a adipiscing a sagittis vestibulum.<br />Sagittis posuere id nam quis vestibulum faucibus a est tristique.</p>

            <div className='flex flex-wrap flex-col sm:flex-row justify-between items-start sm:items-center gap-12 md:gap-24 mt-2'>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <MapPinIcon className='w-8 h-8 text-brandPrimary' />
                    <div className='flex flex-col justify-start items-start gap-1'>
                        <p className='text-[18px] font-semibold'>Address</p>
                        <p className='text-[16px]'>530 Old Buffalo Street</p>
                    </div>
                </div>

                <div className='flex flex-row justify-start items-center gap-2'>
                    <TabletSmartphoneIcon className='w-8 h-8 text-brandPrimary' />
                    <div className='flex flex-col justify-start items-start gap-1'>
                        <p className='text-[18px] font-semibold'>Emergency Call</p>
                        <p className='text-[16px]'>+1 (123) -456-7890</p>
                    </div>
                </div>

                <div className='flex flex-row justify-start items-center gap-2'>
                    <MailCheckIcon className='w-8 h-8 text-brandPrimary' />
                    <div className='flex flex-col justify-start items-start gap-1'>
                        <p className='text-[18px] font-semibold'>Email Us</p>
                        <p className='text-[16px]'>xyz@gmail.com</p>
                    </div>
                </div>
            </div>

            <div
                className='px-8 py-12 w-[80%] rounded-xl'
                style={{
                    background: 'linear-gradient(-41deg, #09c778, #01a0f9)',
                }}
            >
                <form className='flex flex-col space-y-4 w-full'>
                    <div className='flex flex-row w-full gap-8'>
                        <input
                            type='text'
                            placeholder='Name'
                            className='p-3 rounded border w-full border-gray-300 focus:outline-none focus:ring-2 duration-300 focus:ring-brandPrimary'
                        />
                        <input
                            type='email'
                            placeholder='Email'
                            className='p-3 rounded border w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandPrimary'
                        />
                    </div>
                    <div className='flex flex-row w-full gap-8'>
                        <input
                            type='tel'
                            placeholder='Phone Number'
                            className='p-3 rounded border w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandPrimary'
                        />
                        <input
                            type='text'
                            placeholder='Subject'
                            className='p-3 rounded border w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandPrimary'
                        />
                    </div>
                    <textarea
                        placeholder='Message'
                        className='p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandPrimary h-32'
                    />
                    <button
                        type='submit'
                        className='bg-neutralDGrey text-white p-3 rounded hover:bg-brandPrimary focus:outline-none focus:ring-2 focus:ring-brandPrimary duration-300 hover:translate-y-[-2px]'
                    >
                        Submit Now!
                    </button>
                </form>
            </div>

            <div className='flex w-full h-[70vh] mt-12'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509645!2d144.95373531547927!3d-37.81627974202142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e6c8d4ff194!2s530%20Collins%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1633013122073!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    )
}

export default ContactBody