import Image from 'next/image'
import React from 'react'

export default function loading() {
  return (
    <div className='flex justify-center mt-10'>
       <Image src="spin1.svg" width={100} height={100} alt="loading..." />
    </div>
  )
}
