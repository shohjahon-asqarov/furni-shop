import React from 'react'
import { cartIcon, heartIcon, menuIcon, userIcon, xIcon } from '../assets/data'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Badge } from '@material-tailwind/react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const num = useSelector((state) => state.cart.data)
    const like = useSelector((state) => state.like.data)

    const navigate = useNavigate()

    window.addEventListener('resize', () => {
        setOpen(false)
    })

    return (
        <header className='sticky top-0 bg-white z-50'>
            <div className="container flex justify-between items-center py-5 z-20">
                <NavLink className='text-blue md:text-2xl font-bold' to="/">
                    FurniShop
                </NavLink>

                <nav className='hidden lg:inline-block'>
                    <ul className='text-lg font-semibold flex space-x-10'>
                        <li>
                            <NavLink to="/">Bosh sahifa</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart">Savat</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className='flex space-x-5'>
                    <Link to={`/cart`}>
                        <Badge content={num.length}>
                            <button>
                                <img src={cartIcon} alt="icon" />
                            </button>
                        </Badge>
                    </Link>

                    <Link to={`/favourite`}>
                        <Badge content={like.length}>
                            <button>
                                <img src={heartIcon} alt="icon" />
                            </button>
                        </Badge>
                    </Link>

                    <NavLink to='auth' >
                        <button className='hidden lg:flex items-center'>
                            <img src={userIcon} alt="icon" />
                            <span className='ml-2 text-base font-medium'>Kirish</span>
                        </button>
                    </NavLink>

                    <button onClick={() => setOpen(!open)} className='inline-block lg:hidden'>
                        <img src={!open ? menuIcon : xIcon} alt="icon" />
                    </button>
                </div>

            </div>


            <div onClick={() => setOpen(false)} className={`${open ? 'flex z-50' : 'hidden'} bg-white absolute top-16 left-0 right-0 bottom-0 z-[100] h-[calc(100vh-64px)] px-5 pt-10 pb-8 flex-col justify-between`}>
                <nav>
                    <ul className='font-semibold flex flex-col space-y-6'>
                        <li>
                            <NavLink to="/">Bosh sahifa</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart">Savat</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="text-center flex flex-col space-y-2 text-lg">
                    <span className='font-bold'>Kontaktlar</span>
                    <span>+998 93 917 07 31</span>
                    <span>shohjahonasqarov.web@gmail.com</span>
                    <button className='bg-black rounded-[10px] text-white py-3 !mt-5'>Bog'lanish</button>
                </div>
            </div>.
        </header>
    )
}

export default Navbar