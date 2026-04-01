


import React from 'react';
import { MdDelete } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { toast } from 'react-toastify';


const YouCrad = ({YouCd,setYouCd}) => {


const totalPrice = YouCd.reduce((prev, current) => prev + parseFloat(current.price), 0);


    console.log(YouCd,setYouCd)

    const handalDelet =(yourcrad)=>{
        console.log(yourcrad)

        
    const filter = YouCd.filter((yyoucrad)=> yyoucrad.name !==yourcrad.name)

    console.log(filter,'fliterdddddd')

   setYouCd(filter)

   toast.error(`${yourcrad.name} has been removed!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored", 
    })


      



    }
    const handleCheckout = () => {
        toast.success("Chackout Success" );
        setYouCd([])};

    
    return (

        <div className='space-y-4'>

           
           
           
              <div className='cread-contriner space-y-3 '>
             </div>

            { YouCd.length===0? <div className='flex flex-col justify-center items-center rounded-b-2xl bg-[#F9FAFC]  gap-7 mx-auto text-center p-5'>
                <div  className='text-9xl'><CiShoppingCart /></div>
                <h2 className=' text-4xl md:text-6xl font-bold'>Cart is Empty.</h2>
                <p className='text-2xl md:text-3xl'>Please add some products to your cart.</p>
            </div>:YouCd.map(yourcrad=>{
                


                    return  <div key={yourcrad.id} className=' crad border-2 border-indigo-500 flex  justify-between items-center p-3 mx-0 md:mx-65 bg-[#F9FAFC] rounded-2xl'>

            <div className='flex  items-center gap-5'>
                <div className='text-4xl'>{yourcrad.icon}</div>
                <div>
                    <h1 className='text-3xl font-bold'>{yourcrad.name}</h1>
                    <p className='text-xl text-[#627382] font-bold'>${yourcrad.price}</p>
                </div>


            </div>
            <div>
                
                {/* <div className='text-3xl mr-10'><MdDelete /> </div> */}
                <button onClick={()=>handalDelet(yourcrad)} className='btn text-3xl'><MdDelete /></button>
            </div>




           </div>;
                })
            }



            {YouCd.length===0?<h className="hidden" >adddd</h> :<div className=' crad    flex  flex-col  w-11/12 justify-between items-center p-10 gap-8  mx-auto '>

                <div className='border-2 border-indigo-900  rounded-2xl p-3 items-center px-5 flex flex-col md:flex-row justify-between w-11/12 '>

                    <h1 className='text-black text-2xl md:text-4xl font-extrabold'>Total</h1>
                    <h1 className='text-[#627382] text-xl md:text-2xl font-bold'>${totalPrice.toFixed(2)}</h1>

                </div>

                

            
            
                <div className='flex justify-center  mx-auto  w-11/12      ' >
               



                    {/* <button className=' w-100 h-7 btn btn-primary text-2xl  rounded-2xl p-9  '>Proceed to Checkout</button> */}
                    <button onClick={handleCheckout} className='  max-w-100 h-16 text-2xl rounded-2xl btn bg-gradient-to-r from-[#4F39F6] via-[#7227F8] to-[#9514FA] hover:scale-105 transition-all shadow-lg text-white   '>Proceed to Checkout</button>





                    {/* <button 
  onClick={() => handaler()} 
  disabled={isAlreadyInCart} 
  className={`btn border-none text-white transition-all shadow-lg px-10 rounded-2xl w-full hover:scale-105 
    ${isAlreadyInCart ? 'bg-green-500 cursor-not-allowed opacity-70' : 'bg-gradient-to-r from-[#4F39F6] via-[#7227F8] to-[#9514FA]'}`}
>
  {isAlreadyInCart ? "Added to Cart" : "Buy Now"}
</button> */}
                </div>
           

           </div>

            }

           {/* <div className=' crad  flex justify-between items-center p-10 mx-0 md:mx-65  '>

            
            
                <div className='flex justify-center mx-auto' >
                    <button className=' w-100 h-7 btn btn-primary text-2xl  rounded-2xl p-9'>Proceed to Checkout</button>
                </div>
           

           </div> */}
            
        
        
        
        </div>
    );
};

export default YouCrad;