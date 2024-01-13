import React, { useState } from 'react';

import { Link, useParams } from "react-router-dom"
import { products } from '../assets/data'
import { Breadcrumbs } from '@material-tailwind/react'
import { toPrice } from '../filter/price';

import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { addCart } from '../store/slices/cartSlice';

const Detail = () => {
    const current = useParams()
    const detailed = products.find((product) => product.id == current.id)

    const [currentImg, setCurrentImg] = useState(0)

    const dispatch = useDispatch()

    const [activeTab, setActiveTab] = useState("Batafsil");

    const data = [
        {
            label: "Batafsil",
            value: "Batafsil",
            desc: `${detailed.description}`
        },
        {
            label: "Xarakteristika",
            value: "Xarakteristika",
            desc:
                <div className='grid md:grid-cols-2 !font-medium'>
                    <ul className='space-y-5 relative'>
                        <li >Brend:
                            <span className='text-black absolute left-52'>
                                {detailed.characteristics.manufacturer}
                            </span>
                        </li>
                        <li >Sotuvda mavjud:
                            <span className='text-black absolute left-52'>
                                {detailed.characteristics.quantity} dona
                            </span>
                        </li>
                        <li >Rang:
                            <span className='text-black absolute left-52'>
                                {detailed.characteristics.color}
                            </span>
                        </li>
                        <li >Og'irligi (кг):
                            <span className='text-black absolute left-52'>
                                {detailed.characteristics.weight}
                            </span>
                        </li>
                    </ul>
                </div>
            ,
        },
        {
            label: "Yetkazib berish",
            value: "Yetkazib berish",
            desc:
                <ul className='space-y-5 text-black'>
                    <li>
                        <p>{detailed.delivery.title}</p>
                    </li>
                    <li>
                        <p><span className='font-bold'>Yetkazib berish muddati: </span>{detailed.delivery.period}</p>

                    </li>
                    <p className='font-bold'>{detailed.delivery.warning}</p>
                </ul>
        }
    ];

    return (
        <section className='container py-10'>
            <Breadcrumbs>
                <Link to="/" className="opacity-60">
                    Bosh sahifa
                </Link>
                <span className='text-black'>{detailed.model}</span>
            </Breadcrumbs>

            <div className="grid gap-y-16 lg:grid-cols-2 py-10">
                <div className='flex flex-col-reverse md:flex-row md:items-center'>
                    <ul className="md:w-20 justify-between flex-wrap lg:space-y-8 flex mt-5">
                        {detailed.images.map((i, index) => {
                            return (
                                <li onClick={() => setCurrentImg(index)} className={`w-20 h-20 rounded-md overflow-hidden cursor-pointer border ${currentImg === index ? 'border-blue-c' : 'border-transparent'}`} key={index}>
                                    <img className='bg-cover w-full h-full' src={i} alt="detailed" />
                                </li>
                            )
                        })}
                    </ul>
                    <div className='max-h-[420px] flex justify-center items-center w-full lg:ml-5'>
                        <img className='max-h-[420px] w-auto md:w-full' src={detailed.images[currentImg]} alt="product" />
                    </div>
                </div>

                <div className='space-y-6'>
                    <h3 className='text-4xl font-bold mb-5'>
                        {detailed.model}
                    </h3>
                    <span className='text-[#9ACC6C] text-sm font-bold'>{detailed.count} dona sotuvda mavjud</span>

                    <p>{detailed.info}</p>
                    <p>
                        <span className='text-lg font-bold'>Batafsil ma'lumotlar</span> <br />
                        {detailed.description}
                    </p>
                    <span className='text-4xl font-bold inline-block'>{toPrice(detailed.price)}so'm</span> <br />
                    <button onClick={()=>dispatch(addCart(detailed))} className='bg-blue-c text-white font-semibold py-3 px-9 rounded-xl'>Savatga qo'shish</button>

                </div>
            </div>

            <Tabs id="custom-animation" value={activeTab} className="w-full">
                <TabsHeader
                    className="bg-transparent inline-block max-w-xl sm:flex"
                    indicatorProps={{
                        className: "bg-[#F7F7FC] shadow-none !font-bold !text-black",
                    }}>
                    {data.map(({ label, value }) => (
                        <Tab className='px-5 !justify-start md:!justify-center' onClick={() => setActiveTab(value)} key={value} value={value}>
                            <span className={`font-bold ${activeTab === value ? 'text-blue-c' : ''}`}>{label}</span>
                        </Tab>
                    ))}
                </TabsHeader>

                <TabsBody
                    animate={{
                        initial: { y: 250 },
                        mount: { y: 0 },
                        unmount: { y: 250 },
                    }}
                >
                    {data.map(({ value, desc }) => (
                        <TabPanel className='!p-0 mt-8'
                            key={value} value={value}>
                            <div className='bg-detail-bg py-8 px-6 rounded-lg min-h-[480px]'>
                                {desc}
                            </div>
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>

        </section>
    )
}

export default Detail