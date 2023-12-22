import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '../utils';



const IsFeatured = ({articles}) => {
  return (
    <>
    {articles.map((article)=>{
        return(
          <div key={article.id} className="max-w-7xl mx-auto my-8 px-2">
          <div className=''>
        <div className="grid gap-8 ">
        <div className="relative bg-gray-900 flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">
        <Link href={`/article/${article.attributes.Slug}`}>
            <Image className='rounded relative w-full object-cover aspect-video'
                   src={`https://sea-lion-app-hl2ko.ondigitalocean.app${article.attributes.Image.data.attributes.url}`}
                   alt={article.attributes.Image.data.attributes.name}
                  height="400"
                 width="400"
                 sizes="100vw"
                   /> 
             </Link>
             <div className="rounded-3xl overflow-hidden flex items-center ml-4 mr-2 mt-3 ">
                              <Image className=''
                                  src={`https://sea-lion-app-hl2ko.ondigitalocean.app${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
                                  width="0"
                                  height="0"
                                  sizes="100vw"
                                  priority={true}
                                  style={{ width: '100%', height: 'auto' }}
                                  alt={article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.name}
                              />
                                <span className="align-center items-center text-sm font-bold text-white px-4">ผู้เขียน&nbsp;
                      {article.attributes.author.data.attributes.firstname}{' '}
                      {article.attributes.author.data.attributes.lastname}
                      &nbsp;
                  </span>  
              </div>
  
            <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
            <Link href={`/article/${article.attributes.Slug}`}
              className="flex justify-center items-center text-xl font-semibold text-amber-500 hover:text-amber-900 two-lines text-ellipsis">
              <h2>{article.attributes.Title}</h2>
          </Link>     
          <p className="text-white two-lines">
          {article.attributes.shortDescription.slice(0, 300)}{' '}
          {article.attributes.shortDescription.length > 300 ? '...' : ''}
          </p>
        </div>
        <span className="align-center items-center text-sm font-bold text-white px-4">
                      <span className="text-white">
                          {moment(home.attributes.updatedAt).format("YYYY-MM-DD")}
                      </span>
                  </span>  
        </div> 
      </div>  
    </div>
    </div>
        )
    })}
  </> 
  )
}

export default IsFeatured
