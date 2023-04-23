import React, { useState } from 'react'
import { Box, Grid, Slider, Stack, Typography } from '@mui/material';
import Navigation from './Navigation';
const Comparing = ({ beforeImage, afterImage }) => {
    const [sliderValue, setSliderValue] = useState(50);

    function handleSliderValue(e) {
        setSliderValue(e.target.value)
    }

    return (
        <>
            <Grid container>

                <Grid item xs={12} marginBottom='3rem'>
                    <Stack direction={'column'} spacing={1.5}>
                        <Typography variant='h1'
                            sx={{ textAlign: 'center', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 'bold' }}>How do anti-reflective lenses work?</Typography>
                        <Typography variant='h2'
                            sx={{ color: 'grey', textAlign: 'center', fontSize: { xs: '1rem', sm: '1.2rem' }, fontWeight: 'light' }}>It's actually quite simple-we apply a coating on both sides of the lenses which lets 99% of the light pass through.</Typography>
                    </Stack>
                </Grid>


                <Grid item xs={12} sm={8} sx={{
                    position: 'relative',
                    border: '1px solid black',
                    height: '600px',  margin: {xs:'0 2rem',sm:'0 auto'},
                    overflow: 'hidden'
                }}>
                    <img src={afterImage} alt="after-img" style={{
                        width: '100%',
                        height: '100%', position: 'absolute',
                        objectFit:'cover'

                    }} />
                    <img src={beforeImage} alt="before-img" style={{
                        width: '100%',
                        height: '100%', position: 'absolute',
                        clipPath: `polygon(0% 0%, ${sliderValue}% 0%, ${sliderValue}% 100%, 0 100%)`,
                        objectFit:'cover'

                    }} />

                    <Slider defaultValue={sliderValue}
                        sx={{ color: "#00D8BD"}} value={sliderValue}
                        onChange={handleSliderValue}
                        componentsProps={{ thumb: { sx: { borderRadius: '10%'} }
                          }}
                    />
                </Grid>

                <Grid item xs={12} marginTop='1.8rem'>
                    <Stack direction={'column'} spacing={1.5}>
                        <Typography variant='h3'
                            sx={{ textAlign: 'center', fontSize: { xs: '1rem', sm: '1.5rem' }, fontWeight: 'bold' }}>
                            No reflections = no glare = <span style={{ color: '#00D8BD' }}>happy eyes</span>
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
            <Box sx={{maxWidth:'500px',margin:'3rem auto',}}>
      <Navigation/>
      </Box>
        </>
    )
}

export default Comparing
