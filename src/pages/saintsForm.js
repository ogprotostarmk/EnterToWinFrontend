import saintsHeaderImage from '../../public/saints/saintsHeaderImage.png'
import footerImage from '../../public/saints/footerImage.jpg'
import contest from '../../public/saints/contest.png'
import Form from '../components/Form'
import Image from "next/image";

const ramsForm = () => {
  return (
    <div className="">
      <Image src={saintsHeaderImage} alt="header image" className='w-full'/>
      <div className='flex flex-col xl:p-[0] sm:p-[30px] p-[20px]  items-center bg-saintsBackground bg-no-repeat bg-center bg-cover w-full'>
              <Image src={contest} alt="content image"/>
              <div className='max-w-[1024px] flex flex-col justify-center items-center'>
                <p className='sm:text-4xl text-3xl mb-[8px] text-black font-[500]'>Fill out below:</p>
                <p className='sm:text-[22px] text-[16px] text-black font-[500] mb-[30px]'>Fields marked with <span className="text-[red] font-bold text-[20px]"> *</span> are requiered</p>
                <Form team="saints"/>
              </div>
      </div>
      <Image src={footerImage} alt="footer image" className='w-full' />
  </div>
  )
}

export default ramsForm