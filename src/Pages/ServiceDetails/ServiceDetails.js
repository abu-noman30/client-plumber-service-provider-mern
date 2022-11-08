import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
	const loaderData = useLoaderData();
	const { name, description, img, features, pricing, payment, Warranty } = loaderData;
	console.log(loaderData);
	return (
		<>
			{/* Service Details Section */}
			<div className='service-details-section'>
				<div className='mx-auto py-8 px-4 w-full max-w-7xl bg-white'>
					<div className='mx-auto max-w-2xl lg:max-w-none grid grid-cols-2 gap-x-5'>
						{/* :Services PICTURE */}
						<div className='order-first lg:order-last col-span-full lg:col-span-1 relative rounded-sm border-2 border-gray-200'>
							<img src={img} alt='Service' className='object-contain w-full h-80 lg:h-full' />
						</div>

						{/* :Services DETAILS */}
						<div className='order-last lg:order-first col-span-full lg:col-span-1 lg:max-w-xl flex flex-col items-start'>
							{/* ::Name */}
							<h1 className='text-3xl sm:text-4xl text-gray-700 font-extrabold tracking-wide'>{name}</h1>
							{/* ::Price & Rating */}
							<div className='mt-5 flex items-center'>
								{/* :::Price */}
								<p className='pr-5 border-r border-gray-200 text-2xl text-gray-700 font-normal'>{`$ ${''}`}</p>
								{/* :::Reviews */}
								<div className='pl-5 pr-3 flex items-center'>
									{/* ::::all reviews */}
									<span className='ml-2 text-sm text-gray-400 font-medium'>{`${''} reviews`}</span>
								</div>
							</div>
							{/* ::Description */}
							<p className='mt-10 text-sm text-gray-500 font-medium'>{description}</p>
							{/* Service Features: */}

							{features.map((feature) => (
								<h1>{feature}</h1>
							))}
							{/* Pricing */}
							{pricing.map((price) => (
								<h1>{price}</h1>
							))}
							{/* Payment */}
							<h1>{payment}</h1>
							{/* Warranty */}
							<h1>{Warranty}</h1>
						</div>
					</div>
				</div>
			</div>
			{/* Reviews Section */}
			<div className='reviews-section'></div>
		</>
	);
};

export default ServiceDetails;
