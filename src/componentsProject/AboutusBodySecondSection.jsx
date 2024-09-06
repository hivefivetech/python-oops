import React from 'react'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import Icon1 from '../assets/icons/artificial-intelligence.png'
import Icon2 from '../assets/icons/live-chat.png'

const AboutusBodySecondSection = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-neutralSilver px-14 py-16 mt-8'>
            <h1 className='text-[42px] text-neutralDGrey font-bold'>What We Do</h1>

            <div className='w-full'>
                <Tabs defaultValue="machineLearning" className="w-full">

                    <TabsList className="flex flex-col w-full sm:grid grid-cols-3 mb-6 mt-6 px-0 sm:px-12 md:px-20 lg:px-32">
                        <TabsTrigger value="machineLearning" className="w-full">Machine Learning</TabsTrigger>
                        <TabsTrigger value="deepLearning" className="w-full">Deep Learning</TabsTrigger>
                        <TabsTrigger value="artificialIntelligence" className="w-full">Artificial Intelligence</TabsTrigger>
                    </TabsList>

                    <TabsContent value="machineLearning" className="flex flex-row flex-wrap gap-12 justify-center items-center">
                        <Card className="w-[500px]">
                            <div className='flex flex-col justify-center items-center px-8 py-12 gap-3 text-center duration-300 hover:translate-y-[-3px] hover:shadow-lg hover:bg-[#f1ffff]'>
                                <img src={Icon1} alt='' className='w-20 h-20' />
                                <h1 className='text-[28px] text-neutralDGrey font-semibold'>Virtual Personal Assistants</h1>
                                <p className='text-[16px] text-neutralGrey font-normal'>Capitalize on low hanging fruit to identify a ball park value added activity to beta test. Override the digital divide with additional</p>
                            </div>
                        </Card>
                        <Card className="w-[500px]">
                            <div className='flex flex-col justify-center items-center px-8 py-12 gap-3 text-center duration-300 hover:translate-y-[-3px] hover:shadow-lg hover:bg-[#f1ffff]'>
                                <img src={Icon2} alt='' className='w-20 h-20' />
                                <h1 className='text-[28px] text-neutralDGrey font-semibold'>Videos Surveillance</h1>
                                <p className='text-[16px] text-neutralGrey font-normal'>Capitalize on low hanging fruit to identify a ball park value added activity to beta test. Override the digital divide with additional</p>
                            </div>
                        </Card>
                        <Card className="w-[500px]">
                            <div className='flex flex-col justify-center items-center px-8 py-12 gap-3 text-center duration-300 hover:translate-y-[-3px] hover:shadow-lg hover:bg-[#f1ffff]'>
                                <img src={Icon1} alt='' className='w-20 h-20' />
                                <h1 className='text-[28px] text-neutralDGrey font-semibold'>Social Media Services</h1>
                                <p className='text-[16px] text-neutralGrey font-normal'>Capitalize on low hanging fruit to identify a ball park value added activity to beta test. Override the digital divide with additional</p>
                            </div>
                        </Card>
                    </TabsContent>

                    <TabsContent value="deepLearning" className="flex flex-row flex-wrap gap-12 justify-center items-center">
                        <Card className="w-[500px]">
                            <div className='flex flex-col justify-center items-center px-8 py-12 gap-3 text-center duration-300 hover:translate-y-[-3px] hover:shadow-lg hover:bg-[#f1ffff]'>
                                <img src={Icon2} alt='' className='w-20 h-20' />
                                <h1 className='text-[28px] text-neutralDGrey font-semibold'>Online Customer Support</h1>
                                <p className='text-[16px] text-neutralGrey font-normal'>Capitalize on low hanging fruit to identify a ball park value added activity to beta test. Override the digital divide with additional</p>
                            </div>
                        </Card>
                        <Card className="w-[500px]">
                            <div className='flex flex-col justify-center items-center px-8 py-12 gap-3 text-center duration-300 hover:translate-y-[-3px] hover:shadow-lg hover:bg-[#f1ffff]'>
                                <img src={Icon1} alt='' className='w-20 h-20' />
                                <h1 className='text-[28px] text-neutralDGrey font-semibold'>Search Engine Result Refining</h1>
                                <p className='text-[16px] text-neutralGrey font-normal'>Capitalize on low hanging fruit to identify a ball park value added activity to beta test. Override the digital divide with additional</p>
                            </div>
                        </Card>
                        <Card className="w-[500px]">
                            <div className='flex flex-col justify-center items-center px-8 py-12 gap-3 text-center duration-300 hover:translate-y-[-3px] hover:shadow-lg hover:bg-[#f1ffff]'>
                                <img src={Icon2} alt='' className='w-20 h-20' />
                                <h1 className='text-[28px] text-neutralDGrey font-semibold'>Online Fraud Detection</h1>
                                <p className='text-[16px] text-neutralGrey font-normal'>Capitalize on low hanging fruit to identify a ball park value added activity to beta test. Override the digital divide with additional</p>
                            </div>
                        </Card>
                    </TabsContent>

                    <TabsContent value="artificialIntelligence" className="flex flex-row flex-wrap gap-12 justify-center items-center">
                        <Card className="w-[500px]">
                            <div className='flex flex-col justify-center items-center px-8 py-12 gap-3 text-center duration-300 hover:translate-y-[-3px] hover:shadow-lg hover:bg-[#f1ffff]'>
                                <img src={Icon1} alt='' className='w-20 h-20' />
                                <h1 className='text-[28px] text-neutralDGrey font-semibold'>Videos Surveillance</h1>
                                <p className='text-[16px] text-neutralGrey font-normal'>Capitalize on low hanging fruit to identify a ball park value added activity to beta test. Override the digital divide with additional</p>
                            </div>
                        </Card>
                        <Card className="w-[500px]">
                            <div className='flex flex-col justify-center items-center px-8 py-12 gap-3 text-center duration-300 hover:translate-y-[-3px] hover:shadow-lg hover:bg-[#f1ffff]'>
                                <img src={Icon2} alt='' className='w-20 h-20' />
                                <h1 className='text-[28px] text-neutralDGrey font-semibold'>Online Customer Support</h1>
                                <p className='text-[16px] text-neutralGrey font-normal'>Capitalize on low hanging fruit to identify a ball park value added activity to beta test. Override the digital divide with additional</p>
                            </div>
                        </Card>
                        <Card className="w-[500px]">
                            <div className='flex flex-col justify-center items-center px-8 py-12 gap-3 text-center duration-300 hover:translate-y-[-3px] hover:shadow-lg hover:bg-[#f1ffff]'>
                                <img src={Icon1} alt='' className='w-20 h-20' />
                                <h1 className='text-[28px] text-neutralDGrey font-semibold'>Social Media Services</h1>
                                <p className='text-[16px] text-neutralGrey font-normal'>Capitalize on low hanging fruit to identify a ball park value added activity to beta test. Override the digital divide with additional</p>
                            </div>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default AboutusBodySecondSection