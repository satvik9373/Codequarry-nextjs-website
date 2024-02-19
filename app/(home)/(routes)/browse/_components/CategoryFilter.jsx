"use client"
import React, { useState } from 'react'

function CategoryFilter() {
    const [activeIndex,setActiveIndex]=useState(0)
    const filterOptions=[
        {
            id:1,
            name:'All',
            value:'all',
        },
        {
            id:2,
            name:'Web-Development',
            value:'web-development', 
        },
        {
            id:3,
            name:'Web-Designing',
            value:'web-designing', 
        },
        {
            id:4,
            name:'HTML',
            value:'html', 
        },
        {
            id:5,
            name:'CSS',
            value:'css', 
        },
        {
            id:6,
            name:'Javascript',
            value:'javascript', 
        },
        {
            id:7,
            name:'C++',
            value:'c++', 
        },
        {
            id:8,
            name:'React-Js',
            value:'react-js', 
        },
        {
            id:9,
            name:'React-Native',
            value:'react-native', 
        },
        {
            id:10,
            name:'Python',
            value:'python', 
        },
    ]
  return (
    <div className='flex gap-5'>
        {filterOptions.map((item,index)=>(
            <button key={index} 
            onClick={()=>setActiveIndex(index)}
            className={`border p-2 px-4 text-sm rounded-md hover:border-purple-800 font-semibold hover:bg-gray-50
            ${activeIndex==index?'border-purple-800 bg-purple-50 text-purple-800':null}`}>
               <h2>{item.name}</h2>
            </button>
        ))}
    </div>
  )
}

export default CategoryFilter