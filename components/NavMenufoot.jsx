import React from 'react'

const NavMenufoot = ({navmenus}) => {
  return (
    <>
    <div className='fixed bottom-0 z-[9000] h-[70px] w-full lg:hidden lg:h-[81.62px] bg-gray-900'>
    {navmenus.map((navmenu) =>(
      <ul  key={navmenu.id} className='relative flex h-full items-center justify-center text-white'>
         <li className='flex h-full w-1/4 cursor-pointer items-center justify-center'>
            <div>
            
               <a href='/' className='h-auto w-auto'>
                  <div className='flex h-full w-full flex-col items-center justify-center'>
                     <div className='ml-1 inline-flex h-[54px] w-[54px] flex-col items-center justify-center text-xs '>
                     <svg width="64px" height="64px" viewBox="-7.2 -7.2 38.40 38.40" 
                           fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"><path transform="translate(-7.2, -7.2), scale(2.4)" fill="#f38830" 
                          d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z" 
                          strokeWidth="0"></path></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" 
                          strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 22L2 22" 
                         stroke="#1C274C" strokeWidth="1.464" strokeLinecap="round"></path> 
                        <path d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486" 
                        stroke="#1C274C" strokeWidth="1.464" strokeLinecap="round"></path> 
                        <path d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5" stroke="#1C274C" strokeWidth="1.464" 
                        strokeLinecap="round"></path> <path d="M4 22V9.5" stroke="#1C274C" strokeWidth="1.464" strokeLinecap="round">
                       </path> <path d="M20 9.5V13.5M20 22V17.5" stroke="#1C274C" strokeWidth="1.464" strokeLinecap="round">
                       </path> <path d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17" 
                       stroke="#1C274C" strokeWidth="1.464" strokeLinecap="round" strokeLinejoin="round"></path> 
                       <path d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z" 
                      stroke="#1C274C" strokeWidth="1.464"></path> </g>
                      </svg>
                     <span className='text-s'>หน้าหลัก</span>
                     </div>
                  </div>
               </a>
            </div>
         </li>
         <li className='flex h-full w-1/4 cursor-pointer items-center justify-center'>
            <div>
               
               <a href={`${navmenu.attributes.register}`}  target="_blank" rel="nofollow" className='h-auto w-auto'>
                  <div className='flex h-full w-full flex-col items-center justify-center'>
                     <div className='ml-1 inline-flex h-[54px] w-[54px] flex-col items-center justify-center text-xs '>
                       <svg width="99px" height="99px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" 
                           stroke="#ff3f0f"><g id="SVGRepo_bgCarrier" strokeWidth="0"><path transform="translate(-2.4, -2.4), scale(1.7999999999999998)" 
                           fill="#f38830" d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z" 
                           strokeWidth="0"></path></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                           <g id="SVGRepo_iconCarrier"> <path d="M15.8125 12.0217H3.77148" stroke="#000000" strokeWidth="1.056" strokeLinecap="round" strokeLinejoin="round">
                           </path> <path d="M12.8848 9.10571L15.8128 12.0217L12.8848 14.9377" stroke="#000000" strokeWidth="1.056" strokeLinecap="round" strokeLinejoin="round"></path> 
                           <path opacity="0.4" d="M8.50439 7.38897V6.45597C8.50439 4.42097 10.1534 2.77197 12.1894 2.77197H17.0734C19.1034 2.77197 20.7484 4.41697 20.7484 6.44697V17.587C20.7484 19.622 19.0984 21.272 17.0634 21.272H12.1784C10.1494 21.272 8.50439 19.626 8.50439 17.597V16.655" 
                           stroke="#000000" strokeWidth="1.056" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                        </svg>
                     <span className='text-s'>สมัคร</span>
                     </div>
                  </div>
               </a>
            </div>
         </li>
         <li className='flex h-full w-1/4 cursor-pointer items-center justify-center'>
            <div>
            <a href={`${navmenu.attributes.login}`}  target="_blank" rel="nofollow" className='h-auto w-auto'>
                  <div className='flex h-full w-full flex-col items-center justify-center'>
                     <div className='ml-1 inline-flex h-[54px] w-[54px] flex-col items-center justify-center text-xs '>
                     <svg width="64px" height="64px" viewBox="-5.52 -5.52 35.04 35.04" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0">
                        <path transform="translate(-5.52, -5.52), scale(2.19)" fill="#f38830" d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z" 
                           strokeWidth="0"></path></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                          <path d="M15 5V19M21 5V19M3 7.20608V16.7939C3 17.7996 3 18.3024 3.19886 18.5352C3.37141 18.7373 3.63025 18.8445 3.89512 18.8236C4.20038 18.7996 4.55593 18.4441 5.26704 17.733L10.061 12.939C10.3897 12.6103 10.554 12.446 10.6156 12.2565C10.6697 12.0898 10.6697 11.9102 10.6156 11.7435C10.554 11.554 10.3897 11.3897 10.061 11.061L5.26704 6.26704C4.55593 5.55593 4.20038 5.20038 3.89512 5.17636C3.63025 5.15551 3.37141 5.26273 3.19886 5.46476C3 5.69759 3 6.20042 3 7.20608Z" 
                          stroke="#000000" strokeWidth="1.848" strokeLinecap="round" strokeLinejoin="round">
                        </path> 
                       </g>
                     </svg>
                     <span className='text-s'>เข้าเล่น</span>
                     </div>
                  </div>
               </a>
            </div>
         </li>
         <li className='flex h-full w-1/4 cursor-pointer items-center justify-center'>
            <div>
            <a href='/promotion' className='h-auto w-auto'>
                  <div className='flex h-full w-full flex-col items-center justify-center'>
                     <div className='ml-1 inline-flex h-[54px] w-[54px] flex-col items-center justify-center text-xs '>
                     <svg width="64px" height="64px" viewBox="-4.32 -4.32 32.64 32.64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0">
                       <path transform="translate(-4.32, -4.32), scale(2.04)" fill="#f38830" d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z" strokeWidth="0">
                        </path>
                        </g>
                         <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                          <path d="M14 7.14614C13.5 7.00383 12.6851 6.99859 12 7.00383C11.7709 7.00558 11.9094 6.9944 11.6 7.00383C10.7926 7.03273 10.0016 7.41781 10 8.50882C9.99825 9.67108 11 10.015 12 10.015C13 10.015 14 10.2803 14 11.5211C14 12.4536 13.1925 12.8621 12.1861 12.9974C11.3861 12.9974 11 13.0272 10 12.8838M12 13V14M12 6V7M21 17V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V17M19 10C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10Z" 
                            stroke="#000000" strokeWidth="1.272" strokeLinecap="round" strokeLinejoin="round">
                          </path>
                         </g>
                       </svg>
                     <span className='text-s '>โปรโมชั่น</span>
                     </div>
                  </div>
               </a>
            </div>
         </li>
         <li className='flex h-full w-1/4 cursor-pointer items-center justify-center'>
            <div>
            <a href={`${navmenu.attributes.line}`}  target="_blank" rel="nofollow" className='h-auto w-auto'>
                  <div className='flex h-full w-full flex-col items-center justify-center'>
                     <div className='ml-1 inline-flex h-[54px] w-[54px] flex-col items-center justify-center text-xs '>
                     <svg width="64px" height="64px" viewBox="-112.64 -112.64 1249.28 1249.28" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" 
                       strokeWidth="0.01024"><g id="SVGRepo_bgCarrier" strokeWidth="0"><path transform="translate(-112.64, -112.64), scale(78.08)" fill="#f38830" d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z" 
                         strokeWidth="0"></path></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                        <path fill="#000000" d="M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.064 192.064 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193.235 193.235 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4 352 352 0 0 1 704 0zM256 448a128 128 0 1 0 0 256V448zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128z">
                        </path>
                        </g>
                      </svg>
                     <span className='text-s '>ติดต่อ</span>
                     </div>
                  </div>
               </a>
            </div>
         </li>
      </ul>
     ))}
    </div>

    </>
  )
}

export default NavMenufoot