



import React, { use, useState } from 'react';
import Products from '../Products/Products';
import YouCrad from '../YouCrad/YouCrad';
import { toast } from 'react-toastify';

const Premium = ({Promiss,YouCd,setYouCd}) => {
    console.log(Promiss,"premium")

    const CradsData =use(Promiss);
    console.log( CradsData,CradsData.length ,"premuim")
    
    


    const [selectedtype,setselctedtype] = useState("availble")

    // const [YouCd,setYouCd]=useState([])
    
     return (<div className=' '>
             <div className=' w-11/12  mx-auto   my-6   p-5 space-y-10 '>
                <div className=' flex flex-col justify-center items-center text-center  mt-7 mb-5 gap-5'>
    
                    <h1  className='font-extrabold text-4xl md:text-5xl'>Premium Digital Tools</h1>
                    <p className=' md:  text-[#627382]'>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>

                   {/* <h1>btn containe </h1> */}

                    <div className='flex flex-col md:flex-row   gap-3'>
                    <button onClick={()=>{setselctedtype("availble");toast("Products");}} className={`btn ${selectedtype==="availble" ? " bg-gradient-to-r from-[#4F39F6] via-[#7227F8] to-[#9514FA] hover:scale-105 transition-all shadow-lg text-white":"" } btn border-2 border-indigo-500 rounded-2xl w-40`}>Products</button>



                    <button onClick={()=>{setselctedtype("selected");toast("Crads"); }} className={`btn ${selectedtype==="selected" ? " bg-gradient-to-r from-[#4F39F6] via-[#7227F8] to-[#9514FA] hover:scale-105 transition-all shadow-lg text-white":"" } btn border-2 border-indigo-500 rounded-2xl w-40` }>Carts ({YouCd.length})</button>


                    {/* <button onClick={()=>setselctedtype("selected")} className={`btn ${selectedtype==="selected" ? " bg-gradient-to-r from-[#4F39F6] via-[#7227F8] to-[#9514FA] hover:scale-105 transition-all shadow-lg text-white":"" } btn border-2 border-indigo-500 rounded-2xl w-40` }>Cart ({YouCd.length})</button> */}
                </div>
                 {/* { setselctedtype==="availble" ?  <h1>avable  crad</h1>:<h2>addd cread to </h2>} */}



                <div className=' flex justify-start mr-0 md:mr-250   '>
                     
                 { selectedtype === "availble" ? (
                  <h1 className="text-xl font-bold hidden ">ccc</h1>
                   ) : (
                  <h2 className="text-3xl   font-extrabold">Your Cart</h2>)}
                </div>
                 {/* <h1>emty crad</h1> */}
                 
                 {/* {selectedtype === "availble" ? (
                   <Products CradsData={CradsData} />
                 ) : (
               <div className="text-center p-10 border-2 border-dashed rounded-2xl">
            <h2 className="text-2xl font-bold">Your Cart is Empty</h2>
            <p>Add some premium tools to get started!</p>
                 </div>
                   )} */}



    
                </div>

               


                {/* <h1>product container</h1> */}


                 { selectedtype === "availble" ? 
                             <Products CradsData={CradsData} YouCd={YouCd} setYouCd={setYouCd} ></Products>
                                : <YouCrad YouCd={YouCd} setYouCd={setYouCd} ></YouCrad>
                   }




                {/* <Products CradsData={CradsData} ></Products> */}

                {/* <YouCrad></YouCrad> */}


                
            </div>
        </div>
       
    );
};

export default Premium;