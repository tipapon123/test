import React from 'react'
import Head from 'next/head';
import qs from 'qs'
import Tabs from '@/components/Tabs';
import { debounce } from '../../utils';
import { useRouter } from 'next/router';
import Pagination from '@/components/Pagination';
import ArticleList from '../../components/ArticleList'
import { useState } from 'react';
import NavBar from '@/components/NavBar';
import NavMenufoot from '@/components/NavMenufoot';

const blog = ({categories ,articles,navmenus,blog}) => {
  const [navbar, setNavbar] = useState(false);
    const router = useRouter();

    const { page, pageCount } = articles.pagination;
    
    const handleSearch = (query) => {
            //กลับไปยังตำเเหน่งเเรกที่ค้นหา
        router.push(`/blog?search=${query}`);
    };

  return (
        <>
             <Head>
                <title>{blog.attributes.Title}</title>
                <meta name="description" content={blog.attributes.Description} />
               <link rel="canonical" href={`${blog.attributes.canonical}`} ></link>
               {navmenus.items.map((navmenu) =>(
               <meta key={navmenu.id} name="google-site-verification" content={navmenu.attributes.google} />
               ))}
               <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
             </Head>

             <NavBar navmenus={navmenus.items} />


          <Tabs
                categories={categories.items}
                handleOnSearch={debounce(handleSearch, 500)}
            />

              
          <p className='mt-4 flex justify-center'>{blog.attributes.Description} </p>
                

            <div className="mt-5 grid gap-5 md:grid-cols-2 lg:gap-5 xl:grid-cols-3 max-w-7xl mx-auto my-8 px-2"> 
            <ArticleList articles={articles.items} />
            </div>
            <div className='pagi'>
            <Pagination page={page} pageCount={pageCount} />
            </div>
          
            <NavMenufoot navmenus={navmenus.items}/>

    </>
  )
}
export async function getServerSideProps({query}) {
    const options = {
        populate: ['Image','author.avatar'],
        sort: ['id:desc'],
        pagination: {
            page: query.page ? +query.page : 1,
             pageSize: 10,
        },
    };
    
    
    if (query.search) {
        options.filters = {
            Title: {
                $containsi: query.search,
            },
        };
    }
     
    const queryString = qs.stringify(options);
    const resArticles = await fetch(`${process.env.API_BASE_URL}/api/articles?${queryString}`,{
    headers: { //เข้า API ผ่านรหัส
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
    },
  });
  const articles = await resArticles.json() //articles

  const resCategories = await fetch(`${process.env.API_BASE_URL}/api/categories?`,{
    headers: { //เข้า API ผ่านรหัส
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
    },
  });
  const categories = await resCategories.json() //categories


  const resNavmenus = await fetch(`${process.env.API_BASE_URL}/api/navmenus?`,{
    headers: { //เข้า API ผ่านรหัส
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
    },
  });
  const navmenus = await resNavmenus.json() //homes

  const res = await fetch(`${process.env.API_BASE_URL}/api/blogs?`,{
    headers: { //เข้า API ผ่านรหัส
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
    },
  });
  const blogs = await res.json()
  if (blogs.data.length === 0) {
    return {
        notFound: true,
    };
  }
  
  
  return {
    props: {
        categories: {
            items: categories.data,
        },
        articles: {
            items: articles.data,
            pagination: articles.meta.pagination,
        },
        navmenus: {
          items: navmenus.data,
      },
      blog:blogs.data[0],
    },
};
};
export default blog