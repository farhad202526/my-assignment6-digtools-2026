import React from 'react';

const Priceing = () => {
    return (<div className=' '>
             <div className=' w-11/12  mx-auto   my-7   p-5 space-y-10 '>
                <div className=' flex flex-col justify-center items-center text-center  mt-7 mb-10 gap-5'>
    
                    <h1  className='font-extrabold text-4xl md:text-5xl'>Simple, Transparent Pricing</h1>
                    <p className='text-xlmd:  text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
    
                </div>
    
                <div className='setp-crad-container grid grid-cols-1 md:grid-cols-3     justify-center items-center  w-fit mx-auto     gap-8  mb-7  mt-20   '>


                    {/* <h1>add sss new cread 1</h1> */}
                    <div className="card w-max-96 bg-base-100 shadow-sm">
  <div className="card-body space-y-3 bg-[#F9FAFC] rounded-2xl">
   
    <div className="flex flex-col justify-between">
      <h2 className="text-3xl font-bold">Starter</h2>
      <p className='text-[#627382]'>Perfect for getting started</p>
      </div>
      <div>
        <h1 className=''><span className="text-2xl  font-bold">$0</span><samp className='text-[#627382]'>/Manth</samp></h1>
      </div>

    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
      </li>
      
    </ul>
    <div className="mt-6">
      
      <button className="btn border-none text-white bg-gradient-to-r from-[#4F39F6] via-[#7227F8] to-[#9514FA] hover:scale-105 transition-all shadow-lg px-10 rounded-2xl w-full">Get Started Free</button>
    </div>
  </div>
                       </div>
                    {/* <h1>add sss new cread 2</h1> */}
                    <div className="card w-max-96 bg-base-100 shadow-sm">
  <div className="card-body relative space-y-3 bg-gradient-to-br from-[#4F39F6] via-[#7227F8] to-[#9514FA] text-white shadow-2xl rounded-2xl">

    <p className=' absolute  border-1 border-indigo-900 -top-5 left-20 max-w-40 bg-amber-300/90 p-2  rounded-2xl text-[#964104] font-bold'>Most Popular</p>
   
    <div className="flex flex-col justify-between">
      <h2 className="text-3xl font-bold">Pro</h2>
      <p className='text-[#c8dbeb]'>Best for professionals</p>
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
      
      <button className="btn border-none text-xl font-bold text-[#2d42a0] bg-gradient-to-r from-[#fafafa] via-[#ffffff] to-[#ebebeb] hover:scale-105 transition-all shadow-lg px-10 rounded-2xl w-full">Start Pro Trial</button>
    </div>
  </div>
                       </div>
                    {/* <h1>add sss new cread 3</h1> */}
                    <div className="card w-max-96 bg-base-100 shadow-sm">
  <div className="card-body space-y-3 bg-[#F9FAFC]">
   
    <div className="flex flex-col justify-between">
      <h2 className="text-3xl font-bold">Enterprise</h2>
      <p className='text-[#627382]'>For teams and businesses</p>
      </div>
      <div>
        <h1><span className="text-2xl  font-bold">$99</span><span className='text-[#627382] text-xl'>/Month</span></h1>
      </div>

    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Everything in Pro</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Team collaboration</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom integrations</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Dedicated support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>SLA guarantee</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom branding</span>
      </li>
      
    </ul>
    <div className="mt-6">
      
      <button className="btn border-none text-white bg-gradient-to-r from-[#4F39F6] via-[#7227F8] to-[#9514FA] hover:scale-105 transition-all shadow-lg px-10 rounded-2xl w-full">Subscribe</button>
    </div>
  </div>
                       </div>









                   
                    
                   
                   
    
    
    
    
    
                  
    
                </div>
                
                
            </div>
        </div>
       
    );
};

export default Priceing;