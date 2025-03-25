"use client"
import React from 'react'
import { useState } from 'react'

const ProjectTag = ({onClick,name,isSelected}) => {
  const btnClass='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'

    const buttonClass = ' bg-gradient-to-r from-primary-1000 to-secondary-1000 hover:border-2 hover:border-white hover:bg-yellow-500 hover:text-white transition-all duration-300 text-yellow-500'
  return (
    <>
      <button className={`${buttonClass}  md:w-25 w-15 rounded border-2  md:px-4 px-0 py-0 md:py-2 `}
      onClick={()=>onClick(name)}
      >{name}</button>
    </>
  )
}

export default ProjectTag
