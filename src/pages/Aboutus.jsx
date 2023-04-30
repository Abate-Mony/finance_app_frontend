import { Footer } from "../containers"
import { possibility } from "../Assests/images"

const Aboutus = () => {
    return (
        <>
            <div className="lg:px-10">

                <h1 className="text-slate-400  font-medium text-3xl mb-5 mt-5 px-5">About us</h1>
                <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight px-5 text-gray-900 md:text-5xl lg:text-6xl dark:text-white max-w-5xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem optio dolores voluptate debitis nobis <span class="text-blue-600 dark:text-blue-500">you</span> </h1>



                <div className="container- space-y-10 mx-0 bg-slate-200 text-white dark:text-white flex flex-col   md:flex-row md:mx-auto md:px-[2rem] shadow  pb-[100px] pt-[2.5rem] md:pt-[8.125rem] lg:px-[4rem]">

                    <div className="flex-1">

                    <p class="mb-3 text-gray-500 px-2 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<p class="text-gray-500 dark:text-gray-400 px-2">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>


                    </div>
                    <div className="flex-1">
                    <img src={possibility} alt="user" className="h-full w-full object-fill max-h-[500px]" />

                    </div>
                </div>



            </div>

            <Footer />
        </>
    )
}

export default Aboutus