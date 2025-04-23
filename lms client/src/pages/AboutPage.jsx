import HomeLayout from "../layout/HomeLayout"
import Education from "../assets/images/aboutMainImage.png"
import ajb from "../assets/images/apj.png"
import billgates from "../assets/images/billGates.png"
import Stave from "../assets/images/steveJobs.png"
import einstein from "../assets/images/einstein.png"

const AboutPage = ()=>{

 return(
    <HomeLayout>
    <div className="flex flex-col pt-20 pl-20 text-white">
      <div className="flex items-center gap-5 mx-10">
         <section className="w-1/2 space-y-10 " >
            <h1 className="text-5xl font-semibold text-yellow-500">
               Affordable and quality education
            </h1>
            <p className="text-xl text-gray-200" >Our goal is to provide the Affordable and quality education to the world.
               We are providing the platform for the aspiring teachers and students to share 
               their skills , creativity and knowledge to each other  </p>
         </section>
         <div className="w1/2">
       
         <img src={Education} 
           id="test1"
           style={{
            filter : "drop-shadow(0px 10px 10px rgb(0,0,0))"
           }}
         className="drop-shadow-2xl"
         alt="" />
         </div>
      </div>

  <div className="w-1/2 m-auto my-16 carousel">
  <div id="slide1" className="relative w-full carousel-item bottom-4">
   <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
   <img
      src={ajb }
      className="w-40 border-2 border-gray-400 rounded-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="relative w-full carousel-item">
    <img
      src={Stave}
      className="w-40 border-2 border-gray-400 rounded-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="relative w-full carousel-item">
    <img
      src={einstein}
      className="w-40 border-2 border-gray-400 rounded-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="relative w-full carousel-item">
    <img
      src={billgates}
      className="w-40 border-2 border-gray-400 rounded-full"/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
   </div>
    
  </div>
</div>
      
    </div>
    </HomeLayout>
 )

}

export default AboutPage;