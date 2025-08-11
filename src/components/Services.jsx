import React from 'react'
import Card from './Card'
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

const About = () => {
  return (
    <section className='bg-[url(/bg-services.png)] h-full w-full bg-cover bg-center pt-32' id='services'>
        <p className='text-[14px] bg-[#FCFBF9] py-2 px-6 w-fit rounded-full mx-5 lg:mx-[136px] mb-6  font-medium'>Featured Classes</p>
        <div className='mx-5 lg:mx-[136px] flex flex-col lg:flex-row lg:justify-between'>
            <h2 className=' mb-8 lg:mb-16 text-4xl lg:text-5xl text-white'>Explore Our Top Yoga & <br /> Meditation Classes</h2>
           
           <Link href="/classes" className='bg-[#11141B] text-center lg:text-left text-white py-2 px-6 w-fit h-fit rounded-full cursor-pointer shadow text-[14px]'>All Classes
           </Link> 
        </div>

       <div className='mx-5 flex-wrap mt-8 justify-center lg:flex-nowrap lg:mx-[136px] flex gap-9'>
           
           <Card className={'rounded-2xl bg-white shadow p-1 lg:mb-36 w-[390px] cursor-pointer transition-transform duration-300 hover:scale-105 lg:hover:scale-110'}>

                <Image
               src={'/yoga1.jpg'}
               alt='layer'
               width={390}
               height={100}
               className='rounded-2xl mb-4'
               />

           <div className='pl-6 pb-6'> 
               <div className='flex items-center'>
                   <Image
                   src={'/layers.svg'}
                   alt='layer'
                   width={18}
                   height={18}
                   /> <p className='text-[#C1CDC3] text-[10px] ml-2 mr-4'>Beginner</p>
                     <Image
                   src={'/clock.svg'}
                   alt='layer'
                   width={18}
                   height={18}
                   /> <p className='text-[#C1CDC3] text-[10px] ml-2'>30 Minutes</p>
               
               </div>
               <h2 className='mt-4'>Morning Yoga Flow</h2>
               <p className='text-[12px] text-[#62826B]'>164+ Menbers</p>
               <p className='text-[12px] text-[#C1CDC3] my-5'>Consectetur eu ultrices viverra. Est aliquet pellentesque potenti.</p>
               <Button className={'text-center text-[14px] text-[#62826B] rounded-full shadow py-2 px-8 bg-[#FCFBF9] cursor-pointer hover:bg-[#62826B] hover:text-white'}>Start Class</Button>
           </div>
           </Card>

            <Card className={'rounded-2xl bg-white shadow p-1 lg:mb-36 w-[390px] cursor-pointer transition-transform duration-300 hover:scale-105 lg:hover:scale-110'}>

                <Image
               src={'/yoga1.jpg'}
               alt='layer'
               width={390}
               height={100}
               className='rounded-2xl mb-4'
               />

           <div className='pl-6 pb-6'> 
               <div className='flex items-center'>
                   <Image
                   src={'/layers.svg'}
                   alt='layer'
                   width={18}
                   height={18}
                   /> <p className='text-[#C1CDC3] text-[10px] ml-2 mr-4'>Beginner</p>
                     <Image
                   src={'/clock.svg'}
                   alt='layer'
                   width={18}
                   height={18}
                   /> <p className='text-[#C1CDC3] text-[10px] ml-2'>30 Minutes</p>
               
               </div>
               <h2 className='mt-4'>Morning Yoga Flow</h2>
               <p className='text-[12px] text-[#62826B]'>164+ Menbers</p>
               <p className='text-[12px] text-[#C1CDC3] my-5'>Consectetur eu ultrices viverra. Est aliquet pellentesque potenti.</p>
               <Button className={'text-center text-[14px] text-[#62826B] rounded-full shadow py-2 px-8 bg-[#FCFBF9] cursor-pointer hover:bg-[#62826B] hover:text-white'}>Start Class</Button>
           </div>
           </Card>

            <Card className={'rounded-2xl bg-white shadow p-1 mb-20 lg:mb-36 w-[390px] cursor-pointer transition-transform duration-300 hover:scale-105 lg:hover:scale-110'}>

                <Image
               src={'/yoga1.jpg'}
               alt='layer'
               width={390}
               height={100}
               className='rounded-2xl mb-4'
               />

           <div className='pl-6 pb-6'> 
               <div className='flex items-center'>
                   <Image
                   src={'/layers.svg'}
                   alt='layer'
                   width={18}
                   height={18}
                   /> <p className='text-[#C1CDC3] text-[10px] ml-2 mr-4'>Beginner</p>
                     <Image
                   src={'/clock.svg'}
                   alt='layer'
                   width={18}
                   height={18}
                   /> <p className='text-[#C1CDC3] text-[10px] ml-2'>30 Minutes</p>
               
               </div>
               <h2 className='mt-4'>Morning Yoga Flow</h2>
               <p className='text-[12px] text-[#62826B]'>164+ Menbers</p>
               <p className='text-[12px] text-[#C1CDC3] my-5'>Consectetur eu ultrices viverra. Est aliquet pellentesque potenti.</p>
               <Button className={'text-center text-[14px] text-[#62826B] rounded-full shadow py-2 px-8 bg-[#FCFBF9] cursor-pointer hover:bg-[#62826B] hover:text-white'}>Start Class</Button>
           </div>
           </Card>

       </div>
        </section>
  )
}

export default About