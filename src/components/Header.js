import React, { useState } from "react";
import { Link } from "react-scroll";
import { useDispatch , useSelector } from 'react-redux';
import {GrLanguage} from 'react-icons/gr'
import { useContext } from "react";
import { AppContext } from "../Provider/data";
import {english, kurdish} from '../Provider/slice/langSlice'
import { MdDone } from "react-icons/md";


const Header = () => {
  const language = useSelector((state)=> state.languageReducer.lang);
  const dispatch = useDispatch()
  const {content} = useContext(AppContext)
  const [open, setOpen] = useState(false)
  const handleToggle = () => {
    setOpen(!open)
  }
  return (
    <div className="pt-8 ">
      <div className={ language === "english" ? "flex flex-row-reverse justify-between items-center container mx-auto" : "flex justify-between items-center container mx-auto"} >
        <div className={`flex ${language === "kurdish" ? "flex" : "flex-row-reverse"} items-center space-x-3`}>
          <button onClick={handleToggle} className=" bg-accent rounded-full text-4xl cursor-pointer mx-2">
            <GrLanguage />
          </button>
          <button className="btn btn-sm">
            <Link to="contact" smooth={true} activeClass="active" spy={true}>
              {content.button}
            </Link>
          </button>
        </div>

        <div className=" text-[35px] lg:text-[70px] font-bold leading-[0.8]">
          <span className="text-accent">{content.welcome}</span>
        </div>
      </div>

      <div className={open && language === "kurdish" ? "flex container mx-auto duration-700 ease-in-out" : open && language === "english" ? "flex container mx-auto justify-end duration-700 ease-in-out": `flex container mx-auto ${language === "english" ? "justify-end" : "justify-start"} -translate-y-52 duration-700 ease-in-out`}>
        <div className=" flex flex-col  bg-accent max-w-max px-3 py-1 rounded-md">
          <div className="flex items-center space-x-2">
            <button onClick={() => { 
              dispatch(english())
              handleToggle()
            }}>En</button>
            {language === "english" && 
            <span><MdDone /></span>}
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={() =>{ 
              dispatch(kurdish())
              handleToggle()
              }}>Ku</button>
              {language === "kurdish" && 
            <span><MdDone /></span>}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;
