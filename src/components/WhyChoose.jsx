import React from "react";
import Image from "next/image";
const WhyChoose = () => {
  return (
    <section className="bg-[#62826b26] "> 
     <div  className="mx-[136px] pt-[120px] pb-[320px] flex">
            
               <div className="w-[604px]">
         <Image
         src={"/yoga2.jpg"}
         alt="yoga"
         width={604}
         height={100}
         className="rounded-2xl"
         />
         <div className="flex gap-[30px] mt-[30px]">
           <Image
            src={"/yoga5.jpg"}
             alt="yoga"
             width={372}
             height={100}
             className="rounded-2xl"
             />
           <div className="shadow-2xl py-[52px] px-[24px] rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 bg-white">
             <p className="text-5xl">10K+</p>
             <p className="text-[#A5A5A7] text-[12px] w-32 ">
               Meditation Hours Logged
             </p>
           </div>
         </div>
               </div>
         {/*Section 2 */}
         
               <div className="ml-[100px] w-[530px]">
         <p className="text-[12px] font-medium py-2 px-4 bg-white rounded-full w-fit">Why Choose Us</p>
         <h2 className="text-5xl mt-4">The Shanty: Your Path to Inner Peace</h2>
         <div className="flex mt-12 gap-6">
         <div className='p-4 rounded-full bg-white w-fit h-fit'>
           <div className='p-2 bg-[#62826B] rounded-full w-fit '>
             <Image
                 src={'/users.svg'}
                 alt='yoga'
                 width={32}
                 height={12}
                 className=''
                 />
           </div>
         </div>
             <div>
                 <h3>Experienced Instructors</h3>
                 <p className="text-[#A5A5A7] mt-4">Id massa id tortor interdum consectetur eu ultrices viverra. Est aliquet pellentesque potenti.</p>
             </div>
         </div>
         <div className="flex mt-12 gap-6 ">
         <div className='p-4 rounded-full bg-white w-fit h-fit'>
           <div className='p-2 bg-[#62826B] rounded-full w-fit '>
             <Image
                 src={'/award.svg'}
                 alt='yoga'
                 width={32}
                 height={12}
                 className=''
                 />
           </div>
         </div>
             <div>
                 <h3>Comprehensive Class Offerings</h3>
                 <p className="text-[#A5A5A7] mt-4">Id massa id tortor interdum consectetur eu ultrices viverra. Est aliquet pellentesque potenti.</p>
             </div>
         </div>
         
         
             <div className="flex mt-12 gap-6">
         <div className='p-4 rounded-full bg-white w-fit h-fit'>
           <div className='p-2 bg-[#62826B] rounded-full w-fit '>
             <Image
                 src={'/link.svg'}
                 alt='yoga'
                 width={32}
                 height={12}
                 className=''
                 />
           </div>
         </div>
             <div>
                 <h3>Community and Support</h3>
                 <p className="text-[#A5A5A7] mt-4">Id massa id tortor interdum consectetur eu ultrices viverra. Est aliquet pellentesque potenti.</p>
             </div>
         </div>
               </div>
     </div>
    </section>
  );
};

export default WhyChoose;
