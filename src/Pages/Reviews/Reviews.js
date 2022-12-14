import { React, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';
import ReviewBackground from '../../Components/ReviewBackground/ReviewBackground';
import SingleReview from '../../Components/SingleReview/SingleReview';
import { FbaseAuthContext } from '../../Context/AuthContextAPI';

const Reviews = (props) => {
	const { serviceData } = props;
	// const { name, description, img, features, pricing, payment, Warranty } = props.serviceData;
	const { currentUser } = useContext(FbaseAuthContext);
	const [reviewsData, setReviewsData] = useState([]);
	const [refresh, setRefresh] = useState(false);
	const location = useLocation();

	const handlerOnSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const title = form.title.value;
		const message = form.message.value;

		// console.log(name, title, message, email);

		if (title && message) {
			const reviewData = {
				userInfo: { name: currentUser.displayName, email: currentUser.email, title: title, message: message, img: currentUser.photoURL },
				serviceInfo: { name: serviceData.name, id: serviceData._id },
				dateTime: new Date().toLocaleString()
			};
			const fetchApi = async () => {
				const res = await fetch('https://server-plumboy-service.vercel.app/add-review', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(reviewData)
				});
				const data = await res.json();
				// console.log(data);
				if (data && data.acknowledged === true) {
					toast.success('Review Added Successfully');
					form.reset();
				}
			};

			fetchApi();
		}
	};

	useEffect(() => {
		const fetchApi = async () => {
			const res = await fetch('https://server-plumboy-service.vercel.app/reviews', {
				method: 'GET',
				headers: {
					serviceId: serviceData._id
				}
			});
			const data = await res.json();
			// console.log(data);
			setReviewsData(data);
			setRefresh(!refresh);
		};
		fetchApi();
	}, [serviceData._id, refresh]);

	return (
		<>
			{/* Add Reviews Container */}
			<div className='add-reviews-container my-10 w-11/12 mx-auto'>
				{/* <!-- component --> */}
				{currentUser && currentUser.uid ? (
					<div className='grid grid-cols-12 lg:gap-8 '>
						{/* Reviews */}
						<div className='reviews-container col-span-12 md:col-span-6 lg:col-span-8 border-5 p-4'>
							<div className='flex items-center justify-between'>
								<button className='group relative inline-flex items-center px-5 py-2.5 rounded shadow-lg outline-none bg-zinc-200 text-gray-700 transition-all duration-200 ease-out hover:text-zincbg-zinc-200 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none text-4xl italic font-bold mb-10'>
									{/* span::before */}
									<span className='absolute h-0 w-0.5 right-0 top-0 bg-gray-800 transition-all duration-500 ease-out group-hover:h-full' aria-hidden='true' />
									<span className='absolute left-0 bottom-0 bg-gray-800 transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full' aria-hidden='true' />
									All Reviews :{/* span::after */}
									<span className='absolute left-0 bottom-0 bg-gray-800 transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full' aria-hidden='true' />
									<span className='absolute w-0 h-0.5 right-0 top-0 bg-gray-800 transition-all duration-500 ease-out group-hover:w-full' aria-hidden='true' />
								</button>
								<p className='ml-4 inline-flex flex-col items-center'>
									<span className='text-3xl sm:text-5xl font-extrabold tracking-wide'>{reviewsData.length}</span>
									<span className='text-base sm:text-lg text-gray-400'>reviews</span>
								</p>
							</div>

							<div className='bg-white rounded-lg mb-8'>
								<div className='mx-auto py-8 px-4 w-full max-w-7xl bg-white rounded-lg'>
									{reviewsData.length === 0 ? (
										<div className='grid grid-cols-1 text-center my-100 bg-gray-200 rounded-lg'>
											<h1 className='text-3xl font-bold text-gray-500 text-center my-10 italic'>No Review Found....!</h1>
											<img src='https://i.ibb.co/d4wGMyc/no-review-found.png' alt='' className='mt-5 p-4' />
										</div>
									) : (
										<div className='mx-auto max-w-4xl flex flex-col'>
											{/* :HEADER */}

											{/* :REVIEWS */}
											<div className=''>
												{reviewsData.map((review) => (
													<SingleReview key={review._id} review={review} />
												))}
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
						{/* Add Reviews */}
						<div className='add-reviews-container col-span-12 md:col-span-6 lg:col-span-4 lg:mr-8 '>
							{/* Review-form */}
							{currentUser && currentUser.uid ? (
								<div className='w-full p-4 -mt-5 -mb-5 md:mt-24 md:mb-0 sticky top-44 pb-16 '>
									<div className='bg-gray-100 relative rounded-lg p-8 sm:p-12 shadow-lg '>
										<form
											onSubmit={(e) => {
												handlerOnSubmit(e);
											}}
										>
											{/* <div className='mb-6'>
												<input
													type='text'
													name='name'
													placeholder='Your Name'
													defaultValue={currentUser.displayName}
													required
													className='
                                      w-full
                                      rounded
                                      p-3
                                      text-gray-800
                                      border-gray-500
                                      outline-none
                                      focus-visible:shadow-none
                                      focus:border-primary
                                      '
												/>
											</div>
											<div className='mb-6'>
												<input
													type='email'
													name='email'
													defaultValue={currentUser.email}
													readOnly
													placeholder='Your Email'
													className='
                                      w-full
                                      rounded
                                      p-3
                                      text-gray-800
                                      border-gray-500
                                      outline-none
                                      focus-visible:shadow-none
                                      focus:border-primary
                                      '
												/>
											</div> */}
											<div className='mb-6'>
												<input
													type='text'
													name='title'
													placeholder='Add a short Title'
													required
													className='
                                      w-full
                                      rounded
                                      p-3
                                      text-gray-800
                                      border-gray-500
                                      outline-none
                                      focus-visible:shadow-none
                                      focus:border-primary
                                      '
												/>
											</div>
											<div className='mb-6'>
												<textarea
													type='text'
													name='message'
													rows='6'
													placeholder='Your Message'
													required
													className='
                                      w-full
                                      rounded
                                      p-3
                                      text-gray-800
                                      border-gray-500
                                      outline-none
                                      focus-visible:shadow-none
                                      focus:border-primary
                                      '
												></textarea>
											</div>
											<div>
												<button
													className='
                                      w-full
                                      text-gray-100
                                      hover:text-gray-100
                                      bg-black
                                      rounded
																			font-bold
                                      border border-primary
                                      p-3
                                      transition
                                      ease-in-out
                                      duration-500
                                      hover:bg-gray-700
                                      '
												>
													Send
												</button>
											</div>
										</form>
										{/* Back-ground */}
										<div className='hidden md:block'>
											<ReviewBackground />
										</div>
									</div>
								</div>
							) : (
								''
							)}
						</div>
					</div>
				) : (
					// <div className='p-5'>
					// 	<div className='reviews-container col-span-12 md:col-span-6 lg:col-span-8 border-5 p-4'>
					// 		<div className='flex flex-col md:flex-row items-center justify-center'>
					// 			<div className='mb-5'>
					// 				<Link to='/blank'>
					// 					<button className='group relative inline-flex items-center px-5 py-2.5 rounded shadow-lg outline-none bg-zinc-200 text-gray-700 transition-all duration-200 ease-out hover:text-zincbg-zinc-200 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none text-4xl italic font-bold'>
					// 						{/* span::before */}
					// 						<span className='absolute h-0 w-0.5 right-0 top-0 bg-gray-800 transition-all duration-500 ease-out group-hover:h-full' aria-hidden='true' />
					// 						<span className='absolute left-0 bottom-0 bg-gray-800 transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full' aria-hidden='true' />
					// 						Click Here to Add Review {/* span::after */}
					// 						<span className='absolute left-0 bottom-0 bg-gray-800 transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full' aria-hidden='true' />
					// 						<span className='absolute w-0 h-0.5 right-0 top-0 bg-gray-800 transition-all duration-500 ease-out group-hover:w-full' aria-hidden='true' />
					// 					</button>
					// 				</Link>
					// 			</div>
					// 			<p className='ml-4 inline-flex flex-col items-center'>
					// 				<span className='text-3xl sm:text-5xl font-extrabold tracking-wide'>{reviewsData.length}</span>
					// 				<span className='text-base sm:text-lg text-gray-400'>reviews</span>
					// 			</p>
					// 		</div>

					// 		<div className='bg-white w-full md:w-10/12 mx-auto rounded-lg mb-8'>
					// 			<div className='mx-auto py-8 px-4 w-full bg-white rounded-lg'>
					// 				{reviewsData.length === 0 ? (
					// 					<div className='flex flex-col items-center justify-center'>
					// 						<div className='grid grid-cols-1 text-center my-100 bg-gray-200 rounded-lg'>
					// 							<h1 className='text-3xl font-bold text-gray-500 text-center my-10 italic'>No Review Found....!</h1>
					// 							<img src='https://i.ibb.co/d4wGMyc/no-review-found.png' alt='' className='mt-5 p-4' />
					// 						</div>
					// 					</div>
					// 				) : (
					// 					<div className='mx-auto max-w-4xl flex flex-col'>
					// 						{/* :REVIEWS */}
					// 						<div className=''>
					// 							{reviewsData.map((review) => (
					// 								<SingleReview key={review._id} review={review} />
					// 							))}
					// 						</div>
					// 					</div>
					// 				)}
					// 			</div>
					// 		</div>
					// 	</div>
					// </div>
					<div className='grid grid-cols-12 lg:gap-8 '>
						{/* Reviews */}
						<div className='reviews-container col-span-12 md:col-span-6 lg:col-span-8 border-5 p-4'>
							<div className='flex items-center justify-between'>
								<button className='group relative inline-flex items-center px-5 py-2.5 rounded shadow-lg outline-none bg-zinc-200 text-gray-700 transition-all duration-200 ease-out hover:text-zincbg-zinc-200 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none text-4xl italic font-bold mb-10'>
									{/* span::before */}
									<span className='absolute h-0 w-0.5 right-0 top-0 bg-gray-800 transition-all duration-500 ease-out group-hover:h-full' aria-hidden='true' />
									<span className='absolute left-0 bottom-0 bg-gray-800 transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full' aria-hidden='true' />
									All Reviews :{/* span::after */}
									<span className='absolute left-0 bottom-0 bg-gray-800 transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full' aria-hidden='true' />
									<span className='absolute w-0 h-0.5 right-0 top-0 bg-gray-800 transition-all duration-500 ease-out group-hover:w-full' aria-hidden='true' />
								</button>
								<p className='ml-4 inline-flex flex-col items-center'>
									<span className='text-3xl sm:text-5xl font-extrabold tracking-wide'>{reviewsData.length}</span>
									<span className='text-base sm:text-lg text-gray-400'>reviews</span>
								</p>
							</div>

							<div className='bg-white rounded-lg mb-8'>
								<div className='mx-auto py-8 px-4 w-full max-w-7xl bg-white rounded-lg'>
									{reviewsData.length === 0 ? (
										<div className='grid grid-cols-1 text-center my-100 bg-gray-200 rounded-lg'>
											<h1 className='text-3xl font-bold text-gray-500 text-center my-10 italic'>No Review Found....!</h1>
											<img src='https://i.ibb.co/d4wGMyc/no-review-found.png' alt='' className='mt-5 p-4' />
										</div>
									) : (
										<div className='mx-auto max-w-4xl flex flex-col'>
											{/* :HEADER */}

											{/* :REVIEWS */}
											<div className=''>
												{reviewsData.map((review) => (
													<SingleReview key={review._id} review={review} />
												))}
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
						{/* Login to Add Review */}
						<div className='add-reviews-container col-span-12 md:col-span-6 lg:col-span-4 lg:mr-8 '>
							<div className='bg-no-repeat bg-gradient-to-r from-gray-400 to-gray-200 shadow-lg  rounded h-[24rem] sticky top-44'>
								<div className='text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-12 lg:px-8 z-20 '>
									<h2 className='text-3xl font-extrabold text-black  sm:text-4xl'>
										<span className='block text-2xl my-3'>Want to Add Review ?</span>
										<span className='block text-3xl text-indigo-700'>Sorry..! Please Login to Add Review</span>
									</h2>
									<div className='lg:mt-0 lg:flex-shrink-0'>
										<div className='mt-5 inline-flex rounded-md shadow'>
											<Link to='/login' state={{ from: location }}>
												<button
													type='button'
													className='py-4 px-12  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'
												>
													Login
												</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Reviews;
