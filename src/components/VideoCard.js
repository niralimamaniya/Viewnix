import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);

    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
    return (
        <div className='cursor-pointer m-1 p-2 w-[370px]'>
            <img 
                className='rounded-lg'
                src={thumbnails.medium.url} 
                alt='thumbnail'
            />
            <ul>
                <li className='font-semibold'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard;