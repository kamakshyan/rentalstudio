import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Card(props:any) {
  return (
    <div className='flex items-center flex-col rounded-xl'>
        <Image className='rounded-t-xl' src={props.img} alt={props.title} height={500} width={500} />
        <h1 className='bg-gray-50 text-2xl py-4 md:text-3xl font-bold text-center'>{props.title}</h1>
        {/* <span className='mt-2 text-xs md:text-sm text-center'>-Kamakshya Nanda</span> */}
        <Link
        className='bg-red-500 text-white py-3 w-full text-center rounded-b-xl'
        href={props.link}>Read More</Link>
    </div>
  )
}
