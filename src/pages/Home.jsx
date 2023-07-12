import React, { useState } from 'react'
import { useEffect } from 'react';
import Product from '../components/Product';
import Spinner from '../components/Spinner';
import { baseUrl } from '../baseUrl';

export default function Home() {
    const [loading, setLoading] = useState(false)
    const [itemsData, setItemsData] = useState([]);

    async function fetchData() {
        setLoading(true)
        try {
            const res = await fetch(baseUrl);
            const data = await res.json();

            setItemsData(data)
        } catch (error) {
            console.log("ERROR AAGAYA HAI")
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {
                loading ?
                    <Spinner /> :
                    itemsData.length > 0 ?
                        <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 '>
                            {itemsData.map((item) => <Product key={item.id} item={item} />)}
                        </div> :
                        <p>No Item Found</p>
            }
        </div>
    )
}
