import ramsHeaderImage from '../../public/ramsHeaderImage.jpg'
import footerImage from '../../public/footerImage.jpeg'
import contest from '../../public/contest.png'
import Form from '../components/Form'
import Image from "next/image";

const ramsForm = () => {
  return (
    <div className="bg-custom-background bg-no-repeat bg-center block bg-cover w-full">
      <Image src={ramsHeaderImage} alt="header image" className='w-full'/>
      <div className='flex flex-col xl:p-[0] sm:p-[30px] p-[20px]  items-center'>
              <Image src={contest} alt="content image"/>
              <div className='max-w-[1024px] flex flex-col justify-center items-center'>
                <p className='sm:text-4xl text-3xl mb-[8px] text-white font-[500]'>Fill out below:</p>
                <p className='sm:text-[18px] text-[16px] text-white font-[300] mb-[30px]'>Fields marked with <span className="text-[red] font-bold text-[20px]"> *</span> are requiered</p>
              <Form />
              </div>
      </div>
      <Image src={footerImage} alt="footer image" className='w-full' />
  </div>
  )
}

export default ramsForm