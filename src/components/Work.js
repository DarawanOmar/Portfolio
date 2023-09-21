import React from 'react';
import {motion} from 'framer-motion'
import { fadeIn} from '../variants';
import image1 from '../assets/portfolio-img1.1.png'
import image2 from '../assets/portfolio-img2.1.png'
import image3 from '../assets/portfolio-img3.1.png'

const Work = () => {
  return (
      <section className='section' id='work'>
        <div className='container mx-auto'>
          {/* Both */}
          <div className='grid grid-cols lg:grid-cols-2 gap-6'>
          {/* <div className='flex flex-col lg:flex-row gap-x-10'> */}

            <motion.div  className='flex-1 flex flex-col gap-y-12 mb-1 lg:mb-0 text-right' variants={fadeIn('right',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.4}}>
            {/* Text */}
              <div>
                <h2 className='text-[50px] text-accent leading-tight font-bold mb-2'> تازەترین <br/> کارەکانم</h2>
                <p className=' mb-16 text-right text-[25px]'> ئەمانە بریتین لە تازەترین کارەکانی من  </p>
                <button className='btn btn-lg text-[20px]'> بینینی هەموو پڕۆجێکتەکان</button>
              </div>
              {/* Image */}
                <div className='group relative overflow-hidden border-2 border-[#B809C3] rounded-xl '>
                  {/* Overly */}
                  <div className='group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-500 cursor-pointer'></div>
                  {/* Image */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={image1} alt='image01'/>
                  {/* PreTitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40'>
                    <span className='text-gradient'> UI/UX Design & Web Application</span>
                  </div>
                  {/* Titile */}
                  <div className='absolute -bottom-full left-0 sm:left-2 md:left-12 group-hover:bottom-12 md:group-hover:bottom-14 transition-all duration-1000 z-40'>
                    <span className='text-2xl sm:text-3xl text-white'>RealEstate</span>
                  </div>
                  <div className='absolute -bottom-full left-[110px] sm:left-[150px] md:left-[250px] group-hover:bottom-[50px] transition-all duration-1000 z-40'>
                    <a href="https://www.behance.net/gallery/180458825/RealEstate-Application"><span className='text-xl sm:text-2xl text-white px-6 sm:py-1 rounded-full border hover:bg-black/70 duration-500 cursor-pointer'>See</span></a>
                  </div>
                  <div className='absolute -bottom-full left-[200px] sm:left-[250px] md:left-[400px] group-hover:bottom-[50px] transition-all duration-1000 z-40'>
                    <a href="https://www.behance.net/gallery/180458825/RealEstate-Application"><span className='text-xl sm:text-2xl text-white px-6 sm:py-1 rounded-full border hover:bg-black/70 duration-500 cursor-pointer'>Visit</span></a>
                  </div>
                </div>
            </motion.div>

            <motion.div  className='flex-1 flex flex-col gap-y-10' variants={fadeIn('left',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.4}}>
               {/* Image */}
               <div className='group relative overflow-hidden border-2 border-[#B809C3] rounded-xl '>
                  {/* Overly */}
                  <div className='group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-500 cursor-pointer'></div>
                  {/* Image */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={image2} alt='image01'/>
                  {/* PreTitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40'>
                    <span className='text-gradient'> UI/UX Design & Web Application</span>
                  </div>
                  {/* Titile */}
                  <div className='absolute -bottom-full left sm:left-2 md:left-12 group-hover:bottom-6 md:group-hover:bottom-14 transition-all duration-1000 z-40'>
                    <span className='text-2xl sm:text-3xl text-white'>Best East <br/> Dillevery</span>
                  </div>
                  <div className='absolute -bottom-full left-[110px] sm:left-[150px] md:left-[250px] group-hover:bottom-[50px] transition-all duration-1000 z-40'>
                    <a href="https://www.behance.net/gallery/180457803/Best-Eat-Delivery-Application"><span className='text-xl sm:text-2xl text-white px-6 sm:py-1 rounded-full border hover:bg-black/70 duration-500 cursor-pointer'>See</span></a>
                  </div>
                  <div className='absolute -bottom-full left-[200px] sm:left-[250px] md:left-[400px] group-hover:bottom-[50px] transition-all duration-1000 z-40'>
                    <a href="https://fastfood-project.firebaseapp.com/"><span className='text-xl sm:text-2xl text-white px-6 sm:py-1 rounded-full border hover:bg-black/70 duration-500 cursor-pointer'>Visit</span></a>
                  </div>
                </div>
               {/* Image */}
               <div className='group relative overflow-hidden border-2 border-[#B809C3] rounded-xl '>
                  {/* Overly */}
                  <div className='group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-500 cursor-pointer'></div>
                  {/* Image */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={image3} alt='image01'/>
                  {/* PreTitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40'>
                    <span className='text-gradient'> UI/UX Design & Web Application</span>
                  </div>
                  {/* Titile */}
                  <div className='absolute -bottom-full left sm:left-2 md:left-12 group-hover:bottom-6 md:group-hover:bottom-14 transition-all duration-1000 z-40'>
                    <span className='text-2xl sm:text-3xl text-white'>To Do <br/> Application</span>
                  </div>
                  <div className='absolute -bottom-full left-[110px] sm:left-[150px] md:left-[250px] group-hover:bottom-[50px] transition-all duration-1000 z-40'>
                    <a href="https://www.behance.net/gallery/180458175/To-Do-Application"><span className='text-xl sm:text-2xl text-white px-6 sm:py-1 rounded-full border hover:bg-black/70 duration-500 cursor-pointer'>See</span></a>
                  </div>
                  <div className='absolute -bottom-full left-[200px] sm:left-[250px] md:left-[400px] group-hover:bottom-[50px] transition-all duration-1000 z-40'>
                    <a href="https://dara-todo.netlify.app/"><span className='text-xl sm:text-2xl text-white px-6 sm:py-1 rounded-full border hover:bg-black/70 duration-500 cursor-pointer'>Visit</span></a>
                  </div>
                </div>
                
            </motion.div>
          
          </div>
        </div>
      </section>
    );
};

export default Work;
