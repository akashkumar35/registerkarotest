import React from 'react'
import image1 from "../../src/images/landingpic.png";
import Image from 'next/image'
import image2 from "../../src/images/tree.png";
import image3 from "../../src/images/logo.png";
function Landing() {
    const data = [
        {
            id:1,
            title:"Connect with RegisterKro"
        },
        {
            id:2,
            title:"Give Essenential Details & Documents"
        },
        {
            id:3,
            title:"Get your Virtual Office ready to work"
        }

    ]
  return (
    <div>
        <div className='w-[100%] flex justify-center items-center relative'>
         <Image src={image1} className='w-[100%] flex justify-center items-center' />
         <div className='w-[35%] flex justify-start items-center absolute left-[10%]'>
         <h1 className='text-[45px] text-white'>Work from Anywhere,grow everywhere get your instant virtual office</h1>
         </div>
       
        </div>
        <div className='w-[100%] mt-[4%] flex justify-center items-center'>
            <div className='w-[80%]'>
                <p className='text-[20px] '>Get your virtual office up  and running in 3 easy steps</p>
                <div className='w-[100%] mt-4 flex justify-between items-center'>
                    {data.map((items)=>{
                        return(
                            <div className=' h-[120px] flex items-end px-3 rounded-[20px] pb-3 bg-gray-200 w-[25%]'>
                            {items.title}
                           </div>
                        )
                    })}
                 
                
                </div>

               

            </div>

        </div>

        <div className='w-[100%] mt-[6%] flex justify-center items-center flex-col'>
        <p className='text-[40px]'>Client Testimonal</p>
           
                             <div className='w-[80%] flex justify-center items-center'>
                                <div className='w-[30%]'>
                                <Image src={image2}  className='w-[60%]'/>
                                </div>
                                <div className='w-[60%] flex justify-start items-center'>
                                  <p>The LaunchWise team is very professional and 100% transparent. We would surely recommend them to everyone who wants to have a new business setup or those who already have a company. Their experts are thorough with all corners of business. They have surely earned us as their permanent client.</p>
                                </div>

                                  

                             </div>
        </div>


        <div className='flex justify-center bg-black mt-[5%] p-[3%] items-center w-[100%]'>
            <div className='w-[40%] flex pl-[6%] flex-col '>
            <Image src={image3} />
            <div className='w-[35%] mt-[4%]'>
                <p className='text-[15px] text-white'>Speak to our Experts</p>
                <p className='text-white text-[10px]'>Please don't hesitate to reach out to us. Our team of experts is always available and prepared to address and resolve any inquiries you may have.</p>
            </div>
            <div className='mt-4'>
                <button className='bg-[blue] text-[10px] py-2  w-[90px] text-white'>Enquiry now</button>
            </div>
            </div>
            <div className='w-[60%] flex flex-col'>
                <div className='flex w-[80%] justify-between'>
                <div className='w-[45%] bg-gray-200 flex justify-start flex-col items-start pl-5'>
                    <p className='text-black font-bold'>Email</p>
                    <p>Virtul office@teamwork.com</p>
                </div>
                <div className='w-[45%] bg-gray-200 flex justify-start flex-col items-start pl-5'>
                    <p className='text-black font-bold'>Telephone</p>
                    <p>+91 0985674567</p>
                </div>
                </div>
           

                <div className='w-[80%] mt-4 bg-gray-200 flex justify-start flex-col items-start pl-5'>
                    <p className='text-black font-bold'>Location</p>
                    <p>704,palm court ,mehrauli-gurgaon road,haryana 12207</p>
                </div>
            </div>

        </div>
    
    </div>
  )
}

export default Landing
