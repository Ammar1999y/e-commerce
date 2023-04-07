import Image from 'next/image';
import { useState, useEffect } from 'react';
import Currency from 'react-currency-formatter';
const MAX_RATING = 5;
const MIN_RATING = 1;
export default function Product({ products }) {
  const { id, title, price, description, category, image } = products;
  const [rating, setRating] = useState([]);

  useEffect(() => {
    setRating(() =>
      Array(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
      ).fill(<p className='text-yellow-400 '>Star </p>)
    );
  }, []);
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className='relative flex flex-col rounded bg-white z-30 p-10 '>
      <p className='absolute top-2 right-2 text-xs text-gray-400'>{category}</p>
      {image && (
        <Image src={image} height={280} width={200} objectFit='contain' />
      )}
      <h4 className='my-3'>{title}</h4>
      <div className='flex'>{rating}</div>
      <p title={description} className='text-xs my-2 line-clamp-2'>
        {description}
      </p>
      <div className='mb-5'>
        <Currency quantity={price} currency='GBP' />
      </div>
      {hasPrime && <p className='-mt-5'>Free Delivery</p>}
      <button
        style={{ outline: 'none' }}
        className='mt-auto button outline-none'
      >
        Add to Basket
      </button>
    </div>
  );
}
