import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import ProductFeed from '../components/ProductFeed';
const store = [
  {
    id: 1,
    title: 'bote',
    price: 100,
    description: 'good bote',
    category: 'man clothing',
  },
  {
    id: 2,
    title: 'bote',
    price: 100,
    description: 'good bote',
    category: 'man clothing',
  },
  {
    id: 3,
    title: 'bote',
    price: 100,
    description: 'good bote',
    category: 'man clothing',
  },
  {
    id: 4,
    title: 'bote',
    price: 100,
    description: 'good bote',
    category: 'man clothing',
  },
];
export default function Home({ products })     {
  console.log(products);
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      {/* header */}
      <Header />
      <main className='max-w-screen-2xl mx-auto'>
        {/* Banner */}
        <Banner />
        {/* ProductFeed */}
        <ProductFeed products={products || store} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  let products = null;
  try {
    products = await fetch('https://fakestoreapi.com/products').then((res) =>
      res.json()
    );
  } catch {}
  return {
    props: {
      products,
    },
  };
}
