import React from 'react'
import Image from 'next/image';
import Head from 'next/head';
import qs from 'qs'
import { formatDate,serializeMarkdown } from '../../utils';
import { MDXRemote} from 'next-mdx-remote';
import NavBar from '@/components/NavBar';
import NavMenufoot from '@/components/NavMenufoot';


const slug = ({article,navmenus}) => {
  return (
    <>
    <Head>
        <title>{article.attributes.Title}</title>
        <meta name="description"content={article.attributes.Description.slice(0, 141)}/>
        <link rel="canonical" href={`${article.attributes.canonical}`} ></link>
        <meta name="keywords" content={article.attributes.Keywords}></meta>
        {navmenus.items.map((navmenu) =>(
          <meta key={navmenu.id} name="google-site-verification" content={navmenu.attributes.google} />
        ))}
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>

  
    <NavBar navmenus={navmenus.items} />

<div className="container px-6  mx-auto xl:px-5  max-w-screen-lg py-5 mt-20  single-article">
        <div className="col-span-2">
            <h1 className="text-3xl font-bold py-2">
                {article.attributes.Title}
            </h1>
            <div className="text-lg text-white leading-8">
                <img
                    className="w-full my-12 mb-6 relative z-0 mx-auto max-w-screen-lg overflow-hidden lg:rounded-lgoverflow-hidden lg:rounded-lg"
                    src={`http://localhost:1337${article.attributes.Image.data.attributes.url}`}
                    alt={article.attributes.Image.data.attributes.name}
                />
                  <span className="align-center items-center text-sm font-bold text-white px-4">
                    <span className="text-white">
                        {formatDate(article.attributes.createdAt)}
                    </span>
                </span>  
               
                <div>
                 <MDXRemote 
                            {...(article.attributes
                                .body)}
                        />
                        </div> 
            </div>
        </div>
        <div className="mt-4 flex justify-center">
                <div className="rounded-lg overflow-hidden flex items-center justify-center mr-2">
                    <Image
                        src={`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
                        height={40}
                        width={40}
                        alt={article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.name}
                    />
                </div>
                <h5 className="text-sm font-bold text-white">ผู้เขียน&nbsp;
                    {article.attributes.author.data.attributes.firstname}{' '}
                    {article.attributes.author.data.attributes.lastname}{' '}
                     &nbsp;
                </h5>
            </div>
        
             <p className='flex justify-center'>
             {article.attributes.author.data.attributes.write}</p>
           
    </div>

    <NavMenufoot navmenus={navmenus.items}/>
   

</>
  )
}
export async function getServerSideProps({query}) {
    const queryString = qs.stringify({
      populate: ['Image', 'author.avatar'],
      filters: {
          Slug: {
              $eq: query.slug, //queryหน้า[slug]
          },
      },
  });
  const resNavmenus = await fetch(`${process.env.API_BASE_URL}/api/navmenus?`,{
    headers: { //เข้า API ผ่านรหัส
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
    },
  });
  const navmenus = await resNavmenus.json() //homes


      const res = await fetch(`${process.env.API_BASE_URL}/api/articles?${queryString}`, { //ส่วนที่ 1
        headers: { //เข้า API ผ่านรหัส 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
        },
      }); 
      const articles = await res.json()
      if (articles.data.length === 0) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
          navmenus: {
            items: navmenus.data,
        },
          article: await serializeMarkdown(articles.data[0])
        },

    };
  };

export default slug