

import img1 from '../../assets/products/operation.png'

import React, { useState } from 'react';

const Premium = () => {


    const [selectedtype,setselctedtype] = useState("availble")
     return (<div className=' '>
             <div className=' w-11/12  mx-auto   my-7   p-5 space-y-10 '>
                <div className=' flex flex-col justify-center items-center text-center  mt-7 mb-10 gap-5'>
    
                    <h1  className='font-extrabold text-4xl md:text-5xl'>Premium Digital Tools</h1>
                    <p className=' md:  text-[#627382]'>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>

                   {/* <h1>btn containe </h1> */}

                    <div className='flex flex-col md:flex-row   gap-3'>
                    <button onClick={()=>setselctedtype("availble")} className={`btn ${selectedtype==="availble" ? " bg-gradient-to-r from-[#4F39F6] via-[#7227F8] to-[#9514FA] hover:scale-105 transition-all shadow-lg text-white":"" } btn border-2 border-indigo-500 rounded-2xl`}>Products</button>



                    <button onClick={()=>setselctedtype("selected")} className={`btn ${selectedtype==="selected" ? " bg-gradient-to-r from-[#4F39F6] via-[#7227F8] to-[#9514FA] hover:scale-105 transition-all shadow-lg text-white":"" } btn border-2 border-indigo-500 rounded-2xl`}>Cart (2)</button>
                </div>
    
                </div>


                {/* <h1>crad contriner </h1> */}
    
                <div className='setp-crad-container grid grid-cols-1 md:grid-cols-3     justify-center items-center  w-fit mx-auto     gap-8  mb-7  mt-20   '>

                      <div className="card md:w-96 bg-base-100 shadow-sm">
  <div className="card-body relative space-y-3 bg-[#F9FAFC]  rounded-2xl border-2 border-indigo-900">

    <div className='mt-7'>
        <img className='w-15' src={img1} alt="" />
    </div>

    <p className=' absolute  text-[8px] md:text-[12px] border-1 border-indigo-900  top-10 right-5 max-w-40 bg-amber-300/90 p-2  rounded-2xl text-[#964104] font-semibold '>Most Popular</p>
   
    <div className="flex flex-col justify-between">
      <h2 className="text-3xl font-bold">Pro</h2>
      <p className='text-[#445969] text-[8px] md:text-[12px]'>Best for professionals</p>
      </div>
      <div>
        <h1><span className="text-2xl  font-bold">$29</span><span className='text-xl'>/Month</span></h1>
      </div>

    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Priority support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited projects</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Cloud sync</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Advanced analytics</span>
      </li>
      
    </ul>
    <div className="mt-6">
      
      <button className="btn border-none text-white bg-gradient-to-r from-[#4F39F6] via-[#7227F8] to-[#9514FA] hover:scale-105 transition-all shadow-lg px-10 rounded-2xl w-full">Buy Now</button>
    </div>
  </div>
                       </div>








                   
                    
                   
                   
    
    
    
    
    
                  
    
                </div>
                
                
            </div>
        </div>
       
    );
};

export default Premium;