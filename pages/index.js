import React from 'react';
import Head from 'next/head';
import IsFeatured from '@/components/IsFeatured';
import qs from 'qs'
import Markdown from 'react-markdown'
import Sider from '@/components/Sider';
import Provider from '@/components/Provider';
import Slotgame from '@/components/Slotgame';
import Bacagame from '@/components/Bacagame';
import NavBar from '@/components/NavBar';
import NavMenufoot from '@/components/NavMenufoot';


const Home = ({articles,home,bans,providers,bacagames,slotgames,navmenus}) => {
 
    return (
        <>
        <Head>
        <title>{home.attributes.Title}</title>
        <meta name="description" content={home.attributes.Description} />
        <meta name="keywords" content={home.attributes.keywords}/>
        <link rel="canonical" href={`${home.attributes.canonical}`} ></link>
        <meta name="image" content={`https://sea-lion-app-hl2ko.ondigitalocean.app${home.attributes.Image.data.attributes.url}`}></meta>
        {navmenus.items.map((navmenu) =>(
        <meta key={navmenu.id} name="google-site-verification" content={navmenu.attributes.google} />
        ))}
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>

         <NavBar navmenus={navmenus.items} />

         
        
          <Sider bans={bans.items}/>
       

          <Provider providers={providers.items}/> 
  

         <Bacagame bacagames={bacagames.items}/>
    
         <Slotgame slotgames={slotgames.items}/>
        

          <div className=' bg-gray-900'>
          <div className='relative z-0 px-6  mx-auto xl:px-5  max-w-screen-lg py-5  single-article'>
          <Markdown>{home.attributes.body}</Markdown>
          </div>
          </div>

          <h3 className='flex justify-center text-2xl mt-2'>
          {home.attributes.Latest}</h3>

          {/*IsFeatured*/} 
    <div className="mt-5 grid gap-5 md:grid-cols-2 lg:gap-5 xl:grid-cols-3 max-w-7xl mx-auto my-8 px-2 pagi">    
      <IsFeatured articles={articles.items}/>
      </div>

      <NavMenufoot navmenus={navmenus.items}/>

    </>
    );
};

export async function getStaticProps() {
  const queryString = qs.stringify({
    populate: ['ner','Image', 'author.avatar'],
    sort: ['id:desc'],
    filters: { //กรองฟิล เอา IsFeatured $eq: true
      IsFeatured: {
            $eq: true,
        },
    },
});
  //homes
  const res = await fetch(`${process.env.API_BASE_URL}/api/homes?populate=*`,{
  headers: { //เข้า API ผ่านรหัส
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
});
const homes = await res.json()
if (homes.data.length === 0) {
  return {
      notFound: true,
  };
}


//bans
const query = qs.stringify({
  populate: ['ner','ner2','ner3','ner4','ner5','ner6'],
});

const resBans = await fetch(`${process.env.API_BASE_URL}/api/bans?${query}`,{
  headers: { //เข้า API ผ่านรหัส
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
});
const bans = await resBans.json() //bans

 //Provider
 const providersquery = qs.stringify({
  populate: ['sl1','sl2','sl3','sl4','sl5','sl6','sl7','sl8','sl9','sl10'],
});

 const resProviders = await fetch(`${process.env.API_BASE_URL}/api/providers?${providersquery}`,{
  headers: { //เข้า API ผ่านรหัส
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
});
const providers = await resProviders.json() //providers


//bacagames
const resBacagames = await fetch(`${process.env.API_BASE_URL}/api/bacagames?${providersquery}`,{
  headers: { //เข้า API ผ่านรหัส
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
});
const bacagames = await resBacagames.json() //bacagames

//slotgames
const resSlotgames = await fetch(`${process.env.API_BASE_URL}/api/slotgames?${providersquery}`,{
  headers: { //เข้า API ผ่านรหัส
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
});
const slotgames = await resSlotgames.json() //slotgames



//articles IsFeatured
const resArticles = await fetch(`${process.env.API_BASE_URL}/api/articles?${queryString}`,{
  headers: { //เข้า API ผ่านรหัส
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
});
const articles = await resArticles.json() //articles IsFeatured

 //homes
 const resNavmenus = await fetch(`${process.env.API_BASE_URL}/api/navmenus?`,{
  headers: { //เข้า API ผ่านรหัส
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
});
const navmenus = await resNavmenus.json() //homes


return {
  props: {
    navmenus: {
      items: navmenus.data,
  },
  articles: {
    items: articles.data,
},
bans: {
  items: bans.data,
},
providers: {
  items: providers.data,
},
bacagames: {
  items: bacagames.data,
},
slotgames: {
  items: slotgames.data,
},
    home:homes.data[0],
  },
 
};
};



export default Home;
