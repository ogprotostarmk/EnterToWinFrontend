import ramsHeaderImage from '../../public/rams/ramsHeaderImage.png'
import footerImage from '../../public/rams/footerImage.jpeg'
import contest from '../../public/rams/contest.png'
import Form from '../components/Form'
import Image from "next/image";
import Head from 'next/head';

const ramsFormRCT = () => {
  return (
    <>
      <Head>
        <title>Rams | ENTER TO WIN PROMO (RCT) - Play Fun Inc</title>
        <link rel="icon" href="/favicon.png" />
        {/* <meta name="description" content=""/> */}
        <meta property="og:title" content="Rams | ENTER TO WIN PROMO (RCT) - Play Fun Inc"/>
        {/* <meta property="og:description" content="Login to your Run Good Girls account. Enjoy exclusive content, interact with our stars, and be part of our community."/> */}
        <meta property="og:url" content="https://www.playfuninc.org/ramsFormRCT"/>
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>
      <div className="bg-ramsBackground bg-no-repeat bg-center block bg-cover w-full">
      <Image src={ramsHeaderImage} alt="header image" className='w-full'/>
      <div className='flex flex-col xl:p-[0] sm:p-[30px] p-[20px]  items-center'>
              <Image src={contest} alt="content image"/>
              <div className='max-w-[1024px] flex flex-col justify-center items-center'>
                <p className='sm:text-4xl text-3xl mb-[8px] text-white font-[500]'>Fill out below:</p>
                <p className='sm:text-[18px] text-[16px] text-white font-[300] mb-[30px]'>Fields marked with <span className="text-[red] font-bold text-[20px]"> *</span> are requiered</p>
              <Form team="rams" code="RCT"/>
              </div>
      </div>
      <Image src={footerImage} alt="footer image" className='w-full' />
  </div>
    </>
    
  )
}

export default ramsFormRCT