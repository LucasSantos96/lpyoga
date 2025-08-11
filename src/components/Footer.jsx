import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='bg-[#11141B] pt-[84px] pb-10' id='contact'>
       <section className='mx-[136px] flex text-white '>
         <div className='lg:w-[410px]'>
          <Image
          src={'/logo-shanty-white.png'}
          alt='logo'
          width={180}
          height={100}          
          />
          <p className='my-5 text-[14px] text-[#A5A5A7]'>Turpis ornare euismod quam odio sit. Egestas molestie eget tellus sed. Aenean enim mattis imperdiet semper erat quam. Tempor blandit elementum urna.</p>
          <div className='flex gap-2 mb-14'>
            <Image
            src={'/mail.png'}
            alt='logo'
            width={14}
            height={100}
            />
            <p className='text-[#A5A5A7] text-[12px]'>info@shanty.com</p>
          </div>
         </div>

         <div className='lg:ml-32'>
          <h3>Links</h3>
          <p className='text-[12px] text-[#A5A5A7] mt-5'>Home</p>
          <p className='text-[12px] text-[#A5A5A7] mt-3'>About Us</p>
          <p className='text-[12px] text-[#A5A5A7] mt-3'> Services</p>
          <p className='text-[12px] text-[#A5A5A7] mt-3'>Contact Us</p>
         </div>

        <div className='lg:ml-20'>
          <h3>Services</h3>
          <p className='text-[12px] text-[#A5A5A7] mt-5'>Private Yoga Sessions</p>
          <p className='text-[12px] text-[#A5A5A7] mt-3'>Group Yoga Classes</p>
          <p className='text-[12px] text-[#A5A5A7] mt-3'> Meditation Workshops</p>
          <p className='text-[12px] text-[#A5A5A7] mt-3'>Corporate Wellness</p>
         </div>

         <div className='lg:ml-20 lg:w-[245px]'>
          <h3>Working Hours</h3>
          <p className='text-[12px] text-[#A5A5A7]'>Scelerisque justo et sed in purus ornare pulvinar aliquam.</p>

          <div className='flex mt-5 gap-2'>
             <Image
            src={'/clock.svg'}
            alt='logo'
            width={14}
            height={100}
            />
            <p className='text-[#A5A5A7] text-[12px]'>Mon - Fri: 9:00AM - 6:00PM</p>
          </div>

          <div className='flex mt-2 gap-2'>
             <Image
            src={'/clock.svg'}
            alt='logo'
            width={14}
            height={100}
            />
            <p className='text-[#A5A5A7] text-[12px]'>Sat - Sun: 8:00AM - 4:00PM</p>
          </div>

         </div>
       </section>
       <hr className='border border-[#a5a5a72b]'/>
       <div className='mt-4 flex justify-between mx-[136px]'>
         <p className='text-[#A5A5A7] text-[12px] '>Yoga & Meditation Template Kit By OmiSpace</p>

        
         <p className='text-white text-[12px] ml-[136px] '>Desenvolvido por <a href="https://portifolio-black-two-51.vercel.app/" target='_blank' className='text-[#62826B] '>Lucas Santos</a></p> 

  
       </div>

    </footer>
  )
}

export default Footer