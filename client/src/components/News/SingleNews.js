import React from 'react'

function SingleNews() {
    return (
        <div>
           
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                <div className="rounded overflow-hidden shadow-lg">
            <a href="#"><div className="relative">
                <img className="w-full" src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Sunset in the mountains"/>
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                <a href="#!"><div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                Photos
                </div></a>
                <a href="!#"><div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                <span className="font-bold">27</span>
                <small>March</small>
                </div></a>
                </div></a>
            <div className="px-6 py-4">
                <a href="#" className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Best View in Newyork City</a>
                <p className="text-gray-500 text-sm">
                The city that never sleeps
                </p>
            </div>
            
            </div>
                <div className="rounded overflow-hidden shadow-lg">
            <a href="#"><div className="relative">
                <img className="w-full" src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Sunset in the mountains"/>
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                <a href="#!"><div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                Photos
                </div></a>
                <a href="!#"><div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                <span className="font-bold">20</span>
                <small>March</small>
                </div></a>
                </div></a>
            <div className="px-6 py-4">
                <a href="#" className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Best Pizza in Town</a>
                <p className="text-gray-500 text-sm">
                The collection of best pizza images in Newyork city
                </p>
            </div>
            <div className="px-6 py-4 flex flex-row items-center">
                <span href="#" className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">
                
                <span className="ml-1">3 mins read</span></span>
            </div>
            </div>
                <div className="rounded overflow-hidden shadow-lg">
            <a href="#"><div className="relative">
                <img className="w-full" src="https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Sunset in the mountains"/>
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                <a href="#!"><div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                Photos
                </div></a>
                <a href="!#"><div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                <span className="font-bold">15</span>
                <small>April</small>
                </div></a>
                </div></a>
            <div className="px-6 py-4">
                <a href="#" className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Best Salad Images ever</a>
                <p className="text-gray-500 text-sm">
                The collection of best salads of town in pictures
                </p>
            </div>
            <div className="px-6 py-4 flex flex-row items-center">
                <span href="#" className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">
                
                <span className="ml-1">6 mins read</span></span>
            </div>
            </div>
            </div>
            </div>

    
            <a href="https://componentity.com" target="_blank" className="block">
            <img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/logo-componentity-%E2%80%93-9.png" className="w-48 mx-auto my-5"/>
            </a>



  
        </div>
    )
}

export default SingleNews
