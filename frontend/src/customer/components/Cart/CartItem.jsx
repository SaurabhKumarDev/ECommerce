import { IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeItemToCart, updateCartItem } from '../../../State/Cart/Action';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleUpdateCartItem = (num) => {
        const updatedQuantity = Number(item.quantity) + Number(num);
    
        if (isNaN(updatedQuantity) || updatedQuantity < 1) {
            console.error("Invalid quantity:", updatedQuantity);
            return;
        }
    
        const data = {
            data: { quantity: Number(updatedQuantity) },
            cartItemId: item._id
        };
    
        dispatch(updateCartItem(data));
    };
    

    const handleRemoveCartItem = () => {
        dispatch(removeItemToCart(item._id));
    }

    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='w-full h-full object-cover object-top' src={item?.product?.imageUrl} />
                </div>
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>{item?.product?.title}</p>
                    <p className='opacity-70'> Size : L, white</p>
                    <p className='opacity-70 mt-2'>Seller : {item?.product?.brand}</p>
                    <div className='flex space-x-4 items-center text-lg lg:text-xl text-gray-900 mt-6'>
                        <p className='font-semibold'>₹ {item?.product?.price}</p>
                        <p className='opacity-50 line-through'>₹ {item?.product?.discountedPrice}</p>
                        <p className='text-green-500'>{item?.product?.discountPresent}% off</p>
                    </div>
                </div>
            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton onClick={() => handleUpdateCartItem(-1)} disabled={item?.quantity <= 1}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>{item?.quantity}</span>
                    <IconButton sx={{ color: "rgb(145 85 253)" }} onClick={() => handleUpdateCartItem(1)} disabled={item?.quantity >= item?.product?.quantity}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>
                <div>
                    <Button sx={{ color: "rgb(145 85 253)" }} onClick={handleRemoveCartItem} >Remove</Button>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default CartItem