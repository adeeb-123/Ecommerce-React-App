import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Toast } from 'react-toastify';
import { removeProduct } from '../redux/slices/CartSlice';


export default function CartItem({ item }) {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(removeProduct(item.id))
        // toast.error("item Removed")
    }

    return (
        <div className='p-[20px] w-[100%] flex justify-between items-center gap-[50px]'>
            <div className='w-[30%]'>
                <img width="100%" src={item.image} />
            </div>
            <div className='w-[70%] flex flex-col justify-between items-left gap-[15px]'>
                <NavLink to={`/products/${item.id}`}>
                    <h1 className='font-bold hover:underline'>
                        {item.title}
                    </h1>
                </NavLink>
                <p>
                    {item.description.substring(0, 109)}...
                </p>
                <div className='flex justify-between items-center'>
                    <p className='text-green-600 font-bold'>${item.price}</p>
                    <div onClick={removeFromCart} className='bg-red-100 rounded-full w-[40px] h-[40px] flex items-center justify-center hover:bg-red-300 group cursor-pointer'>
                        <MdDelete className='text-red-800 group-hover:text-white text-[15px]' />
                    </div>
                </div>

            </div>
        </div>
    )
}
