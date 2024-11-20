import React from 'react'
import AdressCard from '../AddressCard/AdressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'

const OrderSummery = () => {
    return (
        
            <div>
                <div className='p-5 shadow-lg rounded-s-md border'>
                <AdressCard />
            </div>
            {/* <div className=''> */}
                <div className='lg:grid grid-cols-3 relative'>
                    <div className='col-span-2 space-y-3'>
                        {[1, 1, 1, 1, 1, 1].map(() => <CartItem />)}
                    </div>
                    <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                        <div className='border'>
                            <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
                            <hr />

                            <div className='space-y-3 font-semibold'>
                                <div className='flex justify-between pt-3 text-black'>
                                    <span>Price</span>
                                    <span>$4697</span>
                                </div>
                                <div className='flex justify-between pt-3'>
                                    <span>Discount</span>
                                    <span className='text-green-600'>$4697</span>
                                </div>
                                <div className='flex justify-between pt-3'>
                                    <span>Delivery Charge</span>
                                    <span className='text-green-600'>Free</span>
                                </div>
                                <div className='flex justify-between pt-3 bold'>
                                    <span>Total Amount</span>
                                    <span className='text-green-600'>$4697</span>
                                </div>
                            </div>
                            <Button variant="contained" className='w-full mt-5' sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd" }}>
                                Checkout
                            </Button>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default OrderSummery