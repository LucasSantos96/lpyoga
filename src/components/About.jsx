import React from 'react'
import Card from './Card'
import Image from 'next/image'
import Button from './Button'

const About = () => {
  return (
    <section className='bg-[url(/bg-services.png)] h-full w-full bg-cover bg-center pt-32' >
        <p className='text-[12px] bg-[#FCFBF9] py-2 px-6 w-fit rounded-full mx-[136px] mb-6 '>Featured Classes</p>
        <div className='mx-[136px] flex justify-between'>
            <h2 className='  mb-16 text-5xl text-white'>Explore Our Top Yoga & <br /> Meditation Classes</h2>
            <p className='bg-[#11141B] text-white py-2 px-6 w-fit h-fit rounded-full cursor-pointer shadow'>All Classes</p>
        </div>
       <div className='mx-[136px] flex gap-9'>
           
           <Card className={'rounded-2xl bg-white shadow p-1 mb-36 w-[390px] cursor-pointer transition-transform duration-300 hover:scale-110'}>

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
               <Button className={'text-center text-[14px] text-[#62826B] rounded-full shadow py-2 px-8 bg-[#FCFBF9] cursor-pointer'}>Start Class</Button>
           </div>
           </Card>

            <Card className={'rounded-2xl bg-white shadow p-1 mb-36 w-[390px] cursor-pointer transition-transform duration-300 hover:scale-110'}>

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
               <Button className={'text-center text-[14px] text-[#62826B] rounded-full shadow py-2 px-8 bg-[#FCFBF9] cursor-pointer'}>Start Class</Button>
           </div>
           </Card>

            <Card className={'rounded-2xl bg-white shadow p-1 mb-36 w-[390px] cursor-pointer transition-transform duration-300 hover:scale-110'}>

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
               <Button className={'text-center text-[14px] text-[#62826B] rounded-full shadow py-2 px-8 bg-[#FCFBF9] cursor-pointer'}>Start Class</Button>
           </div>
           </Card>

       </div>
        </section>
  )
}

export default About