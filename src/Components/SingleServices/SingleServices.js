import React from 'react';
import * as FAIcons from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const SingleServices = (props) => {
	const { img, name, description, rating, totalPrice } = props.service;
	return (
		<>
			{/* Single Service Container */}
			<div className='service-card mb-4 rounded-lg shadow-xl shadow-gray-700'>
				<div className='group h-full border-gray-500 border-opacity-60 border-2 rounded-lg bg-white overflow-hidden shadow-lg'>
					{/* :CARD IMAGE */}
					<PhotoProvider>
						<PhotoView src={img}>
							<img
								className='lg:h-48 md:h-36 w-full object-cover object-center transition duration-500 ease-in-out transform group-hover:scale-105'
								src={img}
								alt='blog'
							/>
						</PhotoView>
					</PhotoProvider>

					{/* :CARD CATEGORY */}
					<h2 className='pt-4 pb-1 px-6 inline-block title-font text-sm font-semibold text-gray-800 uppercase tracking-widest cursor-pointer hover:font-bold underline underline-offset-2'>
						My Service:
					</h2>

					{/* :CARD BODY */}
					<div className='py-1 px-6'>
						{/* ::Card title */}
						<h1 className='mb-3 inline-block title-font text-xl font-extrabold text-black tracking-wide cursor-pointer'>
							{name}
						</h1>
						{/* ::Card excerpt */}
						<p className='line-clamp-6 mb-3 overflow-hidden leading-relaxed text-zinc-500 cursor-pointer break-all'>
							{`${description.slice(0, 100)}...`}
						</p>
					</div>

					{/* :CARD FOOTER */}
					<div className='pt-1 pb-4 px-6 flex justify-between items-center flex-wrap'>
						{/* ::Service Details Button */}
						<Link to='/services/1'>
							<div className='flex flex-wrap'>
								{/* :SMALL BUTTON 1c */}
								<button
									type='button'
									className='relative inline-flex items-center px-5 py-2 rounded-full border border-transparent bg-blue-600 text-sm text-white font-medium uppercase hover:px-6 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
								>
									View Details
								</button>
							</div>
						</Link>
						{/* ::Price & Rating */}
						<div className='mt-1 flex items-center'>
							{/* Price */}
							<span className='text-black mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-black'>
								<span className='text-xl mr-1'>
									<FAIcons.FaRegMoneyBillAlt />
								</span>
								<span>{totalPrice}$</span>
							</span>
							{/* Rating */}
							<span className='text-red-800 inline-flex items-center leading-none text-sm cursor-pointer font-bold '>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5 '
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
									/>
								</svg>
								{rating}
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleServices;
