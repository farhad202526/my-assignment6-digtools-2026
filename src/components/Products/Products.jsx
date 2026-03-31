import React, { Component, useState } from 'react';
import Crad from '../Crad/Crad';




const Products = ({CradsData}) => {


 const tagStyles = {
  new: "bg-green-500 text-white",        
  popular: "bg-blue-600 text-white",      
  "best-seller": "bg-red-600 text-white",         
  flexible: "bg-purple-500 text-white",   
  education: "bg-orange-500 text-white",  
  "lifetime": "bg-teal-600 text-white"   
};

    console.log(CradsData,"products")

    // const  [isSelected,setisSelected]=useState(false);
    return (
            <div>
                
                {/* <h1>crad contriner </h1> */}
    
                <div className='setp-crad-container grid grid-cols-1 md:grid-cols-3     justify-center items-center  w-fit mx-auto     gap-8  mb-7  mt-10   '>





                    {CradsData.map(Cred=>{

                     const [isSeleted ,setisSeleted]=useState(false)
                        
                        return <div className="card md:w-96 bg-base-100 shadow-sm">
                      <div className="card-body relative space-y-3 bg-[#F9FAFC]  rounded-2xl border-2 border-indigo-900">
                    
                        <div className='mt-7'>

                          <div className='text-5xl'>  {
                                Cred.icon
                            }</div>
                            {/* <img className='w-15' src={img1} alt="" /> */}
                        </div>


                        <p className={`absolute text-[8px] md:text-[12px] border-1 border-indigo-900 top-10 right-5 max-w-40 p-2 rounded-2xl font-semibold 
                        ${tagStyles[Cred.tagType] || 'bg-gray-400 text-black'}`}> 
                             
                                       {Cred.tag}
                     </p>
                    


                    
                        
                       
                        <div className="flex flex-col justify-between">
                          <h2 className="text-3xl font-bold">{Cred.name}</h2>
                          <p className='text-[#445969] text-[8px] md:text-[12px]'>{Cred.description}</p>
                          </div>
                          <div>
                            <h1><span className="text-2xl  font-bold">${Cred.price}</span><span className='text-xl'>/{Cred.period}</span></h1>
                          </div>
                    
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                           {Cred.features?.map((feature, index) => (
                                        <li key={index} className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}



                          
                        </ul >
                        <div className="mt-6">
                          <button 
  onClick={() => setisSeleted(true)} 
  className={`btn border-none text-white transition-all shadow-lg px-10 rounded-2xl w-full     hover:scale-105 
    ${isSeleted ? 'bg-green-500' : 'bg-gradient-to-r from-[#4F39F6] via-[#7227F8] to-[#9514FA]'}`}
>
                      {isSeleted ? "Added to Cart" : "Buy Now"}
                    </button>




                          
                          {/* <button onClick={()=>setisSeleted(true)} className="btn border-none text-white bg-gradient-to-r from-[#4F39F6] via-[#7227F8] to-[#9514FA] hover:scale-105 transition-all shadow-lg px-10 rounded-2xl w-full">{isSeleted=== true ? "Added to Crat": "Buy Now"}</button> */}
 </div>
                      </div>
                                           </div>;
                    })}




                    

                      {/* <h1>crad</h1> */}
                      {/* <Crad CradsData={CradsData}></Crad> */}
                      
                    
    
                </div>
                
                
            </div>
        );
};

export default Products;








