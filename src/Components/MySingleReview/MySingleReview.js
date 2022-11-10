import React from 'react';
import toast from 'react-hot-toast';
import * as FAIcons from 'react-icons/fa';
import ReviewBackground from '../ReviewBackground/ReviewBackground';

const MySingleReview = (props) => {
	const {
		userInfo: { name, message, title },
		serviceInfo,
		_id,
		dateTime
	} = props.myReview;
	// const [modalError, setModalError] = useState('');
	// const [resetEmail, setResetEmail] = useState('');
	const svg = [1, 2, 3, 4, 5];

	const hanlerOnDeleteReview = (id) => {
		const agree = window.confirm('Are you sure to delete this review?');
		if (agree === true) {
			const fetchApi = async () => {
				try {
					const res = await fetch(`http://localhost:5000/myreviews/${id}`, {
						method: 'DELETE'
					});
					const data = await res.json();
					// console.log(data);
					if (data && data.deletedCount > 0) {
						toast.success('Review deleted successfully');
						// toast
					}
				} catch (error) {
					console.error(error);
				}
			};
			fetchApi();
		}
	};

	const handlerOnSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const title = form.title.value;
		const message = form.message.value;
		// console.log(title, message, _id);

		if (title && message) {
			const updateReviewData = {
				title: title,
				message: message
			};
			const fetchApi = async () => {
				try {
					const res = await fetch(`http://localhost:5000/myreviews/${_id}`, {
						method: 'PATCH',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(updateReviewData)
					});
					const data = await res.json();
					// console.log(data);
					if (data && data.modifiedCount > 0) {
						toast.success('Review updated successfully');
						form.reset();
					}
				} catch (error) {
					console.error(error);
				}
			};
			fetchApi();
		}
	};

	return (
		<>
			{/* My Single Review Container */}
			<div className='my-single-review-container'>
				<blockquote className='flex h-full flex-col justify-between bg-white p-12 shadow-lg shadow-gray-600'>
					<div>
						<div className='flex gap-0.5 text-yellow-300 mb-4'>
							{svg.map((item, index) => (
								<span key={index}>
									<FAIcons.FaStar />
								</span>
							))}
						</div>
					</div>
					<div className=' border p-1'>
						<div className=''>
							<h3 className='text-xl font-bold text-gray-800 italic sm:text-2xl mb-3'>Service: {serviceInfo.name}</h3>

							<h2 className='text-xl font-bold text-gray-800 italic sm:text-xl'>{title}</h2>

							<p className='mt-1 pl-3 text-gray-600'>__{message}</p>
						</div>

						<footer className='mt-8 text-gray-500'>
							<p className='text-xs mb-1 '>__{name}</p>
							<p className='text-xs mb-1 '>{dateTime}</p>
						</footer>
					</div>
					<div className=' flex  items-center justify-between mt-3'>
						{/* Modal Trigger Button */}

						<label
							htmlFor='my-modal-3'
							type='button'
							className='py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-16 h-12 rounded-lg '
						>
							<FAIcons.FaEdit />
						</label>
						<button
							type='button'
							className='py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-16 h-12 rounded-lg '
							onClick={() => {
								hanlerOnDeleteReview(_id);
							}}
						>
							<FAIcons.FaTrashAlt />
						</button>
					</div>
				</blockquote>
			</div>
			{/* Modal Container */}
			<input type='checkbox' id='my-modal-3' className='modal-toggle' />
			<div className='modal '>
				<div className='modal-box relative rounded shadow-2xl '>
					<div className=' p-8 border shadow-inner shadow-blue-200'>
						<label htmlFor='my-modal-3' className='btn btn-sm bg-blue-800 hover:bg-blue-700 absolute right-2 top-2'>
							✕
						</label>
						{/* <h3 className='text-lg font-bold underline underline-offset-2 italic'>Enter Your Email:</h3> */}
						{/* <p className='text-red-600 font-semibold text-center py-4'>error</p> */}
						<div className='flex flex-col mb-5'>
							<div className='add-reviews-container col-span-12 md:col-span-6 lg:col-span-4 lg:mr-8 '>
								{/* Review-form */}

								<div className='w-full p-4'>
									<div className='bg-gray-100 relative rounded-lg p-8 sm:p-12 shadow-lg'>
										<form
											onSubmit={(e) => {
												handlerOnSubmit(e);
											}}
										>
											<div className='mb-6'>
												<input
													type='text'
													name='title'
													placeholder='Update Title'
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
													placeholder='Update Review Message'
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
											<div className='text-center'>
												<button
													htmlFor='my-modal-3'
													type='submit'
													className='
                                      w-full
                                      text-gray-100
                                      hover:text-gray-100
                                      bg-blue-700
                                      rounded
                                      border border-primary
                                      p-3
                                      transition
                                      ease-in-out
                                      duration-500
                                      hover:bg-gray-700
                                      '
												>
													UPDATE
												</button>
											</div>
										</form>
										{/* Back-ground */}
										<div className='hidden md:block'>
											<ReviewBackground />
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* <div className='modal-action'>
							<label
								htmlFor='my-modal-3'
								className='py-2 px-6 rounded bg-blue-700 hover:bg-blue-600 text-white border-blue-800 mx-1'
								onClick={() => {
									handlerResetPassword();
								}}
							>
								Confirm
							</label>
						</div> */}
					</div>
				</div>
			</div>
			{/* ------------- */}
		</>
	);
};

export default MySingleReview;
