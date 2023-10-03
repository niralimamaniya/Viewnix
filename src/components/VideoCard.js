import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);

    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
    return (
        <div className='cursor-pointer m-3 w-80'>
            <img 
                className='rounded-lg'
                src={thumbnails.medium.url} 
                alt='thumbnail'
            />
            <ul className='p-2'>
                <li className='font-semibold'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard;