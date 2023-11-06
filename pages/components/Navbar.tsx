import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-[#FF3A3E] text-white flex justify-between items-center p-7 border-b border-slate-300'>
      <Link href={"/"} className='text-xl font-bold'>KN</Link>
      <div className='flex gap-x-2 list-none'>
        <Link href={"#"} className='hover:-translate-y-1 hover:cursor-not-allowed transition-all duration-300'>About</Link> |
        <Link href={"/contact"} className='hover:-translate-y-1 transition-all duration-300'>Contact</Link>
      </div>
    </div>
  )
}
