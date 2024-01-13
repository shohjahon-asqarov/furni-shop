import { useSelect } from '@material-tailwind/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toPrice } from '../filter/price'
import { deleteCart, minusCount, updateCount } from '../store/slices/cartSlice'
import { emptyCartGif } from '../assets/data'

const Cart = () => {

    const dispatch = useDispatch()
    const orders = useSelector((state) => state.cart.data)

    let totalPrice = 0

    orders.forEach(product => {
        if (product.count > 1) {
            totalPrice += (product.price * product.count)
        } else {
            totalPrice += product.price
        }
    });

    return (
        <section className='container py-10'>
            <h2>Savat</h2>

            {
                orders.length > 0
                    ?
                    <div className="grid lg:grid-cols-3 gap-x-8">
                        <ul className='lg:col-span-2 space-y-5 py-10'>
                            {orders.map((order) => {
                                return (
                                    <li className='flex flex-col' key={order.id}>
                                        <div className='flex flex-col sm:grid sm:grid-cols-5 sm:gap-5 items-center'>
                                            <div className='sm:col-span-1'>
                                                <img className='w-40' src={order.images[0]} alt="order product" />
                                            </div>

                                            <div className='sm:col-span-4 flex flex-col justify-between sm:py-6 w-full'>
                                                <div>
                                                    <h3 className='flex text-3xl justify-center sm:justify-between sm:mb-5 pt-3 font-bold'>
                                                        <span>{order.model}</span>
                                                        <span className='text-blue-c text-xl sm:text-2xl md:text-3xl hidden sm:block'>{toPrice(order.price)} so'm</span>
                                                    </h3>
                                                    <p className='text-sm sm:text-base'>{order.info}</p>
                                                </div>

                                                <div className='flex justify-between items-center mt-3'>
                                                    <button onClick={() => dispatch(deleteCart(order))} className='text-btn-gray font-semibold hidden sm:block'>
                                                        Olib tashlash <i className='bi bi-trash'></i>
                                                    </button>

                                                    <div className="bg-[#F3F3F7] items-center justify-between w-[93px] rounded-lg text-btn-gray-text py-2 hidden sm:flex">

                                                        <button onClick={() => dispatch(updateCount(order))} className="py-1 px-3 ">
                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7.85714 3.53571C7.85714 3.23996 7.61719 3 7.32143 3H5V0.678571C5 0.382812 4.76004 0.142857 4.46429 0.142857H3.39286C3.0971 0.142857 2.85714 0.382812 2.85714 0.678571V3H0.535714C0.239955 3 0 3.23996 0 3.53571V4.60714C0 4.9029 0.239955 5.14286 0.535714 5.14286H2.85714V7.46429C2.85714 7.76004 3.0971 8 3.39286 8H4.46429C4.76004 8 5 7.76004 5 7.46429V5.14286H7.32143C7.61719 5.14286 7.85714 4.9029 7.85714 4.60714V3.53571Z" fill="#696F7A" />
                                                            </svg>
                                                        </button>

                                                        <span className="text-sm font-bold">{order.count}</span>

                                                        <button disabled={order.count === 1} onClick={() => dispatch(minusCount(order))} className="py-1 px-3 ">
                                                            <svg width="8" height="3" viewBox="0 0 8 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7.85714 0.535714C7.85714 0.239955 7.61719 0 7.32143 0H0.535714C0.239955 0 0 0.239955 0 0.535714V1.60714C0 1.9029 0.239955 2.14286 0.535714 2.14286H7.32143C7.61719 2.14286 7.85714 1.9029 7.85714 1.60714V0.535714Z" fill="#696F7A" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='mt-5 flex w-full font-bold sm:hidden flex-col items-center space-y-3'>
                                            <span className='text-blue-c text-2xl'>{toPrice(order.price)} so'm</span>

                                            <div className="bg-[#F3F3F7] flex items-center justify-between w-[93px] rounded-lg text-btn-gray-text py-2">

                                                <button onClick={() => dispatch(updateCount(order))} className="py-1 px-3 ">
                                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.85714 3.53571C7.85714 3.23996 7.61719 3 7.32143 3H5V0.678571C5 0.382812 4.76004 0.142857 4.46429 0.142857H3.39286C3.0971 0.142857 2.85714 0.382812 2.85714 0.678571V3H0.535714C0.239955 3 0 3.23996 0 3.53571V4.60714C0 4.9029 0.239955 5.14286 0.535714 5.14286H2.85714V7.46429C2.85714 7.76004 3.0971 8 3.39286 8H4.46429C4.76004 8 5 7.76004 5 7.46429V5.14286H7.32143C7.61719 5.14286 7.85714 4.9029 7.85714 4.60714V3.53571Z" fill="#696F7A" />
                                                    </svg>
                                                </button>

                                                <span className="text-sm font-bold">{order.count}</span>

                                                <button disabled={order.count === 1} onClick={() => dispatch(minusCount(order))} className="py-1 px-3 ">
                                                    <svg width="8" height="3" viewBox="0 0 8 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.85714 0.535714C7.85714 0.239955 7.61719 0 7.32143 0H0.535714C0.239955 0 0 0.239955 0 0.535714V1.60714C0 1.9029 0.239955 2.14286 0.535714 2.14286H7.32143C7.61719 2.14286 7.85714 1.9029 7.85714 1.60714V0.535714Z" fill="#696F7A" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <button onClick={() => dispatch(deleteCart(order))} className='font-semibold bg-red-600 text-white py-3 px-6 rounded-md'>
                                                Olib tashlash <i className='bi bi-trash'></i>
                                            </button>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>


                        {/* total */}
                        <div className='w-full'>
                            <div className='p-6 bg-detail-bg rounded-xl font-bold grid grid-cols-1 divide-y gap-8'>
                                <h3 className='text-2xl'>Jami: {orders.length} dona mahsulot</h3>

                                <input className='py-3 px-4 w-full border-none rounded-md font-normal outline-none' type="text" placeholder='Promocod:' />

                                <div className='flex justify-between items-center py-3'>
                                    <span className='text-2xl'>Jami</span>
                                    <span className='text-xl sm:text-2xl xl:text-3xl text-blue-c'>{toPrice(totalPrice)} so'm</span>
                                </div>
                            </div>
                            <button className='mt-6 bg-blue-c text-white font-semibold py-4 px-9 rounded-xl w-full'>Buyurtma berish</button>

                        </div>
                    </div>
                    : <div className='flex justify-center py-10'>
                        <img src={emptyCartGif} alt="empty" />
                    </div>
            }

        </section>
    )
}

export default Cart