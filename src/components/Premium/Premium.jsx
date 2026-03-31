



import React, { use, useState } from 'react';
import Products from '../Products/Products';

const Premium = ({Promiss}) => {
    console.log(Promiss,"premium")

    const CradsData =use(Promiss);
    console.log( CradsData,CradsData.length ,"premuim")
    
    


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


                {/* <h1>product container</h1> */}

                <Products CradsData={CradsData} ></Products>


                
            </div>
        </div>
       
    );
};

export default Premium;