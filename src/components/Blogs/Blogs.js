import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className=' text-teal-800 sm:text-4xl font-bold text-center'>Blog page</h1>
            <div className='grid sm:grid-cols-2 grid-cols-1'>
                <div className='border-4 rounded border-teal-800 p-10 m-10'>
                    <h1 className='text-start sm:text-3xl sm:mb-10 mb-3'>Question:<span className='font-bold text-teal-700 '>What Is cors?</span> </h1>
                    <p className='text-start sm:text-xl'>
                        Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).
                    </p>
                </div>
                <div className='border-4 rounded border-teal-800 p-10 m-10'>
                    <h1 className='text-start sm:text-3xl sm:mb-10 mb-3'>Question:<span className='font-bold text-teal-700 '>Why are we using firebase?</span> </h1>
                    <p className='text-start sm:text-xl'>
                        The Firebase Realtime Database let us build rich, collaborative applications by allowing secure access to the database directly from client-side code.Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.
                        <span className='text-teal-700'>There are some of alternatives of firebase,like MongoDB,Oracle Database,Amazon Redshift,DataStax Enterprise,Redis Enterprise Cloud.</span>
                    </p>
                </div>
                <div className='border-4 rounded border-teal-800 p-10 m-10'>
                    <h1 className='text-start sm:text-3xl sm:mb-10 mb-3'>Question:<span className='font-bold text-teal-700 '>How does the private route work?</span> </h1>
                    <p className='text-start sm:text-xl'>
                        The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.Additionally, we can define the logic of isLogin utility function separately in utils folder.
                    </p>
                </div>
                <div className='border-4 rounded border-teal-800 p-10 m-10'>
                    <h1 className='text-start sm:text-3xl sm:mb-10 mb-3'>Question:<span className='font-bold text-teal-700 '>What is Node? How does Node work?</span> </h1>
                    <p className='text-start sm:text-xl'>
                        Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application.Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads
                    </p>
                </div>


            </div>
        </div>
    );
};

export default Blogs;