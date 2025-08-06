import React from 'react'
import Image from 'next/image'
import NavLinks from './NavLinks'
import Link from 'next/link'

const Header = () => {
  return (
    <header className=''> 
    <div className='bg-[#62826B] text-[#EFF3EC] text-[12px] text-center py-[18px]'>
        <p><span className='text-[#FFEFC4]'>Try a Free Class Today </span>- No commitment, Just Relaxation and Rejuvenation</p>
    </div>

    <div className='mx-[136px] flex items-center justify-between py-[33px] '>
        <Image
        src={'/logo-shanty.png'}
        alt='logo'
        width={150}
        height={100}
        />
        <nav>
            <ul className='font-medium text-[15px] flex gap-5  cursor-pointer'>
                <Link href={''} className={'hover:text-[#62826B]'} nome={'Home'}>Home</Link>

                <Link href='#aboutus' scroll={true} className={'hover:text-[#62826B]'} nome={'Home'}>About Us</Link>

               <Link href='#services' className={'hover:text-[#62826B]'} nome={'Home'}>Services</Link>

               <Link href={''} className={'hover:text-[#62826B]'} nome={'Home'}>Pages</Link>
               
               <Link href={''} className={'hover:text-[#62826B]'} nome={'Home'}>Contact Us</Link>
            </ul>
        </nav>          
    <div className='flex gap-2'>
        <Link href='https://wa.me/5511999999999' target='_blank'  className='p-3 border border-[#3837374c] rounded-full hover:text-[#62826B] px-8'>Join class</Link>

        <Link href='https://wa.me/5511999999999' target='_blank' className='p-3 border border-[#3837374c] rounded-full hover:text-[#62826B]'><Image src={'/phone.svg'} alt='phone' width={24} height={24}/></Link>


    </div>
    </div>
<hr className='border-[#38373712]'/>
    </header>
  )
}

export default Header