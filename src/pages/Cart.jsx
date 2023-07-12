import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

export default function Cart() {

    const { cart } = useSelector((state) => state)
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart]);
    return (
        <div>
            {
                cart.length > 0 ?
                    <div className='mx-auto max-w-[1100px] flex justify-between p-[50px]'>
                        <div className='w-[50%]'>
                            {
                                cart.map((item, index) => <CartItem key={item.id} item={item} itemIndex={index} />)
                            }
                        </div>

                        <div className='w-[50%] min-h-[100%] flex flex-col justify-between p-[50px]'>
                            <div>
                                <div className='text-green-700 font-normal text-[30px]'>Your Cart</div>
                                <div className='uppercase text-green-600 font-bold text-[40px]'>Summary</div>
                                <p className='mt-[10px]'>
                                    <span className='font-bold '>Total Items : {cart.length}</span>
                                </p>
                            </div>

                            <div>
                                <p className='mt-[10px]'>Total Amount : <span className='font-bold'>${totalAmount}</span> </p>
                                <button className='mt-[20px] w-[100%] bg-green-700 text-white p-[10px] rounded-lg font-bold border text-[20px] hover:bg-white hover:text-green-700 hover:border-green-700'>Checkout Now</button>
                            </div>
                        </div>


                    </div> :
                    <div className='w-[100vw] h-[80vh] flex flex-col justify-center items-center gap-[30px]'>
                        <h1 className='font-bold text-[20px]'>Your Cart is Empty!</h1>
                        <Link to='/'>
                            <button className='uppercase font-bold text-white text-[18px] border-green-900 border bg-green-600 px-[50px] py-[15px] rounded-lg hover:bg-transparent hover:text-green-600 hover:border-2 transition-all duration-200 ease-in'>Shop Now</button>
                        </Link>
                    </div>
            }
        </div>

    )
}
