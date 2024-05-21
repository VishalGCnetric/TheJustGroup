import React from 'react'
import { useParams } from 'react-router-dom'

const OurbrandsDetails = () => {
    const {id}=useParams();
  return (
    <div style={{height:'50vh'}}>OurbrandsDetails({id})</div>
  )
}

export default OurbrandsDetails