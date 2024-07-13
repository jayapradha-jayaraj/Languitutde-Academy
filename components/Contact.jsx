import React from 'react'
import { MediaData } from '../constants'
import { styles } from "../styles";
import { ContactUs} from '../assets'

const Contact = () => {
  return (
    <React.Fragment>
    <main>
      <div className="h-screen w-full bg-black centered md:w-2/3 md:mx-auto">
      <h2 className={styles.heroHeadText}>Contact Us</h2>
        <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>We’d Love to hear from You</p>
        <img
          src={ContactUs}
          alt='Contact Us'
          className='w-10 h-10 '
        />
        <br/>
        <div className="flex  items-center space-x-4">
            {
                MediaData.map((item, index) => {
                    return(
                        <div key={index}>
                            <a href={item.href} target="_blank">
                            <img src={item.img} alt='media' className="h-28"/>
                            </a>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </main>
  </React.Fragment>
  )
}

export default Contact;