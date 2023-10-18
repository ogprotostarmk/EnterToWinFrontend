import jaguarsHeaderImage from '../../public/jaguars/jaguarsHeaderImage.jpg'
import footerImage from '../../public/jaguars/footerImage.jpg'
import contest from '../../public/jaguars/contest.png'
import Form from '../components/Form'
import Image from "next/image";
import Head from 'next/head';

const jaguarsFormJCT= () => {
  return (
    <>
    <Head>
        <title>Jaguars | ENTER TO WIN PROMO (JCT) - Play Fun Inc</title>
        <link rel="icon" href="/favicon.png" />
        {/* <meta name="description" content=""/> */}
        <meta property="og:title" content="Jaguars | ENTER TO WIN PROMO (JCT) - Play Fun Inc"/>
        {/* <meta property="og:description" content="Login to your Run Good Girls account. Enjoy exclusive content, interact with our stars, and be part of our community."/> */}
        <meta property="og:url" content="https://www.playfuninc.org/jaguarsFormJCT"/>
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>
      <div className="">
        <Image src={jaguarsHeaderImage} alt="header image" className='w-full'/>
        <div className='flex flex-col xl:p-[0] sm:p-[30px] p-[20px]  items-center bg-jaguarsBackground bg-no-repeat bg-center bg-cover w-full'>
                <Image src={contest} alt="content image"/>
                <div className='max-w-[1024px] flex flex-col justify-center items-center'>
                  <p className='sm:text-4xl text-3xl mb-[8px] text-black font-[500]'>Fill out below:</p>
                  <p className='sm:text-[22px] text-[16px] text-black font-[500] mb-[30px]'>Fields marked with <span className="text-[red] font-bold text-[20px]"> *</span> are requiered</p>
                  <Form team="jaguars" code="JCT"/>
                </div>
        </div>
        <Image src={footerImage} alt="footer image" className='w-full' />
    </div>
    </>
  )
}

export default jaguarsFormJCT