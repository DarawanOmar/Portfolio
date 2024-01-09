import React, { useContext } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import laravel from "../assets/laravel.png";
import firbase from "../assets/firebase.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import { AppContext } from "../Provider/data";

const Skills = () => {
  const { content } = useContext(AppContext);

  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-10">
          {/* Text & Image */}
          <motion.div
            className="flex-1 lg:bg-services  bg-no-repeat lg:bg-bottom mix-blend-lighten mb-12 lg:mb-0"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
          >
            <h1 className="h2 text-accent mb-6  text-right text-[55px] font-bold">
              {content.skills}
            </h1>
            <h3 className="h3  mb-16  text-right"> {content.haveSkills} </h3>
            <span className=" flex justify-end items-end">
              <button className="btn btn-sm"> {content.seeSkills} </button>
            </span>
          </motion.div>
          {/* Services */}
          <div className="flex-1 grid grid-cols-2 gap-5 text-right px-2">
            <motion.div
              className="rounded-md border-2 border-accent flex flex-col justify-center items-center py-3"
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <img
                className="max-h-[80px] max-w-[80px] object-cover"
                src={html}
                alt="HtmlPhoto"
              />
              <h1 className="font-bold mt-1">HTML</h1>
              <span>80%</span>
            </motion.div>

            <motion.div
              className="rounded-md border-2 border-accent flex flex-col justify-center items-center py-3"
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <img
                className="max-h-[85px] max-w-[85px] object-cover"
                alt="CssPhoto"
                src={css}
              />
              <h1 className="font-bold  mt-1">Css</h1>
              <span>80%</span>
            </motion.div>
            <motion.div
              className="rounded-md border-2 border-accent flex flex-col justify-center items-center py-3"
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <img
                className="max-h-[70px] max-w-[70px] object-cover bg-transparent"
                alt="TailwindcssPhoto"
                src="https://files.raycast.com/sjxs3pxsc6k63ju0fzv8l3cu4v90"
              />
              <h1 className="font-bold  mt-1">Tailwindcss</h1>
              <span>85%</span>
            </motion.div>
            <motion.div
              className="rounded-md border-2 border-accent flex flex-col justify-center items-center py-3"
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <img
                className="max-h-[70px] max-w-[70px] object-cover"
                alt="ReactPhoto"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              />
              <h1 className="font-bold  mt-1">React</h1>
              <span>75%</span>
            </motion.div>
            <motion.div
              className="rounded-md border-2 border-accent flex flex-col justify-center items-center py-3"
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <img
                className="max-h-[70px] max-w-[70px] object-cover"
                alt="ReactPhoto"
                src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
              />
              <h1 className="font-bold  mt-1">Next-Js</h1>
              <span>75%</span>
            </motion.div>
            <motion.div
              className="rounded-md border-2 border-accent flex flex-col justify-center items-center py-3"
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <img
                className="max-h-[70px] max-w-[70px] object-cover"
                alt="TypeScriptPhoto"
                src="https://img.freepik.com/free-icon/typescript_318-698173.jpg?w=2000"
              />
              <h1 className="font-bold  mt-1">Type Script</h1>
              <span>65%</span>
            </motion.div>
            <motion.div
              className="rounded-md border-2 border-accent flex flex-col justify-center items-center py-3"
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <img
                className="max-h-[70px] max-w-[70px] object-cover"
                alt="LaravelPhoto"
                src={laravel}
              />
              <h1 className="font-bold  mt-1">Laravel</h1>
              <span>65%</span>
            </motion.div>
            <motion.div
              className="rounded-md border-2 border-accent flex flex-col justify-center items-center py-3"
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <img
                className="max-h-[70px] max-w-[70px] object-cover"
                alt="FirbasePhoto"
                src={firbase}
              />
              <h1 className="font-bold  mt-1">Firebase</h1>
              <span>50%</span>
            </motion.div>
          </div>
          {/* <motion.div  className='flex-1 text-right' variants={fadeIn('left',0.5)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.4}}>
              <div>
                {services.map((service,index) => {
                  const {name,discription,link} = service
                  return ( 
                  <div key={index} className='border-b border-white/20 h-[176px] mb-[38px]  flex '>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'> {name}</h4>
                      <p className='font-secondary leading-tight'>{discription}</p>
                    </div>
                    <div className=' flex flex-col flex-1 items-end'>
                      <a href='' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight/></a>
                      <a href='#' className='text-gradient text-sm'>{link}</a>
                    </div>
                  </div>
                )})}
              </div>
            </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
