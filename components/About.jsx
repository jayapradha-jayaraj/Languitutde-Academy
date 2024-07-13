import React from "react";
import { Tilt }from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { AboutUsWhatWeDo } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon,content }) => (
  <Tilt className='xs:w-[350px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='What we do icons'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        <p className='text-white text-[10px] text-center'> {content}</p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Us</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Languitude Academy is Africa’s fastest growing online teacher recruiting company. 
        It is a training school tailored to cater to the needs of language learners. 
        Our goal is to become the number one place for language learning in Africa.
        <br />
        <br/>
        We teach African languages to Africans in Africa, the diaspora, and to foreigners.
        With the aim to  preserve our African heritage.
        <br/>
        <br/>
        In addition to the African languages, we also provide lessons in French, Spanish, and Chinese, and we hope to expand our reach.
      </motion.p>
        <br/>
        <br/>
      <motion.div variants={textVariant()}>
        <h3 className={styles.heroSubText}>Our Mission</h3>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       Our mission is to keep moving in the direction of languages in a fast-paced world.
      </motion.p>
      <br/>
      <br/>
      <motion.div variants={textVariant()}>
        <h3 className={styles.heroSubText}>Our Vision</h3>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       We envision a world where language learning is made accessible to everyone and language teachers are paid their worth.
      </motion.p>
      <br/>
      <br/>
      <motion.div variants={textVariant()}>
        <h3 className={styles.heroSubText}>What we do</h3>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       We provide an engaging and supportive learning environment. Our courses are taught by experienced and knowledgeable instructors who are passionate about teaching and learning.
       We connect our teachers to premium clients across the Globe.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {AboutUsWhatWeDo.map((AboutUsWhatWeDo, index) => (
          <ServiceCard key={AboutUsWhatWeDo.title} index={index} {...AboutUsWhatWeDo} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
