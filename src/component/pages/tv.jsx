import React from 'react'
import { useParams } from 'react-router-dom'

export default function Tv() {
 
  const params=useParams()
  console.log(params)
  return (
    <div>
     hii
    </div>
  )
}
