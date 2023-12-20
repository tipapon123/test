import qs from 'qs'
import moment from 'moment/moment';

// สร้างฟังชั่นไว้รับค่า
const generateSiteMap = (articles,categories,homes,baccarats,slots,fishgames,sports,lottos,promotions,blogs) => {


  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
   
  ${homes.data.map(home => {
    return `<url>
        <loc>${process.env.BASE_URL_DOMAIN}</loc>
        <lastmod>${moment(home.attributes.updatedAt).format("YYYY-MM-DD")}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1</priority>
      </url>`;
  }).join('')}


   ${baccarats.data.map(baccarat => {
      return`<url>
        <loc>${process.env.BASE_URL_DOMAIN}/baccarat</loc>
        <lastmod>${moment(baccarat.attributes.updatedAt).format("YYYY-MM-DD")}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>  
      </url>`
      }).join('')}

      ${slots.data.map(slot => {
        return`<url>
          <loc>${process.env.BASE_URL_DOMAIN}/slot</loc>
          <lastmod>${moment(slot.attributes.updatedAt).format("YYYY-MM-DD")}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.5</priority>
        </url>`
        }).join('')}

        ${fishgames.data.map(fishgame => {
          return`<url>
            <loc>${process.env.BASE_URL_DOMAIN}/fish</loc>
            <lastmod>${moment(fishgame.attributes.updatedAt).format("YYYY-MM-DD")}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.5</priority>
          </url>`
          }).join('')}

          ${sports.data.map(sport => {
            return`<url>
              <loc>${process.env.BASE_URL_DOMAIN}/sport</loc>
              <lastmod>${moment(sport.attributes.updatedAt).format("YYYY-MM-DD")}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.5</priority>
            </url>`
            }).join('')}

        ${lottos.data.map(lotto => {
        return`<url>
       <loc>${process.env.BASE_URL_DOMAIN}/lotto</loc>
      <lastmod>${moment(lotto.attributes.updatedAt).format("YYYY-MM-DD")}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.5</priority>
      </url>`
       }).join('')}

       ${promotions.data.map(promotion => {
        return`<url> 
       <loc>${process.env.BASE_URL_DOMAIN}/promotion</loc>
       <lastmod>${moment(promotion.attributes.updatedAt).format("YYYY-MM-DD")}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.5</priority>
        </url>`
    }).join('')}

    
    ${blogs.data.map(blog => {
      return`<url> 
     <loc>${process.env.BASE_URL_DOMAIN}/blog</loc>
     <lastmod>${moment(blog.attributes.updatedAt).format("YYYY-MM-DD")}</lastmod>
     <changefreq>weekly</changefreq>
     <priority>0.5</priority>
      </url>`
  }).join('')}

  ${articles.data.map(article => {
    return `<url>
        <loc>${process.env.BASE_URL_DOMAIN}/article/${article.attributes.Slug}
        </loc>
        <lastmod>${moment(article.attributes.updatedAt).format("YYYY-MM-DD")}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`;
  }).join('')}

    ${categories.data.map(category => {
    return `<url>
        <loc>${process.env.BASE_URL_DOMAIN}/category/${category.attributes.Slug}</loc>
        <lastmod>${moment(category.attributes.updatedAt).format("YYYY-MM-DD")}</lastmod>
        <changefreq>weekly</changefreq>
          <priority>0.9</priority>
      </url>`;
  }).join('')}
  </urlset>
  `;
};

function SiteMap() { }

export const getServerSideProps = async ({ res }) => {
  const queryString = qs.stringify({
    sort: ['id:desc'],
});
  const request = await fetch(`${process.env.API_BASE_URL}/api/articles?${queryString}`,{ //ส่วนที่ 1
  headers: { //เข้า API ผ่านรหัส 
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
}); 

const articles = await request.json();

//------------------------catecory---------------------
const resCategories = await fetch(`${process.env.API_BASE_URL}/api/categories?${queryString}`,{
  headers: { //เข้า API ผ่านรหัส
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
});
const categories = await resCategories.json() //catecory

const resHomes = await fetch(`${process.env.API_BASE_URL}/api/homes?`,{
  headers: { //เข้า API ผ่านรหัส
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
});
const homes = await resHomes.json() //catecory

const resBaccarats = await fetch(`${process.env.API_BASE_URL}/api/baccarats?`,{
  headers: { //เข้า API ผ่านรหัส
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
});
const baccarats = await resBaccarats.json() //catecory

const resSlots = await fetch(`${process.env.API_BASE_URL}/api/slots?`,{
  headers: { //เข้า API ผ่านรหัส
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
});
const slots = await resSlots.json() //catecory

const resFishgames = await fetch(`${process.env.API_BASE_URL}/api/fishgames?`,{
  headers: { //เข้า API ผ่านรหัส
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
});
const fishgames = await resFishgames.json() //catecory

const resSport = await fetch(`${process.env.API_BASE_URL}/api/sports?`,{
  headers: { //เข้า API ผ่านรหัส
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
});
const sports = await resSport.json() //catecory

const resLottos = await fetch(`${process.env.API_BASE_URL}/api/lottos?`,{
  headers: { //เข้า API ผ่านรหัส
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
});
const lottos = await resLottos.json() //catecory

const resPromotions = await fetch(`${process.env.API_BASE_URL}/api/promotions?`,{
  headers: { //เข้า API ผ่านรหัส
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
});
const promotions = await resPromotions.json() //catecory


const resBlogs = await fetch(`${process.env.API_BASE_URL}/api/blogs?`,{
  headers: { //เข้า API ผ่านรหัส
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
});
const blogs = await resBlogs.json() //catecory

//เรียกใช้งานหรือ return ค่า
 const sitemap = generateSiteMap(articles,categories,homes,baccarats,slots,fishgames,sports,lottos,promotions,blogs); //เก็บ articles,categories ไว้ใน ฟังชั่น generateSiteMap ด้านบน
 
 res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();


  return {
    props: {},
  };
};

export default SiteMap;