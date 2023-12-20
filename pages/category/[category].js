import React from 'react'
import qs from 'qs'
import Tabs from '@/components/Tabs';
import { debounce } from '../../utils';
import { useRouter } from 'next/router';
import Pagination from '@/components/Pagination';
import ArticleList from '../../components/ArticleList'
import Head from 'next/head';
import { useState } from 'react';
import NavBar from '@/components/NavBar';
import NavMenufoot from '@/components/NavMenufoot';



const category = ({articles,categories,navmenus,article}) => {
    const { page, pageCount } = articles.pagination;
    const router = useRouter();
    const { category: categorySlug } = router.query;


    const handleSearch = (query) => {
        router.push(`/category/${categorySlug}/?search=${query}`);
    };

  return (
    <>
            <Head>
            <title>{article.attributes.category.data.attributes.Title}</title>
            <meta name="description"content={article.attributes.category.data.attributes.description}/>
            <link rel="canonical" href={`${article.attributes.category.data.attributes.canonical}`}></link>
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
  
            <p className='mt-4 flex justify-center'>
            {article.attributes.category.data.attributes.description}</p>
                
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
        populate: ['Image','author.avatar','category'],
        sort: ['id:desc'],
        filters: { //กรองฟิล
            category: {
             // Slug ในหน้าCategory ตามค่า Strapi ที่เราตั้งชื่อไว้ ดูด้วยว่าเป็นตัวพิมเล็กหรือพิมใหญ่
                Slug: query.category,//queryหน้า[category]
            },
        },
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
  const categories = await resCategories.json() //articles


  const resNavmenus = await fetch(`${process.env.API_BASE_URL}/api/navmenus?`,{
    headers: { //เข้า API ผ่านรหัส
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
    },
  });
  const navmenus = await resNavmenus.json() //homes
  
const res = await fetch(`${process.env.API_BASE_URL}/api/articles?${queryString}`, { //ส่วนที่ 1
  headers: { // Return ไม่ให้ TAG ซ้ำ   <link rel="canonical" href="">
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
}); 
const article = await res.json()
if (article.data.length === 0) {
  return {
      notFound: true,
  };
}  // Return ไม่ให้ TAG ซ้ำ   <link rel="canonical" href=""> 


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
       article:article.data[0], // Return ไม่ให้ TAG ซ้ำ   <link rel="canonical" href=""> 
    },
};
};



export default category