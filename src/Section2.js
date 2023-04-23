import React from 'react'
import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import './section.css'
import img1 from './assets/7.jpg'
import rocket from './assets/Group 6249.png'
import lense from './assets/Image 30.png'
import openfunction from './openFunction'
import Navbar from './Navbar'
import Navigation from './Navigation'

const Section2 = () => {

    return (
        <>
        <Navbar/>
        <Box className='main_section'>
            <Box className="content active">
                <img src={img1} alt="img1" onClick={()=>openfunction()}/>
                <Stack direction={'column'} className='text_btns'>
                    <Stack direction={'column'} className='text'>
                        <Typography variant='h5'>
                            Anti Reflective Glass
                        </Typography>
                        <Typography variant='h6' sx={{color:'grey'}}>
                            At no Added Cost
                        </Typography>
                    </Stack>
                    <Box sx={{width:'260px',height:'240px'}}>
                    </Box>
                    <Stack direction={'row'} className='btns' spacing={2}>
                        <Button variant='contained' sx={{background:'white',color:'black',borderRadius:'25px'}}>Shop Men</Button>
                        <Button variant='contained' sx={{background:'white',color:'black',borderRadius:'25px'}}>Shop Women</Button>
                    </Stack>
                </Stack>
            </Box>
            <Box className="content" sx={{backgroundImage: 'linear-gradient(90deg,#3E1E4F 50%,#3E1E4F,rgba(93, 58, 118, 1))',
                    cursor:"pointer"}} onClick={()=>openfunction()}>


                <Stack direction={'column'} className='text_btns'>
                    <Stack direction={'column'} className='text'>
                        <Typography variant='h5' sx={{position:'relative',left:'0',
                            backgroundImage:'linear-gradient(90deg,#4BDACE 0%,#4BDACE,rgba(75, 218, 206, 0.2))'}}>
                            Free Coatings
                        </Typography>
                        <Typography variant='h6'>
                            At Specscart- it's Free and will always be.
                        </Typography>
                    </Stack>
                    <Box sx={{width:'260px',height:'240px'}}>
                        <img src={lense} alt="rocket" style={{width:'100%',height:'100%'}}/>
                    </Box>
                    <Stack direction={'row'} className='btns' spacing={2}>
                        <Button variant='contained' sx={{background:'white',color:'black',borderRadius:'25px'}}>Shop Men</Button>
                        <Button variant='contained' sx={{background:'white',color:'black',borderRadius:'25px'}}>Shop Women</Button>
                    </Stack>
                </Stack>
            </Box>

            <Box className="content" sx={{backgroundImage: 'linear-gradient(90deg,#69408A 50%,#69408A,rgba(93, 58, 118, 1))',
                    cursor:"pointer"}} onClick={()=>openfunction()}>
                <Stack direction={'column'} className='text_btns'>
                    <Stack direction={'column'} className='text'>
                        <Typography variant='h5'>
                            24H Dispatch
                        </Typography>
                        <Typography variant='h6'>
                            Free Shipping Across the Globe!
                        </Typography>
                    </Stack>
                    <Box sx={{width:'260px',height:'240px'}}>
                        <img src={rocket} alt="rocket" style={{width:'100%',height:'100%'}}/>
                    </Box>
                    <Stack direction={'row'} className='btns' spacing={2}>
                        <Button variant='contained' sx={{background:'white',color:'black',borderRadius:'25px'}}>Shop Men</Button>
                        <Button variant='contained' sx={{background:'white',color:'black',borderRadius:'25px'}}>Shop Women</Button>
                    </Stack>
                </Stack>
            </Box>

        </Box>
        <Stack sx={{flexDirection:'row', justifyContent:'space-between',
            margin:{xs:'3rem 5rem',sm:'3rem 8rem',md:'3rem 10rem',lg:'3rem 20rem'},
            }}>
            <Typography variant='body1' sx={{fontWeight:'bold'}}>
                Starting from {'\u20AC'}29
            </Typography>
            <Typography variant='body1' sx={{fontWeight:'bold'}}>
                30 Days Returns
            </Typography>
            <Typography variant='body1' sx={{fontWeight:'bold'}}>
                Free Eye-Test For Everyone
            </Typography>
            <Typography variant='body1' sx={{fontWeight:'bold'}}>
                Free Try At Home
            </Typography>
        </Stack>
        <Divider sx={{margin:{xs:'3rem 5rem',sm:'3rem 8rem',md:'3rem 10rem',lg:'3rem 20rem'}}}/>

        <Box sx={{maxWidth:'1280px',margin:'0 auto'}}>
            <Stack sx={{flexDirection:'column',gap:'2rem'}}>
                <Typography variant='body1' sx={{fontSize:'2rem',fontWeight:'bold',
                textAlign:'center'}}>
                    Your eyes are splendid. Let people see them clearly
                </Typography>
                <Typography variant='subtitle1' sx={{fontSize:'1.2rem',color:'grey',textAlign:'center'}}>
                We know how frustrating glasses glare can be. Anti-reflective or anti-glare coating prevents glare on your lenses - letting almost  all light through. Not only do anti-reflective glasses help in computer use and driving at night, they also allow other people to  see you clearly. You don’t need to tilt your head at awkward angles while getting photographed, either! Since more light reaches  your eyes, you’ll also notice an improvement in your vision. And the best part? Anti-glare, anti-scratch, and anti-UV coatings are  all free of cost at Specscart!
                </Typography>
            </Stack>
        </Box>
        <Box sx={{maxWidth:'500px',margin:'3rem auto',}}>
      <Navigation/>
      </Box>
        </>
    )
}

export default Section2
