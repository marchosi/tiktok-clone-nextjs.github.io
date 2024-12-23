"use client"

import ClientOnly from "../components/ClientOnly";
import MainLayout from "@/app/layouts/MainLayout";
import { ProfilePageTypes } from "@/app/types";
import { BsPencil } from "react-icons/bs";



export default function Profile({ params }: ProfilePageTypes) {
    const currentProfile ={
        id:'123',
        user_id:'123',
        name:'John Weeks',
        image:'http://placehold.co/200',
        bio:'this is the bio section!!!'
    }
    return (
        <>
            <MainLayout>
                <div className="pt-[90px] nl-[90px] 2xl:pl-[185px] lg:pl-[160px] lg:pr-0 w-[calc(100%-90px)] pr-3 max-w-[1800px] 2xl:mx-auto">
                    <div className="flex w-[calc(100vw-230px)]">
                        <ClientOnly>
                            {true ? (
                                <img className="w-[120px] min-w-[120px] rounded-full" src="{currentProfile.image}"/>
                            ):(
                                <div className="min-w-[150px] h-[120[px] bg-gray-200 rounded-full"/>
                            )}
                        </ClientOnly>

                        <div className="ml-5 w-full">
                            <ClientOnly>
                                {currentProfile?.name ?(
                                    <div>
                                        <p className="text-[30px] font-bold truncate">{currentProfile?.name}</p>
                                        <p className="text-[18px] truncate">{currentProfile?.name}</p>
                                    </div>
                                ):(
                                    <div className="h-[60px]"/>
                                )}
                            </ClientOnly>

                            {true ? (
                                <button className="flex item-center rounded-md py-1.5 px-3.5 mt-3 text-[15px] font-semibold border hover:bg-gray-100"
                                >
                                    <BsPencil className='mt-0.5 mr-1' size='18'/>    
                                    <span>Edit profile</span>
                                </button>
                            ):(
                                <button
                                    className="flex item-center rounded-md py-1.5 px-8 mt-3 text-[15px] text-white font-semibold bg-[#F02C56]"
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}