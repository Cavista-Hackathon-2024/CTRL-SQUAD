"use client";

import React from "react";


const Features =()=>{
    return(
        <div> 
           <section className="mt-2 font-bold w-[90vw] lg:mt-[90px] ">
        <div className="pl-5 pt-6 font-bold flex flex-col ml-[20px] lg:ml-[200px] ">
          
        </div>
        <div className="relative bg-red-500 rounded-full h-[50px] w-[50px]  flex flex-col float-right mt-[10px] cursor-pointer transition-transform hover:-translate-y-1 border-b shadow-lg pr-6">
      <i className="fi fi-rs-ambulance w-40 h-20 text-white ml-[18px] mt-4"></i>


        </div>
        <span className="lg:flex hidden text-gray-500 float-bottom float-right">Urgent: Ambulance Needed</span>
        
        <button type="button" class="fixed bottom-10 right-10 cursor-pointer transition-transform hover:-translate-y-1 border-b shadow-lg items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 z-10">
        <svg class="w-6 h-6  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"/>
</svg>


          <span class="sr-only">Notifications</span>
          <div class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">+</div>
        </button>

        
      </section>
            <section class="bg-white dark:bg-gray-900 mt-7">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Get in contact with high qaulity hospitals closest to you</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Make use of our virtual health assistant AI</p>
            <a href="#" class="cursor-pointer transition-transform hover:-translate-y-1 border-b shadow-lg inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Book an appointment
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex ">
            <img className="w-[60vw]" src="data:image/jpeg;base64,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" alt="mockup" />
        </div>                
    </div>
      </section>
      <h1 class="mt-9 p-9 pl-9 lg:text-6xl ml-[120px] lg:ml-[600px] font-bold leading-none tracking-tight text-gray-900 text-5xl dark:text-white">Individuals</h1>
            <section class="bg-white dark:bg-gray-900">

  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
      <div class="max-w-screen-md mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Optimize Your Health with Tailored Solutions</h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">Here at   we focus on Empowering Health Through Technological Innovation and Strategic Investment</p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Health Information and Education</h3>
              <p class="text-gray-500 dark:text-gray-400">Providing accurate and reliable information on various health topics, conditions, treatments, and preventive measures to empower individuals to make informed decisions about their health.</p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Symptom Checker and Health Assessment Tools</h3>
              <p class="text-gray-500 dark:text-gray-400"> Offering online tools for users to input their symptoms and receive guidance on potential conditions or when to seek medical help.</p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  
                  <i className="fi fi-rs-ambulance mt-6  text-primary-600 lg:w-9 lg:h-9 font-bold text-xl dark:text-primary-300"></i>                    
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Emergency Response and First Aid Guidance</h3>
              <p class="text-gray-500 dark:text-gray-400">Offering guidance on emergency situations, first aid procedures, and access to emergency services in case of urgent medical needs.</p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  
                  <i className="fi fi-rr-microchip-ai mt-6  text-primary-600 lg:w-9 lg:h-9 font-bold text-xl dark:text-primary-300"></i>                    
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Virtual AI Consultant</h3>
              <p class="text-gray-500 dark:text-gray-400">Offers personalized health assessments, symptom checking, medication management, and facilitates telemedicine services. It assesses users' health, provides recommendations for maintaining or improving health, triages symptoms, helps manage medications, and schedules virtual consultations with healthcare professionals..</p>
          </div>
      </div>
  </div>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl  px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
      <div class="lg:pr-8 lg:pt-4">
        <div class="lg:max-w-lg">
          <h2 class="text-base font-semibold leading-7 text-indigo-600">Rapid Solutions</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
A health website typically offers a range of solutions and services to individuals to promote well-being and manage their health effectively. Some of these solutions include:</p>
          <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                Health Information and Education:
              </dt>
              <dd class="inline"> Providing accurate and reliable information on various health topics, conditions, treatments, and preventive measures to empower individuals to make informed decisions about their health.</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                Emergency Response and First Aid Guidance:
              </dt>
              <dd class="inline"> Offering guidance on emergency situations, first aid procedures, and access to emergency services in case of urgent medical needs.</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                Symptom Checker and Health Assessment:
              </dt>
              <dd class="inline"> Offering online tools for users to input their symptoms and receive guidance on potential conditions or when to seek medical help.</dd>
            </div>
          </dl>
        </div>
      </div>
     <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-8 lg:-ml-[100px]" width="2432" height="1442"/>

    </div>
  </div>
</div>

</section>

<div className="flex flex-column lg:flex-row">
<h1 class="mt-9 p-9 pl-12 lg:text-6xl ml-[120px] ml-[-50px] lg:ml-[450px] font-bold leading-none tracking-tight text-gray-900 text-5xl dark:text-white">Health Organisations</h1>


<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Join our healthcare providers</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Join our network of healthcare providers, where innovation meets patient care, shaping the future of medicine</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Register
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>
</div>


             <section class="bg-white dark:bg-gray-900">

  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mt-[100px]">
      <div class="max-w-screen-md mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Enhance Organizational Health with Customized Solutions</h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">Empowering Health Organizations Through Strategic Investment in Technological Innovation</p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Patient Engagement</h3>
              <p class="text-gray-500 dark:text-gray-400">Providing resources, educational materials, and interactive tools to empower patients to take an active role in managing their health, promoting wellness, and making informed healthcare decisions.</p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  
                  <i className="fi fi-rs-ambulance mt-6  text-primary-600 lg:w-9 lg:h-9 font-bold text-xl dark:text-primary-300"></i>                    
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Electronic Health Records (EHR) Systems</h3>
              <p class="text-gray-500 dark:text-gray-400"> Providing a comprehensive platform for managing patient records, appointments, treatments, and medical histories electronically.</p>
          </div>
      </div>
  </div>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl  px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
      <div class="lg:pr-8 lg:pt-4">
        <div class="lg:max-w-lg">
          <h2 class="text-base font-semibold leading-7 text-indigo-600">Rapid Solutions</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            
A health system website for health organizations may offer a range of solutions to support their operations and objectives, including:</p>
          <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                Patient Engagement:
              </dt>
              <dd class="inline"> Providing resources, educational materials, and interactive tools to empower patients to take an active role in managing their health, promoting wellness, and making informed healthcare decisions.</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                Electronic Health Records (EHR) Systems:
              </dt>
              <dd class="inline"> Providing a comprehensive platform for managing patient records, appointments, treatments, and medical histories electronically.</dd>
            </div>
          </dl>
        </div>
      </div>
     <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-8 lg:-ml-[100px]" width="2432" height="1442"/>

    </div>
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

export default Features;