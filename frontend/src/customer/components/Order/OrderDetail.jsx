import React from 'react'
import AdressCard from '../AddressCard/AdressCard'
import OrderTracking from './OrderTracking'
import { Box, Grid } from '@mui/material'
import { StarIcon } from '@heroicons/react/24/outline'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetail = () => {
    return (
        <div className='px-5 lg:px-20'>
            <div>
                <h1 className='font-bold py-7 text-lg'>Delivery Address</h1>
                <AdressCard />
            </div>
            <div className='py-20'>
                <OrderTracking activeStep={3} />
            </div>
            <Grid className='space-y-5' container>
                {[1,1,1,1,1].map(()=>
                <Grid item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: "center", justifyContent: "space-between" }}>
                    <Grid item xs={6}>

                        <div className='flex items-center space-x-4'>
                            <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKh439ydCxyy8lktMbc-WyHiT_FiNxzdw5Bw&s' alt='' />
                            <div className='space-y-2 ml-5'>
                                <p className='font-semibold'>Title of thee product </p>
                                <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color: Pink</span><span>Size: M</span></p>
                                <p>Seller : linaria</p>
                                <p>₹ 1299</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item>
                    <Box sx={{ color: deepPurple[500] }}>
                        <StarBorderIcon  sx={{fontSize:"2rem"}} className='px-2' />
                        <span>Rate & Review Product</span>
                    </Box>
                </Grid>

                </Grid>
                )}

                
            </Grid>

        </div>
    )
}

export default OrderDetail