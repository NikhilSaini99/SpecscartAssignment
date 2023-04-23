import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
    <Stack sx={{flexDirection:'row',gap:'2rem',color:'#48494B',fontWeight:'bold',fontSize:'2rem'}}>
    <Link to="/">Section 1</Link>
    <Link to="/Section2">Section 2</Link>
    <Link to="/Section3">Section 3</Link>
    </Stack>
    </>
  )
}

export default Navigation
