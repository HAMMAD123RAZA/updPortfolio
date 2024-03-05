"use client"
import React from 'react'
import { useState } from 'react'

const ProjectTag = ({onClick,name,isSelected}) => {
    const buttonClass = isSelected ? 'text-black border-secondary-500' : 'text-black bg-gray-200'
  return (
    <>
      <button className={`${buttonClass} bg-white w-25 rounded-full border-2  text-black px-4 py-2 `}
      onClick={()=>onClick(name)}
      >{name}</button>
    </>
  )
}

export default ProjectTag