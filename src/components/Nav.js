import React from 'react';
import {BiHome, BiUser} from 'react-icons/bi'
import {BsChatSquare,BsBriefcase, BsClipboard2Data} from 'react-icons/bs'
import {Link} from 'react-scroll'


const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-gray-900 h-[75px] md:h-[96px] backdrop-blur-2xl rounded-full max-w-[490px] mx-auto flex justify-between items-center px-5 text-2xl text-white/50'>
          <Link 
            activeClass='active'
            smooth={true}
            spy={true}
            to='home'
            offset={-200}
            className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center rounded-full duration-500 hover:bg-black/20  '>
            <BiHome/>
          </Link>  
          <Link 
            activeClass='active'
            smooth={true}
            spy={true}
            to='about' className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center rounded-full duration-500 hover:bg-black/20  '>
            <BiUser/>
          </Link>  
          <Link 
            activeClass='active'
            smooth={true}
            spy={true}
            to='services' className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center rounded-full duration-500 hover:bg-black/20 '>
            <BsChatSquare/>
          </Link>  
          <Link 
            activeClass='active'
            smooth={true}
            spy={true}
            to='work' className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center rounded-full duration-500 hover:bg-black/20 '>
            <BsClipboard2Data/>
          </Link>  
          <Link 
            activeClass='active'
            smooth={true}
            spy={true}
            to='contact' className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center rounded-full duration-500 hover:bg-black/20 '>
            <BsBriefcase/>
          </Link>  
        </div>
      </div>
    </nav>
  )
};

export default Nav;
