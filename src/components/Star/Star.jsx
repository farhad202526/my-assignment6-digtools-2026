import React from 'react';

const Star = () => {
    return (<div className="stats stats-vertical lg:stats-horizontal shadow  w-full text-center  rounded-none  px-4 py-4 bg-[#2913d4]  mx-auto my-7 text-amber-50 ">
  <div className="stat  gap-3">
    
    <div className="stat-value font-extrabold text-6xl">50K+</div>
    <div className="stat-desc text-white text-2xl ">Active Users</div>
  </div>
  


  <div className="stat  gap-3">
     
    <div className="stat-value font-extrabold text-6xl">200+</div>
    <div className="stat-desc text-white text-2xl">Premium Tools</div>
  </div>

 
  
  
  <div className="stat  gap-3">
    
    <div className="stat-value font-extrabold text-6xl">4.9</div>
    <div className="stat-desc text-white text-2xl">Rating</div>
  </div>
</div>
       
    );
};

export default Star;