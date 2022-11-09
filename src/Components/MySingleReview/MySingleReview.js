import React from 'react';
import * as FAIcons from 'react-icons/fa';

const MySingleReview = (props) => {
	const {
		userInfo: { name, message },
		serviceInfo
	} = props.myReview;
	const svg = [1, 2, 3, 4, 5];
	return (
		<>
			{/* My Single Review Container */}
			<div className='my-single-review-container'>
				<blockquote className='flex h-full flex-col justify-between bg-white p-12 shadow-lg shadow-gray-600'>
					<div>
						<div className='flex gap-0.5 text-yellow-300'>
							{svg.map((item, index) => (
								<span key={index}>
									<FAIcons.FaStar />
								</span>
							))}
						</div>

						<div className='mt-4'>
							<h3 className='text-xl font-bold text-gray-800 italic sm:text-2xl'>Service: {serviceInfo.name}</h3>

							<p className='mt-4 text-gray-600'>{message}</p>
						</div>
					</div>

					<footer className='mt-8 text-gray-500'>__{name}</footer>
					<div className=' flex  items-center justify-between mt-3'>
						<button
							type='button'
							className='py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-16 h-12 rounded-lg '
						>
							<FAIcons.FaEdit />
						</button>
						<button
							type='button'
							className='py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-16 h-12 rounded-lg '
						>
							<FAIcons.FaTrashAlt />
						</button>
					</div>
				</blockquote>
			</div>
		</>
	);
};

export default MySingleReview;
