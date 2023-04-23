import { Box, Stack } from '@mui/material'
import React from 'react'
import logo from './assets/specscart.png'
import {utils} from './data'

const Navbar = () => {
    return (
        <Box sx={{ display: 'flex',justifyContent:'space-between',
            padding:'0 3rem',color:'#69408A',
            boxShadow: '0 1px 30px 0 rgb(145 145 145/20%)'}} className="navbarbox">

            <Stack>
                <Stack direction={'column'} spacing={2}>
                    <Stack direction={'row'} spacing={2} sx={{listStyleType:'none',
                    display:'flex',cursor:'pointer',fontWeight:'light',
                    justifyContent:'center',alignItems:'center'}}>
                            <li>Free Returns</li>  
                            <span>|</span>
                            <li>Try At Home</li>
                            <span>|</span>
                            <li>24 Hr Dispatch</li>
                    </Stack>
                    <Stack direction={'row'} spacing={3} sx={{listStyleType:'none',cursor:'pointer'
                    ,fontWeight:'bold'}}>
                             <li>Glasses</li>
                            <li>Sunglasses</li>
                            <li>Blogs</li>
                    </Stack>
                </Stack>
            </Stack>

            <Stack sx={{flexBasis:'250px'}}>
                <img src={logo} alt="logo" style={{width:'100%',height:'100%'}}/>
            </Stack>

            <Stack>
            <Stack direction={'column'} spacing={2}>
                    <Stack direction={'row'} spacing={2} sx={{listStyleType:'none',
                    display:'flex',
                    justifyContent:'center',alignItems:'center',cursor:'pointer',fontWeight:'light'}}>
                            <li>+441613125767</li>
                            <span>|</span>
                            <li>Help</li>
                            <span>|</span>
                            <li>Log In / Register</li>
                    </Stack>
                    <Stack direction={'row'} spacing={3} sx={{listStyleType:'none',
                   flexDirection:'row',justifyContent:'center' }}>
                             {utils.map((data)=>{
                                return (
                                    <li key={data.id} style={{cursor:'pointer'}}>
                                    <img src={data.img} alt={data.id} style={{width:'90%',
                                    height:'80%'}}/> 
                                    </li>
                                )
                                
                             })}
                    </Stack>
                </Stack>
            </Stack>

        </Box>
    )
}

export default Navbar
