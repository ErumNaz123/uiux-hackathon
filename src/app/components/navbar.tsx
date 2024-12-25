
import Image from "next/image"

import React from "react"

export default function Navbar(){
    return(
       <div className="bg-gray-200">

        <div className="">
          
          <div className="flex justify-around items-center border-2 border-gray-300 mt-5 p-5 bg-white">
            <div className="">
                  <Image src={'/assets/logo.png'} alt="" width={148} height={44}></Image>
            </div>
            
            <div>
                <div className="flex justify-center items-center">
                      <div className="border-2 w-[492px] h-[44px] rounded-3xl flex justify-around  gap-3 
                          p-2">
          
                        <Image src={'/assets/search.png'} alt='Search' width={24} height={24}  />
                        <input
                          type="text"
                          placeholder="Search"
                          className=" w-[149px] h-[20px]    "
                        />
                        
                        <Image src={'/assets/filter.png'} alt='Cart' width={24} height={24} />
                      </div>
                      
                </div>
            </div>
            <div className="flex ">
                      <div className="w-[44px] h-[44px]"> <Image src={'/assets/heart.png'} alt='' width={24} height={24}></Image></div>
                      <div className="w-[44px] h-[44px]"> <Image src={'/assets/notification.png'} alt='' width={24} height={24} ></Image></div>
                      <div className="w-[44px] h-[44px]"> <Image src={'/assets/setting-2.png'} alt='' width={24} height={24}></Image></div>
                      <div className="w-[44px] h-[44px]"> <Image src={'/assets/pic-3.jpg'} alt='pic' width={24} height={24}className="rounded-lg " /></div>
            </div>
          </div>
          
        </div>
       </div>
    )
}