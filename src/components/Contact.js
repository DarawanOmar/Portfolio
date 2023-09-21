import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <div className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row-reverse'>
            {/* Text */}
            <motion.div className='flex-1'  variants={fadeIn('right',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.4}}>
              <div>
                <h1 className='text-[45px] lg:text-[90px] font-bold leading-none mb-12 text-right text-gray-300'>با پێکەوە <br/>  کاربکەین</h1>
                <h1 className='text-2xl font-bold text-accent uppercase tracking-wider mb-2 text-right'>ئەم خانەنە پڕبکەوە</h1>
              </div>
            </motion.div>
            {/* Form */}
            <motion.form name="contact" method="POST" data-netlify="true" className='flex-1 border-2  rounded-2xl p-6 flex flex-col gap-y-6 pb-24' variants={fadeIn('left',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.4}}>
              <input type='text' name='name' className='w-full bg-transparent py-3 outline-none border-b focus:border-accent  placeholder:text-right placeholder:text-gray-300 transition-all' placeholder='ناو'/>
              <input type='email' name='email' className='w-full bg-transparent py-3 outline-none border-b focus:border-accent  placeholder:text-right placeholder:text-gray-300 transition-all' placeholder='ئیمەیڵ'/>
              <textarea name='message' className='resize-none mb-12 w-full bg-transparent pb-12 outline-none border-b focus:border-accent  placeholder:text-right placeholder:text-gray-300 transition-all' placeholder='نامە' ></textarea>
              <button type='submit' className='btn btn-lg'>ناردنی نامە</button>
            </motion.form>
        </div>
      </div>
    </div>
  )
};

export default Contact;
