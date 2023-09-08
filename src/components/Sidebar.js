import React from 'react';
const Sidebar = () => {
    return (
        <div className='p-5 col-span-1'>
            <ul>
                <li className='bg-gray-100 rounded-xl p-2 hover:bg-gray-100 cursor-pointer'>Home</li>
                <li className='rounded-xl p-2 hover:bg-gray-100 cursor-pointer'>Shorts</li>
                <li className='rounded-xl p-2 hover:bg-gray-100 cursor-pointer'>Subscriptions</li>
            </ul>
            <hr className='border-gray-200 border-1'/>
            <ul>
                <li className='rounded-xl p-2 hover:bg-gray-100 cursor-pointer'>Library</li>
                <li className='rounded-xl p-2 hover:bg-gray-100 cursor-pointer'>History</li>
                <li className='rounded-xl p-2 hover:bg-gray-100 cursor-pointer'>Watch Later</li>
                <li className='rounded-xl p-2 hover:bg-gray-100 cursor-pointer'>Liked Videos</li>
            </ul>
            <hr className='border-gray-200 border-1'/>
            <h1 className='font-semibold'>Explore</h1>
            <ul>
                <li className='rounded-xl p-2 hover:bg-gray-100 cursor-pointer'>Trending</li>
                <li className='rounded-xl p-2 hover:bg-gray-100 cursor-pointer'>Shopping</li>
                <li className='rounded-xl p-2 hover:bg-gray-100 cursor-pointer'>Music</li>
                <li className='rounded-xl p-2 hover:bg-gray-100 cursor-pointer'>Movies</li>
                <li className='rounded-xl p-2 hover:bg-gray-100 cursor-pointer'>Live</li>
                <li className='rounded-xl p-2 hover:bg-gray-100 cursor-pointer'>Gaming</li>
                <li className='rounded-xl p-2 hover:bg-gray-100 cursor-pointer'>News</li>
                <li className='rounded-xl p-2 hover:bg-gray-100 cursor-pointer'>Sports</li>
                <li className='rounded-xl p-2 hover:bg-gray-100 cursor-pointer'>Learning</li>
                <li className='rounded-xl p-2 hover:bg-gray-100 cursor-pointer'>Fashion & Beauty</li>
            </ul>
        </div>
    )
}
export default Sidebar;