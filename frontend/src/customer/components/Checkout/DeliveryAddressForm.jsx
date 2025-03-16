import React from 'react'
import AdressCard from '../AddressCard/AdressCard'
import { Box, Button, Grid, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from "../../../State/Order/Action"
import { useNavigate } from 'react-router-dom'
import { store } from '../../../State/store'

const DeliveryAddressForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const address = {
            firstName: data.get("firstname"),
            lastName: data.get("lastname"),
            city: data.get("city"),
            state: data.get("state"),
            streetAddress: data.get("address"),
            mobile: data.get("phone"),
            zipCode: data.get("zip"),
        }
        const orderData = { address, navigate };
        dispatch(createOrder(orderData));
    }
    return (
        <div>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AdressCard />
                        <Button sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }} size='large' variant='contained'>Deliver Here</Button>
                    </div>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-s-md shadow-md p-5">
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3} >
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='firstname' name='firstname' label="First name" fullWidth autoComplete='given-Name' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='lastname' name='lastname' label="Last name" fullWidth autoComplete='given-Name' />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required id='address' name='address' label="Address" fullWidth autoComplete='given-Name' multiline rows={4} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='city' name='city' label="City" fullWidth autoComplete='given-Name' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='state' name='state' label="State/Provience/Region" fullWidth autoComplete='given-Name' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='zip' name='zip' label="Zip / Postal code" fullWidth autoComplete='shipping postal-code' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='phone' name='phone' label="Phone Number" fullWidth autoComplete='given-Name' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button sx={{ mt: 2, bgcolor: "RGB(145 85 253)", py: 1.5 }} size='large' type='submit' variant='contained'>Deliver Here</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAddressForm