import React from 'react'
import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from 'react-redux';

export default function Navbar() {
    const { cart } = useSelector((state) => state)

    return (
        <div className='w-[100%]  bg-slate-900 text-white py-[10px]'>
            <div className='w-[1120px] mx-auto'>
                <div className='flex justify-between items-center'>
                    <NavLink to="/">
                        <img src={logo} width="16%" />
                    </NavLink>
                    <div className='relative flex justify-between items-center gap-[20px]'>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/cart">
                            <FaShoppingCart className='text-[25px]' />
                        </NavLink>
                        {
                            cart.length > 0 ?
                                <p className='absolute bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white'>{cart.length}</p> : ""
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}
