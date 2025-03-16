import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AdressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'
import { store } from '../../../State/store'

const OrderSummery = () => {
    const dispatch = useDispatch();
    const { order } = useSelector(store => store)
    console.log("Order UI : ",order);
    
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const orderId = params.get("order_id")

    useEffect(() => {
        dispatch(getOrderById(orderId))
    }, [orderId])
    return (
        <div>
            <div className='p-5 shadow-lg rounded-s-md border'>
                <AddressCard address={order?.order?.shippingAddress} />
            </div>
            {/* <div className=''> */}
            <div className='lg:grid grid-cols-3 relative'>
                <div className='col-span-2 space-y-3'>
                    {order?.order?.orderItems?.map((item) => <CartItem item={item} />)}
                </div>
                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border'>
                        <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
                        <hr />

                        <div className='space-y-3 font-semibold'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Price</span>
                                <span>₹ {order?.order?.totalPrice}</span>
                            </div>
                            <div className='flex justify-between pt-3'>
                                <span>Discount</span>
                                <span className='text-green-600'>- ₹ {order?.order?.discount}</span>
                            </div>
                            <div className='flex justify-between pt-3'>
                                <span>Delivery Charge</span>
                                <span className='text-green-600'>Free</span>
                            </div>
                            <div className='flex justify-between pt-3 bold'>
                                <span>Total Amount</span>
                                <span className='text-green-600'>₹ {order?.order?.totalDiscountedPrice}</span>
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