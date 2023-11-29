import React from 'react';
import CountUp from 'react-countup'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {fadeIn} from '../variants'
import { Link } from 'react-scroll';

const About = () => {
  const [ref , inView] = useInView({
    threshold : 0.3,
  })
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto '>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 md:h-screen'>
            {/* Image */}
            <motion.div className='flex md:flex-1 bg-about bg-contain h-[400px] bg-no-repeat mix-blend-lighten bg-top ' variants={fadeIn('right',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.4}}></motion.div>
            {/* Text */}
            <motion.div className='flex-1 flex flex-col justify-end items-end text-right' variants={fadeIn('left',0.5)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.4}} >
              <h1 className='h2 text-accent font-bold'> دەربارەی من</h1>
              <p className='h3 mb-4'>من  گەشەپێدەری بەشی پێ شەوەی وێبم وە ١ ساڵ ئەزموونم هەیە</p>
              <p className='mb-6'>من زۆرم حەز لە گەشەپێدەری وێبە بەردەوام کاری لەسەر دەکەم لە فێربوونی شتی نوێ و تازە لەگەڵ نوێ بونەوەکان دەڕۆم، وێب سایت و وێب ئەبڵیکەیشناکان بە زمان و فرەیمۆڕکە باش و نایابەکان دروست دەکەم</p>
              {/* Counter */}
              <div className='flex gap-x-6 lg:gap-x-10 mb-12 '>
                
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>
                    {inView ?  <CountUp start={0} end={3} duration={5} /> : null}+
                  </div>
                  <div className='font-primary text-sm tracking-[2px] text-right'> پرۆجێکتی <br/>
                        تەواوکراو
                  </div>
                </div>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>
                    {inView ?  <CountUp start={0} end={1} duration={5} /> : null}
                  </div>
                  <div className='font-primary text-sm tracking-[2px] text-right'>ساڵ <br/>
                        ئەزمون
                  </div>
                </div>
              </div>
              {/* Button&MyPortfoilo */}
              <div className='flex items-center gap-x-8'>
              <button className='btn btn-lg'>
                    <Link to='contact' smooth={true} activeClass='active' spy={true} >پەیوەندیم پێوە بکە</Link>
                  </button>
              </div>
            </motion.div>
        </div>
      </div>
    </section>

  )
};

export default About;
