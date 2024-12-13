import React from 'react';
import { usePathname } from "next/navigation"
import TopNav from './includes/TopNav';

export default function MainLayout({children}:{children:React.ReactNode}){
    const pathname = usePathname()
    return(
        <>
            <TopNav />
            <div className={`flex justify-between mx-auto w-full lg:px2.5 px-0${pathname == '/' ? 'max-w-[1140PX]':'' }`}>
                {children}
            </div>
        </>
    )
}