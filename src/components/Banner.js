import React from 'react';
import Image from '../assets/me-web.png'
import {FaGithub, FaFacebook, FaInstagram, FaSnapchat, FaTwitter} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import { Link } from 'react-scroll';

const Banner = () => {
  return (
      <div className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
        <div className='container mx-auto'>
            <div className='flex flex-col gap-y-6 lg:flex-row lg:gap-x-12 lg:items-center'>
              {/* Text */}
              <div className='flex-1 text-center lg:text-left'>
                <motion.h1 variants={fadeIn('up',0.3)} whileInView={'show'} initial='hidden' viewport={{once:false,amount:0.7}} className='text-[55px] lg:text-[110px] font-bold leading-[0.8]'> دارەوان <span className='text-accent'>ئای تی</span></motion.h1>
                <motion.div className='mb-6 mt-6  text-[26px] md:text-[40px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]' variants={fadeIn('up',0.4)} whileInView={'show'} initial='hidden' viewport={{once:false,amount:0.7}} >
                  <span className='mr-4 text-white'> من حەزم لە  </span>
                  <TypeAnimation sequence={['گەشەپێدەری وێبە',2000,'دیزاینی وێبە',2000,"گەشەپێدەری فوول ستاکە",2000]} speed={50} repeat={Infinity} wrapper='span' className='text-accent'/>
                </motion.div>
                <motion.p variants={fadeIn('up',0.5)} whileInView={'show'} initial='hidden' viewport={{once:false,amount:0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0 text-right'>
                        سڵاو من خوێندکارم لە کۆلێجی سلێمانی پۆلی تەکنیک لە بەشی ئای تی لە قۆناخی سێ ، تەمەنی ٢١ ساڵە ، ئێستا وەک گەشەپێدەری بەشی پێشەوە کاردەکەم وە حەزم لێیە ببم بە فول ستاک ئنشااللە ، دەتوانم ڕووکارەکان وەکو خۆی دروست بکەمەوە بە ڕێژەی لە سەدا هەشتا  ،وە ئەزمونی یەک ساڵم هەیە</motion.p>
                <motion.div className='flex lg:mx-0 justify-center items-center gap-x-6 mb-12 '  variants={fadeIn('up',0.6)} whileInView={'show'} initial='hidden' viewport={{once:false,amount:0.7}} >
                  <a href='https://github.com/DarawanOmar'  className='text-gradient btn-link'>پەڕەی کەسی</a>
                  <button className='btn btn-lg'>
                    <Link to='contact' smooth={true} activeClass='active' spy={true} >پەیوەندم پێوە بکە</Link>
                  </button>
                </motion.div>
                <motion.div className='flex text-[20px] justify-center gap-x-6  lg:mx-0 pb-20' variants={fadeIn('up',0.8)} whileInView={'show'} initial='hidden' viewport={{once:false,amount:0.7}} >
                  <a  href='https://github.com/DarawanOmar'  className='hover:scale-110 hover:text-amber-600 duration-500'  ><FaGithub/></a>
                  <a  href='https://instagram.com/DarawanOmar'  className='hover:scale-110 hover:bg-gradient-to-r from-red-600 to-blue-700 rounded-full duration-500'  ><FaInstagram/></a>
                  <a  href='https://snapchat.com/darawan_omar'  className='hover:scale-110 hover:text-yellow-400 duration-500'  ><FaSnapchat/></a>
                  <a  href='https://facebook.com/DarawanOmar'  className='hover:scale-110 hover:text-blue-500 duration-500' ><FaFacebook/></a>
                  <a  href='https://twitter.com/OmarDarawn'  className='hover:scale-110 hover:text-sky-400 duration-500'  ><FaTwitter/></a>
                </motion.div>
              </div>
              {/* Image */}
              <motion.div variants={fadeIn('down',0.5)} whileInView={'show'} initial='hidden'  className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] '>
                <img src={Image} alt='Me'/>
              </motion.div>
            </div>
        </div>
      </div>
     
    );
};

export default Banner;
