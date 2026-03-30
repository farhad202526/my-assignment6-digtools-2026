

import React from 'react';

const Ready = () => {
    return (
        <div className=' p-10 my-6   bg-gradient-to-br from-[#4F39F6] via-[#7227F8] to-[#9514FA]'>
            <div className=' text-white w-11/12 mx-auto flex flex-col justify-center items-center py-7 my-16 gap-3  text-center'>
                <h1 className=' text-3xl md:text-5xl font-bold'>Ready to Transform Your Workflow?</h1>
                <p className='text-[#c8dbeb]'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>

                <div className='flex flex-col md:flex-row gap-2'>
                    <button className='btn btn-outline btn-primary bg-amber-50 rounded-2xl'>Explore Products</button>
                    <button className=' btn btn-outline btn-primary text-white  border border-white/99 rounded-2xl'>View Pricing</button>
                </div>
                <p>14-day free trial • No credit card required • Cancel anytime</p>



            </div>
            
            
        </div>
    );
};

export default Ready;
