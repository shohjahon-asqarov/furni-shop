import React from 'react'

import { Link } from 'react-router-dom'
import { socialLinks } from '../assets/data'

const Footer = () => {
    return (
        <footer className='bg-blue-c text-white py-10 md:py-20'>

            <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-10">
                <dir className="flex flex-col p-0">
                    <Link data-aos='fade-up' className='text-5xl font-extrabold mb-5' to='/'>FurniShop</Link>

                    <span data-aos='fade-up' className='footer-head'>Ijtimoiy tarmoqlarimiz</span>

                    <ul className='flex space-x-4 py-4'>
                        {
                            socialLinks.map((social, index) => {
                                return (
                                    <li data-aos='fade-up' data-aos-delay={index * 100} key={index}>
                                        <a target='_blank' href={social.link}>
                                            <img src={social.img} alt="social" />
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </dir>

                <div>
                    <h3 data-aos='fade-up' className='footer-head mb-3'>Aloqa</h3>
                    <ul className='space-y-4 mb-4'>
                        <li data-aos='fade-up'>
                            <span>+998 93 917 07 31</span>
                        </li>
                        <li data-aos='fade-up'>
                            <span>shohjahonasqarov.web@gmail.com</span>
                        </li>
                        <li data-aos='fade-up'>
                            <a href="tel:+998930170731" className='inline-block w-full sm:w-auto py-3 px-6 bg-white text-black rounded-[10px] text-lg font-semibold'>
                                Bog'lanish
                            </a>
                        </li>

                    </ul>
                </div>

                <div className='w-72 hidden lg:block'>
                    <h3 className='footer-head mb-3'>Sahifalar</h3>
                    <ul className='space-y-3'>
                        <li>
                            <Link to='/'>Bosh sahifa</Link>
                        </li>
                        <li>
                            <Link to='/cart'>Savat</Link>
                        </li>
                        <li>
                            <Link to='/blog'>Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </footer>
    )
}

export default Footer