import React, { useState } from 'react'
import AppWrap from '../../Wrapper/AppWrap'
import MotioWrap from '../../Wrapper/MotionWrap'
import emailImg from "../../assets/email.png"
import mobile from "../../assets/mobile.png"
import { client } from '../../client'
import { useForm } from "react-hook-form"
import { createFooterNewsletter } from './Footer.api'

function Footer() {
  const [isFormSubmitted, setisFormSubmitted] = useState(false)
  const [loading, setloading] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    setloading(true)
    const { email, message, name } = data;

    console.log("footer section email ", email)
    console.log("footer section message ", message)
    console.log("footer section name ", name)

    const createFooterNewsletterFun = async () => {
      const response = await createFooterNewsletter(data)
      setisFormSubmitted(true)
      setloading(false)

      setTimeout(() => {
        setisFormSubmitted(false)

      }, 1000);

      // console.log(response)
    }
    createFooterNewsletterFun()



    reset();

  }


  return (
    <div className='max-w-2xl md:mx-auto  sm:px-10 sm:py-8 p-4  '>
      <div className='flex flex-col items-center w-full h-full'>
        <h2 className="text-xl md:text-3xl font-semibold my-8 text-center ">Take a coffe & chat with me</h2>

        <div className='flex flex-col md:flex-row gap-y-4 md:gap-x-12'>
          <div className='flex flex-row items-center rounded-md shadow-md bg-primaryColor px-4 py-2 gap-3'>
            <img src={emailImg} className={`  w-12   `} />
            <a href='mailto:mughaljawad12@gmail.com' >Mughaljawad12@gmail.com</a>
          </div>
          <div className='flex flex-row items-center rounded-md shadow-md bg-primaryColor px-4 py-2 gap-3'>
            <img src={mobile} className={`  w-12   `} />
            <a href='tel:+923170337097' >03170337097</a>
          </div>
        </div>
        {!isFormSubmitted ?
          <form onSubmit={handleSubmit(onSubmit)} className='mt-8 flex flex-col w-full items-center justify-center'>
            <div className=' w-full flex justify-center  my-2'>
              <input type='text' placeholder='Your Name' {...register("name")} name='name' className='outline-none w-full rounded-md bg-primaryColor py-2 ps-2 font-medium' />
            </div>
            <div className=' w-full flex justify-center  my-2'>
              <input type='text' placeholder='Your Email' name='email' {...register("email")} className='outline-none w-full rounded-md bg-primaryColor py-2 ps-2 font-medium' />
            </div>
            <div className=' w-full flex justify-center  my-2'>
              <textarea placeholder='Your message' name='message' {...register("message")} className='outline-none w-full rounded-md bg-primaryColor py-2 ps-2 font-medium' />
            </div>
            <button type='submit' className='bg-secondaryColor mt-4 text-white rounded p-2' value="Send Message"  >{!loading ? "Send Message" : "Sending ..."}</button>
          </form> : <div>
            <h3 className='mt-8kk font-semibold text-xl my-4'>Thank You For Getting In Touch</h3>
          </div>}
      </div>
    </div>
  )
}

export default AppWrap(MotioWrap(Footer), "contact", "bg-white")