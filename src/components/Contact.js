import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { AppContext } from "../Provider/data";
import { useSelector } from "react-redux";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messgae, setMessgae] = useState("");
  const { content } = useContext(AppContext);
  const language = useSelector((state) => state.languageReducer.lang);

  return (
    <div className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div
          className={`flex flex-col ${
            language === "kurdish"
              ? "lg:flex-row-reverse"
              : "lg:flex-row space-x-14"
          }`}
        >
          {/* Text */}
          <motion.div
            className="flex-1"
            // variants={fadeIn("right", 0.3)}
            // initial="hidden"
            // whileInView={"show"}
            // viewport={{ once: false, amount: 0.4 }}
          >
            <div>
              <p
                className={`text-[35px] text-gray-400 lg:text-[90px] font-bold leading-none mb-4 md:mb-12 ${
                  language === "kurdish" ? "text-right" : "text-center"
                }  text-gray-300`}
              >
                {content.fillout} <br />
              </p>
              <p
                className={`text-2xl font-bold text-accent opacity-80 uppercase tracking-wider mb-2 ${
                  language === "kurdish" ? "text-right" : "text-center"
                } `}
              >
                {content.fillout}
              </p>
            </div>
          </motion.div>
          {/* Form */}
          <motion.form
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            className={`flex-1 border-2  rounded-2xl p-6 flex flex-col gap-y-6 pb-20 mt-4 md:mt-0 `}
            // variants={fadeIn("left", 0.3)}
            // initial="hidden"
            // whileInView={"show"}
            // viewport={{ once: false, amount: 0.4 }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full bg-transparent py-3 outline-none border-b focus:border-accent  ${
                language === "kurdish"
                  ? "placeholder:text-right"
                  : "placeholder:text-left"
              } placeholder:text-gray-300 transition-all`}
              placeholder={language === "kurdish" ? "ناو" : "Name"}
            />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full bg-transparent py-3 outline-none border-b focus:border-accent  ${
                language === "kurdish"
                  ? "placeholder:text-right"
                  : "placeholder:text-left"
              } placeholder:text-gray-300 transition-all`}
              placeholder={language === "kurdish" ? "ئیمەیڵ" : "E-mail"}
            />
            <textarea
              name="message"
              id="message"
              value={messgae}
              onChange={(e) => setMessgae(e.target.value)}
              className={`resize-none mb-12 w-full bg-transparent pb-12 outline-none border-b focus:border-accent  ${
                language === "kurdish"
                  ? "placeholder:text-right"
                  : "placeholder:text-left"
              } placeholder:text-gray-300 transition-all`}
              placeholder={language === "kurdish" ? "نامە" : "Message"}
            ></textarea>
            <button type="submit" className="btn btn-lg">
              {content.send}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
