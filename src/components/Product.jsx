import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addProduct, removeProduct } from '../redux/slices/CartSlice'

export default function Product({ item }) {
    const { cart } = useSelector((state) => state)
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(addProduct(item))
        // toast.success("Add to Cart")
    }

    const removeFromCart = () => {
        dispatch(removeProduct(item.id))
        // toast.warning("Removed From Cart")
    }


    return (

        <div className='group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5  rounded-xl'>
            <Link to={`products/${item.id}`}>
                <div className='flex flex-col gap-3 cursor-pointer'>
                    <h2 className='w-70 mt-1 text-gray-700 font-semibold text-lg  text-left'>{item.title.substring(0, 15)}...</h2>
                    <p className=' w-40 text-gray-400 font-normal text-[10px] text-left'>{item.description.substring(0, 84)}...</p>
                    <div className='h-[180px]'>
                        <img src={item.image} alt={item.title} width="50%" className='h-full w-full object-contain' />
                    </div>
                </div>
            </Link>
            <div className='w-full flex justify-between items-center '>
                <p className='text-green-600 font-semibold'>${item.price}</p>
                {
                    cart.some((p) => p.id == item.id) ?
                        <button className='group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide'
                            onClick={removeFromCart}>
                            Removed Item
                        </button> :
                        <button className='group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide'
                            onClick={addToCart}>
                            Add to Cart
                        </button>

                }
            </div>
        </div>

    )
}
