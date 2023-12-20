import qs from 'qs'
import moment from 'moment/moment';

// สร้างฟังชั่นไว้รับค่า
const generateRssFeed = (articles,homes) => {


  return `<?xml version="1.0" encoding="UTF-8"?>
  <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
  ${homes.data.map(home => {
    return `
  <title>
  <![CDATA[${home.attributes.Title}]]>
  </title>
  <description>
  <![CDATA[${home.attributes.Description}!]]>
  </description>
  <link>${process.env.BASE_URL_DOMAIN}</link>
  <generator>RSS for Node</generator>
  <lastBuildDate>${moment(home.attributes.updatedAt).format("YYYY-MM-DD")}</lastBuildDate>
  <atom:link href="${process.env.BASE_URL_DOMAIN}/feed.xml" rel="self" type="application/rss+xml"/>
  <pubDate>${moment(home.attributes.updatedAt).format("YYYY-MM-DD")}</pubDate>
  <copyright>
  <![CDATA[${home.attributes.copyright}]]>
  </copyright>
  `;
   }).join('')}
  ${articles.data.map(article => {
    return `<item>
    <title>
    <![CDATA[${article.attributes.Title}]]>
    </title>
    <description>
    <![CDATA[${article.attributes.shortDescription.slice(0, 300)} 
             ${article.attributes.shortDescription.length > 300 ? '[&hellip;]' : ''}]]>
    </description>
        <link>${process.env.BASE_URL_DOMAIN}/article/${article.attributes.Slug}</link>
        <guid isPermaLink="false">${process.env.BASE_URL_DOMAIN}/article/${article.attributes.Slug}</guid>
        <category>
        <![CDATA[${article.attributes.category.data.attributes.Slug}]]>
        </category>
        <pubDate>${moment(article.attributes.updatedAt).format("YYYY-MM-DD")}</pubDate>
      </item>`;
  }).join('')}
  </channel> 
  </rss>
  `;
};

function Feed() { }

export const getServerSideProps = async ({ res }) => {
  const queryString = qs.stringify({
    populate: ['Image', 'category.data'],
    sort: ['id:desc'],
});
  const request = await fetch(`${process.env.API_BASE_URL}/api/articles?${queryString}`,{ //ส่วนที่ 1
  headers: { //เข้า API ผ่านรหัส 
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
}); 

const articles = await request.json();

const resHomes = await fetch(`${process.env.API_BASE_URL}/api/homes?`,{
  headers: { //เข้า API ผ่านรหัส
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
});
const homes = await resHomes.json() //catecory


//เรียกใช้งานหรือ return ค่า
 const rss = generateRssFeed(articles,homes); //เก็บ articles,categories ไว้ใน ฟังชั่น generateSiteMap ด้านบน
 
  res.setHeader('Content-Type', 'text/xml' );
  res.write(rss);
  res.end();


  return {
    props: {},
  };
};

export default Feed;
