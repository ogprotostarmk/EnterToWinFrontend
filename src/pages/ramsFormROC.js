import ramsHeaderImage from '../../public/rams/ramsHeaderImage.png'
import footerImage from '../../public/rams/footerImage.jpeg'
import contest from '../../public/rams/contest.png'
import Form from '../components/Form'
import Image from "next/image";
import Head from 'next/head';

const ramsFormROC = () => {
  return (
    <>
      <Head>
        <title>Rams | ENTER TO WIN PROMO (ROC) - Play Fun Inc</title>
        <link rel="icon" href="/favicon.png" />
        {/* <meta name="description" content=""/> */}
        <meta property="og:title" content="Rams | ENTER TO WIN PROMO (ROC) - Play Fun Inc"/>
        {/* <meta property="og:description" content="Login to your Run Good Girls account. Enjoy exclusive content, interact with our stars, and be part of our community."/> */}
        <meta property="og:url" content="https://www.playfuninc.org/ramsFormROC"/>
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>
      <div className="bg-ramsBackground bg-no-repeat bg-center block bg-cover w-full">
      <Image src={ramsHeaderImage} alt="header image" className='w-full'/>
      <div className='flex flex-col xl:p-[0] sm:p-[30px] p-[20px]  items-center'>
              <div className='flex flex-col self-center lg:my-[40px] sm:my-[30px] my-[20px]'>
                <h1 className='text-white lg:text-[68px] sm:text-[34px] font-[600] self-center text-[24px] text-center'>CONTEST ENTRY FORM</h1>
                <p className='text-white lg:text-[32px] sm:text-[20px] text-[14px] text-center'>Enter to win tickets to a Los Angeles Rams home game, prize packages, signed merchandise & much more.</p>
              </div>
              {/* <Image src={contest} alt="content image"/> */}
              <div className='max-w-[1024px] flex flex-col justify-center items-center'>
                <p className='sm:text-4xl text-3xl mb-[8px] text-white font-[500]'>Fill out below:</p>
                <p className='sm:text-[18px] text-[16px] text-white font-[300] mb-[30px]'>Fields marked with <span className="text-[red] font-bold text-[20px]"> *</span> are requiered</p>
              <Form team="rams" code="ROC"/>
              </div>
      </div>
      <Image src={footerImage} alt="footer image" className='w-full' />
  </div>
    </>
    
  )
}

export default ramsFormROC