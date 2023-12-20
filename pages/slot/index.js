import React from 'react'
import Head from 'next/head';
import Markdown from 'react-markdown'
import NavBar from '@/components/NavBar';
import NavMenufoot from '@/components/NavMenufoot';



const Slot = ({slot,navmenus}) => {
 
  return (
    <>
         <Head>
        <title>{slot.attributes.Title}</title>
        <meta name="description" content={slot.attributes.Description} />
        <link rel="canonical" href={`${slot.attributes.canonical}`} ></link>
        {navmenus.items.map((navmenu) =>(
        <meta key={navmenu.id} name="google-site-verification" content={navmenu.attributes.google} />
        ))}
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
 
     <NavBar navmenus={navmenus.items} />
      
      <div className='pagi  mt-20'>
      <div className='relative z-0 px-6  mx-auto xl:px-5  max-w-screen-lg py-5  single-article'>
      <Markdown>{slot.attributes.body}</Markdown>
      </div>
      </div>
 
      <NavMenufoot navmenus={navmenus.items}/>

    </>
  )
}

export async function getServerSideProps() {

  const resNavmenus = await fetch(`${process.env.API_BASE_URL}/api/navmenus?`,{
    headers: { //เข้า API ผ่านรหัส
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
    },
  });
  const navmenus = await resNavmenus.json() //homes
  

  //homes
  const res = await fetch(`${process.env.API_BASE_URL}/api/slots?`,{
  headers: { //เข้า API ผ่านรหัส
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
});

const slots = await res.json()
if (slots.data.length === 0) {
  return {
      notFound: true,
  };
}



return {
  props: {
    navmenus: {
      items: navmenus.data,
  },
  slot:slots.data[0],
  },
 
};
};

export default Slot