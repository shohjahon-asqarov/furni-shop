import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toPrice } from '../filter/price'
import { addCart } from '../store/slices/cartSlice'
import { removeLike } from '../store/slices/likeSlice'

const Favourite = () => {
    const dispatch = useDispatch()
    const likeData = useSelector((state) => state.like.data)

    const addToCart = (product) => {
        dispatch(addCart(product))
    }

    const like = (product) => {
        dispatch(removeLike(product))
    }

    return (
        <section>
            <ul className={`container py-10 grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5`}>
                {likeData.map((i, index) => {
                    return (
                        <li data-aos-delay={index < 5 ? index * 100 : 100} data-aos='fade-up' className='relative flex flex-col' key={i.id}>
                            <button onClick={() => like(i)} className='absolute top-3 right-3 text-[#B0B0B0] z-30 text-xl'>
                                <i className='bi bi-heart-fill text-blue-c'></i>
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
        </section>
    )
}

export default Favourite