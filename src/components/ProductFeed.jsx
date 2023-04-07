import Image from 'next/image';
import Product from './Product';
import larg from '../../public/larg.jpg';
import '../../public/larg.jpg';
export default function ProductFeed({ products }) {
  return (
    <div className='grid gap-5 grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
      {products.map((e) => (
        <Product products={e} key={e.id} />
      ))}
      <div className='gridy'>
        <img loading='lazy' className='w-full' src='/larg.jpg' alt='' />
      </div>
    </div>
  );
}
