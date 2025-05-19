import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './presentation/router/router'

export default function ReactGPT() {
  return (
    <div className='bg-black'>
      <RouterProvider router={router}  />
    </div>
  )
}
