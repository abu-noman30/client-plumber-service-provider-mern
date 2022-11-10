import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ClockLoader from 'react-spinners/ClockLoader';
import SingleServices from '../../Components/SingleServices/SingleServices';
import { FbaseAuthContext } from '../../Context/AuthContextAPI';

const AllServices = () => {
	const { loading } = useContext(FbaseAuthContext);
	const [totalData, setTotalData] = useState(0);
	const [services, setServices] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const [perPageData] = useState(6); //5/10/15/...
	const totalPages = Math.ceil(totalData / perPageData);
	const emptyArrays = [...Array(totalPages).keys()];
	// console.log(emptyArrays);

	useEffect(() => {
		const fetchApi = async () => {
			const res = await fetch(`http://localhost:5000/services?currentPage=${currentPage}&perPageData=${perPageData}`);
			const data = await res.json();
			console.log(data);
			setTotalData(data.totalData);
			setServices(data.result);
		};
		fetchApi();
	}, [currentPage, perPageData]);

	if (loading) {
		// Spinner component
		return (
			<div className='w-1/2 mx-auto h-[28rem] my-auto flex items-center justify-center'>
				<span className=''>
					<ClockLoader color='#777777' />
				</span>
			</div>
		);
	}

	return (
		<>
			<Helmet>
				<title>All Services - plumBoy</title>
			</Helmet>
			{/* All Services Container */}
			<div className='all-services-container mb-20'>
				{/* Title Bar */}
				<div className='title-bar text-center mb-20'>
					<h1 className='text-5xl font-bold my-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 border-x-4 border-blue-900 w-11/12 md:w-8/12 lg:w-3/12 mx-auto'>All Services</h1>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 m-auto rounded-2xl'>
					{/* Card container */}
					{services.map((service) => (
						<SingleServices key={service._id} service={service} />
					))}
				</div>
			</div>
			{/* Pagination Container */}

			<div className='pagination-container flex flex-col items-center justify-center mb-20 -mt-16 mx-auto'>
				<p className='font-bold italic underline mb-3'>
					Currently selected Page: {currentPage} & Size: {perPageData}
				</p>
				<div className=''>
					<button
						className=' p-3 bg-blue-900 text-white rounded-l-md cursor-pointer'
						onClick={() => {
							if (currentPage > 0) {
								setCurrentPage(currentPage - 1);
							}
						}}
					>
						&#x21e6;Prev
					</button>
					{emptyArrays.map((pageNumber) => (
						<button
							key={pageNumber}
							className={currentPage === pageNumber ? 'selectedPage p-3 bg-blue-900 text-white border border-white cursor-pointer ' : 'p-3 bg-slate-400 border-black  text-gray-900 cursor-pointer '}
							onClick={() => {
								setCurrentPage(pageNumber);
							}}
						>
							{pageNumber}
						</button>
					))}
					<button
						className='p-3 bg-blue-900 text-white rounded-r-md cursor-pointer'
						onClick={() => {
							if (currentPage === totalPages - 1) {
								setCurrentPage(totalPages - 1);
							} else {
								setCurrentPage(currentPage + 1);
							}
						}}
					>
						Next&#x21e8;
					</button>
				</div>
			</div>
		</>
	);
};

export default AllServices;
