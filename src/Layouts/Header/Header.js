import React from 'react';

const Header = () => {
	return (
		<>
			{/* Header Container */}
			<div className='header-container'>
				<div className='relative w-full h-[40rem] bg-gray-200 overflow-hidden rounded-lg shadow-lg shadow-gray-400 '>
					{/* :HERO BACKGROUND */}
					<div className='absolute w-full h-full bg-black '>
						<img
							src='https://img.freepik.com/premium-photo/male-plumber-uniform-changes-faucet-kitchen-handyman-with-toolbag-repair-sink-sanitary-equipment-service-home_266732-4494.jpg?w=826'
							alt=''
							className='absolute -right-28 w-full h-full object-fill hover:object-scale-down'
						/>
					</div>

					{/* :HERO CONTAINER */}
					<div className='relative py-10 xl:py-20 px-5 w-full sm:w-2/3 h-full flex flex-col justify-center items-center bg-white bg-opacity-80'>
						{/* ::Top Title */}
						<h2 className='mb-5 text-center text-2xl sm:text-lg  text-gray-800 font-newsreader font-medium uppercase tracking-extra'>
							<span className='text-3xl'>P</span>rofessional{' '}
							<span className='text-3xl'>P</span>lumbing{' '}
							<span className='text-3xl'>S</span>ervice{' '}
							<span className='text-3xl'>P</span>povider
						</h2>

						{/* ::Title => W O R K */}
						<div
							className='mb-5 pb-7 sm:pb-14 xl:pb-20 max-w-sm sm:max-w-xl xl:max-w-2xl w-full flex flex-col items-center overflow-hidden'
							style={{ textShadow: '2px 2px 5px rgba(86,90,88,0.85)' }}
						>
							{/* :::W O */}
							<span className='relative w-full text-5xl md:text-7xl xl:text-8xl font-semibold flex justify-around'>
								<span className='z-10'>W</span>
								<span>O</span>
								{/* Line through */}
								<span className='absolute top-1/2 w-5/6 h-3 md:h-6 bg-yellow-700 bg-opacity-80 shadow-lg transform -translate-x-full animate-linethrough' />
								{/* Shadow W and O */}
								<span className='absolute hidden md:block -bottom-8 left-40 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl' />
								<span className='absolute hidden md:block -bottom-8 right-10 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl' />
							</span>

							{/* :::R K */}
							<span className='relative w-full text-5xl md:text-7xl xl:text-8xl font-semibold flex justify-around'>
								<span>R</span>
								<span className='z-10'>K</span>
								{/* Line through */}
								<span className='absolute top-1/2 w-5/6 h-3 md:h-6 bg-yellow-700 bg-opacity-80 shadow-lg transform translate-x-full animate-linethrough' />
								{/* Shadow R and K */}
								<span className='absolute hidden md:block -bottom-8 left-40 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl' />
								<span className='absolute hidden md:block -bottom-8 right-10 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl' />
							</span>
						</div>

						{/* ::Bottom title and text */}
						<div className='w-3/4 flex flex-col md:flex-row -mt-8'>
							{/* :::Title */}
							<h3 className='sm:px-5 text-center md:text-right text-lg text-gray-800 font-newsreader font-normal uppercase tracking-widest'>
								<span className='text-3xl'>M</span>y{' '}
								<span className='text-3xl'>A</span>pproach
							</h3>
							{/* :::Text */}
							<p className='sm:px-5 text-center md:text-left font-light leading-relaxed'>
								I am a professional plumber with over 10 years of experience. I
								absolutely love my job and I am absolutely passionate about it.
								I am a very hard working person and I am always willing to go
								the extra mile to make sure that my customers are satisfied with
								my work.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
