"use client";

import React from 'react'

const About = ()=>{
    return(
        <div>
               <button type="button" class="fixed bottom-10 right-10 cursor-pointer transition-transform hover:-translate-y-1 border-b shadow-lg items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 z-10">
        <svg class="w-6 h-6  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"/>
</svg>


          <span class="sr-only">Notifications</span>
          <div class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">+</div>
        </button>
        <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 lg:mb-[-100px] lg:mt-9">
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Empowering Health Innovations for over <span class="font-extrabold">200,000+</span> companies worldwide</h2>
          <p class="mb-4 font-light">
Enhance Healthcare Collaboration and Issue Tracking with Integrated Platforms</p>
          <p class="mb-4 font-medium">Streamlining Healthcare Operations: Rapid Service Delivery and Seamless Deployment</p>
      </div>
  </div>
</section>

<section class="bg-white dark:bg-gray-900">
          <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div class="cursor-pointer transition-transform hover:-translate-y-1 border-b font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
                  <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                  <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
              </div>
              <div class="cursor-pointer transition-transform hover:-translate-y-1 border-b grid grid-cols-2 gap-4 mt-8">
                  <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                  <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
              </div>
          </div>
      </section>
      <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
  <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
  <div class="mx-auto max-w-2xl lg:max-w-4xl">
    <img class="mx-auto h-12" src="https://mlzze6ps3aky.i.optimole.com/w:181/h:52/q:mauto/ig:avif/f:best/https://www.cavistaholdings.com/wp-content/uploads/2023/12/Shapes.svg" alt=""/>
    <figure class="mt-10">
      <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
        <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
      </blockquote>
      <figcaption class="mt-10">
        <img class="mx-auto h-10 w-10 rounded-full" src="https://media.licdn.com/dms/image/C4E03AQG54sjeDmPLxA/profile-displayphoto-shrink_800_800/0/1585308851891?e=1719446400&v=beta&t=qUgL-G-ghRur12AlXaUavuqI3yyxJ-tWCWZky03hrwA" alt="" />
        <div class="mt-4 flex items-center justify-center space-x-3 text-base">
          <div class="font-semibold text-gray-900">Kehinde Daniel</div>
          <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <div class="text-gray-600">Group General Manager at Cavista holdings</div>
        </div>
      </figcaption>
    </figure>
  </div>
</section>
      <div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-600">Medical Encounters Every 24 Hours</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">44 million</dd>
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-600">Health Capital in Portfolio</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">$119 trillion</dd>
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-600">New Patients annually</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">46,000</dd>
      </div>
    </dl>
  </div>
</div>
<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by the world’s most innovative teams</h2>
    <div class=" mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 lg:ml-[350px]" src="data:image/jpeg;base64,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" alt="Transistor" width="158" height="48" />
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 lg:ml-[350px]" src="https://mlzze6ps3aky.i.optimole.com/w:181/h:52/q:mauto/ig:avif/f:best/https://www.cavistaholdings.com/wp-content/uploads/2023/12/Shapes.svg" alt="Reform" width="158" height="48" />
    </div>
  </div>
</div>
<footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
          <div class="mx-auto max-w-screen-xl text-center">
              <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                  <svg class="mr-2 h-8" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.2696 13.126C25.1955 13.6364 24.8589 14.3299 24.4728 14.9328C23.9856 15.6936 23.2125 16.2264 22.3276 16.4114L18.43 17.2265C17.8035 17.3575 17.2355 17.6853 16.8089 18.1621L14.2533 21.0188C13.773 21.5556 13.4373 21.4276 13.4373 20.7075C13.4315 20.7342 12.1689 23.9903 15.5149 25.9202C16.8005 26.6618 18.6511 26.3953 19.9367 25.6538L26.7486 21.7247C29.2961 20.2553 31.0948 17.7695 31.6926 14.892C31.7163 14.7781 31.7345 14.6639 31.7542 14.5498L25.2696 13.126Z" fill="url(#paint0_linear_11430_22515)"/><path d="M23.5028 9.20133C24.7884 9.94288 25.3137 11.0469 25.3137 12.53C25.3137 12.7313 25.2979 12.9302 25.2694 13.1261L28.0141 14.3051L31.754 14.5499C32.2329 11.7784 31.2944 8.92561 29.612 6.65804C28.3459 4.9516 26.7167 3.47073 24.7581 2.34097C23.167 1.42325 21.5136 0.818599 19.8525 0.486816L17.9861 2.90382L17.3965 5.67918L23.5028 9.20133Z" fill="url(#paint1_linear_11430_22515)"/><path d="M1.5336 11.2352C1.5329 11.2373 1.53483 11.238 1.53556 11.2358C1.67958 10.8038 1.86018 10.3219 2.08564 9.80704C3.26334 7.11765 5.53286 5.32397 8.32492 4.40943C11.117 3.49491 14.1655 3.81547 16.7101 5.28323L17.3965 5.67913L19.8525 0.486761C12.041 -1.07341 4.05728 3.51588 1.54353 11.2051C1.54233 11.2087 1.53796 11.2216 1.5336 11.2352Z" fill="url(#paint2_linear_11430_22515)"/><path d="M19.6699 25.6538C18.3843 26.3953 16.8003 26.3953 15.5147 25.6538C15.3402 25.5531 15.1757 25.4399 15.0201 25.3174L12.7591 26.8719L10.8103 30.0209C12.9733 31.821 15.7821 32.3997 18.589 32.0779C20.7013 31.8357 22.7995 31.1665 24.7582 30.0368C26.3492 29.1191 27.7 27.9909 28.8182 26.7195L27.6563 23.8962L25.7762 22.1316L19.6699 25.6538Z" fill="url(#paint3_linear_11430_22515)"/><path d="M15.0201 25.3175C14.0296 24.5373 13.4371 23.3406 13.4371 22.0588V21.931V11.2558C13.4371 10.6521 13.615 10.5494 14.1384 10.8513C13.3323 10.3864 11.4703 8.79036 9.17118 10.1165C7.88557 10.858 6.8269 12.4949 6.8269 13.978V21.8362C6.8269 24.775 8.34906 27.8406 10.5445 29.7966C10.6313 29.874 10.7212 29.9469 10.8103 30.0211L15.0201 25.3175Z" fill="url(#paint4_linear_11430_22515)"/><path d="M28.6604 5.49565C28.6589 5.49395 28.6573 5.49532 28.6589 5.49703C28.9613 5.83763 29.2888 6.23485 29.6223 6.68734C31.3648 9.05099 32.0158 12.0447 31.4126 14.9176C30.8093 17.7906 29.0071 20.2679 26.4625 21.7357L25.7761 22.1316L28.8181 26.7195C34.0764 20.741 34.09 11.5388 28.6815 5.51929C28.6789 5.51641 28.67 5.50622 28.6604 5.49565Z" fill="url(#paint5_linear_11430_22515)"/><path d="M7.09355 13.978C7.09354 12.4949 7.88551 11.1244 9.17113 10.3829C9.34564 10.2822 9.52601 10.1965 9.71002 10.1231L9.49304 7.38962L7.96861 4.26221C5.32671 5.23364 3.1897 7.24125 2.06528 9.83067C1.2191 11.7793 0.75001 13.9294 0.75 16.1888C0.75 18.0243 1.05255 19.7571 1.59553 21.3603L4.62391 21.7666L7.09355 21.0223V13.978Z" fill="url(#paint6_linear_11430_22515)"/><path d="M9.71016 10.1231C10.8817 9.65623 12.2153 9.74199 13.3264 10.3829L13.4372 10.4468L22.3326 15.5777C22.9566 15.9376 22.8999 16.2918 22.1946 16.4392L22.7078 16.332C23.383 16.1908 23.9999 15.8457 24.4717 15.3428C25.2828 14.4782 25.5806 13.4351 25.5806 12.5299C25.5806 11.0468 24.7886 9.67634 23.503 8.93479L16.6911 5.00568C14.1436 3.53627 11.0895 3.22294 8.29622 4.14442C8.18572 4.18087 8.07756 4.2222 7.96875 4.26221L9.71016 10.1231Z" fill="url(#paint7_linear_11430_22515)"/><path d="M20.0721 31.8357C20.0744 31.8352 20.0739 31.8332 20.0717 31.8337C19.6252 31.925 19.1172 32.0097 18.5581 32.0721C15.638 32.3978 12.7174 31.4643 10.5286 29.5059C8.33986 27.5474 7.09347 24.7495 7.09348 21.814L7.09347 21.0222L1.59546 21.3602C4.1488 28.8989 12.1189 33.5118 20.0411 31.8421C20.0449 31.8413 20.0582 31.8387 20.0721 31.8357Z" fill="url(#paint8_linear_11430_22515)"/>
                      <defs>
                      <linearGradient id="paint0_linear_11430_22515" x1="20.8102" y1="23.9532" x2="23.9577" y2="12.9901" gradientUnits="userSpaceOnUse"><stop stop-color="#1724C9"/><stop offset="1" stop-color="#1C64F2"/></linearGradient>
                      <linearGradient id="paint1_linear_11430_22515" x1="28.0593" y1="10.5837" x2="19.7797" y2="2.33321" gradientUnits="userSpaceOnUse"><stop stop-color="#1C64F2"/><stop offset="1" stop-color="#0092FF"/></linearGradient>
                      <linearGradient id="paint2_linear_11430_22515" x1="16.9145" y1="5.2045" x2="4.42432" y2="5.99375" gradientUnits="userSpaceOnUse"><stop stop-color="#0092FF"/><stop offset="1" stop-color="#45B2FF"/></linearGradient>
                      <linearGradient id="paint3_linear_11430_22515" x1="16.0698" y1="28.846" x2="27.2866" y2="25.8192" gradientUnits="userSpaceOnUse"><stop stop-color="#1C64F2"/><stop offset="1" stop-color="#0092FF"/></linearGradient>
                      <linearGradient id="paint4_linear_11430_22515" x1="8.01881" y1="15.8661" x2="15.9825" y2="24.1181" gradientUnits="userSpaceOnUse"><stop stop-color="#1724C9"/><stop offset="1" stop-color="#1C64F2"/></linearGradient>
                      <linearGradient id="paint5_linear_11430_22515" x1="26.2004" y1="21.8189" x2="31.7569" y2="10.6178" gradientUnits="userSpaceOnUse"><stop stop-color="#0092FF"/><stop offset="1" stop-color="#45B2FF"/></linearGradient>
                      <linearGradient id="paint6_linear_11430_22515" x1="6.11387" y1="9.31427" x2="3.14054" y2="20.4898" gradientUnits="userSpaceOnUse"><stop stop-color="#1C64F2"/><stop offset="1" stop-color="#0092FF"/></linearGradient>
                      <linearGradient id="paint7_linear_11430_22515" x1="21.2932" y1="8.78271" x2="10.4278" y2="11.488" gradientUnits="userSpaceOnUse"><stop stop-color="#1724C9"/><stop offset="1" stop-color="#1C64F2"/></linearGradient>
                      <linearGradient id="paint8_linear_11430_22515" x1="7.15667" y1="21.5399" x2="14.0824" y2="31.9579" gradientUnits="userSpaceOnUse"><stop stop-color="#0092FF"/><stop offset="1" stop-color="#45B2FF"/></linearGradient>
                      </defs>
                  </svg>
                  Flowbite    
              </a>
              <p class="my-6 text-gray-500 dark:text-gray-400">Empowering Health Innovations for over health organisations worldwide</p>
              <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                  <li>
                      <a href="/about" class="mr-4  md:mr-6 ">About</a>
                  </li>
                  <li>
                      <a href="/faq" class="mr-4  md:mr-6">FAQs</a>
                  </li>
                  <li>
                      <a href="/feature" class="mr-4  md:mr-6">Features</a>
                  </li>
              </ul>
              <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2021-2022 <a href="#" class="hover:underline">Auxillium-Valles™</a>. All Rights Reserved.</span>
          </div>
        </footer>
        </div>
       

      
    )
}

export default About;