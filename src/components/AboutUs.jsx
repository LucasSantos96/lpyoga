"use client"
import React from 'react'
import Image from 'next/image'
import Card from './Card'
const AboutUs = () => {
  return (
    <section className='mx-5 lg:mx-[136px] pt-20 lg:pt-32 ' id='aboutus'>
      <div className='flex flex-col lg:flex-row lg:justify-between '>
        <div className='lg:w-[400px]'>
           <p className='shadow py-2 px-4 w-fit rounded-full text-[12px] mb-4'>About Us</p>
           <h2 className='text-5xl mb-6'>Our Passion for Yoga & Meditation</h2>
           <p className='text-[#A5A5A7]'>Id massa id tortor interdum consectetur eu ultrices viverra. Est aliquet pellentesque potenti.</p>
        </div>
        <div className=' flex gap-12 mt-10 justify-center lg:mt-0 lg:justify-normal'>
          <div className='w-[100px]'>
            <h3 className='text-4xl lg:text-5xl'>20+</h3>
            <p className='text-[12px] text-[#A5A5A7]'>Years of Experience</p>
          </div>
            <div className='w-[100px]'>
              <h3 className='text-4xl lg:text-5xl'>30+</h3>
                        <p className='text-[12px] text-[#A5A5A7]'>Countries Reached</p>
            </div>

            <div className='w-[100px]'>
              <h3 className='text-4xl lg:text-5xl'>2K+</h3>
                        <p className='text-[12px] text-[#A5A5A7]'>Classes Conducted</p>
            </div>
          </div>
      </div>
    
    <div className='mt-16 flex mb-[107px] flex-col gap-8 lg:flex-row lg:gap-0'>
      <div className='mr-8'>
    <Image 
    src={'/yoga4.jpg'}
    alt='yoga'
    width={496}
    height={284}
    className='rounded-2xl '
    />
      </div>

      <Card className={'bg-[#62826b20] p-10 mr-8 rounded-2xl shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-110'} >
        
        <div className='p-4 rounded-full bg-white w-fit'>
          <div className='p-2 bg-[#62826B] rounded-full w-fit'>
            <Image
                src={'/award.svg'}
                alt='yoga'
                width={12}
                height={12}
                className=''
                />
          </div>
        </div>

        <h3 className='font-medium mt-5 mb-4 text-2xl'>Certified Instructors</h3>
        <p className='text-[#A5A5A7] w-[258px]'>Id massa id tortor interdum consectetur eu ultrices viverra. Est aliquet pellentesque potenti.</p>
      </Card>

      <Card className={'p-10 mr-8 rounded-2xl shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-110'} >
        
        <div className='p-4 rounded-full bg-white w-fit'>
          <div className='p-2 bg-[#62826B] rounded-full w-fit'>
            <Image
                src={'/award.svg'}
                alt='yoga'
                width={12}
                height={12}
                className=''
                />
          </div>
        </div>

        <h3 className='font-medium mt-5 mb-4 text-2xl'>Holistic Approach</h3>
        <p className='text-[#A5A5A7] w-[258px]'>Id massa id tortor interdum consectetur eu ultrices viverra. Est aliquet pellentesque potenti.</p>
      </Card>
    </div>

     <div className='flex items-center justify-center gap-[110px] mb-[107px] flex-wrap lg:flex-nowrap'>
       <Image 
    src={'/logo1.png'}
    alt='yoga'
    width={78}
    height={100}
    className=''
    />
        <Image 
    src={'/logo2.png'}
    alt='yoga'
    width={200}
    height={100}
    className=''
    />   
     <Image 
    src={'/logo3.png'}
    alt='yoga'
    width={119}
    height={100}
    className=''
    /> 
       <Image 
    src={'/logo4.png'}
    alt='yoga'
    width={158}
    height={100}
    className=''
    />  
      <Image 
    src={'/logo5.png'}
    alt='yoga'
    width={60}
    height={100}
    className=''
    />
    
     </div>
    </section>
  )
}

export default AboutUs