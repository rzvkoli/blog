import Head from "next/head";
import BlogCard from "../../components/BlogCard";
import { useState } from "react";

function Blog({ blog }) {

    const [data , setData] = useState(blog)

  return (
    <div className='flex flex-col justify-center items-center bg-white w-full'>
        <Head>
            <title>Blog</title>
        </Head>
        <div className="flex flex-row justify-center items-center gap-2 flex-wrap w-8/12 p-10">
            {
                data.map((index) => {
                return <BlogCard key={index.id} title={index.title} path={index.id} />
                })
            }
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    const blog = await data
  
    return {
      props:{
        blog
      }
    }
  }

export default Blog