import React from 'react'
import Button from './Button'

const ButtonsList = () => {

  const buttonsList = ["All","Mixes","Music","Computer Programming","T-Series","Movies","Live","Sports","Gaming","Trending","News"]

  return (
    <div className='flex'>
      {buttonsList.map((list) => (
          <Button name={list}/>
      ))}
    </div>
  )
}

export default ButtonsList