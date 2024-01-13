import React from 'react'
import { newProducts } from '../assets/data'
import { toPrice } from '../filter/price'
import { useDispatch } from 'react-redux'
import { addLike } from '../store/slices/likeSlice'
import { checkLike } from '../filter/checkLike'

const NewProducts = () => {
    const dispatch = useDispatch()

    const like = (product) => {
        dispatch(addLike(product))
    }

    return (
        <section className='bg-blue-c py-16'>
            <div className="container">
                <div className="grid gap-y-8 lg:grid-cols-7 items-center">
                    <div className="col-span-3 text-white">
                        <h2 data-aos='fade-right' className='mb-5 hidden md:block'>
                            Eng ko'p sotilgan mahsulotlar
                        </h2>
                        <h2 data-aos='fade-right' className='mb-5 block md:hidden'>
                            Eng ko'p sotilgan mahsulotlar
                        </h2>
                        <button>
                            <a href='#all-products' data-aos='fade-up' className='py-3 px-6 bg-white text-black rounded-[10px] text-lg font-semibold'>
                                Barchasi
                            </a>
                        </button>
                    </div>

                    <div className="col-span-4">
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-5">
                            {newProducts.map((i, index) => {
                                return (
                                    <li data-aos-delay={index * 300} data-aos='fade-up' className='text-white relative flex flex-col' key={i.id}>
                                        <button onClick={() => like(i)} className='absolute top-3 right-3 text-[#B0B0B0] z-30 text-xl'>
                                            {checkLike(i) ? <i className='bi bi-heart-fill text-blue-c'></i> : <i className='bi bi-heart'></i>}
                                        </button>

                                        <div className='bg-white rounded-xl py-4 flex-grow '>
                                            <img className='w-full' src={i.images[2]} alt="new product" />
                                        </div>
                                        <div className="py-3">
                                            <span className='font-medium text-xs text-[#DEDEDE]'>{i.title}</span>
                                            <h3 className='font-semibold text-sm sm:text-base'>{i.model}</h3>
                                            <span className='font-bold text-base sm:text-lg'>{toPrice(i.price)} so'm</span>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewProducts