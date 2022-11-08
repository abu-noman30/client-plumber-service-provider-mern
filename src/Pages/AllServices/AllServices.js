import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleServices from '../../Components/SingleServices/SingleServices';

const AllServices = () => {
	const loaderData = useLoaderData();
	console.log(loaderData);
	const services = loaderData;
	return (
		<>
			{/* All Services Container */}
			<div className='all-services-container my-20'>
				{/* Title Bar */}
				<div className='title-bar text-center mb-20'>
					<h1 className='text-5xl font-bold my-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 border-x-4 border-blue-900 w-11/12 md:w-8/12 lg:w-3/12 mx-auto'>
						All Services
					</h1>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 m-auto rounded-2xl'>
					{/* Card container */}
					{services.map((service) => (
						<SingleServices key={service._id} service={service} />
					))}
				</div>
			</div>
		</>
	);
};

export default AllServices;
