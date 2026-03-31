
import React from 'react';
import { TiShoppingCart } from "react-icons/ti";

const Nav = ({YouCd}) => {
    return (
        <div className='w-11/12 mx-auto sticky top-1 z-50'>
            <div className="navbar bg-base-100 shadow-sm mt-4 border-1 border-indigo-500 rounded-2xl ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li><a>Products</a></li>
      <li><a>Features1</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      
      <li><a>FAQ</a></li>
      </ul>
    
    
    </div>



    <a className="btn btn-ghost text-2xl md:text-3xl   bg-gradient-to-r from-[#4F39F6] via-[#7227F8] to-[#9514FA] bg-clip-text text-transparent">DigTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Products</a></li>
      <li><a>Features1</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-2 flex flex-col-reverse   md:flex-row  ">
   <div className='flex mt-2 items-center gap-5 md:'>
     <div className='relative '>
      {/* <h1>count crad</h1> */}
        { YouCd.length===0 ?<h2 className='hidden'>new </h2>:<p className='absolute -top-5 text-[#fcfcfc] text-xl font-bold  text-center  h-7 w-7 rounded-full  bg-[#3c30dd] '>{YouCd.length}</p>}
        {/* <p className='absolute -top-5 text-[#dedbdc] text-xl font-bold  text-center  h-7 w-7 rounded-full bg-red-600 '>{YouCd.length}</p> */}


    <p className='text-xl md:text-4xl'><TiShoppingCart /> </p>
    </div>


    <button className='btn '>Login</button>
   </div>
     
      
   
    {/* <button className="btn btn-xs sm:btn-sm md:btn-md  lg:btn-lg xl:btn-xl bg-[#4F39F6] border-[#4F39F6] text-white hover:bg-[#3b2bc4] rounded-3xl ">Get Started</button> */}
    <button className="btn border-none text-white bg-gradient-to-r from-[#4F39F6] via-[#7227F8] to-[#9514FA] hover:scale-105 transition-all shadow-lg px-10 rounded-2xl  ">Get Started</button>
  </div>
</div> 
            
        </div>
    );
};

export default Nav;



