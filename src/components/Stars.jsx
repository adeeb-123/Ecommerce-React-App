import React from 'react';
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs"


export default function Stars({ stars }) {

    const ratingStar = Array.from({ length: 5 }, (elem, index) => {

        let number = index + 0.5;

        return (
            <span key={index}>
                {
                    stars >= index + 1 ?
                        <BsStarFill className="text-orange-500"/> : stars >= number ? <BsStarHalf className="text-orange-500" /> : <BsStar className="text-orange-500" />
                }
            </span>
        )

    })

    return (
        <div className='w-[20%] flex justify-between items-center'>
            {ratingStar}
        </div>
    )
}
