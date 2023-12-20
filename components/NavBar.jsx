import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../public/Logo.webp'

function NavBar({navmenus}) {
  const [navbar, setNavbar] = useState(false);
  return (
      <>
       {navmenus.map((navmenu) =>(
      <div  key={navmenu.id}>
      <nav className=" bg-gray-900 fixed top-0 left-0 right-0 z-10 ">{/*fixed top-0 left-0 right-0 z-10*/}
        <div className="justify-between px-4 mx-auto xl:max-w-7xl lg:items-center xl:flex xl:px-8">
          <div>
            <div className="flex items-center justify-between py-3 lg:py-5 xl:block">
              {/* LOGO */}
              <Link href="/">
            <Image
             src={Logo}
             alt='Logo'
             width=""
             height=""
            
             sizes="100vw"
             style={{ width: '100%', height: 'auto' }}
      />
              </Link>
              {}
              <div className="xl:hidden">
                {/* ปุ่มสมัครสมาชิก
                <button className='text-m bg-orange-700 mr-2 py-2 px-3 rounded-sm text-white hover:bg-primary-dark transition-all'>สมัครสมาชิก</button>
               */}
                <button
                  className="p-2 text-amber-500 rounded-md outline-none "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                   <svg  className="h-6 w-6"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor" >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     d="M6 18L18 6M6 6l12 12"/>
             </svg>
                  ) : (
                    <svg  className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor" >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"/>
                  </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3  xl:block lg:pb-0 md:mt-0 ${
                navbar ? 'p-1 lg:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen lg:h-auto items-center justify-center lg:flex mt-2 ">
                <li className="pb-6 text-m text-white py-2 lg:px-6 text-center border-b-2 lg:border-b-0  hover: border-amber-500   md:hover:text-amber-500  md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    หน้าเเรก
                  </Link>
                </li>
                <li className="pb-6 text-m text-white py-2 px-6 text-center  border-b-2 lg:border-b-0  hover: border-amber-500   md:hover:text-amber-500  md:hover:bg-transparent">
                  <Link href="/baccarat" onClick={() => setNavbar(!navbar)}>
                    บาคาร่า
                  </Link>
                </li>
                <li className="pb-6 text-m text-white py-2 px-6 text-center  border-b-2 lg:border-b-0  hover: border-amber-500   md:hover:text-amber-500  md:hover:bg-transparent">
                  <Link href="/slot" onClick={() => setNavbar(!navbar)}>
                    สล็อต
                  </Link>
                </li>
                <li className="pb-6 text-m text-white py-2 px-6 text-center  border-b-2 lg:border-b-0  hover:  border-amber-500   md:hover:text-amber-500  md:hover:bg-transparent">
                  <Link href="/fish" onClick={() => setNavbar(!navbar)}>
                    ยิงปลา
                  </Link>
                </li>
                <li className="pb-6 text-m text-white py-2 px-6 text-center  border-b-2 lg:border-b-0  hover:  border-amber-500   md:hover:text-amber-500  md:hover:bg-transparent">
                  <Link href="/sport" onClick={() => setNavbar(!navbar)}>
                    กีฬา
                  </Link>
                </li>
                <li className="pb-6 text-m text-white py-2 px-6 text-center  border-b-2 lg:border-b-0  hover: border-amber-500   md:hover:text-amber-500  md:hover:bg-transparen">
                  <Link href="/lotto" onClick={() => setNavbar(!navbar)}>
                    หวย
                  </Link>
                </li>
                <li className="pb-6 text-m text-white py-2 px-6 text-center  border-b-2 lg:border-b-0  hover: border-amber-500   md:hover:text-amber-500  md:hover:bg-transparent">
                  <Link href="/promotion" onClick={() => setNavbar(!navbar)}>
                  โปรโมชั่น
                  </Link>
                </li>
                <li className="pb-6 text-m text-white py-2 px-6 text-center  border-b-2 lg:border-b-0  hover:  border-amber-500   md:hover:text-amber-500  md:hover:bg-transparent">
                  <Link href="/blog" onClick={() => setNavbar(!navbar)}>
                  บทความ
                  </Link>
                </li>
              </ul>
            </div>
          </div> 
          {/*ใส่ @media screen and (max-width:1024px) ใน Css ตรงปุ่มสมัครสมาชิก*/}
          <button  className="respon pb-1 text-m text-white  lg:px-6 text-center border-b-2 lg:border-b-0  hover:bg-orange-700 transition-all bg-amber-500 mr-2 py-1 px-2 rounded-sm ">
          <Link href={`${navmenu.attributes.login}`} target="_blank" rel="nofollow" >เข้าเล่น</Link>
           </button >
          
          <button  className="respon pb-1 text-m text-white lg:px-6 text-center border-b-2 lg:border-b-0  hover:bg-orange-700 transition-all  bg-amber-500 mr-2 py-1 px-2 rounded-sm ">
          <Link href={`${navmenu.attributes.register}`} target="_blank" rel="nofollow" >สมัครสมาชิก</Link>
            </button >
        </div>  
      </nav>
    </div>
 ))} 
      </>
  );
}

export default NavBar;