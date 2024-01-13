import React, { useEffect, useState } from 'react'
import { filterIcon, mfIcon, products, selectorIcon } from '../assets/data'

import { Checkbox } from "@material-tailwind/react";
import { toPrice } from '../filter/price';

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addCart } from '../store/slices/cartSlice';
import { addLike } from '../store/slices/likeSlice';
import { checkLike } from '../filter/checkLike';

const Catalog = () => {
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()

    const addToCart = (product) => {
        dispatch(addCart(product))
    }

    const like = (product) => {
        dispatch(addLike(product))
    }


    return (
        <section id='all-products' className='container py-10'>
            <h2 data-aos='fade-right' className='flex text-4xl'>
                <img src={mfIcon} alt="icon" />
                Mebellar
            </h2>

            <div className="flex items-center justify-between py-6 border-b border-gray-400">
                <button data-aos='fade-right' onClick={() => setOpen(!open)} className='flex font-semibold'>
                    <img className='mr-2' src={filterIcon} alt="filter icon" />
                    Filter
                </button>

                <span data-aos='fade-up' className='flex'>
                    Narx bo'yicha
                    <img className='ml-2' src={selectorIcon} alt="icon" />
                </span>
            </div>

            <div className="flex flex-col md:flex-row">
                <div className={`${open ? 'flex w-[300px] flex-col pr-4' : 'hidden'}`}>
                    <div className='py-5 space-y-5'>
                        <div className='flex flex-col'>
                            <span className='font-bold text-lg'>Saralash</span>
                            <Checkbox label='Qimmatroq' />
                            <Checkbox label='Arzonroq' />
                            <Checkbox label={`Ko'p sotilgan`} />
                            <Checkbox label={`Yaqinda qo'shilgan`} />
                        </div>

                        <div className='flex flex-col'>
                            <span className='font-bold text-lg'>Rang</span>
                            <Checkbox label='Jigarrang' />
                            <Checkbox label='Qora' />
                            <Checkbox label='Yashil' />
                            <Checkbox label='Pushti' />
                            <Checkbox label='Sariq' />
                            <Checkbox label='Binafsharang' />
                            <Checkbox label='Oq' />
                            <Checkbox label='Kumush rang' />
                            <Checkbox label='Kulrang' />

                        </div>

                        <div className="flex flex-col pb-5">
                            <span className='font-bold text-lg mb-4'>Narx</span>
                            <div className="flex items-center space-x-4">
                                <input className='w-28 border border-gray py-2 px-2.5 rounded-lg' type="number" />
                                <i className='bi bi-dash-lg'></i>
                                <input className='w-28 border border-gray py-2 px-2.5 rounded-lg' type="number" />
                            </div>
                        </div>

                        <button className='bg-blue-c text-white font-semibold py-3 px-9 rounded-xl w-full'>Filterni qo'llash</button>
                    </div>
                </div>

                <ul className={`w-full grid gap-5 md:gap-8 lg:p-5 ${open ? 'grid-cols-2 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-2 md:grid-cols-4 lg:grid-cols-5'}`}>
                    {products.map((i, index) => {
                        return (
                            <li data-aos-delay={index < 5 ? index * 100 : 100} data-aos='fade-up' className='relative flex flex-col' key={i.id}>
                                <button onClick={() => like(i)} className='absolute top-3 right-3 text-[#B0B0B0] z-30 text-xl'>
                                    {checkLike(i) ? <i className='bi bi-heart-fill text-blue-c'></i> : <i className='bi bi-heart'></i>}
                                </button>

                                <Link to={`/products/${i.id}`} className='bg-white rounded-xl py-4 flex-grow'>
                                    <img className='w-full' src={i.images[2]} alt={i.title} />
                                </Link>
                                <div className="py-3">
                                    <span className='font-medium text-xs text-[#DEDEDE]'>{i.title}</span>
                                    <h3 className='font-semibold text-sm sm:text-base'>{i.model}</h3>
                                    <span className='font-bold text-base sm:text-lg text-blue-c'>{toPrice(i.price)} so'm</span>

                                </div>
                                <button onClick={() => addToCart(i)} className='w-full border border-blue-c py-2.5 text-blue-c rounded-md font-semibold hover:bg-blue-c hover:text-white transition transform '>Savatga qo'shish</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Catalog