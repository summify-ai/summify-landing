import React from 'react';
import { Link } from 'react-router-dom';

import Banner from '../partials/Banner';
import Logo from '../images/logo.png';
import Setup1 from '../images/setup1.png';
import Setup2 from '../images/setup2.png';
import Setup3 from '../images/setup3.png';
import Setup4 from '../images/setup4.png';
import Navbar from '../partials/navbar';
import Footer from '../partials/Footer';

function SetUp() {
	return (
		<div className='flex flex-col min-h-screen overflow-hidden'>
			{/*  Site header */}
			<Navbar />

			{/*  Page content */}
			<main className='flex-grow'>
				<section className='bg-gradient-to-b from-gray-100 to-white'>
					<div className='max-w-6xl mx-auto px-4 sm:px-6 '>
						<div className='flex items-center min-h-screen'>
							{/* Page header */}

							{/* Form */}
							<div className='max-w-xxl  mx-auto border-gray-300 rounded-lg'>
								<h1
									className='h2 flex items-center justify-center mt-28 '
									styles={{
										paddingTop: '500px',
									}}
								>
									How to Integrate Summify Into Your Discord
									Server
								</h1>
								<div className='pb-6'></div>
								<div className='flex flex-wrap -mx-3 mt-6'>
									<div className='w-full px-3 text-center text-lg'>
										First, click the{' '}
										<strong>Add to Your Server </strong>
										button from the homepage or navigation
										bar.
										<img
											className='mx-auto md:w-100'
											src={Setup4}
											alt=''
										/>
									</div>
									<div className='w-full px-3 text-center mt-1 mb-1 text-lg'>
										Next, choose the{' '}
										<strong>Add to Discord</strong> button
										in our Next menu.
										<img
											className='mx-auto w-96'
											src={Setup3}
											alt=''
										/>
									</div>
									<div className='w-full px-3 text-center mt-6 mb-6 text-lg'>
										Then, select your server from the
										Discord dropdown menu, and hit{' '}
										<strong>Continue</strong>.
										<img
											className='mx-auto xs: w-48 sm:w-40 md:w-30 lg:w-40 mt-4'
											src={Setup1}
											alt=''
										/>
									</div>
									<div className='w-full px-3 text-center mt-4 mb-4 text-lg mr-36 ml-36'>
										<p>
											Finally, hit the{' '}
											<strong>Authorize</strong> button
											with the checked permissions. Do not
											change any of these
											permissions—these are required to be
											on in order for Summify to function
											correctly.
										</p>

										<img
											className='mx-auto xs: w-48 sm:w-40 md:w-30 lg:w-40 mt-4'
											src={Setup2}
											alt=''
										/>
									</div>
									<div className='w-full px-3 text-center mt-4 mb-6 text-lg'>
										<strong>
											That's it! You're ready to use
											Summify within your server.
										</strong>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />

			<Banner />
		</div>
	);
}

export default SetUp;
