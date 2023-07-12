import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { baseUrl } from '../baseUrl';
import Spinner from '../components/Spinner';
import Stars from '../components/Stars';
import { addProduct, removeProduct } from '../redux/slices/CartSlice';

export default function ProductPage() {
    const { cart } = useSelector((state) => state)
    const dispatch = useDispatch();

    const location = useLocation();
    const productId = location.pathname.split("/").at(-1);

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)

    async function getProductData() {
        let url = `${baseUrl}/${productId}`;
        setLoading(true)
        try {
            let res = await fetch(url);
            let result = await res.json();

            console.log(result)
            setProduct(result)

        } catch (error) {
            console.log("Error :", error)
        }
        setLoading(false)
    }

    const addToCart = () => {
        dispatch(addProduct(product))
        // toast.success("Add to Cart")
    }

    const removeFromCart = () => {
        dispatch(removeProduct(product.id))
        // toast.warning("Removed From Cart")
    }


    const [productQuantity, setProductQuantity] = useState(1)
    const increaseQuantity = () => {
        setProductQuantity((prev) => {
            if (prev < product.rating.count) {
                return prev = prev + 1;
            }
            else {
                return prev = prev;
            }
        })
    }
    const decreaseQuantity = () => {
        setProductQuantity((prev) => {
            if (prev == 1) {
                return prev;
            }
            else {
                return prev = prev - 1;
            }
        })
    }

    useEffect(() => {
        getProductData()
    }, [location.pathname]);

    return (
        <div>
            {
                loading ? <Spinner /> :
                    product == null ?
                        <p className='text-[2rem] font-bold flex justify-center items-center h-[100vh]'>No Product Found</p> :
                        <div className='w-[1100px] h-[700px] mx-auto flex justify-between items-center  p-[50px]'>
                            <div className=' max-w-[40%]'>
                                <img src={product.image} width="100%" />
                            </div>
                            <div className=' max-w-[60%] h-[100%] px-[20px] py-[50px] space-y-[30px]'>
                                <h1 className='font-bold text-[1.5rem] leading-[2.5rem]'>{product.title}</h1>
                                <Stars stars={product.rating.rate} />
                                <p className='font-normal text-[1.1rem] leading-[2.5rem]'>Category : <span className='capitalize text-blue-500'>{product.category}</span> </p>
                                <p className='font-normal text-[1rem]  text-[#2a2a2a71]'>{product.description}</p>
                                <div className='w-[80%] flex justify-between items-center'>
                                    <div className='flex justify-between items-center gap-[20px]'>
                                        <button className='text-[25px] border bg-black text-white w-[30px] h-[30px] rounded flex justify-center items-center'
                                            onClick={decreaseQuantity}>-</button>
                                        <p>{productQuantity}</p>
                                        <button className='text-[20px] border bg-black text-white w-[30px] h-[30px] rounded flex justify-center items-center'
                                            onClick={increaseQuantity}>+</button>
                                    </div>
                                    <p className='text-green-600 font-semibold text-[1.2rem]'>${product.price}</p>
                                    {
                                        cart.some((p) => p.id == product.id) ?
                                            <button className='hover:bg-gray-700 hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide'
                                                onClick={removeFromCart}>
                                                Removed Item
                                            </button> :
                                            <button className='hover:bg-gray-700 hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide'
                                                onClick={addToCart}>
                                                Add to Cart
                                            </button>
                                    }
                                </div>
                            </div>
                        </div>

            }
        </div>
    )
}
