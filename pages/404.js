import Head from "next/head"

function PageNotFound() {
  return (
    <div className="w-full h-screen flex flex-row justify-center items-center">
      <Head>
        <title>Page Not Found</title>
      </Head>
      <p className="font-Urbanist uppercase text-6xl font-black text-blue-700">
      Page Not Found
      </p>
    </div>
  )
}

export default PageNotFound
