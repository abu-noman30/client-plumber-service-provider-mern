import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import * as FAIcons from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import { FbaseAuthContext } from '../../Context/AuthContextAPI';

const AddServices = () => {
	const { currentUser } = useContext(FbaseAuthContext);
	const [recentServices, setRecentServices] = useState([]);
	const [refresh, setRefresh] = useState(false);

	const handlerOnFormSubmit = (e) => {
		e.preventDefault();

		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const image = form.image.value;
		const payment = form.payment.value;
		const description = form.description.value;
		const totalprice = form.totalprice.value;
		const rating = form.rating.value;

		// console.log(name, email, image, payment, description, totalprice, rating);

		if (name && email && image && payment && description && totalprice && rating) {
			const serviceData = {
				name: name,
				email: email,
				image: image,
				payment: payment,
				description: description,
				totalprice: totalprice,
				rating: rating,
				dateTime: new Date().toLocaleString()
			};

			const fetchApi = async () => {
				const res = await fetch('http://localhost:5000/services', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(serviceData)
				});
				const data = await res.json();
				// console.log(data);
				if (data && data.acknowledged === true) {
					toast.success('New Service Added Successfully...!');
					form.reset();
				}
			};

			fetchApi();
		} else {
			toast.error('Please fill up all the fields');
		}
	};

	useEffect(() => {
		const fetchApi = async () => {
			const res = await fetch('http://localhost:5000/recent-service');
			const data = await res.json();
			// console.log(data);
			setRecentServices(data);
			setRefresh(!refresh);
		};
		fetchApi();
	}, [refresh]);
	return (
		<>
			{/* Add Services Container */}
			<div className='add-services-container'>
				<section className='bg-gray-100'>
					<div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
						<div className='grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5'>
							<div className='lg:col-span-2 lg:py-12'>
								<h1 className='max-w-xl text-3xl font-bold italic underline'>Recently Added Service:</h1>

								<div className='mt-8'>
									{/* Single Service Container */}
									{recentServices.map((service) => (
										<div className='service-card mb-4 rounded-lg shadow-xl shadow-gray-700 w-full md:w-8/12 md:mx-auto lg:w-full ' key={service._id}>
											<div className='group h-full border-gray-500 border-opacity-60 border-2 rounded-lg bg-white overflow-hidden shadow-lg'>
												{/* :CARD IMAGE */}
												<PhotoProvider>
													<PhotoView src={service.img}>
														<img className='lg:h-48 md:h-36 w-full object-fill transition duration-500 ease-in-out transform group-hover:scale-105' src={service.img} alt='blog' />
													</PhotoView>
												</PhotoProvider>

												{/* :CARD CATEGORY */}
												<h2 className='pt-4 pb-1 px-6 inline-block title-font text-sm font-semibold text-gray-800 uppercase tracking-widest cursor-pointer hover:font-bold underline underline-offset-2'>My Service:</h2>

												{/* :CARD BODY */}
												<div className='py-1 px-6'>
													{/* ::Card title */}
													<h1 className='mb-3 inline-block title-font text-xl font-extrabold text-black tracking-wide cursor-pointer'>{service.name}</h1>
													{/* ::Card excerpt */}
													<p className='line-clamp-6 mb-3 overflow-hidden leading-relaxed text-zinc-500 cursor-pointer break-all'>{service.description}</p>
												</div>

												{/* :CARD FOOTER */}
												<div className='pt-1 pb-4 px-6 flex justify-between items-center flex-wrap'>
													{/* ::Service Details Button */}

													<div className='flex flex-wrap'>
														{/* :SMALL BUTTON 1c */}
														<Link to={`/services/${service._id}`}>
															<button
																type='button'
																className='relative inline-flex items-center px-5 py-2 rounded-full border border-transparent bg-blue-600 text-sm text-white font-medium uppercase hover:px-6 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
															>
																View Details
															</button>
														</Link>
													</div>

													{/* ::Price & Rating */}
													<div className='mt-1 flex items-center'>
														{/* Price */}
														<span className='text-black mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-black'>
															<span className='text-xl mr-1'>
																<FAIcons.FaRegMoneyBillAlt />
															</span>
															<span>{service.totalPrice}$</span>
														</span>
														{/* Rating */}
														<span className='text-red-800 inline-flex items-center leading-none text-sm cursor-pointer font-bold '>
															<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 ' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
																<path
																	strokeLinecap='round'
																	strokeLinejoin='round'
																	strokeWidth={2}
																	d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
																/>
															</svg>
															{service.rating}
														</span>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>

							<div className='rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12'>
								<form
									className='space-y-4'
									onSubmit={(e) => {
										handlerOnFormSubmit(e);
									}}
								>
									<div>
										<label className='' htmlFor='name'>
											Service Name
										</label>
										<input className='w-full rounded-lg border-gray-200 p-3 text-sm' placeholder='Service Name' type='text' name='name' required />
									</div>

									<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 items-center'>
										<div>
											<label className='' htmlFor='email'>
												Email
											</label>
											<input className='w-full rounded-lg border-gray-200 p-3 text-sm' placeholder='Email address' type='email' name='email' defaultValue={currentUser.email} readOnly />
										</div>

										<div>
											<label className='' htmlFor='image'>
												Image URL
											</label>
											<input className='w-full rounded-lg border-gray-200 p-3 text-sm' type='text' name='image' placeholder='Image ULR' required />
										</div>
									</div>

									<div className='grid grid-cols-1 gap-4 text-center sm:grid-cols-3'>
										<div>
											<input className='' type='radio' tabIndex='-1' name='payment' value={'Cash On Delivery'} />
											<label htmlFor='option1' className='block w-full rounded-lg border border-gray-200 p-3' tabIndex='0'>
												<span className='text-sm font-medium'> Cash On Delivery </span>
											</label>
										</div>

										<div>
											<input className='' type='radio' tabIndex='-1' name='payment' value={'Mobile Payments'} />
											<label htmlFor='option2' className='block w-full rounded-lg border border-gray-200 p-3' tabIndex='0'>
												<span className='text-sm font-medium'> Mobile Payments </span>
											</label>
										</div>

										<div>
											<input className='' type='radio' tabIndex='-1' name='payment' value={'Cards Payment'} />
											<label htmlFor='option3' className='block w-full rounded-lg border border-gray-200 p-3' tabIndex='0'>
												<span className='text-sm font-medium'> Cards Payment </span>
											</label>
										</div>
									</div>

									<div>
										<label className='' htmlFor='message'>
											Description
										</label>
										<textarea className='w-full rounded-lg border-gray-200 p-3 text-sm' placeholder='Message' rows='8' name='description' required></textarea>
									</div>
									<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 items-center'>
										<div>
											<label className='' htmlFor='price'>
												Total Price
											</label>
											<input className='w-full rounded-lg border-gray-200 p-3 text-sm' placeholder='Service Total Price' type='number' name='totalprice' />
										</div>

										<div>
											<label className='' htmlFor='rating'>
												Rating
											</label>
											<input className='w-full rounded-lg border-gray-200 p-3 text-sm' placeholder='Ratings (1-5)' type='number' defaultValue={4.5} name='rating' />
										</div>
									</div>

									<div className='mt-4'>
										<button type='submit' className='flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto'>
											<p className='font-medium'> Add Service </p>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default AddServices;
