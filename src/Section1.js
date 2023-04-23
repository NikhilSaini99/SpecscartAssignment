import 'animate.css';
import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import Navbar from './Navbar';
import framesimg from './assets/Image 39.png'
import laserpen from './assets/Image 35.png'
import lenses from './assets/Group 6248.png'
import Navigation from './Navigation';

const Section1 = () => {
  const [text, setText] = useState("")
  const [text2, setText2] = useState("")
  const [text3, setText3] = useState("")
  const [displayimg1, setDisplayImage1] = useState(false)
  const [displayimg2, setDisplayImage2] = useState(false)
  const [displayimg3, setDisplayImage3] = useState(false)
  useEffect(() => {

    setTimeout(() => {
      setText('Four Frames.');
      setDisplayImage1(true);
    }, 1000)
    setTimeout(() => {
      setText2('Three Lenses.');
      setDisplayImage2(true);
    }, 2000)
    setTimeout(() => {
      setText3('1 Laser');
      setDisplayImage3(true);
    }, 3000)
  }, [])


  const Text1 = React.memo(() => {
    return (
      <Typography variant='h6' className='animate__animated animate__fadeIn' sx={{ fontWeight: 'bold', fontSize: {xs:'1.5rem',lg:'2.5rem'} }}>
        {text}
      </Typography>
    );
  });
  const Text2 = React.memo(() => {
    return (
      <Typography variant='h6' className='animate__animated animate__fadeIn' sx={{ fontWeight: 'bold', fontSize: {xs:'1.5rem',lg:'2.5rem'} }}>
        {text2}
      </Typography>
    )
  })
  const Text3 = React.memo(() => {
    return (
      <Typography variant='h6' className='animate__animated animate__fadeIn' sx={{ fontWeight: 'bold', fontSize: {xs:'1.5rem',lg:'2.5rem'} }}>
        {text3}
      </Typography>
    )
  })

  const Maincomponent = () => {
    return (
      <>
        <Text1 />
        <Text2 />
        <Text3 />
      </>
    );
  };

  return (
    <>
      <Navbar />
      <Stack sx={{
        flexDirection: 'row', gap: {xs:'3rem',lg:'10rem'}, height: '550px',
        backgroundColor: '#FAFAFA',overflow:'hidden'
      }}>
        <Stack sx={{
          marginLeft: {xs:'0.1rem',lg:'8rem'},
          color: '#48494B',
          flexDirection: 'column', gap: '2rem', width:'800px', padding: '1rem', marginTop: '5rem'
        }}>

          <Typography variant='h5' sx={{ fontSize: '1.2rem' }}>Home Trial Cart 2.0</Typography>
          <Stack sx={{ flexDirection: 'column' }}>
            <Typography variant='h5' sx={{ fontSize: {xs:'1.5rem',lg:'3rem'}, fontWeight: 'bold' }}>
              It's An Experience!
            </Typography>
            <Stack sx={{ flexDirection: 'row', height: '100px' }}>
              <Maincomponent />
            </Stack>
          </Stack>

          <Stack sx={{ flexDirection: {xs:'column',lg:'row'}, gap: {xs:'1.2rem',lg:'2rem'},alignItems:{xs:'flex-start',lg:'normal'}}}>
            <Button variant='contained' sx={{textTransform: 'capitalize',fontWeight:'bold',
              backgroundColor: '#00D8BD', color: 'white', borderRadius: '25px',
              width: {md:'200px'}, ':hover': { backgroundColor: '#00D8BD' }
            }}>Try Now</Button>
            <Button variant='text' sx={{ backgroundColor: 'transparent', color: '#48494B' }}

              startIcon={<PlayCircleFilledOutlinedIcon sx={{ backgroundColor: 'transparent', color: '#00D8BD' }} />}>
              <span style={{ textTransform: 'capitalize', fontWeight: 'bold', fontSize: '1rem' }}>Watch What's New!</span></Button>
          </Stack>
        </Stack>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>

          <Stack sx={{ marginTop: '5rem', flexDirection: 'row' }}>

            <Box sx={{ position: 'relative', width:{xs:'250px',lg:'300px'}, height:{xs:'200px',lg:'250px'},bottom:{xs:'-5px',lg:'-20px'},right:{xs:'-50px',lg:'-100px'} }}>
              {displayimg3 && <img src={laserpen} alt="4frames" style={{
                width: '100%', height: '100%',
              }}
                className='animate__animated animate__slideInLeft'></img>}
            </Box>

            <Box>
              {displayimg1 && <img src={framesimg} alt="4frames" style={{ width: '100%', height: '100%' }}
                className='animate__animated animate__slideInDown'></img>}
            </Box>

          </Stack>
          <Stack sx={{ position: 'relative', right: {xs:'-120px',lg:'-200px'}, bottom: {xs:'50px',lg:'110px'}, width: {xs:'300px',lg:'500px'} }}>
            {displayimg2 && <img src={lenses} alt="4frames" style={{ width: '100%', height: '100%' }}
              className='animate__animated animate__slideInUp'></img>}
          </Stack>
        </Box>

      </Stack>

      <Stack sx={{ textAlign: 'center', flexDirection: 'column', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <Typography variant='body1' sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
          4 frames, 3 lenses, 7 days - direct to your home.
        </Typography>
        <Typography variant='subtitle1' sx={{ fontSize: '1.2rem', fontWeight: 'light', color: 'grey' }}>
          We get it - sometimes you need to hold the glasses in your hand (or take a selfie wearing them) to know if theyre made for you  or not. With our Free Home Trial, get 4 frames of your choice at your home, along with 3 cool lenses.
        </Typography>
      </Stack>
      <Box sx={{maxWidth:'500px',margin:'3rem auto',}}>
      <Navigation/>
      </Box>
      
    </>
  )
}

export default Section1
