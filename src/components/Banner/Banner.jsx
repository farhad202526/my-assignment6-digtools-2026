import React from 'react';
import bannerImg from '../../assets/banner.png'


const Banner = () => {
    return (<div className=' banner-container  border-4 border-indigo-500 w-11/12 mx-auto '>

        <div className='banner-side flex border-4 border-indigo-600 p-5 mt-3 justify-center gap-10 '>
            
            
<div className='banner-lef border-4  border-indigo-900 justify-center items-center text-left my-auto'>
              <p>New: AI-Powered Tools Available aaaaa</p>
      <h1 className="text-5xl font-bold">Supercharge Your <br /> Digital Workflow</h1>
      <p className="py-6">
        Access premium AI tools, design assets, templates, and productivity
              <br />software—all in one place. Start creating faster today. <br />

            Explore Products
      </p>
     



     <div className=' flex gap-2'>

      <button className="btn btn-primary">Explore Products</button>
      <button className="btn btn-primary">Watch Demo</button>
      </div>



        </div>
        <div className='banner-right border-4 border-indigo-800 '>
            <img src={bannerImg} alt="" />

        </div>

            
        </div>




    </div>
    
    
    
    
    
 










 
       
    );
};

export default Banner;