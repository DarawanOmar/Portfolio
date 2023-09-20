import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className='py-8 '>
      <div className='container mx-auto flex justify-between items-center'>
        <button className='btn btn-sm '>
          <Link to='contact' smooth={true} activeClass='active' spy={true} >لەگەڵ من کاربکە</Link>
        </button>
        <div className=' text-[35px] lg:text-[110px] font-bold leading-[0.8]'>
          <span className='text-accent'>بەخێربێن</span> 
        </div>
      </div>
    </div>
  )
};

export default Header;
