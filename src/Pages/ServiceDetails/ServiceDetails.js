import React from 'react';
import { Helmet } from 'react-helmet-async';
import * as FAIcons from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';

const ServiceDetails = () => {
	const loaderData = useLoaderData();
	const serviceData = loaderData;
	const { name, description, img, features, pricing, payment, Warranty, rating, totalPrice } = serviceData;
	// console.log(loaderData);

	const svg = [1, 2, 3, 4, 5];

	return (
		<>
			<Helmet>
				<title>ServiceDetails - plumBoy</title>
			</Helmet>
			{/* Service Details Section */}
			<div className='service-details-section'>
				<div className='mx-auto py-8 px-8 w-11/12  bg-white rounded-lg'>
					<div className='mx-auto max-w-2xl lg:max-w-none grid grid-cols-2 gap-x-5'>
						{/* :Services PICTURE */}
						<div className='order-first lg:order-last col-span-full lg:col-span-1 relative rounded-sm '>
							<img src={img} alt='Service' className='object-fill w-full mb-5 rounded-lg' />
							<div className='relative relative-20 lg:col-start-1 w-9/12 mx-auto'>
								<div className='relative space-y-4'>
									<div className='flex items-end justify-center lg:justify-start space-x-4'>
										<img
											className='rounded-lg shadow-lg w-32 md:w-56'
											width='200'
											src='https://i.ibb.co/J7gnrRq/male-plumber-uniform-installing-drain-pipe-kitchen-handywoman-with-toolbag-repair-sink-sanitary-equi.jpg'
											alt='1'
										/>
										<img className='rounded-lg shadow-lg w-40 md:w-64' width='260' src='https://i.ibb.co/nn07XQC/frowning-plumber-repairing-sink-13339-276997.webp' alt='2' />
									</div>
									<div className='flex items-start justify-center lg:justify-start space-x-4 ml-12'>
										<img className='rounded-lg shadow-lg w-24 md:w-40' width='170' src='https://i.ibb.co/64VLb62/black-faucet-with-steel-sink-stylish-modern-kitchen-169016-19744.webp' alt='3' />
										<img className='rounded-lg shadow-lg w-32 md:w-56' width='200' src='https://i.ibb.co/tbNf8NM/handyman-helping-senior-woman-kitchen-1098-17865.webp' alt='4' />
									</div>
								</div>
							</div>
						</div>

						{/* :Services DETAILS */}
						<div className='order-last lg:order-first col-span-full lg:col-span-1 lg:max-w-xl flex flex-col items-start'>
							{/* ::Name */}
							<h1 className='text-4xl md:text-5xl lg:text-6xl text-blue-700 font-extrabold tracking-wide mb-2 mt-5'>{name}</h1>
							{/* ::Price & Rating */}
							<div className='ml-4 mt-5 mb-8 flex items-center'>
								{/* :::Price */}
								<p className='pr-5 border-r border-gray-200 text-2xl font-bold text-red-700 '>{`$ ${totalPrice}`}</p>
								{/* :::Reviews */}
								<div className='pl-5 pr-3 flex items-center justify-end'>
									{/* ::::all reviews */}
									<p className='ml-2 text-sm text-gray-400 font-medium'>{`${rating} reviews`}</p>
									<div className='flex gap-0.5 text-yellow-300 ml-5'>
										{svg.map((item, index) => (
											<span key={index}>
												<FAIcons.FaStar />
											</span>
										))}
									</div>
								</div>
							</div>
							<div className='px-4'>
								{/* ::Description */}
								<h1 className='text-2xl font-bold text-gray-900 italic underline mb-1'>Details:</h1>
								<p className='text-sm text-gray-500 font-medium mb-3 break-all'>{description}</p>
								{/* Service Features: */}
								<h1 className='text-2xl font-bold text-gray-900 italic underline mb-1'>Service Features:</h1>
								<ul className='list-disc mb-5 text-sm text-gray-500 font-medium break-all'>
									{features.map((feature, index) => (
										<li className='ml-10' key={index}>
											{feature}
										</li>
									))}
								</ul>
								{/* Pricing */}
								<h1 className='text-2xl font-bold text-gray-900 italic underline mb-1'>Pricing:</h1>
								<ul className='list-disc mb-5 text-sm text-gray-500 font-medium break-all'>
									{pricing.map((price, index) => (
										<li className='ml-10' key={index}>
											{price}
										</li>
									))}
								</ul>
								{/* Payment */}
								<h1 className='text-2xl font-bold text-gray-900 italic underline mb-1'>Payment:</h1>
								<ul className='list-disc mb-5 text-sm text-gray-500 font-medium break-all'>
									<li className='ml-10'>{payment}</li>
								</ul>

								{/* Warranty */}
								<h1 className='text-2xl font-bold text-gray-900 italic underline mb-1'>Warranty:</h1>
								<ul className='list-disc mb-5 text-sm text-gray-500 font-medium break-all'>
									<li className='ml-10'>{Warranty}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Reviews Section */}
			<div className='reviews-section'>
				<Reviews serviceData={serviceData} />
			</div>
		</>
	);
};

export default ServiceDetails;
