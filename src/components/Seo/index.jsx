import Head from "next/head"


const Seo = ({ title, description }) => {
  const seoTitle = `${title} | Cameren`
  return (
    <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={description} />
    </Head>
  )
}

export default Seo