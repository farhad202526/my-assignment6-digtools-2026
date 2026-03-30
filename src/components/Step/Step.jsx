



import React from 'react';

import setp1 from '../../assets/user.png'
import setp2 from '../../assets/package.png'
import setp3 from '../../assets/rocket.png'

const Step = () => {
    return (<div className='bg-[#F9FAFC] '>
         <div className=' w-11/12  mx-auto   my-7   p-5 space-y-10 '>
            <div className=' flex flex-col justify-center items-center text-center  mt-7 mb-10 gap-5'>

                <h1  className='font-extrabold text-4xl md:text-5xl'>Simple, Transparent Pricing</h1>
                <p className='text-xlmd: text-2xl text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>

            </div>

            <div className='setp-crad-container grid grid-cols-1 md:grid-cols-3     justify-center items-center  w-fit mx-auto     gap-8  mb-7    '>
                
                
                {/* <h1>crad 1</h1> */}
                <div className='setp-crad relative h-96  max-w-96 bg-white rounded-2xl flex flex-col justify-center text-center      items-center mt-3.5 border-1 border-indigo-800  p-9 gap-6 '>

                    <p className=' absolute  top-6 right-9   bg-[#4F39F6]  text-white text-xl font-bold h-11 w-11 text-center p-1.5 rounded-full  '>01</p>
                     
                    
                    <div className='h-28 w-28 rounded-full flex text-center items-center justify-center bg-[#d8b7f1]'>
                        <img className=' ' src={setp1} alt="" />
                    </div>
                    <h1 className=' text-4xl font-bold'>Create Account</h1>
                    <p className='text-xl text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>

                </div>
                {/* <h1>crad 2</h1> */}
                <div className='setp-crad relative h-96  max-w-96 bg-white rounded-2xl flex flex-col justify-center text-center      items-center mt-3.5 border-1 border-indigo-800  p-9 gap-6 '>

                    <p className=' absolute  top-6 right-9   bg-[#4F39F6]  text-white text-xl font-bold h-11 w-11 text-center p-1.5 rounded-full  '>01</p>
                     
                    
                    <div className='h-28 w-28 rounded-full flex text-center items-center justify-center bg-[#d8b7f1]'>
                        <img className=' ' src={setp2} alt="" />
                    </div>
                    <h1 className=' text-4xl font-bold'>Choose Productst</h1>
                    <p className='text-xl text-[#627382]'>Browse our catalog and select the toolsthat fit your needs.</p>

                </div>
                {/* <h1>crad 3</h1> */}
                <div className='setp-crad relative h-96  max-w-96 bg-white rounded-2xl flex flex-col justify-center text-center      items-center mt-3.5 border-1 border-indigo-800  p-9 gap-6 '>

                    <p className=' absolute  top-6 right-9   bg-[#4F39F6]  text-white text-xl font-bold h-11 w-11 text-center p-1.5 rounded-full  '>01</p>
                     
                    
                    <div className='h-28 w-28 rounded-full flex text-center items-center justify-center bg-[#d8b7f1] '>
                        <img className=' ' src={setp3} alt="" />
                    </div>
                    <h1 className=' text-4xl font-bold'>Start Creating</h1>
                    <p className='text-xl text-[#627382]'>Download and start using your premium tools immediately.</p>

                </div>
             





              

            </div>
            
            
        </div>
    </div>

 
       
    );
};

export default Step;