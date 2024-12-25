"use client"

import Image from "next/image"
import React from "react"

export default function Hero(){
    return(
<div className=" bg-gray-200">
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-4 md:m-10">
  {/* Left Section */}
  <div className="bg-blue-400 text-white rounded-md flex flex-col p-5 gap-4">
    <h1 className="text-2xl md:w-auto">The Best Platform for Car Rental</h1>
    <p className="md:w-auto">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
    <button className="bg-blue-700 w-full md:w-[120px] h-[44px] rounded-md">Rental Car</button>
    <Image src={'/assets/image-7.png'} alt="Car rental" width={406} height={116} className="self-center" />
  </div>

  {/* Right Section */}
  <div className="bg-blue-800 text-white rounded-md flex flex-col p-5 gap-4 ">
    <h1 className="text-2xl md:w-auto">The Best Platform for Car Rental</h1>
    <p className="md:w-auto">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
    <button className="bg-blue-700 w-full md:w-[120px] h-[44px] rounded-md">Rental Car</button>
    <Image src={'/assets/image-7.png'} alt="Car rental" width={406} height={116} className="self-center" />
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3  m-4 md:m-10  items-center justify-items-center justify-around">
  {/* Pick-Up Section */}
  <div className="bg-white p-4 rounded-md [w-482px] h-[136px]">
    <div className="flex items-center gap-2 ">
      <Image src={'/assets/mark.png'} alt="Pick-Up Icon" width={24} height={24} />
      <h1 className="font-semibold">Pick-Up</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
      <div>
        <label className="block text-gray-600">Location</label>
        <select className="w-full border rounded-md p-2">
          <option value="">Select your city</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-600">Date</label>
        <select className="w-full border rounded-md p-2">
          <option value="">Select your date</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-600">Time</label>
        <select className="w-full border rounded-md p-2">
          <option value="">Select your time</option>
        </select>
      </div>
    </div>
  </div>

  {/* Swap Icon */}
  <div className="w-[60px] h-[60px] bg-blue-500 flex items-center justify-center rounded-md mx-auto">
    <Image src={'/assets/Swap.png'} alt="Swap Icon" width={24} height={24} />
  </div>

  {/* Drop-Off Section */}
  <div className="bg-white p-4 rounded-md  [w-482px] h-[136px]">
    <div className="flex items-center gap-2">
      <Image src={'/assets/mark.png'} alt="Drop-Off Icon" width={24} height={24} />
      <h1 className="font-semibold">Drop-Off</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
      <div>
        <label className="block text-gray-600">Location</label>
        <select className="w-full border rounded-md p-2">
          <option value="">Select your city</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-600">Date</label>
        <select className="w-full border rounded-md p-2">
          <option value="">Select your date</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-600">Time</label>
        <select className="w-full border rounded-md p-2">
          <option value="">Select your time</option>
        </select>
      </div>
    </div>
  </div>
</div>


{/* *************************** */}


<div className="flex justify-between items-center m-10 align-middle">
  <div className="text-gray-500 text-[16px]">Popular Car</div>
  <div className="text-blue-900 text-[16px] cursor-pointer">View All</div>
</div>

{/* Responsive Grid Section */}
<div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 sm:p-10 bg-white">
  {/* Card Component */}
  {[...Array(4)].map((_, index) => (
    <div key={index} className="flex flex-col gap-6 p-4 border border-gray-200 rounded-md shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-gray-800">Koenigsegg</h1>
          <p className="text-sm text-gray-500">Sports</p>
        </div>
        <Image src={'/assets/red.png'} alt="Car icon" width={24} height={24} />
      </div>
      <Image src={'/assets/image-7.png'} alt="Car image" width={232} height={72} className="self-center" />
      <div className="flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Image src={'/assets/mb.png'} alt="Fuel icon" width={20} height={20} />
          <span>90L</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={'/assets/round.png'} alt="Transmission icon" width={20} height={20} />
          <span>Manual</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={'/assets/ct.png'} alt="Capacity icon" width={20} height={20} />
          <span>2 People</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-gray-800">$99.00/day</h1>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Rent Now
        </button>
      </div>
    </div>
  ))}
</div>
             <div>
            <div className="text-gray-500 m-10 ">Recomendation Car</div>
         </div>
      {/* Responsive Grid Section */}
<div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 sm:p-10 bg-white">
  {/* Card Component */}
  {[...Array(4)].map((_, index) => (
    <div key={index} className="flex flex-col gap-6 p-4 border border-gray-200 rounded-md shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-gray-800">Koenigsegg</h1>
          <p className="text-sm text-gray-500">Sports</p>
        </div>
        <Image src={'/assets/red.png'} alt="Car icon" width={24} height={24} />
      </div>
      <Image src={'/assets/image-7.png'} alt="Car image" width={232} height={72} className="self-center" />
      <div className="flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Image src={'/assets/mb.png'} alt="Fuel icon" width={20} height={20} />
          <span>90L</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={'/assets/round.png'} alt="Transmission icon" width={20} height={20} />
          <span>Manual</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={'/assets/ct.png'} alt="Capacity icon" width={20} height={20} />
          <span>2 People</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-gray-800">$99.00/day</h1>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Rent Now
        </button>
      </div>
    </div>
  ))}
</div>

{/* Responsive Grid Section */}
<div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  bg-white">
  {/* Card Component */}
  {[...Array(4)].map((_, index) => (
    <div key={index} className="flex flex-col gap-6 p-4 border border-gray-200 rounded-md shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-gray-800">Koenigsegg</h1>
          <p className="text-sm text-gray-500">Sports</p>
        </div>
        <Image src={'/assets/red.png'} alt="Car icon" width={24} height={24} />
      </div>
      <Image src={'/assets/image-7.png'} alt="Car image" width={232} height={72} className="self-center" />
      <div className="flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Image src={'/assets/mb.png'} alt="Fuel icon" width={20} height={20} />
          <span>90L</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={'/assets/round.png'} alt="Transmission icon" width={20} height={20} />
          <span>Manual</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={'/assets/ct.png'} alt="Capacity icon" width={20} height={20} />
          <span>2 People</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-gray-800">$99.00/day</h1>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Rent Now
        </button>
      </div>
    </div>
  ))}
</div>                 
            <div className="flex justify-around items-center gap-10 align-bottom m-10  ">
                <div className="  bg-blue-700 rounded-md w-[116px] h-[24px] text-white"><button >Show more car</button></div>
                <div className="  w-[140x] h-[24px] text-gray-500">120 Car</div>
            </div>
            
<div className="bg-white">
            <div className="bg-white text-gay-500 text-[16px] flex justify-around mx-10 my-10 ">
                <div className="w-[292px] h-[108px] m-5 ">
                   <Image src={'/assets/logo.png'} alt="" width={148} height={44}></Image> 
                   <h1 className="my-3">Our vision is to provide convenience and help increase your sales business.</h1>
                </div>
                <div className="m-5">
                    <h1 className="font-semibold text-[20px]">About</h1>
                    <ul>
                        <li>How it works</li>
                        <li>Featured</li>
                        <li>Partnership</li>
                        <li>Bussiness Relation</li>
                    </ul>
                </div>
                <div className="m-5">
                    <h1 className="font-semibold text-[20px]">Community</h1>
                    <ul>
                        <li>Events</li>
                        <li>Blog</li>
                        <li>Podcast</li>
                        <li>Invite a friend</li>
                    </ul>
                </div>
                <div className="m-5">
                    <h1 className="font-semibold text-[20px]">Socials</h1>
                    <ul>
                        <li>Discord</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Facebook</li>
                    </ul>
                </div>
         </div>

         <div className=" w-[1032px] flex justify-center text-gray-500 items-center"><hr className="border-r-2 w-8/12 gap-10 flex align-middle items-center"/></div>
         <br />
         

         <div className="flex justify-around gap-20">
        
            <div>©2022 MORENT. All rights reserved</div>
            <div className="flex gap-5">
            <div>Privacy & Policy</div>
            <div>Terms & Condition</div>
            </div>

         </div>
         </div>
  </div>

   
    )
}
