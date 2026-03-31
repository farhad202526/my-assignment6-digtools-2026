

import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import Premium from './components/Premium/Premium'
import Priceing from './components/Priceing/Priceing'
import Ready from './components/Ready/Ready'
import Star from './components/Star/Star'
import Step from './components/Step/Step'





const fethPomiss = async()=>{
  const res =await fetch("/Data.json")

  return res.json();

}




function App() {
  

  const Promiss = fethPomiss()

  console.log(Promiss ,"app ")


 

  return (
    
    <>
    {/* <h1>addd nve section </h1> */}
   <Nav></Nav>

   {/* <h1>add banner section </h1> */}
   <Banner></Banner>

   {/* <h1>addd Star section </h1> */}

   <Star></Star>

   {/* <h1>crad section </h1> */}

   <Suspense fallback={<span className="loading loading-bars loading-xl"></span>} >
    
   <Premium Promiss={Promiss} ></Premium>
   
   </Suspense>


   {/* <h1>add step section </h1> */}
   <Step></Step>

   {/* <h1>pricetin section add </h1> */}
   <Priceing></Priceing>

   {/* <h1> rady secton </h1> */}

   <Ready></Ready>

   {/* <h1>footer add </h1> */}
   <Footer></Footer>





    
  
    </>
  )
}

export default App
