import React from 'react';

const SingleReview = (props) => {
	const {
		userInfo: { name, title, message, img },
		dateTime
	} = props.review;

	const date = dateTime.split(',')[0];
	const time = dateTime.split(',')[1];

	return (
		<>
			{/* Single Review Container */}
			<div className='single-review-container'>
				<article className='py-3 grid grid-cols-12 border-2 border-gray-100 shadow-lg shadow-gray-400 rounded-lg bor mb-2 '>
					{/* ::Auhtor Details */}
					<div className='col-span-12 md:col-span-3 border-r-2 px-1 border-b-2 md:border-b-0 pb-3 md:pb-0'>
						{/* :::avatar */}
						<div className=' flex flex-col items-center justify-center overflow-hidden ' aria-label='avatar'>
							<img src={img} alt='' className='w-12 h-12 rounded-full' />
						</div>
						<div className='ml-3 sm:ml-0 space-y-1.5 flex flex-col items-center justify-center '>
							{/* :::name */}
							<p className='text-sm text-gray-700 font-semibold'>{name}</p>
							{/* :::rating */}
							{/* <RatingStars2 rating={review.rating} color='text-gray-700' /> */}
							{/* :::dateTime */}
							<p className='text-xs text-gray-400'>{date}</p>
							<p className='text-xs text-gray-400'>{time}</p>
						</div>
					</div>
					{/* ::Review Content */}
					<div className='col-span-12 md:col-span-9 mt-5 sm:mt-0 sm:ml-3 px-4 space-y-2  flex flex-col items-center md:items-start justify-center md:justify-start '>
						{/* :::title */}
						<p className='text-base text-gray-700  underline underline-offset-2 font-bold '>
							<span className=''>{title}</span>
						</p>
						{/* :::text */}
						<p className='text-sm text-gray-500 font-medium ml-5'>{message}</p>
					</div>
				</article>
			</div>
		</>
	);
};

export default SingleReview;
