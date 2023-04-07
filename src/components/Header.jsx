import Image from 'next/image';
import amazon from '../../public/amazon.png';
import styles from '../styles/header.module.css';
export default function Header() {
  return (
    <header>
      {/*top nav*/}
      <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
        <div className='mt-2 flex items-center mx-4  flex-grow sm:flex-grow-0'>
          <Image
            src={amazon}
            width={150}
            height={35}
            objectFite='contain'
            className='cursor-pointer'
          />
        </div>
        <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
          <input
            className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md outline-none px-4'
            type='text'
          />
          <div className={styles.search_icon}>
            <span className={styles.span}></span>
          </div>
        </div>
        {/*space-x-6 => it's like gap give space betwwen element */}
        <div className='text-white flex text-xs space-x-6 mx-6 whitespace-nowrap'>
          <div className='link'>
            <p>Hello </p>
            <p className='font-extrabold md:text-sm'>account and list</p>
          </div>
          <div className='link'>
            <p>returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>
          <div className='relative link flex items-center '>
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold'>
              0
            </span>
            {/* <ShoppingCartIcon className='h-10' /> */}
            <p className='hidden font-extrabold md:text-sm md:inline mt-2'>
              Store
            </p>
          </div>
        </div>
      </div>
      {/*bottom nav*/}
      <div className='flex gap-4 p-2 pl-5 items-center bg-amazon_blue-light text-white text-sm'>
        <p className={`link flex items-center ${styles.father}`}>
          <div className={styles.links}>
            <span className={styles.icon}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          All
        </p>
        <p className='link'>Prime video</p>
        <p className='link'>Amazon business</p>
        <p className='link'>Tosay's Deals</p>
        <p className='hidden link lg:inline-flex'>Electronics </p>
        <p className='hidden link lg:inline-flex'>food & grocery </p>
        <p className='hidden link lg:inline-flex'>Prime </p>
        <p className='hidden link lg:inline-flex'>Buy Again</p>
        <p className='hidden link lg:inline-flex'>Health & Persspnal care</p>
      </div>
    </header>
  );
}
