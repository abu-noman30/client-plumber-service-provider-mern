import React, { useEffect, useState } from 'react';
import SingleServices from '../../Components/SingleServices/SingleServices';

const Services = () => {
	const [homeServices, setHomeServices] = useState([]);
	useEffect(() => {
		const fetchApi = async () => {
			const res = await fetch('http://localhost:5000/home-services');
			const data = await res.json();
			// console.log(data);
			setHomeServices(data);
		};
		fetchApi();
	}, []);
	return (
		<>
			{/* Services Container */}
			<div className='services-container my-20 '>
				{/* Title Bar */}
				<div className='title-bar text-center'>
					<h1 className='text-5xl font-bold my-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 border-x-4 border-blue-900 w-11/12 md:w-8/12 lg:w-3/12 mx-auto'>
						My Services
					</h1>
					<p className='text-zinc-500 text-base font-normal mb-10'>
						Here are some of my services that I provide to my clients and I
						<br />
						am always ready to help you.
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 m-auto rounded-2xl'>
					{/* Card container */}
					{homeServices.map((service) => (
						<SingleServices service={service} />
					))}
				</div>
				<div className=' flex items-center justify-center my-5'>
					{/* :BIG BUTTON 1 */}
					<button
						type='button'
						className='relative inline-flex items-center px-8 py-3 border border-transparent bg-gray-700 text-lg text-white font-medium rounded'
					>
						See All
					</button>
				</div>
			</div>
		</>
	);
};

export default Services;
