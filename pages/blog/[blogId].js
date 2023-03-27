import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

function BlogId({ blog }) {

    const router = useRouter()
    const blogId = router.query.blogId

  return (
    <div className='w-full flex flex-col justify-center items-center gap-10 h-screen'>
        <Head>
            <title>{blogId}</title>
        </Head>
        <div className='w-6/12 flex flex-col justify-center items-center gap-2 p-5 border border-blue-700 rounded'>
            <h1 className="font-Urbanist uppercase text-2xl text-blue-700">
                {blog.title}
            </h1>
            <p className="font-Urbanist uppercase text-base text-black">
                {blog.body}
            </p>
        </div>
        <button className="text-xl font-Urbanist uppercase bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white py-4 px-14 border border-blue-700 hover:border-transparent rounded">
        <Link href={'/blog'}>back</Link>
        </button>
    </div>
  );
}

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const data = await res.json();
    const ids = data.map((index) => (index.id))
    const paths = ids.map(id => ({ params:{blogId:id.toString()} }))
    
    return{
        paths ,
        fallback:false
    }
}

export const getStaticProps = async ({ params }) => {
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`);
    const blog = await res.json();
    
    return {
        props: {
            blog
        }
    }
}

export default BlogId