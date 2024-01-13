import { Breadcrumbs, tab } from '@material-tailwind/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { blogData } from '../assets/data'

const Blog = () => {

  const tabs = [
    'Barchasi', 'Yangilari', `Yaqainda qo'shilgan`
  ]

  const [active, setActive] = useState(0)

  const [searchText, setSearchText] = useState('')

  const found = blogData.find(i => i.title.toLowerCase().includes(searchText))

  return (
    <section className='container py-10'>
      <Breadcrumbs>
        <Link to="/" className="opacity-60">
          Bosh sahifa
        </Link>
        <span className='text-black'>Blog</span>
      </Breadcrumbs>

      <div className="flex justify-between items-center py-8">
        <div className='flex space-x-7'>
          <h2 data-aos='fade-up' className='text-4xl font-bold'>Blog</h2>

          <ul data-aos='fade-up' className='hidden lg:flex space-x-5'>
            {tabs.map((tab, index) => {
              return (
                <li onClick={() => setActive(index)} className={`ease-linear duration-200 font-bold py-2.5 px-4 cursor-pointer border-b-2 border-transparent ${active === index ? 'text-blue-c !border-blue-c' : 'text-btn-gray'}`} key={index}>
                  <span>{tab}</span>
                </li>
              )
            })}
          </ul>
        </div>

        <div data-aos='fade-up' data-aos-delay='400' className="w-auto xl:min-w-[400px] search border border-btn-gray rounded-[100px] py-2 px-5 md:py-3 md:px-6 space-x-3">
          <i className='bi bi-search'></i>
          <input onKeyUp={(e) => setSearchText(e.target.value.toLowerCase())} className='outline-none' type="text" placeholder='Izlash...' />
        </div>
      </div>

      <div className='lg:hidden w-auto overflow-x-scroll no-scrollbar'>
        <ul className='flex space-x-5 min-w-[450px]'>
          {tabs.map((tab, index) => {
            return (
              <li onClick={() => setActive(index)} className={`ease-linear duration-200 text-sm font-bold py-2.5 px-1 cursor-pointer border-b-2 border-transparent ${active === index ? 'text-blue-c !border-blue-c' : 'text-btn-gray'}`} key={index}>
                <span>{tab}</span>
              </li>
            )
          })}
        </ul>
      </div>
      {found ?
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 pt-5 pb-10">
          {blogData.map((blog, index) => {
            return (
              blog.title.toLowerCase().includes(searchText) &&
              <li key={blog.id} data-aos-delay={index < 3 ? index * 100 : 100} data-aos='fade-up' className='p-5 rounded-xl blog-card overflow-hidden flex flex-col'>
                <img className='rounded-xl overflow-hidden w-full' src={blog.img} alt={blog.title} />
                <div className="flex justify-between text-btn-gray py-4 text-sm">
                  <span>{blog.data}</span>
                  <span><i className='bi bi-eye-fill mr-1'></i>{blog.views}</span>
                </div>
                <div className='space-y-4 flex pb-5 flex-col flex-grow'>
                  <h3 className='text-lg md:text-2xl font-bold flex-grow'>{blog.title}</h3>
                  <p className='text-sm'>{blog.description}</p>
                </div>
              </li>
            )
          })}
        </ul>
        : <div className='py-32 text-center'>
          <div>
            <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
              <path d="M38.2167 67.3833C41.3421 64.2588 45.5806 62.5036 50 62.5036C54.4194 62.5036 58.6579 64.2588 61.7833 67.3833M37.5 41.6667H37.5417M62.5 41.6667H62.5417M87.5 50C87.5 54.9246 86.53 59.8009 84.6455 64.3506C82.7609 68.9003 79.9987 73.0343 76.5165 76.5165C73.0343 79.9987 68.9003 82.7609 64.3506 84.6455C59.8009 86.53 54.9246 87.5 50 87.5C45.0754 87.5 40.1991 86.53 35.6494 84.6455C31.0997 82.7609 26.9657 79.9987 23.4835 76.5165C20.0013 73.0343 17.2391 68.9003 15.3545 64.3506C13.47 59.8009 12.5 54.9246 12.5 50C12.5 40.0544 16.4509 30.5161 23.4835 23.4835C30.5161 16.4509 40.0544 12.5 50 12.5C59.9456 12.5 69.4839 16.4509 76.5165 23.4835C83.5491 30.5161 87.5 40.0544 87.5 50Z" stroke="#B0B0B0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h3 className='font-bold text-lg text-btn-gray'>Hech qanday ma'lumot topilmadi</h3>
          </div>
        </div>
      }
    </section>
  )
}

export default Blog