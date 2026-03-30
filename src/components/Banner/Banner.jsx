import React from 'react';
import bannerImg from '../../assets/banner.png'
import pointImg from '../../assets/point.png'
import { CiPlay1 } from "react-icons/ci";


const Banner = () => {
    return (<div className=' banner-container   w-11/12 mx-auto  mt-2'>

        <div className='banner-side flex flex-col md:flex-row  p-5 mt-3 justify-center gap-10 '>
            
            
                <div className='banner-lef space-y-10  justify-center items-center   text-center md:text-left my-auto'>
              <div className='inline-block bg-[#E1E7FF] rounded-2xl'>
                <p className=' flex gap-2  px-2.5  p-1.5 justify-between '> <img className='w-6' src={pointImg} alt="" /> New: AI-Powered Tools Available </p>
              </div>
              <h1 className=" text-3xl md:text-5xl font-extrabold leading-tight">Supercharge Your <br /> <samp className=' bg-gradient-to-r from-[#4F39F6] via-[#7227F8] to-[#9514FA] bg-clip-text text-transparent'>Digital Workflow</samp></h1>
               <p className="py-6 text-[#627382]">
                Access premium AI tools, design assets, templates, and productivity
              <br />software—all in one place. Start creating faster today. <br />

                 Explore Products
                 </p>
     



           <div className=' flex  justify-center md:justify-start gap-2'>

             {/* <button className="btn btn-primary rounded-2xl">Explore Products</button> */}
             <button className="btn btn-primary border-none text-white bg-gradient-to-r from-[#4F39F6] via-[#7227F8] to-[#9514FA] hover:scale-105 transition-all shadow-lg px-10 rounded-2xl ">Explore Products</button>
              <button className="btn btn-outline btn-primary border-1 border-indigo-800  rounded-2xl"> <CiPlay1 />Watch Demo</button>
            </div>



        </div>
          <div className='banner-right  '>
                <img src={bannerImg} alt="" />

          </div>

            
        </div>




    </div>
    
    
    
    
    
 










 
       
    );
};

export default Banner;