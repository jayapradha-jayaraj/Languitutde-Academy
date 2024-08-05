import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
    index,
    video,
    name,
    designation,
    image,
    poster,
  }) => (
    <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >

    <div className='mt-1'>
      {video && (
        <video controls style={styles.video} poster={poster}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} 
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
  );
const Testimonials = () =>{
    return (
        <div className={`mt-12 bg-black-100 rounded-[20px]`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>            
            <h2 className={styles.sectionHeadText}>Why Choose Us</h2>
            <p className='mt-4 text-secondary text-[17px]' >Our teachers are efficient and professional. Our Teacher Training Course is Smooth and Self-paced. Job placement is swift. We hold your hand and walk with you through your learning journey.
            Don’t take our word for it, take the word of teachers who have been trained by Languitude Academy and share their experience in the videos below.</p>
            <br/>
          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    )
}
export default Testimonials;