import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import Logo from "../assests/viewnix_logo.png";
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Header = () => {

    const [ searchQuery, setSearchQuery ] = useState("");
    const [ suggestion, setSuggestion ] = useState([]);
    const [ showSuggestions, setShowSuggestions ] = useState(false);

    useEffect(()=> {
        // make an API call after every key press
        // if the difference between two API calls is < 200ms then decline the API call
        const timer = setTimeout(() => {
            getSearchSuggestions();
        }, 200);

        return () => {
            clearTimeout(timer);
        };
        
    },[searchQuery])

    const getSearchSuggestions = async () => {
        console.log(searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json = await data.json();
        setSuggestion(json[1]);

    }
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
    return (
    <div className='flex justify-between mx-4 my-2 py-1'>
        <div 
            className='flex items-center'>
            <img 
                className='h-7 cursor-pointer'
                src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp'
                alt='menu'
                onClick={() => toggleMenuHandler()}
            />
            
            <img 
                className='h-7 ml-5 cursor-pointer'
                src= {Logo}
                alt="logo"
            />
            
        </div>
        <div className='flex'>
            <input 
                className='w-[31rem] border border-gray-300 px-4 py-1 rounded-bl-3xl rounded-tl-3xl'
                placeholder='Search'
                type='text'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}
            />
            <button
                className='border border-gray-300 px-5 py-2 rounded-tr-3xl rounded-br-3xl bg-gray-50'
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>

            </button>
            {showSuggestions && (<div className='bg-white px-2 py-[2px] absolute w-[31rem] mt-11 shadow-lg rounded-lg'>
                <ul>
                    {suggestion.map((s)=> 
                        
                        <li className='py-1 px-2 rounded-md hover:bg-gray-100 cursor-pointer flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                            {s}
                        </li>
                    )}
                </ul>
            </div>)}
        </div>
        <div className='flex items-center'>
            <svg className='w-7 h-7 mx-2' viewBox="0 0 24 24"  focusable="false"><path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path></svg>
            <svg viewBox="0 0 24 24" focusable="false" className='w-7 h-7 mx-2'><path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path></svg>
        </div>
    </div>
  )
}

export default Header