import Head from "next/head";
import Link from "next/link";

function Home() {
  return (
    <div className='flex flex-col justify-center items-center bg-white w-full'>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className='font-Urbanist uppercase text-6xl font-black text-blue-700 p-20'>
        Wellcome !
      </h1>
      <button className="text-2xl font-Urbanist uppercase bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-4 px-20 border border-blue-700 hover:border-transparent rounded">
        <Link href={'/blog'}>Blog</Link>
      </button>
    </div>
  );
}

export default Home