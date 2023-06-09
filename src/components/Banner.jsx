import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import prisma from '../../public/prisma.png';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className='relative'>
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {/* <div className='cursor-pointer select-none'>
          src='https://links.papareact.com/gil'
          <Image src={prisma} className='cursor-pointer' />
        </div>
        <div className='cursor-pointer select-none'>
          src='https://links.papareact.com/6ff'
          <Image src={prisma} className='cursor-pointer' />
        </div> */}
        <div className='cursor-pointer select-none'>
          {/* src='https://links.papareact.com/7ma' */}
          <Image src={prisma} className='cursor-pointer' />
        </div>
      </Carousel>
    </div>
  );
}
