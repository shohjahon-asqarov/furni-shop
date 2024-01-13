import React from 'react'
import { heroBig, heroMid } from '../assets/data'

const Hero = () => {
    return (
        <section>
            <div className="container pb-10">
                <div className="hidden md:grid grid-cols-7 py-8 items-stretch gap-5">
                    <img data-aos='zoom-in' className='col-span-3 rounded-3xl overflow-hidden' src={heroMid} alt="hero" />
                    <img data-aos='zoom-in' className='col-span-4 rounded-3xl overflow-hidden row-span-2' src={heroBig} alt="hero" />
                    <img data-aos='zoom-in' className='col-span-3 rounded-3xl overflow-hidden' src={heroMid} alt="hero" />
                </div>

                <div className='block md:hidden py-5'>
                    <img src={heroBig} alt="hero" />
                </div>
            </div>
        </section>
    )
}

export default Hero