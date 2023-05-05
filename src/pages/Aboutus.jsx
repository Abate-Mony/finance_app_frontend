import { Footer } from "../containers"
import { possibility } from "../Assests/images"
import {NavLink} from 'react-router-dom'
const Aboutus = () => {
    return (
        <div className="mx-auto container">
            <div className="lg:px-10 ">

               
                
<nav class="flex mb-5 mt-5 px-5 " aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-3">
    <li class="inline-flex items-center">
      <NavLink to={"/"} href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        {/* <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg> */}
        Home
      </NavLink>
    </li>
    <li>
      <div class="flex items-center">
        <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
        <h1 className="text-slate-400  font-medium text-2xl ">About us</h1>
        
        </a>
      </div>
    </li>
  
  </ol>
</nav>

                <h1 class="mb-4 text-xl font-extrabold leading-6
                 tracking-tight- px-5 text-gray-900 md:text-2xl 
                 lg:text-4xl dark:text-white max-w-3xl">
                ke;
                </h1>



                <div className="container- items-center space-y-10 mx-0 bg-slate-200  text-white dark:text-white flex flex-col   md:flex-row md:mx-auto md:px-[2rem] shadow  pb-[100px] pt-[2.5rem] md:pt-[8.125rem] lg:px-[4rem]">

                    <div className="flex-1">

                        <p class="mb-3 text-gray-500 px-4 dark:text-black first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-black first-letter:mr-3 first-letter:float-left">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                        <p class="text-gray-500  dark:text-black px-4">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>


                    </div>
                    <div className="flex-1">
                        <img src="https://www.volusion.com/assets/images/index/webp/customer-rep.webp" alt="user" className="h-full w-full object-fill max-h-[500px]" />

                    </div>
                </div>
                <div>
             
<div class="container my-10 px-6 mx-auto">

  <section class="mb-32 text-gray-800">
    <div class="flex justify-center">
      <div class="text-center max-w-[700px]">
        <p class="uppercase text-blue-600 font-bold mb-6">Features</p>
        <h2 class="text-3xl font-bold mb-6">Why is it so great?</h2>
        <p class="text-gray-500 mb-12">
          Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque iaculis malesuada.
          Aenean gravida magna orci, non efficitur est porta id. Donec magna diam.
        </p>
      </div>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 xl:gap-x-12">
      <div class="mb-12">
        <div class="flex">
          <div class="shrink-0 mt-1">
            <svg class="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor"
                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
              </path>
            </svg>
          </div>
          <div class="grow ml-4">
            <p class="font-bold mb-1">Support 24/7</p>
            <p class="text-gray-500">Pellentesque mollis, metus nec fringilla aliquam</p>
          </div>
        </div>
      </div>

      <div class="mb-12">
        <div class="flex">
          <div class="shrink-0 mt-1">
            <svg class="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor"
                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
              </path>
            </svg>
          </div>
          <div class="grow ml-4">
            <p class="font-bold mb-1">Tracking</p>
            <p class="text-gray-500">Magna lacus iaculis elit, quis pharetra varius.</p>
          </div>
        </div>
      </div>

      <div class="mb-12">
        <div class="flex">
          <div class="shrink-0 mt-1">
            <svg class="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor"
                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
              </path>
            </svg>
          </div>
          <div class="grow ml-4">
            <p class="font-bold mb-1">Reporting</p>
            <p class="text-gray-500">Pellentesque varius ex vel consequat quis.</p>
          </div>
        </div>
      </div>

      <div class="mb-12">
        <div class="flex">
          <div class="shrink-0 mt-1">
            <svg class="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor"
                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
              </path>
            </svg>
          </div>
          <div class="grow ml-4">
            <p class="font-bold mb-1">Analytics</p>
            <p class="text-gray-500">Vestibulum gravida iaculis nisl, vel lobortis eros.</p>
          </div>
        </div>
      </div>

      <div class="mb-12">
        <div class="flex">
          <div class="shrink-0 mt-1">
            <svg class="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor"
                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
              </path>
            </svg>
          </div>
          <div class="grow ml-4">
            <p class="font-bold mb-1">Huge community</p>
            <p class="text-gray-500">Praesent vulputate lacus bibendum augue .</p>
          </div>
        </div>
      </div>

      <div class="mb-12">
        <div class="flex">
          <div class="shrink-0 mt-1">
            <svg class="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor"
                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
              </path>
            </svg>
          </div>
          <div class="grow ml-4">
            <p class="font-bold mb-1">Easy to use</p>
            <p class="text-gray-500">Sed mauris ex, imperdiet sit amet nisl ac, ultrices.</p>
          </div>
        </div>
      </div>

      <div class="mb-12">
        <div class="flex">
          <div class="shrink-0 mt-1">
            <svg class="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor"
                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
              </path>
            </svg>
          </div>
          <div class="grow ml-4">
            <p class="font-bold mb-1">Frequent updates</p>
            <p class="text-gray-500">Aenean lectus ex, placerat id tellus in eros.</p>
          </div>
        </div>
      </div>

      <div class="mb-12">
        <div class="flex">
          <div class="shrink-0 mt-1">
            <svg class="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor"
                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
              </path>
            </svg>
          </div>
          <div class="grow ml-4">
            <p class="font-bold mb-1">Responsive</p>
            <p class="text-gray-500">Donec consequat orci quis volutpat imperdiet.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>

                </div>
                <section class="bg-white dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
            <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
        </div>
    </div>
</section>
                
                
                
                
                
              
                {/* <div className="py-10 bg-slate-100 px-5">
                    <h1 class="mb-6 text-3xl font-extrabold leading-none
                tracking-tight px-5 text-gray-900 md:text-5xl mt-5 lg:text-6xl dark:text-black max-w-5xl text-center md:text-start">
                        OUR STORY </h1>

                        <p class="mb-3 text-gray-500  dark:text-black">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<div class="grid grid-cols-1 md:gap-6 md:grid-cols-2">
    <p class="mb-3 text-gray-500  dark:text-black">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
    <blockquote class="mb-3">
        <p class="text-xl italic font-semibold text-gray-900 dark:text-white-">" Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application. "</p>
    </blockquote>
</div>
<p class="mb-3 text-gray-500 dark:text-black">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>

                </div> */}
                
                
                
                
               
            </div>

            <Footer />
        </div>
    )
}

export default Aboutus